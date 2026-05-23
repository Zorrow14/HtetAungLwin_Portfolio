import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Star properties setup
    const stars = [];
    const numStars = 250;
    
    // Start cursor in the center
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    // Initialize stars with random positions, sizes, speeds, and depth
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15, // Gentle natural drift
        speedY: (Math.random() - 0.5) * 0.15,
        parallaxFactor: Math.random() * 0.08 + 0.01 // Simulates 3D depth
      });
    }

    // Track mouse smoothly
    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);

    // Main Animation Loop
    const animate = () => {
      // Interpolate mouse movement for buttery smooth tracking
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // Clear the frame completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render each star
      stars.forEach(star => {
        // Update base position (drifting)
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap stars around the screen if they drift off
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Calculate interactive parallax offset based on mouse position
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const offsetX = (centerX - mouseX) * star.parallaxFactor;
        const offsetY = (centerY - mouseY) * star.parallaxFactor;

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.size / 2})`; // Bigger stars are brighter
        ctx.fill();
      });

      // --- Draw the custom cursor indicator ---
      
      // Outer tracing ring
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)'; // Neon cyan with transparency
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner glowing dot
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 212, 255, 0.9)'; // Solid neon cyan
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 212, 255, 0.8)';
      ctx.fill();
      
      // Reset shadow blur so it doesn't affect the stars on the next frame
      ctx.shadowBlur = 0; 

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999, // Brings the canvas to the very front so the cursor circle sits over elements
        pointerEvents: 'none' // Crucial: ensures you can still click buttons underneath the canvas!
      }}
    />
  );
};

export default StarBackground;