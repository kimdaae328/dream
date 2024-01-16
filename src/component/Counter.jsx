import '../App.css';
import { useState } from 'react';

function Counter({number, setNumber}) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='counter'>
                <span className='number'>{count}</span>
                <button
                    className='button'
                    onClick={() => {
                        setNumber((prev) => prev + 1);
                        setCount((prev) => prev + 1)
                }}>
                    Add+
                </button>
            </div>
        </>
    );
}

export default Counter;