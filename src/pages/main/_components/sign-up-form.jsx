import styled from "styled-components";
import TDButton from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import { Form } from "./style";

const SIGNFORM_ARRAY = [];

const signUpForm = () => {
  //로그인 폼에서 로그인 클릭시 /todo 로 이동
  return (
    <S.Form>
      <FormInput />
      <FormInput />
      <FormInput label={"비밀번호 확인"} />
      <TDButton>회원가입</TDButton>
    </S.Form>
  );
};
export default signUpForm;

const S = {
  Form,
};
