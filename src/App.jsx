import expertImg from "./assets/expert-advice.png";
import "./App.css";
import Advices from "./Advices";
import { Suspense, useState } from "react";

const adviceFetch = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  return res.json();
};

function App() {
  const [advicePromise, setAdvicePromise] = useState(adviceFetch());

  return (
    <>
      <section id="center">
        <img src={expertImg} className="base" alt="" />
        <div>
          <h3>Get Experts Advice</h3>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="center">
          <Suspense fallback={<h4> Advice is loading...</h4>}>
            <Advices advicePromise={advicePromise}></Advices>
            <button
              className="btn"
              onClick={() => setAdvicePromise(adviceFetch())}
            >
              Get New Advice
            </button>
          </Suspense>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
