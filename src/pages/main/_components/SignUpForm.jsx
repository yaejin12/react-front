import TDButton from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import useInputs from "../../../hooks/use-inputs";
import { validateSignForm } from "../_utils/validate-helper";
import { Form } from "./style";

const SIGNFORM_ARRAY = [
  {
    label: "이메일",
    size: 3,
    name: "email",
    option: {
      placeholder: "이메일을 입력해주세요",
    },
  },
  {
    label: "비밀번호",
    size: 3,
    name: "password",
  },
  {
    label: "비밀번호 확인",
    size: 3,
    name: "password-confirm",
  },
];

const SignUpForm = ({ setFormState }) => {
  const [input, onChangeInputs] = useInputs({
    email: "",
    password: "",
    "password-confirm": "",
  });

  const onSubmitSignUp = (event) => {
    // 회원가입 때 입력했던 이메일명을 통해 "oooo@naver.com님 환영합니다" alert
    // 로그인으로 변경
    // input - value를 가지고 오는 방법
    event.preventDefault();
    const email = event.target.email.value;
    alert(`${email}님 환영합니다`);
    // formState = "SIGN-IN";
    setFormState("SIGN-IN");
    // SignUpForm에는 setFormState가 없죠 -> 상위 컴포넌트에 있네 -> props로 전달
  };

  console.log(input);

  // disabled, error메세지 보여줄 것

  // email "@"
  // password 8 이상
  // password === password confirm
  // sign-in-form 유사한게 있을 것 -> 모듈화

  // 여기까지는 다들 하셨죠
  const { isValidEmail, isValidPassword, isValidPasswordConfirm } =
    validateSignForm({
      email: input.email,
      password: input.password,
      passwordConfirm: input["password-confirm"],
    });

  function calculateErrorMessage(name) {
    // if (name === "email") return isValidEmail && "이메일을 정확히 입력해주세요";
    // if (name === "password") return "비밀번호는 8글자 이상 입력해주세요";
    // if (name === "password-confirm") return "비밀번호 확인이 일치하지 않습니다";
    switch (name) {
      case "email":
        if (input.email && !isValidEmail)
          return "이메일 양식이 올바르지 않습니다";
        break;
      case "password":
        if (input.password && !isValidPassword)
          return "비밀번호는 8글자 이상 입력해주세요";
        break;
      case "password-confirm":
        if (input["password-confirm"] && !isValidPasswordConfirm)
          return "비밀번호 확인이 일치하지 않습니다";
        break;
      default:
        break;
    }
  }

  return (
    <S.Form onSubmit={onSubmitSignUp}>
      {SIGNFORM_ARRAY.map((form) => (
        <FormInput
          key={form.name}
          size={form.size}
          label={form.label}
          name={form.name}
          /*
                form.option?.placeholder // option이 있다면 placeholder를 반환해다
                form.option && form.option.placeholder

                form.option ? form.option.placeholder : form.name
                form.option?.placeholder ?? form.name
                */
          placeholder={form.option?.placeholder}
          onChange={onChangeInputs}
          error={calculateErrorMessage(form.name)}
        />
      ))}
      <TDButton size={"full"} variant={"primary"}>
        회원가입
      </TDButton>
    </S.Form>
  );
};

const S = {
  Form,
};

export default SignUpForm;

// styled-components
// scss + post.css // app.module.scss -> 러닝커브 + 퍼블리셔분들이랑 쉽게 소통
// emotion // styled-components랑 사용법이 완전히 같습니다 - css-in-js - 편해요

// tailwind-css // nextjs 스타트업
// vanilla extract, styleX
//                  ------ meta
