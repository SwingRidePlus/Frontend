import styled from "styled-components";

export const AllContainer = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    width: 100%;
    height: 380px;
`

export const RealAllContainer = styled.div`
    padding-top: 15px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
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

export const Divider = styled.div`
  border: 1px solid #EAEAEA;
  margin-top: 13px; 
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 10px; 
  padding: 5px 20px;
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

export const AddressDetailWrap = styled.div`
    padding: 0 20px;
`

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

export const ExpectPriceWrap = styled.div`
    padding: 0 20px;
`

export const AcceptBook = styled.button`
    background-color: #FF6701;
    color: white;
    border: none;

    width: 100%;
    height: 41px;

    border-radius: 5px;
`

export const AcceptBookWrap = styled.div`
    padding: 20px 20px;
`