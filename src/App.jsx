import { Home } from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { Toast } from "./components/ui/toast";

function App() {

  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
