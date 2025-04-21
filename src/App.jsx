import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";
import "./index.css";

function App() {
  return (
  <div className="w-full px-3">
      <header>
        <Header />
      </header>

      <main className="flex items-center justify-center my-3">
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
