import { useEffect, useRef } from 'react';

export default function BackgroundBlobs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const parent = canvas.parentElement;
      width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const spacing = 12;
    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const normX = x / width;
          const normY = y / height;

          const fadeGradient = Math.max(0, 1 - (normX * 0.72 + (1 - normY) * 0.38));

          if (fadeGradient <= 0) continue;

          const distToMouse = Math.hypot(x - mouseX, y - mouseY);
          const mouseFactor = Math.max(0, 1 - distToMouse / 160);

          const wave1 = Math.sin(i * 0.22 + j * 0.14 - time * 1.2);
          const wave2 = Math.cos(i * 0.14 - j * 0.22 + time * 0.8);
          const combinedWave = (wave1 + wave2 + 2) / 4;

          const maxRadius = 2.8;
          const baseRadius = (0.2 + combinedWave * maxRadius) * fadeGradient;
          const radius = baseRadius + mouseFactor * 1.6;

          if (radius < 0.35) continue;

          // Softened opacity range (max ~0.38 instead of 0.95)
          const opacity = Math.min(0.38, (0.12 + combinedWave * 0.28) * fadeGradient + mouseFactor * 0.12);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          // Switched to a lighter Slate-700 tone (51, 65, 85) with reduced opacity
          ctx.fillStyle = `rgba(51, 65, 85, ${opacity.toFixed(2)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-[#F3F6FA]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}