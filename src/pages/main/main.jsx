import styled from "styled-components";
import SignInForm from "./_components/sign-in-form";
import SignUpForm from "./_components/sign-up-form";

/*
컴포넌트를 나누는 기준

1. 재사용
2.가독성
3.단일 기능
4.랜더링 최적화
-> 리랜더링(함수 재실행)
->내가 리랜더하고싶은 함수(컴포넌트)가 아니라면 랜더링 해서는 안된다.

=> 코드를 치기 전에 컴포넌트 구조를 구상(완벽하지 않아도 괜찮습니다) 
=> 코드를 치면서, 리뷰를 받으면서 컴포넌트 구조를 수정
*/

const Main = () => {
  //컴포넌트 -> 레이아웃, 회원가입폼, 로그인폼,인풋,버튼

  let formState = "SIGN-UP";
  //let isFormSignIn = true

  const TAB_ARRAY = [{ name: "SIGN-IN" }, { name: "SIGN-UP" }];

  const handlePressSignTab = (tabName) => {
    formState = tabName;
  };

  return (
    <S.Wrapper>
      <S.Container>
        {/**container */}
        {/**header */}
        <S.Header>
          {TAB_ARRAY.map((tab, index) => (
            <S.Tab
              key={index}
              $isSelected={formState === tab.isSelected}
              onClick={() => handlePressSignTab(tab.name)}
            >
              {tab.name}
            </S.Tab>
          ))}
        </S.Header>
        {formState === "SIGN-IN" ? <SignInForm /> : <SignUpForm />}
      </S.Container>
    </S.Wrapper>
  );
};
export default Main;

//컴포넌트 앞글자는 대문자로 만들어야한다
// 스타일 된 요소를 생성해서 컴포넌트화한다 ===
const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 360px;

  border: 1px solid #999;
`;

const Header = styled.header`
  background-color: #7df8dc;
  display: flex;
  height: 70px;
`;

const Tab = styled.div`
  width: 50%;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  ${(props) => props.$isSelected && "background-color:#e0e0e0"}
  /* && 가 true면 뒤에까지 실행해라 */

  /* // & : 내 자신을 호버했을때 */
  &:hover {
    background-color: #e0e0e0;
  }
`;

/**
 * div > section > p
 * div > section > p > a
 *
 * div > section > p {
 * & ( = div > section > p 와 같은 말이다) > a{}
 *  }
 */

const S = {
  Form,
  // 키와 value가 같으면 Wrapper : Wrapper value 생략 가능
  Wrapper,
  Container,
  Header,
  Tab,
};
