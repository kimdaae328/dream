import './App.css';
import Counter from './component/Counter';
import { useState } from 'react';


function AppCounter() {

    const [num, setNum] = useState(0);

    return (
        <div className="App">
            <span>
                total: {num} {num > 10 ? '👏' : '💖'};
            </span>
            <Counter number={num} setNumber={setNum}/>
            <Counter number={num} setNumber={setNum}/>
        </div>
    );
}

//부모에서 기본 값을 내려준다.
//자식에서 받아서 함수로 받아서 계산을 한후 버튼에 넣어준다.
//


export default AppCounter;