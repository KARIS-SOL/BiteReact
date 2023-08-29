import { useRef, useState } from "react";

const DiaryEditor = () => {
  // diaryeditor가 input 을 컨트롤 할 수 있게 만들어줘야함

  // focus 할 부분을 DOM 으로 찾아갈때 !
  // MutableRefObject -> DOM 요소를 접근할 수 있는 기능
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    // ...state 라는 spread 연산자가 가지고 있는것들.
    author: "",
    content: "",
    emotion: "1",
  });
  // author 과 content 는 state 구조도 같고 둘다 자료형이므로 묶어서 관리할 수 있음
  // const [author, setAuthor] = useState("");
  // 작성자 저장, 초기값"" , input에 들어갈 내용을 관리하기 위한 author라는 state를 사용함
  // author의 상태변화를 주도하는 setAuthor 라는 상태변화 함수
  // author 은 setAuthor 이 없으면 절대 상태변화를 할 수가 없다.
  // input 에 상태변화가 있을때 setAuthor가 상태변화를 할 수 있게 값을 설정해 줘야한다
  // 이벤트 함수인 'e' 를 매개변수로(props) 받게 된다. -> onChange 는 이벤트로써 사용자가 어떠한 행동을 한것 callback 함수를 수행한다
  // console 창에 가서 무언갈 치면 target:value 가 나오는데 그래서 e.target.value 를 쓰는것 !
  //   const [content, setContent] = useState("");

  // event 도 하나로 합쳐서 관리하기 -> onChange 관리
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      //   alert("작성자는 최소 1 글자 이상 입력해주세요");
      //focus
      authorInput.current.focus();
      return; // return 을 써서 함수를 끝내야함, 더이상 출력되지 않도록
    }
    if (state.content.length < 5) {
      //   alert("본문은 최소 5 글자 이상 입력해주세요");
      //focus
      contentInput.current.focus();

      return;
    }
    alert(" Saved!");
  };
  return (
    <div className="DiaryEditor">
      <h2>Karis's Diary</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          //   onChange={(e) => {
          //     setState({
          //       // 무조건 ...state 가 먼저 적혀져야 그후에 변경된 값이 덮어질 수 있다.
          //       ...state,
          //       author: e.target.value,
          //     });
          onChange={handleChangeState}
        />
      </div>
      {/* 본문만들기 */}
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       content: e.target.value,
          //     });
          //   }}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <span> 오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Save Diary</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
