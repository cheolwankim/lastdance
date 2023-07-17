import React, { useState } from "react";

const Say = () => {
  const [word, setWord] = useState("");
  const [color,setMyStyle] = useState('black');
  const onClickEnter = () => {
    setWord("안녕하세요");
  };
  const onClickExit = () => {
    setWord("안녕히 가세요");
  };

  const onClickBlue = () => {setMyStyle('blue')};
  
  const onClickGreen = () => {setMyStyle('green')};
  return (
    <div>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickExit}>퇴장</button>
      </div>
      <h1 style={{color}}>{word}</h1>
      <div>
        <button onClick={() => {setMyStyle('red')}}>빨강</button>
        <button onClick={onClickGreen}>초록</button>
        <button onClick={onClickBlue}> 파랑</button>
      </div>
    </div>
  );
};

export default Say;
