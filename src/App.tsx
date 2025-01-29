import { Route, Routes } from "react-router-dom";
import Basic from "./layouts/Basic";
import LandingPage from "./pages/landingpage";
function App() {
  return (
    <Routes>
      <Route element={<Basic />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
