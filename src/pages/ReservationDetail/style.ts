import styled from 'styled-components';

export const Main_Container = styled.div`
  width: 100vw;
  margin-bottom: 100px;
  overflow-y: auto;
  padding: 100px 32px 0px 32px;
  display: flex;
  flex-direction: column;
`;

export const Main_Titile = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Main_Title_Highlight = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #ff6701;
`;

export const Main_Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export const Main_Img = styled.img`
  margin-top: 60px;
`;

export const Main_Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #f4f4f5;
  height: 140px;
  border-radius: 10px;
  padding: 24px 30px;
  margin-top: 20px;
`;

export const Main_Location_Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  border-radius: 10px;
  padding: 24px 10px;
`;

export const Main_Provider_Select = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f5f6f7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Main_StartTime = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const Main_TimePicker = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  border: 2px solid #e7e7e7;
  font-size: 16px;
  font-weight: 400;
  color: #FF6701;
`;

export const Main_Start_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 18px;
  font-weight: normal;
  gap: 10px;
`;

export const Main_Start_Dot = styled.div<{ color?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${(props) => (props.color ? '' : '#FF6701')};
  border: ${(props) => (props.color ? '2px solid #989a9d' : '')};
`;

export const Main_Provider = styled.div`
  height: 1px;
  background-color: #f4f4f5;
`;

export const Main_Map = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-size: 16px;
  font-weight: 500;
  gap: 10px;
  margin-top: 24px;
`;
