import React, { useEffect, useState } from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';

import Coin from 'assets/image/coin.png';
import Cupon from 'assets/image/cupon.png';
import Credit from 'assets/image/credit.png';
import Profile from 'assets/Icon/Profile';
import Log from 'assets/Icon/Log';
import Pay from 'assets/Icon/Pay';
import axios from 'axios';

const MyPage = () => {
  const [data, setData] = useState<{ name?: string; number?: string } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://swing-be-stag.xquare.app/users/my-info', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setData(response.data);
    };
    fetchData();
  }, []);


  return (
    <_.MyPage_Container>
      <_.MyPage_Title>내 정보</_.MyPage_Title>

      <_.MyPage_Info>
        <_.MyPage_Name>{data?.name || '이름 없음'}</_.MyPage_Name>
        <_.MyPage_Phone>{data?.number || '전화번호 없음'}</_.MyPage_Phone>
      </_.MyPage_Info>

      <_.MyPage_Baner>
        <_.MyPage_Title2>SWING</_.MyPage_Title2>
        <_.MyPage_SubTitle>
          멤버십 회원은 매달 약 <span>18,000원</span> 아끼는 중!
        </_.MyPage_SubTitle>
      </_.MyPage_Baner>

      <_.MyPage_Buttons>
        <_.MyPage_Button>
          <img src={Coin} alt="" width={30} height={30} />
          포인트
        </_.MyPage_Button>
        <_.MyPage_Button>
          <img src={Cupon} alt="" width={38} height={38} />
          쿠폰
        </_.MyPage_Button>
        <_.MyPage_Button>
          <img src={Credit} alt="" width={30} height={30} />
          이용권
        </_.MyPage_Button>
      </_.MyPage_Buttons>

      <_.MyPage_Provider />

      <_.MyPage_MySwing>마이 스윙</_.MyPage_MySwing>
      <_.MyPage_Options>
        <_.MyPage_Option>
          <Profile />
          계정 설정
        </_.MyPage_Option>
        <_.MyPage_Option>
          <Log />
          이용내역
        </_.MyPage_Option>
        <_.MyPage_Option>
          <Pay />
          결제수단
        </_.MyPage_Option>
      </_.MyPage_Options>

      <MenuBar selectState={3} />
    </_.MyPage_Container>
  );
};

export default MyPage;
