import styled from "styled-components";
import TDButton from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import { Form } from "./style";

const SIGNFORM_ARRAY = [
  {
    label: "이메일",
    size: 2,
    name: "email",
    option: { placeholder: "이메일을 입력해주세요" },
  },
  {
    label: "비밀번호",
    size: 2,
    name: "password",
  },
  {
    label: "비밀번호 확인",
    size: 2,
    name: "password-confirm",
  },
];

/*
form.option ? placeholder
form.option && placeholder
option이 있다면 placeholder 반환해라

form.option ? placeholder : form.name
form.option ?. placeholder ?? form.name
option이 있다면 placeholder 반환하고 없으면 form.name 반환해라

SIGNFORM_ARRAY?.map((form) => {}
빈 배열이면 에러가 뜸.! 이때 ?. 를 써야한다

*/

const signUpForm = ({ formState }) => {
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`${email}님 환영합니다`);
    formState = "SIGN-UP";
  };

  //로그인 폼에서 로그인 클릭시 /todo 로 이동
  return (
    <S.Form onSubmit={onSubmitSignUp}>
      {SIGNFORM_ARRAY.map((form) => {
        return (
          <FormInput
            key={form.name}
            name={form.name}
            size={form.size}
            label={form.label}
            placeholder={form.option ? form.option.placeholder : form.name}
          />
        );
      })}
      <TDButton size={"full"}>회원가입</TDButton>
    </S.Form>
  );
};
export default signUpForm;

const S = {
  Form,
};
