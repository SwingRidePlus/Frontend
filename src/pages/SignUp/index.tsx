// 라이브러리
import React, { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 파일
import * as _ from './style';
import { formatBirthday } from 'lib/utils/formatBirthday';
import axios from 'axios';

interface UserInfo {
  number: string;
  password: string;
  name: string;
  gender: string;
  age: string;
  carNumber?: string;
}

const SignUp = () => {
  const history = useNavigate();
  const title = '환영합니다!\n회원정보를 입력해주세요.';
  const [carNumber, setCarNumber] = useState<string>();
  const [userInfos, setUserInfos] = useState<UserInfo>({
    number: '',
    password: '',
    name: '',
    gender: '',
    age: ''
  });

  const [isDriverSelected, setIsDriverSelected] = useState({
    Driver: false,
    User: false
  });
  const [isSelected, setIsSelected] = useState({
    female: false,
    male: false
  });

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, number: e.currentTarget.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, password: e.currentTarget.value });
  };

  const handlename = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, name: e.currentTarget.value });
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, age: e.currentTarget.value });
  };

  const handleCarNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCarNumber(e.currentTarget.value);
  };

  const handleGenderBox = (selectedGender: string) => {
    setUserInfos({ ...userInfos, gender: selectedGender });
    setIsSelected({
      female: selectedGender === 'female',
      male: selectedGender === 'male'
    });
  };

  const handleDriverBox = (selected: string) => {
    setIsDriverSelected({
      User: selected === 'User',
      Driver: selected === 'Driver'
    });
  };

  const handleSubmit = async () => {
    if (isDriverSelected.User) {
      const data = await axios.post(
        'https://swing-be-stag.xquare.app/signup/user',
        userInfos
      );
      if (data.status === 200) {
        alert('유저 회원가입 성공');
        history('/signin');
      }
    } else if (isDriverSelected.Driver) {
      const data = await axios.post(
        'https://swing-be-stag.xquare.app/signup/taxi',
        { ...userInfos, carNumber }
      );
      if (data.status === 200) {
        alert('기사 회원가입 성공');
        history('/signin');
      }
    }
  };

  return (
    <_.UserInfo_Container>
      <_.UserInfo_Content>
        <_.UserInfo_Title_Layout>
          <_.UserInfo_Title_Big>{title}</_.UserInfo_Title_Big>
          <_.UserInfo_Title_Small>
            스윙 택시+ 이용을 위해 활용됩니다.
          </_.UserInfo_Title_Small>
        </_.UserInfo_Title_Layout>
        <_.UserInfo_Inputs>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              사용자 유형
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Gender_Box>
              <_.UserInfo_Gender
                isSelected={isDriverSelected.User}
                onClick={() => handleDriverBox('User')}
              >
                사용자
              </_.UserInfo_Gender>
              <_.UserInfo_Gender
                isSelected={isDriverSelected.Driver}
                onClick={() => handleDriverBox('Driver')}
              >
                택시기사
              </_.UserInfo_Gender>
            </_.UserInfo_Gender_Box>
          </_.UserInfo_Input_Layout>
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
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              이름
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="text"
              placeholder="2글자 이상 입력해주세요."
              onChange={handlename}
              value={userInfos.name}
              autoComplete="off"
            />
          </_.UserInfo_Input_Layout>
          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              나이
              <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Input_Box
              type="text"
              placeholder="17"
              value={userInfos.age}
              onChange={handleAge}
              pattern="\d*"
            />
          </_.UserInfo_Input_Layout>
          {isDriverSelected.Driver ? (
            <_.UserInfo_Input_Layout>
              <_.UserInfo_Input_Title>
                차량번호
                <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
              </_.UserInfo_Input_Title>
              <_.UserInfo_Input_Box
                type="text"
                placeholder="60바8267"
                value={carNumber}
                onChange={handleCarNumber}
                pattern="\d*"
              />
            </_.UserInfo_Input_Layout>
          ) : (
            ''
          )}

          <_.UserInfo_Input_Layout>
            <_.UserInfo_Input_Title>
              성별 <_.UserInfo_Input_Title_Star>*</_.UserInfo_Input_Title_Star>
            </_.UserInfo_Input_Title>
            <_.UserInfo_Gender_Box>
              <_.UserInfo_Gender
                isSelected={isSelected.female}
                onClick={() => handleGenderBox('female')}
              >
                여성
              </_.UserInfo_Gender>
              <_.UserInfo_Gender
                isSelected={isSelected.male}
                onClick={() => handleGenderBox('male')}
              >
                남성
              </_.UserInfo_Gender>
            </_.UserInfo_Gender_Box>
          </_.UserInfo_Input_Layout>
          <_.UserInfo_Button onClick={handleSubmit}>회원가입</_.UserInfo_Button>
        </_.UserInfo_Inputs>
      </_.UserInfo_Content>
    </_.UserInfo_Container>
  );
};

export default SignUp;
