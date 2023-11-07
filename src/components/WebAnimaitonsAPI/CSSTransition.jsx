import { useState, useRef, useEffect } from "react";
import styles from "./CSSTransition.module.css";
import { hand, KeySVG } from "@/assets";

const CSSTransition = () => {
  const [boxStyle, setBoxStyle] = useState(false);
  const [boxTransition, setBoxTransition] = useState("null");
  const [isActive, setIsActive] = useState(false);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [isKeyInHand, setIsKeyInHand] = useState(false);
  const boxRef = useRef();
  const handRef = useRef();
  const containerRef = useRef();
  const removeBox = () => {
    boxRef.current.remove();
  };

  useEffect(() => {
    const transition = (string) => {
      const transitionLog = (e) => {
        console.log(`${e.propertyName} ${string}`);
        setBoxTransition(string);
      };
      return transitionLog;
    };

    if (boxRef && boxRef.current) {
      boxRef.current.addEventListener("transitionstart", transition("START"), false);
      boxRef.current.addEventListener("transitionend", transition("END"), false);
      boxRef.current.addEventListener("transitionrun", transition("RUN"), false);
      boxRef.current.addEventListener("transitioncancel", transition("CANCEL"), false);

      return function cleanup() {
        boxRef.removeEventListener("transitionstart", transition("START"), false);
        boxRef.removeEventListener("transitionend", transition("END"), false);
        boxRef.removeEventListener("transitionrun", transition("RUN"), false);
        boxRef.removeEventListener("transitioncancel", transition("CANCEL"), false);
      };
    }
  }, []);

  return (
    <>
      <h1>CSSTransition</h1>
      <br />
      <br />
      <h2>transition STATE: {boxTransition}</h2>
      <button onClick={removeBox}>
        <h3>remove BOX</h3>
      </button>
      <div>
        <div
          ref={boxRef}
          onClick={() => {
            if (isActive) {
              return;
            }
            setBoxStyle((boxStyle) => !boxStyle);
            setIsActive(true);
          }}
          onTransitionEnd={() => {
            setIsActive(false);
          }}
          className={`${styles.box} ${boxStyle ? styles.box_action : ""}`}
          aria-hidden="true"
        ></div>
      </div>
      <br />
      <br />
      <h2>SVG Transition</h2>
      <div className={styles.container} ref={containerRef}>
        <img
          className={styles.hand}
          src={hand}
          alt=""
          onClick={() => {
            if (isKeyInHand) {
              setHandPosition({ x: 0, y: 0, scale: 1 });
            } else {
              const handRect = handRef.current.getBoundingClientRect();
              const containerRect = containerRef.current.getBoundingClientRect();
              const x = handRect.left - containerRect.left + 240;
              const y = handRect.top - containerRect.top - 100;
              setHandPosition({ x: x, y: y, scale: 0.5 });
            }
          }}
          ref={handRef}
          aria-hidden="true"
        />
        {/* <object className={styles.key} data={key} type="image/svg+xml">
          null
        </object> */}
        <KeySVG
          className={styles.key}
          style={{
            transform: `scale(${handPosition.scale}) translate(${handPosition.x}px, ${handPosition.y}px)`,
          }}
          transitionEndHandler={() => {
            setIsKeyInHand((isKeyInHand) => !isKeyInHand);
          }}
        />
      </div>
    </>
  );
};

export default CSSTransition;
