// ## usecConfirm 은 클릭했을때 허락창을 띄우고 결과 값에따라 함수를 실행시킴.

const useConfirm = (message = "", callback, refuse) => {
  console.log("함수");// 이거는 처음렌더링 될때 함수도 랜더링 되면서 실행되는듯;
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    console.log("dksdp");//이거는 onClick 되야 아래에있는함수가 실행되어서 메세지가 받아와지면서 실행되는듯
    if (window.confirm(message)) {
      callback();
    } else {
      try {//refuse가 없을때를 대비한 예외 검사
        refuse();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};

export default function App() {
  const confirmButton = () => {
    console.log("confirm");
  };
  const refuseButton = () => {
    console.log("refuse");
  };
  return (
    <div className="App">
      <button onClick={useConfirm("SURE?", confirmButton, refuseButton)}>
        lalal
      </button>
    </div>
  );
}
