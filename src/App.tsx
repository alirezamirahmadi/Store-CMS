import { useRoutes } from "react-router-dom"

import SideBar from "./component/sidebar/SideBar"
import routes from "./route/Route"

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
