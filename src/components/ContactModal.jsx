import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "./ToastCenter";

const COOLDOWN_TIME = 100 * 1000;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastSent = localStorage.getItem("lastContactTime");

      if (!lastSent) {
        setCooldown(0);
        return;
      }

      const remaining = COOLDOWN_TIME - (Date.now() - lastSent);
      setCooldown(remaining > 0 ? Math.ceil(remaining / 1000) : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      toast({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!accessKey) {
      toast({
        type: "error",
        message: "Contact form is not configured yet. Please set REACT_APP_WEB3FORMS_ACCESS_KEY.",
      });
      return;
    }

    const lastSent = localStorage.getItem("lastContactTime");
    const now = Date.now();

    if (lastSent && now - lastSent < COOLDOWN_TIME) {
      const remaining = Math.ceil(
        (COOLDOWN_TIME - (now - lastSent)) / 1000
      );
      toast({
        type: "info",
        message: `Please wait ${remaining} seconds before sending another message.`,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio message from ${trimmedName}`,
          from_name: "Portfolio Contact Form",
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      localStorage.setItem("lastContactTime", now.toString());
      setForm({ name: "", email: "", message: "" });
      toast({
        type: "success",
        message: data.message || "Message sent successfully.",
      });
      onClose();
    } catch (error) {
      toast({
        type: "error",
        message: error.message || "Unable to send message right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-xl border-white/20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-xl bg-white/10 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white hover:text-emerald-400"
            >
              <X size={20} />
            </button>

            <h2 className="mb-4 text-2xl font-bold text-white">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-black/40 px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-black/40 px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-black/40 px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
              />

              <button
                type="submit"
                disabled={cooldown > 0 || isSubmitting}
                className={`w-full rounded-md py-3 font-medium transition
              ${
                cooldown > 0 || isSubmitting
                  ? "bg-gray-600 cursor-not-allowed text-gray-300"
                  : "bg-emerald-500 text-black hover:bg-emerald-400"
              }`}
              >
                {isSubmitting
                  ? "Sending..."
                  : cooldown > 0
                  ? `Wait ${cooldown}s`
                  : "Send Message"}
              </button>

              <p className="text-center text-sm text-gray-400">
                Your message is sent securely through Web3Forms.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
