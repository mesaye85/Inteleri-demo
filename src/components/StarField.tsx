"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resize();
    window.addEventListener("resize", resize);

    // Static stars
    const stars: Star[] = [];
    const numStars = 200;
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.05
      });
    }

    // Shooting stars
    let shootingStars: ShootingStar[] = [];
    
    const createShootingStar = () => {
      const startX = Math.random() * width;
      const startY = Math.random() * (height / 2);
      const angle = Math.PI / 4; // 45 degrees
      
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        angle: angle,
        opacity: 1
      });
    };

    let frameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw static stars
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Randomly add shooting stars
      if (Math.random() < 0.02) {
        createShootingStar();
      }

      // Draw shooting stars
      shootingStars = shootingStars.filter(star => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;
        
        if (star.opacity <= 0) return false;
        
        const endX = star.x - Math.cos(star.angle) * star.length;
        const endY = star.y - Math.sin(star.angle) * star.length;
        
        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
        gradient.addColorStop(0, `rgba(99, 230, 255, ${star.opacity})`); // neon-1
        gradient.addColorStop(1, "transparent");
        
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        return true;
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
  );
}

