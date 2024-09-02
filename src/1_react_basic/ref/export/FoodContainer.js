import React, { useRef, useState } from "react";

function FoodContainer() {
  // 한국 음식 이름과, 영어 음식이름을 받고 추가
  // 등록된 음식을 선택하고, 삭제버튼을 누르면 해당 음식이 삭제된다
  const [inputName, setInputName] = useState([]);
  const inputRef = useRef([]);
  const checkboxRef = useRef([]);

  const sendOnClickHandler = () => {
    console.log(inputRef.current[0].value);
    setInputName((prev) => [
      ...prev,
      {
        korName: inputRef.current[0].value,
        enName: inputRef.current[1].value,
      },
    ]);
    console.log(`inputName :`, inputName);
  };

  const checkboxClickHandler = (e) => {
    console.log(e.target.value);
  };

  const deleteOnClickHandler = () => {
    console.log(`checkboxRef :`, checkboxRef.current);
    const deleteName = inputName.filter(
      (name) => name.korName !== checkboxRef.current.value
    );
    setInputName(deleteName);
  };
  return (
    <>
      <div>
        <input
          ref={(element) => (inputRef.current[0] = element)}
          type="text"
        ></input>
        <input
          ref={(element) => (inputRef.current[1] = element)}
          type="text"
        ></input>
        <button type="button" onClick={sendOnClickHandler}>
          전송
        </button>
        <button type="button" onClick={deleteOnClickHandler}>
          삭제
        </button>
      </div>
      <div>
        {inputName.map((name, i) => (
          <div key={i}>
            <input
              type="checkbox"
              value={name.korName}
              onClick={checkboxClickHandler}
              ref={checkboxRef}
            />
            <span>
              {name.korName}({name.enName})
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodContainer;
