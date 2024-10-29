import React from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import RightArrow from 'assets/icon/RightArrow';
import MainImg from 'assets/image/MainImg.jpg';

const Main = () => {
  return (
    <_.Main_Container>
      <_.Main_Titile>
        장거리 갈 때
        <br />
        <_.Main_Title_Highlight>스윙 경매 예약</_.Main_Title_Highlight>으로
        합리적이게
      </_.Main_Titile>

      <_.Main_Info>
        경매서비스 알아보기 <RightArrow width="16" height="16" color="black" />
      </_.Main_Info>

      <_.Main_Img src={MainImg} alt="MainImg" />

      

      <MenuBar selectState={1} />
    </_.Main_Container>
  );
};

export default Main;
