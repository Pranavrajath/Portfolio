import { Home } from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { Toast } from "./components/ui/toast";

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;