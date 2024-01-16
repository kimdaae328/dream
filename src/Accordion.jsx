import React, { useState } from 'react';

export default function Accordion() {
  const [acoMap, setAcoMap] = useState([
    { title: '아코디언1', content: '아코디언내용1' },
    { title: '아코디언2', content: '아코디언내용2' },
    { title: '아코디언3', content: '아코디언내용3' },
    { title: '아코디언4', content: '아코디언내용4' },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <ul>
        {acoMap.map((aco, index) => (
          <li key={index}>
            <button onClick={() => handleClick(index)}>
              {aco.title}
            </button>
            {activeIndex === index && <p>{aco.content}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}