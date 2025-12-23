import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide loader after 2 seconds or when page loads
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
            style={{ pointerEvents: loading ? 'all' : 'none' }}
        >
            <div className="text-center">
                {/* Animated Logo/Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-black text-white mb-4"
                >
                    <span className="text-[#915EFF]">V</span>IGNESH
                </motion.h1>

                {/* Loading Spinner */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-secondary border-t-[#915EFF] rounded-full mx-auto"
                />
            </div>
        </motion.div>
    );
};

export default PageLoader;
