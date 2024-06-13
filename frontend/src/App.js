import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.body.classList.add("flex");
    document.body.classList.add("h-full");
    document.body.classList.add("bg-zinc-50");
    document.body.classList.add("dark:bg-black");

    const flex = document.getElementById("flex");
    flex.classList.add("flex");
    flex.classList.add("w-full");

    const flexInset = document.getElementById("flexInset");
    flexInset.classList.add("fixed");
    flexInset.classList.add("inset-0");
    flexInset.classList.add("flex");
    flexInset.classList.add("justify-center");
    flexInset.classList.add("sm:px-8");

    const root = document.getElementById("root");
    root.classList.add("relative");
    root.classList.add("flex");
    root.classList.add("w-full");
    root.classList.add("flex-col");
  }, []);

  return (
    <>
      <Header />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
