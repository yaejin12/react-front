import styled, { css } from "styled-components";
import FormInput from "../../../components/FormInput";
import TDButton from "../../../components/Button";
import { Form } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useInput from "../../../hooks/use-input";

const SignInForm = () => {
  const navigate = useNavigate(); // 주소-이동 >> bundle.js를 다시 받지 않기

  const [email, handleChangeEmailValue] = useInput(""); // [value, onChange]
  const [password, handleChangePasswordValue] = useInput(""); // [value, onChange]

  const [isDisabled, setIsDisabled] = useState(); // 불필요한 상태
  // disabled되면 ui가 바뀌어 -> 상태로 만들어야지! -> password, email
  // 불필요한 상태를 안 만들기 위해서는 UI가 바뀌는 순간을 정확히 인지

  // react-router-dom 라이브러리에서 지원하는 함수

  const handlePressSignIn = (event) => {
    event.preventDefault();
    // const email =  event.target.email.value
    // const password =  event.target.password.value

    const { email, password } = event.target;
    if (!email.value.trim() || !password.value.trim()) return;
    // email에서 공백을 제거한 값이 빈 값이다 == 띄어쓰기를 포함해서 값이 없는지 확인
    // 공백이라는 아이디는 존재할 수 없어요 => 백엔드 요청하면 됩니까 안됩니까
    // 불필요한 요청 == 비용
    if (email.value === "test@test.com" && password.value === "testtest") {
      return navigate("/todo/3");
    }
    alert("아이디와 비밀번호를 확인해주세요");
  };

  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 8;
  // const {isValidEmail, isValidPassword} = validateSignForm({email, password})

  return (
    <S.Form onSubmit={handlePressSignIn}>
      <FormInput
        label={"이메일"}
        placeholder={"email"}
        size={2}
        name="email"
        onChange={handleChangeEmailValue}
        error={!isValidEmail && email && "이메일 양식이 맞지 않습니다."}
      />
      <FormInput
        label={"비밀번호"}
        size={1}
        containerStyle={css`
          width: 100px;
        `}
        name="password"
        onChange={handleChangePasswordValue}
        error={
          !isValidPassword && password && "비밀번호는 8글자 이상이어야합니다"
        }
      />

      {/* 스타일 가이드/디자인 시스템 -> 정해진 값으로 컴포넌트를 빠르게 생산 */}
      <TDButton
        variant={"secondary"}
        size={"medium"}
        disabled={!isValidEmail || !isValidPassword}
      >
        로그인
      </TDButton>
    </S.Form>
  );
};
export default SignInForm;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  padding-left: 16px;
  height: 48px;
  &::placeholder {
    text-align: center;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
`;

const S = {
  Form,
  InputBox,
  InputLabel,
  Input,
};
