import styled, { css } from "styled-components";
import FormInput from "../../../components/FormInput";
import TDButton from "../../../components/Button";
import { Form } from "./style";

const SignInForm = ({}) => {
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
