import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000); // Auto-dismiss after 4 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === 'success'
        ? 'bg-gradient-to-r from-[#915EFF] to-[#00cea8]'
        : 'bg-gradient-to-r from-red-500 to-orange-500';

    const icon = type === 'success' ? '✓' : '✗';

    return (
        <motion.div
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`fixed top-20 right-4 z-[10000] ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl max-w-md`}
        >
            <div className="flex items-start gap-3">
                <div className="text-2xl font-bold">{icon}</div>
                <div className="flex-1">
                    <p className="font-semibold text-lg mb-1">
                        {type === 'success' ? 'Message Sent!' : 'Oops!'}
                    </p>
                    <p className="text-sm opacity-90">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 transition-colors text-xl font-bold"
                >
                    ×
                </button>
            </div>
        </motion.div>
    );
};

const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <AnimatePresence>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </AnimatePresence>
    );
};

export default ToastContainer;
