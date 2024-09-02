import React from "react";

function Form(props) {
  const { onClickHandler, inputRef, formRef, style } = props;
  return (
    <form ref={formRef} style={style}>
      <div>
        <span>아이디</span>
        <input
          ref={(element) => (inputRef.current[0] = element)}
          name="id"
          type="text"
        ></input>
      </div>
      <div>
        <span>비번</span>
        <input
          ref={(element) => (inputRef.current[1] = element)}
          name="password"
          type="text"
        ></input>
      </div>
      <button type="button" onClick={onClickHandler}>
        전송
      </button>
    </form>
  );
}

export default Form;
