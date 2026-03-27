import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, AlertTriangle } from "lucide-react";

const toastListeners = new Set();

export const toast = ({ type = "info", message = "", duration = 2400 }) => {
  const toastItem = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    message,
    duration,
  };

  toastListeners.forEach((listener) => listener(toastItem));
};

const iconByType = {
  success: CheckCircle2,
  error: AlertTriangle,
  info: Info,
};

const classesByType = {
  success: "text-emerald-200 border-emerald-300/35",
  error: "text-red-200 border-red-300/35",
  info: "text-sky-200 border-sky-300/35",
};

const ToastCenter = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (toastItem) => {
      setToasts((prev) => [toastItem, ...prev].slice(0, 3));

      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== toastItem.id));
      }, toastItem.duration);
    };

    toastListeners.add(handleToast);
    return () => {
      toastListeners.delete(handleToast);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[80] pointer-events-none flex flex-col gap-3 w-[min(92vw,380px)]">
      <AnimatePresence>
        {toasts.map((item) => {
          const Icon = iconByType[item.type] || Info;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-surface rounded-xl px-4 py-3 border shadow-xl ${classesByType[item.type] || classesByType.info}`}
            >
              <div className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">{item.message}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ToastCenter;
