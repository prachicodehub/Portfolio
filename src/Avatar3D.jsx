import { useRef } from "react";
import { motion } from "framer-motion";

export default function Avatar3D({ src, alt }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 8;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--gx", `${x * 100}%`);
    card.style.setProperty("--gy", `${y * 100}%`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--gx", "48%");
    card.style.setProperty("--gy", "32%");
  };

  return (
    <motion.div
      className="avatar-3d"
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <div className="avatar-3d-glow" aria-hidden="true" />
      <div
        ref={cardRef}
        className="avatar-3d-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="avatar-3d-ring" aria-hidden="true" />
        <div className="avatar-3d-frame">
          <div className="avatar-3d-shine" aria-hidden="true" />
          <img src={src} alt={alt} draggable="false" />
        </div>
      </div>
      <p className="avatar-3d-caption">Prachi · Full Stack</p>
    </motion.div>
  );
}
