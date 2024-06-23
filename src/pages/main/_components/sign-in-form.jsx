import styled, { css } from "styled-components";
import FormInput from "../../../components/FormInput";
import TDButton from "../../../components/Button";
import { Form } from "./style";
import { useNavigate } from "react-router-dom";

const SignInForm = ({}) => {
  const navigate = useNavigate();//주소이동을 쓰기 위해 씀 >>bundle.js를 다시 받지 않기위해 

  const handlePressSignIn = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    //trim(): 공백 제거
    //email에서 공백을 제거한 값이 빈 값이다 == 띄어쓰기를 포함해서 값이 없는 지 확인
    //공백이라는 아이디는 존재할 수 없어 => 백앤드 요청 하면 안됨
    if (email.value.trim() || password.value.trim()) return;
    if (email.value === "test" && password.value === "test") {
      return navigate("/todo/3");
    }
  };
  return (
    <S.Form>
      <FormInput label={"이메일"} placeholder={"email"} size={2}></FormInput>
      <FormInput
        label={"비밀번호"}
        placeholder={"password"}
        size={2}
        containerStyle={css`
          width: 100px;
        `}
      ></FormInput>
      <TDButton
        variant={"primary"}
        size={"full"}
        children={"로그인"}
      ></TDButton>
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
