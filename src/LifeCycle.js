// React 의 LifeCycle 을 확인하기 위한 연습

import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   // useEffect -> Mount 되는 시점제어 : [] 에 빈배열
  //   useEffect(() => {
  //     console.log("Mount!");
  //   }, []);

  //   // Component 가 Update (state 혹은 props의 변경) -> dependency 를 넣지 않으면 됌
  //   useEffect(() => {
  //     console.log("Update!");
  //   });

  //   // count 넣어보기 -> dependency array 의 값이 변화하게되면 -> 그순간 call back 함수가 실행이된다 : count state 가 변화하는 순간 실행
  //   useEffect(() => {
  //     console.log(`count is updated : ${count}`);
  //     if (count > 5) {
  //       alert("count 가 5를 넘어갔습니다, 따라서 0로 초기화 합니다");
  //       setCount(0);
  //     }
  //   }, [count]);

  //   // text 넣어보기 !
  //   useEffect(() => {
  //     console.log(`text is updated : ${text}`);
  //   }, [text]);

  // LifeCycle 이 끝나는 것
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
      <button onClick={toggle}>ON / OFF</button>
    </div>
  );
};

export default LifeCycle;
