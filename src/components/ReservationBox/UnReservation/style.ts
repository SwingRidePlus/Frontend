import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConfirmButton = styled.button`
  background-color: #FF6701;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const UnReservationContainer = styled.div`
  width: 100%;
  height: 450px;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
  padding: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

export const DateText = styled.div`
  color: var(--Black, #000);

  /* Title1 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 36.4px */
  
  padding: 5px;
`;

export const InPorgressWrap = styled.div`
  background-color: #FF6701;
  height: 32px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const InPorgressTitle = styled.div`
  color: white;
`;


export const Divider = styled.div`
  border: 1px solid #EAEAEA;
  margin-top: 13px; 
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 10px; 
  /* justify-content: center; */
`;

export const ArrowImage = styled.img`
  margin: 0 10px; 
`;

export const AddressText = styled.div`
  color: var(--Black, #000);

    /* Title1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 36.4px */

    /* padding: 5px; */
`

export const AddressDetail = styled.div`
  color: #888888;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
  padding-bottom: 20px;
  /* margin-top: 5px;  */
`;

export const BaseCostBoxWrap = styled.div`
  padding: 20px 0 0 0;
`;

export const BaseCostBox = styled.input`
  border: 1px solid #EAEAEA;
  width: 100%;
  height: 45px;
  outline: none;
  color: #FF6701;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%; 
  padding-left: 30px;
  
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><text x="0" y="12" font-size="16" fill="%23FF6701">₩</text></svg>') no-repeat 5px center; /* 5px는 왼쪽 여백을 주기 위한 값 */
  background-size: 20px; 
`;

export const ResetButton = styled.button`
    border: 1px solid #E7E7E7;
    background: white;

    width: 43px;
    height: 43px;

    cursor: pointer;
`

export const ResetButtonWrap = styled.div`
    padding-right: 5px;
`

export const ResetButtonImg = styled.img`
    width: 23px;
    height: auto;
`

export const PlusButton = styled.button`
    border: 1px solid #E7E7E7;
    background: white;

    width: 60px;
    height: 43px;

    cursor: pointer;

    color: #FF6701;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
`

export const PlusButtonWrap = styled.div`
 padding: 4px;
`

export const InfoSomething = styled.div`
  color: var(--Black, #000);

    /* Title1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 36.4px */

    /* padding: 5px; */
`

export const InfoSomethingRed = styled.span`
    color: #FF6701;

    /* Title1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */

    /* padding: 5px; */
`

export const ExpectText = styled.div`
  color: var(--Black, #000);

    /* Title1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 36.4px */

    /* padding: 5px; */
`

export const ExpectTextWrap = styled.div`
    padding-top: 20px;
`

export const BaseExpectBox = styled.div`
  border: 1px solid #EAEAEA;
  width: 100%;
  height: 45px;
  outline: none;
  color: #FF6701;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%; 
  padding-left: 30px;
  
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><text x="0" y="12" font-size="16" fill="%23FF6701">₩</text></svg>') no-repeat 5px center; /* 5px는 왼쪽 여백을 주기 위한 값 */
  background-size: 20px; 

  display: flex;
  align-items: center;
`;

export const BaseExpectBoxWrap = styled.div`
    padding: 10px 0 0 0;
`

export const CancelPromise = styled.div`
    color: #888888;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    /* margin-top: 5px;  */
`

export const CancelPromiseWrap = styled.div`
    display: flex;
    justify-content: end;
    padding-top: 10px;
`

export const CancelPromiseButton = styled.button`
    border: none;
    background-color: none;
    background: none;
`

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

export const Main_TaxiPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const ExpectPrice = styled.div`
 width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #e7e7e7;
  font-size: 16px;
  font-weight: 400;
  color: #ff6701;
  padding: 0 20px;
`

export const ExpectPriceTitle = styled.div`
    color: Black;

    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; 

    padding: 10px 0;
`