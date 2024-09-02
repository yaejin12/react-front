import React, { useRef, useState } from "react";
import Form from "./Form";

function Check() {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "200px",
  };

  // 로그인 로직 (유효성 검사)
  // useRef()를 이용하여 사용자의 이름과 비밀번호가 작성되었는지 감자하기
  // 작성이 모두 완료 되었다면 그때 전송 submit()
  const inputRef = useRef([]);
  const formRef = useRef();

  const onClickHandler = () => {
    for (let input of inputRef.current) {
      console.log(`${input.name} : ${input.value}`);
      if (!input.value) {
        console.log(input.name + " 값이 없습니다");
        alert(input.name + "을 입력하세요");
        return;
      }
    }
    formRef.current.submit();
  };

  return (
    <Form
      onClickHandler={onClickHandler}
      inputRef={inputRef}
      formRef={formRef}
      style={style}
    />
  );
}

export default Check;
