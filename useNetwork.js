//##온라인인지 오프라인인지 판별

import { useEffect, useState } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine); //navigator.online 온라인인지아닌지 판단하여 bool값을 리턴함
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "온라인" : "오프라인");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>ㅇㅇㅇㅇ</h1>
    </div>
  );
}
