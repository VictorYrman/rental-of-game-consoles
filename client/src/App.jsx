//Modules
import { Routes, Route } from "react-router-dom";

//Utils
import { Layout } from "./components/home/Layout";
import { MainPage } from "./components/home/MainPage";
import { AboutUs } from "./components/mainPages/about";
import { NotFoundPage } from "./components/utils/NotFoundPage";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </DataProvider>
  );
}

export default App;
