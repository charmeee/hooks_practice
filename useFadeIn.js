import { useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    } else {
      return;
    }
  });
  return { ref: element, style: { opacity: 0 } };//객체로 리턴
};

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hi</h1>{/*객체로 복사넣기*/}
      <p {...fadeInP}> fgdgafjdhfdkahdas</p>
    </div>
  );
}
