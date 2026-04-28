import FormEditProduct from "./components/FormEditProduct";
import FormProduct from "./components/FormProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <h1>Form CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormProduct />} />
          <Route path="/edit/:id" element={<FormEditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
