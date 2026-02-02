import { X } from "lucide-react";
import { useState, useEffect } from "react";

const COOLDOWN_TIME = 400 * 1000;

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const lastSent = localStorage.getItem("lastContactTime");
    const now = Date.now();

    if (lastSent && now - lastSent < COOLDOWN_TIME) {
      const remaining = Math.ceil(
        (COOLDOWN_TIME - (now - lastSent)) / 1000
      );
      alert(`Please wait ${remaining} seconds before sending another message.`);
      return;
    }

    const text = `Hello, my name is ${name}
Email: ${email}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/919541892066?text=${encodeURIComponent(
      text
    )}`;

    localStorage.setItem("lastContactTime", now.toString());
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-[#0f172a] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
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
            className="w-full rounded-md bg-[#020617] px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md bg-[#020617] px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md bg-[#020617] px-4 py-3 text-white ring-1 ring-gray-700 focus:ring-emerald-500 outline-none"
          />

          <button
            type="submit"
            disabled={cooldown > 0}
            className={`w-full rounded-md py-3 font-medium transition
              ${
                cooldown > 0
                  ? "bg-gray-600 cursor-not-allowed text-gray-300"
                  : "bg-emerald-500 text-black hover:bg-emerald-400"
              }`}
          >
            {cooldown > 0
              ? `Wait ${cooldown}s`
              : "Send via WhatsApp"}
          </button>

          <p className="text-center text-sm text-gray-400">
            You’ll be redirected to WhatsApp
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
