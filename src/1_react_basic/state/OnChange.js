import React, { useState } from "react";

function OnChange() {
  // 사용자가 이름을 입력했다면 화면에 바로 출력해서 보여주기
  // p태그 안 result에 사용자가 입력한 값을 출력하기
  const [result, setResult] = useState("");
  const inputValue = (e) => {
    console.log(e.target.value);
    setResult(e.target.value);
  };

  return (
    <div>
      <p>{result}</p>
      <input onChange={inputValue} type="text"></input>
    </div>
  );
}

export default OnChange;
