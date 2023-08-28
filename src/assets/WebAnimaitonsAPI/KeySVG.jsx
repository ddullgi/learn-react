import { useState } from "react";
import styles from "./keySVG.module.css";

const KeySVG = ({ className, style, transitionEndHandler }) => {
  const [isFliped, setIsFliped] = useState(false);

  const onClickHandler = () => {
    setIsFliped((isFliped) => !isFliped);
  };

  return (
    <svg
      id="_레이어_2"
      data-name="레이어 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 397.95 477.58"
      className={className}
      style={style}
      onTransitionEnd={transitionEndHandler}
    >
      <g id="_레이어_1-2" data-name="레이어 1">
        <path
          className={`${styles.key_blade} ${styles.cls_1} ${
            isFliped ? styles.key_blade_flipped : ""
          }`}
          d="m230.93,18.68h-22.68c-6.26,0-11.34,5.08-11.34,11.34v181.41s45.35,0,45.35,0V30.01c0-6.26-5.08-11.34-11.34-11.34Z"
        />
        <path
          className={styles.cls_2}
          d="m356.72,165.76h-130.8c-30.28,0-54.82,24.54-54.82,54.82v220.05c0,11.27,9.13,20.4,20.4,20.4h130.8c30.28,0,54.82-24.54,54.82-54.82v-220.05c0-11.27-9.13-20.4-20.4-20.4Z"
        />
        <circle
          className={`${styles.key_btn} ${styles.cls_1}`}
          onClick={onClickHandler}
          cx="219.59"
          cy="211.59"
          r="22.68"
        />
      </g>
    </svg>
  );
};

export default KeySVG;
