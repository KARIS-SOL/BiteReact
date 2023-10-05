// React 의 LifeCycle 을 확인하기 위한 연습

import React, { useEffect, useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

const UnmountTest = () => {
  // component 가 unmount 되는 순간을 control 하기
  useEffect(() => {
    console.log("mount");
    return () => {
      // unmount 되는 시점에 출력되서 실행되게 함
      console.log("unmount");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};
const LifeCycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Mount");
  // }, []);

  // useEffect(() => {
  //   console.log("Update");
  // });

  // // []dependency array 에 있는 값이 변화하게되면, 그 순간 call back 함수 ()=>{} 가 실행된다
  // useEffect(() => {
  //   console.log(`count is updated : ${count}`);
  //   if (count > 5) {
  //     alert("count 가 5를 넘었습니다 따라서 1로 초기화 합니다");
  //     setCount(1);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is updated : ${text}`);
  // }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input> */}
      <button onClick={toggle}>ON/OFF</button>
      {/* isVisible 이 true 일때만 unmountTest 가 화면에 렌더링 하게, 단락회로평가 사용 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
