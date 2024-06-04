/*

1. 컴포넌트 버튼은 variant, size, shape 값을 전달 받습니다
2. variant -> primary, secondary, primary-text
3. size -> small, medium, full
4. shape -> shape, round

5. primary -> 배경 녹색, 글자 흰색
6. secondary -> 배경 파랑색, 글자 흰색
7. primary-text -> 글자만 녹색, 배경x

8. small -> padding: 16px
9. medium -> padding: 16px 32px
10. full -> width: 100%, aspect-ratio : 8 / 1

11. 나머지 매개변수 사용할 것
12. <button>텍스트</button> -> ({children})


ex) 
const TDButton = ({variant, size, shape, children , ...rest}) => {
    return (
        <S.Button
            variant={variant}
            ....
        >
            {children}
            // 해당 컴포넌트가 감싸고 있는 것은 children으로 자동전달
        </S.Button>
    )
}

    <TDButton variant={'primary'} size={'full'} shape={'shape'}>
        회원가입
    </TDButton>
*/

import styled, { css } from "styled-components";

const TDButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <S.Button {...{ size, shape, variant }} {...rest}>
      {children}
    </S.Button>
  );
};
export default TDButton;

const variantCSS = {
  primary: css`
    background-color: #088f23;
    color: #fff;
    border: none;
  `,
  secondary: css`
    background-color: #0631b4;
    color: #fff;
    border: none;
  `,
  "primary-Text": css`
    background-color: none;
    color: #088f23;
    border: none;
  `,
};

const sizeCSS = {
  small: css`
    padding: 16px;
  `,
  medium: css`
    padding: 16px 32px;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1; //가로 8 세로 1
  `,
};

const shapeCss = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${(props) => variantCSS[props.variant]}
  ${({ size }) => sizeCSS[size]}
  ${(props) => shapeCss[props.shape]}
`;

const S = {
  Button,
};
