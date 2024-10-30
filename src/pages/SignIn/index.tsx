// 라이브러리
import React, { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 파일
import * as _ from './style';
import axios from 'axios';

interface UserInfo {
  number: string;
  password: string;
}

const SignIn = () => {
  const history = useNavigate();
  const title = '환영합니다!\n로그인 정보를 입력해주세요.';
  const [userInfos, setUserInfos] = useState<UserInfo>({
    number: '',
    password: ''
  });

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, number: e.currentTarget.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, password: e.currentTarget.value });
  };

  const handleSubmit = async () => {
    try {
      const data = await axios.post(
        'https://swing-be-stag.xquare.app/signin',
        userInfos
      );
      
      if (data.status === 200) {
        alert('로그인 성공');
        localStorage.setItem('accessToken', data.data.access);
  
        const userInfoResponse = await axios.get('https://swing-be-stag.xquare.app/users/my-info', {
          headers: {
            Authorization: `Bearer ${data.data.access}`
          }
        });
  
        const userRole = userInfoResponse.data.role;
        if (userRole === 'ROLE_USER') {
          history('/');
        } else if (userRole === 'ROLE_TAXI') {
          history('/taxiexplore');
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        alert('유저를 찾을 수 없습니다.');
        history('/signin');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <_.UserInfo_Container>
      <_.UserInfo_Content>
        <_.UserInfo_Title_Layout>
          <_.UserInfo_Title_Big>{title}</_.UserInfo_Title_Big>
        </_.UserInfo_Title_Layout>
        <_.UserInfo_Inputs>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              전화번호
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="text"
              placeholder="전화번호를 입력해주세요"
              onChange={handlePhone}
              value={userInfos.number}
              autoComplete="off"
            />
          </_.UserInfo_Input_Layout>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              비밀번호
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePassword}
              value={userInfos.password}
              autoComplete="off"
            />
          </_.UserInfo_Input_Layout>

          <_.UserInfo_Button onClick={handleSubmit}>로그인</_.UserInfo_Button>
        </_.UserInfo_Inputs>
      </_.UserInfo_Content>
    </_.UserInfo_Container>
  );
};

export default SignIn;
