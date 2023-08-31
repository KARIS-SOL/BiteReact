import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "Karis",
//     content: "Hello",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "Tom",
//     content: "I wonder why",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "Mindi",
//     content: "I my me mine",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];

//diaryList 를 props 로 전달

function App() {
  // DummyData를 관리할 수 있는 state를 설정할 것  -> useState 사용
  // 일기 Data를 저장해야하므로, 배열로 설정 한 후 <DiaryList diaryList={[data]} /> 에 prop으로 내려준다
  const [data, setData] = useState([]);

  // 원래 Id 는 1 , 2, 3 으로 배열에서 변수처럼 사용하기 때문에 여기서 설정할 때에는 useRef 로 관리
  // index 의 시작은 0 부터
  // id: dataId.current 는  어떠한 DOM도 선택하지 않고 0 부터 시작하는 값을 갖는것
  const dataId = useRef(0);

  // 추가하기
  // 일기배열에 새로운 일기를 추가하는 함수 만들기 -> DiaryEditor 에 prop 으로 내려주기
  // 어떤걸 받아올지 모르므로, parameter 로 받아올것 -> author, content, emotion
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    // 새로운 일기 데이터로 추가해야할 것들 함수
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    // const dataId = useRef(0); 가 index 를 1씩 증가를 해줘야 하므로
    dataId.current += 1;

    // ...data (전개연산자) 를 뒤에써서 newItem 이 상단으로 올라올수있게 작성
    setData([newItem, ...data]);
  };

  // 삭제하기
  // 어떤 Id 를 가진 요소를 지우기를 원하는지 매개변수로 받아야함 -> targetId
  // DiaryItem 에서 onDelete 를 불러오게 해야한다.  -> DiaryItem 의 부모요소인 DiaryList에 props 를 해야한다.
  // targetId 를 삭제하면 변경이기때문에 -> 위의 setData 함수에 전달해서 -> data 의 배열을 바꿔주면 된다.
  // filter 를 사용해서 targetID 가 아니라면 => newDiaryList 가 되고 -> setData 로 전달
  const onDelete = (targetId) => {
    console.log(`${targetId} 가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}
export default App;
