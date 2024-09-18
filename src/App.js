import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";
import TodoProvider from "./store/todo.store";
import Check from "./1_react_basic/ref/Check";
import CheckBox from "./1_react_basic/ref/export/CheckBox";
import ProductContainer from "./1_react_basic/class/function/memoization/ProductContainer";
import ParentContainer from "./1_react_basic/context/basic/ParentContainer";
import { FontSizeProvider } from "./1_react_basic/context/basic/FontContext";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <TodoProvider>
    //     {/*key = {value}*/}
    //     <RouterProvider router={router} />
    //   </TodoProvider>
    // </ThemeProvider>
    // 컴포넌트
    // <ProductContainer /> //memoization 설명
    <FontSizeProvider>
      <ParentContainer />
    </FontSizeProvider>
  );
}
export default App;
