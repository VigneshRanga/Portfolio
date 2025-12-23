import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Main cursor with slight delay
            setTimeout(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            }, 50);

            // Dot follows immediately
            setDotPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="custom-cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                className="custom-cursor-dot"
                style={{
                    left: `${dotPosition.x}px`,
                    top: `${dotPosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
