import styled from 'styled-components';

export const MyPage_Container = styled.div`
  width: 100vw;
  padding: 42px 32px 52px;
  display: flex;
  flex-direction: column;
`;

export const MyPage_Title = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

export const MyPage_Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  gap: 6px;
  margin-top: 20px;
`;

export const MyPage_Name = styled.div`
  font-size: 34px;
  font-weight: bold;
`;

export const MyPage_Phone = styled.div`
  font-size: 14px;
  color: #838383;
`;

export const MyPage_Baner = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: #fff0e5;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  padding-left: 10px;
  gap: 10px;
  margin-top: 20px;
`;

export const MyPage_Title2 = styled.div`
  background-color: #ff4600;
  width: fit-content;
  color: white;
  font-size: 14px;
  padding: 2px 14px;
  border-radius: 20px;
`;

export const MyPage_SubTitle = styled.div`
  span {
    color: #ff4600;
  }
`;

export const MyPage_Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const MyPage_Button = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  gap: 10px;
  border-radius: 6px;
`;

export const MyPage_Provider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f5f6f7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MyPage_MySwing = styled.div`
  font-size: 14px;
`;

export const MyPage_Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const MyPage_Option = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 20px;
  gap: 4px;
  padding-left: 10px;
`;
