import { useState, useRef } from "react";

const EternalReturn = () => {
  const [data, setData] = useState("1");
  const testRef = useRef();
  const refObject = { current: undefined };

  return (
    <>
      <h1>이터널 리턴</h1>
      <button
        ref={refObject}
        onClick={() => {
          console.log(refObject);
          console.log(testRef.current);
        }}
      >
        버튼
      </button>
      <button ref={testRef}>버튼2</button>
    </>
  );
};

export default EternalReturn;
