import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import SideBar from "./components/sidebar/SideBar";
import routes from "./route/Route";
import store from "./redux/store/Store";
import '../dist/tailwind/output.css';

function App() {

  const router = useRoutes(routes);
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SideBar>
            {router}
          </SideBar>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
