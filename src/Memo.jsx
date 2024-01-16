import { useMemo, useState } from 'react';
import './App.css';

function Memo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getDiaryAnalysis = useMemo(() => {
    console.log('useMemo 연산 시작함');
    const sum = x + y;
    return { sum };
  }, [x, y]);

  const { sum } = getDiaryAnalysis;

  return (
    <div className="App">
      x 값 : {x}
      <br />
      <button onClick={() => setX(x + 1)}>x값 1 증가</button>
      <br />y 값 : {y}
      <br />
      <button onClick={() => setY(y + 1)}>y값 1 증가</button>
      <br />
      {sum}
      <br />
      <button onClick={() => setX(1)}>x값 1로 변경하기</button>
      <button onClick={() => setY(1)}>y값 1로 변경하기</button>
    </div>
  );
}

export default Memo;