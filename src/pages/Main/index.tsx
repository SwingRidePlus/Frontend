import React from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import RightArrow from 'assets/Icon/RightArrow';
import MainImg from 'assets/image/MainImg.jpg';
import Check from 'assets/Icon/Check';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReservationModal from 'components/ReservationModal';

const Main = () => {
  const history = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const start = queryParams.get('start');
  const end = queryParams.get('end');
  console.log(start);
  console.log(end);

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

      <_.Main_Location>
        <_.Main_Start_Box
          onClick={() => {
            history('/searchlocation');
          }}
        >
          <_.Main_Start_Dot color={true} />
          {start ? start : '어디서 출발하시나요?'}
        </_.Main_Start_Box>

        <_.Main_Provider />

        <_.Main_Start_Box
          onClick={
            start
              ? () => {
                  history(`/searchlocation?start=${start}`);
                }
              : () => {
                  history(`/searchlocation`);
                }
          }
        >
          <_.Main_Start_Dot color={false} />
          {end ? end : ' 어디로 떠나시나요?'}
        </_.Main_Start_Box>
      </_.Main_Location>


      <_.Main_Note>
        <Check /> 시간 예약으로 원하는 시간에 이용해보세요.
        <br />
        <Check /> 경매 시스템을 통해 원하는 가격으로 이동할 수 있어요.
      </_.Main_Note>

      <MenuBar selectState={1} />
      <ReservationModal />
    </_.Main_Container>
  );
};

export default Main;
