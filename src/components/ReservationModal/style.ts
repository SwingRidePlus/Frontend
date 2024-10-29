import styled from 'styled-components';

export const Modal_Container_Background = styled.div`
  background-color: rgba(102, 102, 102, 0.7);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal_Container = styled.div`
  width: 100%;
  height: 440px;
  background-color: white;
  opacity: 1;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  padding: 30px 20px 0 20px;
`;

export const Modal_Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  gap: 10px;
`;

export const Modal_SubTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Modal_TimeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 0 10px 0 10px;
  margin-top: 24px;
`;

export const Modal_Time = styled.div`
  color: #ff6701;
  font-size: 15px;
  font-weight: normal;
`;

export const Modal_TimePickerList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
  margin-top: 20px;
`;

export const Modal_TimePickerTimeBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const Modal_Overlay = styled.div`
  position: absolute;
  top: 50px;
  z-index: -1;
  width: 100%;
  background-color: #ff6701;
  border-radius: 5px;
  opacity: 0.5;
  height: 50px;
`;

export const Modal_Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const Modal_Button = styled.button<{ state: boolean }>`
  width: 160px;
  height: 50px;
  background: none;
  border-radius: 5px;
  background-color: ${(props) => (props.state ? '' : '#ff6701')};
  border: ${(props) => (props.state ? '2px solid #f4f4f5' : 'none')};
`;
