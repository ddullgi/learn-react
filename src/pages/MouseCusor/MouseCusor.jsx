import { useState } from "react";
import styles from "./MouseCusor.module.css";

const MouseCusor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  // const [target, setTarget] = useState({ x: 0, y: 0 });
  // const speed = 0.9;

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
    // setTarget({ x: (mousePosition.x - target.x) * speed, y: (mousePosition.y - target.y) * speed });
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className={styles.main} onMouseMove={handleMouseMove}>
      <div
        className={styles.cusorItem}
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <span className={styles.circle} style={{ scale: `${isMouseOver ? 0.3 : 1}` }}></span>
      </div>
      <div className={styles.gateBox}>
        <div className={styles.top}>
          <p>
            마스크를 써야 하나요?? {mousePosition.x} {mousePosition.y}
          </p>
        </div>
        <div
          className={styles.bottom}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#yes">네</a>
          <span className={styles.line}></span>
          <a href="#no">아니요</a>
        </div>
      </div>
    </div>
  );
};

export default MouseCusor;
