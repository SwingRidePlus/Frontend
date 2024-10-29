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
  color: #ff6701;
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

export const Main_TaxiPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const Main_TaxiPricePicker = styled.div`
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
  color: #ff6701;
`;

export const Main_TaxiPriceInput = styled.input`
  background-color: none;
  border: none;
  font-size: 16px;
  color: #ff6701;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

export const Main_TaxiPriceUppers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const Main_TaxiPriceUpper = styled.div`
  padding: 6px 12px;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  color: #ff6701;
  font-size: 16px;
  font-weight: normal;
`;

export const Main_TaxiPriceInfo = styled.div`
  font-size: 16px;
  font-weight: normal;

  span {
    color: #ff6701;
  }
`;

export const Main_Boarding_Info = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const Main_Boarding_Info_Num = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Main_Boarding_Info_Title = styled.div`
  font-size: 16px;
  font-weight: normal;
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 200;
    color: #989a9d;
  }
`;

export const Main_Boarding_Info_Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e7e7e7;
  gap: 20px;
  padding: 18px 26px;
  border-radius: 5px;

  input {
    width: 30px;
    text-align: center;
    line-height: 15px;
    font-size: 14px;
    font-weight: 200;
    border: none;

    &:focus {
      outline: none;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Main_Boarding_Info_Request = styled.input`
  width: 100%;
  padding: 15px 15px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;

export const Main_Pay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Main_Pay_Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #989a9d;
    font-weight: normal;
  }
`;

export const Main_Pay_Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  border: 2px solid #e7e7e7;
  padding: 15px 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 10px;
  }
`;

export const Main_Pay_Button = styled.button`
  width: 100%;
  padding: 15px 15px;
  font-size: 18px;
  color: white;
  background-color: #FF6701;
  border: none;
  border-radius: 5px;
  margin-top: 28px;
  margin-bottom: 10px;
`;
