import React, { useState } from "react";

function state() {
  // 상태를 관리할 변수, 상태를 바꿀 수 있는 setter 메서드
  // useState(초기값)
  const [number, setNumber] = useState(10);

  const decrease = () => {
    setNumber((prev) => {
      prev - 1;
    });
  };
  const increase = () => {
    setNumber((prev) => {
      prev + 1;
    });
  };

  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      <p>{number}</p>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
}

export default state;
