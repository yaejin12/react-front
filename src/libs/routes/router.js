import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import { Todo } from "../../pages/todo/_todo";
//url을 감지하여 내가 생성한 route주소에 맞게 컴포넌트를 전달하는 역할을 한다
//감지,route생성

export const router = createBrowserRouter([
  //import {router} from "상대경로"
  //내가 export한 변수나 함수명을 정확히 기재
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/todo/:todoId",
    element: <Todo></Todo>,
  },
]);
export default router;
// import [가지고 올 이름] from '상대경로'
//가지고올 이름.createBrowserRouter

//모듈
//한가지 이상의 기능을 하는 코드의 집단을 분리한 것
//export -> export default
//        -> export const router = ...
