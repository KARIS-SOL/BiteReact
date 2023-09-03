// React 의 LifeCycle 을 확인하기 위한 연습

import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default LifeCycle;
