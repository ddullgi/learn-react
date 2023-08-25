import { useState } from "react";
import { CSSTransition } from "../../components";

const WebAnimaitonsAPI = () => {
  const [lecture, setLecture] = useState("CSSTransition");

  return (
    <>
      <div>
        <button
          onClick={() => {
            setLecture("CSS Transition");
          }}
        >
          1. CSS Transition
        </button>
      </div>
      {lecture ? <CSSTransition /> : ""}
    </>
  );
};

export default WebAnimaitonsAPI;
