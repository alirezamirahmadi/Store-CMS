import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { RootState, AppDispatch } from "./redux/store/Store";
import SideBar from "./components/sidebar/SideBar";
import routes from "./route/Route";
import { getLogin } from "./redux/reducers/LoginReducer";
import '../dist/tailwind/output.css';
import Login from "./pages/login/Login";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [cookies, ,] = useCookies(['token']);
  const router = useRoutes(routes(loginInfo.isLogin));

  useEffect(() => {
    dispatch(getLogin(cookies.token));
  }, [])

  return (
    <>
      {
        loginInfo.isLogin
          ?
          <SideBar>
            {router}
          </SideBar>
          :
          <Login />
      }
    </>
  )
}

export default App
