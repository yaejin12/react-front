import React, { useRef } from "react";

function Ref() {
  // input ref를 다중으로 사용하고싶다면 배열로 관리해야한다.
  const inputRef = useRef([]);

  const textReset = () => {
    // input의 값의 values값을 접근할 수 있다.
    // console.log(inputRef.current.value);

    // input이 다중일때(배열로 접근했을때는 current 사용할 필요 없음)
    console.log(inputRef[0].value);
    console.log(inputRef[1].value);
  };

  return (
    <div>
      <input ref={(element) => (inputRef[0] = element)}></input>
      <input ref={(element) => (inputRef[1] = element)}></input>
      <div>
        <button onClick={textReset}>값 초기화</button>
      </div>
    </div>
  );
}

export default Ref;