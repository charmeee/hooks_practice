import { useEffect } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    onBefore();
    const { clientY } = e; // clientY = e.clientY 랑 같은말
    if (clientY <= 0) {
      console.log("위로 이동함;");
    }
  };//이거 메랜더링마다 랜더링된다가 효율적이게하라고 warning 뜨긴함
  useEffect(
    
    function () {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    },
    [handle]//이거 [] 랑 없는거랑 [onBefore랑차이가없다] 정확히어케작동하는지 알아본다.
  );
  if (typeof onBefore !== "function") {
    return;
  }
  //useEffect가 리턴하는건 언마운트될기전에 리턴하는 값을 수행함
  //그리고 ,뒤에 인자가 없으면 계속 될때마다 함수가 실행되어 이벤트가 추가됨 그러나 []면 한번 실행되며
  //[]안에 변수가 있으면 그변수가 변경시 실행됨.
};

export default function App() {
  const begForLife = () => console.log("dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>hi</h1>
      {/* <button onClick={enablePrevent}>lalal</button>
      <button onClick={disablePrevent}>lalal</button> */}
    </div>
  );
}
