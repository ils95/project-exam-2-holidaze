import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
