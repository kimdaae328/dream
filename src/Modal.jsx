import React, { useState } from 'react';

export default function Modal(props) {
  if(props.modal){
    return (
      <>
        <div className='modal'>모달입니다.</div>
        <button onClick={()=>{
          props.setModal(false)
        }}>닫기</button>
      </>
    );
  }
}
