import { useRoutes } from "react-router-dom";

import SideBar from "./components/sidebar/SideBar";
import routes from "./route/Route";
import '../dist/tailwind/output.css';

function App() {
  
  const router = useRoutes(routes);

  return (
    <>
      <SideBar>
        {router}
      </SideBar>
    </>
  )
}

export default App
