import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";
import TodoProvider from "./store/todo.store";
import Check from "./1_react_basic/ref/Check";
import CheckBox from "./1_react_basic/ref/export/CheckBox";
import FoodContainer from "./1_react_basic/ref/export/FoodContainer";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <TodoProvider>
    //     {/*key = {value}*/}
    //     <RouterProvider router={router} />
    //   </TodoProvider>
    // </ThemeProvider>
    <FoodContainer />
    // 컴포넌트
  );
}
export default App;
