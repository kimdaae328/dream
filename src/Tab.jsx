import React, { useState } from 'react';
import Modal from './Modal';

export default function Tab() {
  const [tab, setTab] = useState(0);
  const [modal, setModal] = useState(false);

  function Content(){
    switch(tab){
      case 1 :
        return <div>탭컨텐츠1</div>
      case 2 :
        return <div>탭컨텐츠2</div>
    }
  }

  return (
    <>
      <div className='tab'>
        <button onClick={()=>{
          setTab(1)
        }}>탭1</button>
        <button onClick={()=>{
          setTab(2)
        }}>탭2</button>
      </div>

      <div className='content'>
        <Content/>
      </div>

      <button onClick={()=>{
        // setModal(true)
        // modal == true ? setModal(false) : setModal(true)
        setModal(!modal)
        // !setModal(modal)
      }}>모달</button>

      <Modal modal={modal} setModal={setModal}/>
    </>
  );
}
