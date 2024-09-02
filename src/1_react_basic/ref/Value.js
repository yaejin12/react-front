import React, { useRef, useState } from "react";

function Value() {
  const inputRef = useRef();
  const nameRef = useRef();
  const [result, setResult] = useState();

  const onChangeSetName = (e) => {
    setResult(e.target.value);
  };

  const onClickToPutName = () => {
    setResult(nameRef.current.value + "님");
  };

  return (
    <div>
      <p ref={nameRef}>{result}</p>
      {/* value={result} 값을 넣어주면 result 값이 동기화 됨 */}
      <input ref={inputRef} value={result} onChange={onChangeSetName}></input>
      <div>
        <button onClick={onClickToPutName}>"님"을 붙여주는 버튼</button>
      </div>
    </div>
  );
}

export default Value;
