//Modules
import { Routes, Route } from "react-router-dom";

//Utils
import { MainPage } from "./components/home/MainPage";
import { Layout } from "./components/home/Layout";
import { NotFoundPage } from "./components/utils/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
