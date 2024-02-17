import { Outlet } from "react-router-dom";
import Header from "../../molecules/heders/Header";
import HandleHeader from "../../molecules/heders/handleHeader/HandleHeader";

function App() {
  return (
    <>
      <Header>
        <HandleHeader />
      </Header>
      <>
        <Outlet />
      </>
    </>
  );
}

export default App;
