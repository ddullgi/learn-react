import { useState, useRef, useEffect } from "react";
import styles from "./CSSTransition.module.css";

const CSSTransition = () => {
  const [boxStyle, setBoxStyle] = useState(false);
  const [boxTransition, setBoxTransition] = useState("null");
  const boxRef = useRef();
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

      <h2>transition STATE: {boxTransition}</h2>
      <button onClick={removeBox}>
        <h3>remove BOX</h3>
      </button>
      <div>
        <div
          ref={boxRef}
          onClick={() => {
            setBoxStyle((boxStyle) => !boxStyle);
          }}
          className={`${styles.box} ${boxStyle ? styles.box_action : ""}`}
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
};

export default CSSTransition;
