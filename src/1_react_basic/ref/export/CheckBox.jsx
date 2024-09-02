import React, { useState } from "react";

function CheckBox() {
  const [message, setMessage] = useState([]);

  const onClickCheck = (e) => {
    // e.target.value;
    let value = e.target.value;
    // e.target.checked : 체크 유무를 true & false 로 알려준다
    console.log(e.target.checked);

    //배열에 값을 추가하는 메서드
    // push, concat : push 는 배열을 추가만 해주고 concat은 새로운 메서드로 반환하기 때문에 concat만 상태 변경된다.

    if (e.target.checked) {
      setMessage(message.concat(value));
      console.log(`message : ${message}`);
    } else {
      //filter
      setMessage(message.filter((m) => m !== value));
    }
  };
  return (
    <div>
      <div>
        <span>front-end</span>
        <input
          type="checkbox"
          value={"front-end"}
          onClick={onClickCheck}
        ></input>
      </div>
      <div>
        <span>back-end</span>
        <input
          type="checkbox"
          value={"back-end"}
          onClick={onClickCheck}
        ></input>
      </div>
      <div>
        <span>ai</span>
        <input type="checkbox" value={"ai"} onClick={onClickCheck}></input>
      </div>
      <div>
        <h1>
          {message.map((message, i) => (
            <p key={i}>{message}</p>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default CheckBox;
