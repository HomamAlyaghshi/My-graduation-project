import { useEffect, useRef } from "react";

const colors = ["#00ffff", "#a855f7", "#7c3aed", "#38bdf8", "#818cf8"];

const MouseTrail = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    const createStar = (i) => {
      const star = document.createElement("div");
      const color = colors[i % colors.length];

      star.className =
        "w-1 h-1 rounded-full fixed pointer-events-none mix-blend-screen blur-sm";
      star.style.backgroundColor = color;
      star.style.boxShadow = `0 0 8px 3px ${color}`;
      document.body.appendChild(star);
      return star;
    };

    for (let i = 0; i < 3; i++) {
      trailRef.current[i] = createStar(i);
    }

    let mouseX = 0,
      mouseY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    let posX = Array(15).fill(0);
    let posY = Array(15).fill(0);

    const animate = () => {
      posX[0] += (mouseX - posX[0]) * 0.3;
      posY[0] += (mouseY - posY[0]) * 0.3;

      for (let i = 1; i < trailRef.current.length; i++) {
        posX[i] += (posX[i - 1] - posX[i]) * 0.3;
        posY[i] += (posY[i - 1] - posY[i]) * 0.3;
      }

      trailRef.current.forEach((star, index) => {
        star.style.left = `${posX[index]}px`;
        star.style.top = `${posY[index]}px`;
        star.style.opacity = `${1 - index / trailRef.current.length}`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      trailRef.current.forEach((star) => star.remove());
    };
  }, []);

  return null;
};

export default MouseTrail;
