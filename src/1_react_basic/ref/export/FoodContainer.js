import React, { useRef, useState } from "react";

function FoodContainer() {
  // 한국 음식 이름과, 영어 음식이름을 받고 추가
  // 등록된 음식을 선택하고, 삭제버튼을 누르면 해당 음식이 삭제된다
  const [inputName, setInputName] = useState([]);
  // food랑 check랑 index가 맞는지 확인하는 값
  const [checked, setChecked] = useState([]);
  console.log(`checked :`, checked);

  const inputRef = useRef([]);
  const checkboxRef = useRef([]);

  const sendOnClickHandler = () => {
    setInputName((prev) => [
      ...prev,
      {
        korName: inputRef.current[0].value,
        enName: inputRef.current[1].value,
      },
    ]);
    setChecked((prev) => [...prev, false]);
  };

  const checkboxOnChangeHandler = (i) => {
    const updateCheck = [...checked];
    updateCheck[i] = !checked[i];
    setChecked(updateCheck);
  };

  const deleteOnClickHandler = () => {
    setInputName(inputName.filter((_, i) => !checked[i]));
    // .fill(false): 그 배열의 모든 자리를 false로 채우다
    setChecked(new Array(inputName.length).fill(false));
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
              onChange={() => {
                checkboxOnChangeHandler(i);
              }}
              checked={checked[i]}
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
