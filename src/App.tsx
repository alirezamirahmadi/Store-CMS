import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { RootState, AppDispatch } from "./redux/store/Store";
import SideBar from "./components/sidebar/SideBar";
import routes from "./route/Route";
import { getLogin } from "./redux/reducers/LoginReducer";
import '../dist/tailwind/output.css';
import Login from "./pages/login/Login";
import Loading from "./components/global/loading/Loading";

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [cookies, ,] = useCookies(['token']);
  const router = useRoutes(routes(loginInfo.isLogin, loginInfo.userInfo?.permissions ?? []));

  useEffect(() => {
    dispatch(getLogin(cookies.token)).then(() => setIsLoading(false));
  }, [])

  if (isLoading) {
    return (<div className="mt-20"><Loading /></div>)
  }

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
