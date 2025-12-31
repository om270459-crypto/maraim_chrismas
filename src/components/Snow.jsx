import { useEffect, useRef } from 'react';

const Snow = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const flakesRef = useRef([]);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Initialize flakes
    flakesRef.current = [];
    for (let i = 0; i < 75; i++) {
      flakesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.beginPath();

      for (const f of flakesRef.current) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      }
      ctx.fill();

      // Move flakes
      angleRef.current += 0.01;
      for (let i = 0; i < flakesRef.current.length; i++) {
        const f = flakesRef.current[i];
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angleRef.current) * 0.5;

        if (f.y > canvas.height) {
          flakesRef.current[i] = {
            x: Math.random() * canvas.width,
            y: 0,
            r: f.r,
            d: f.d,
          };
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Snow;
