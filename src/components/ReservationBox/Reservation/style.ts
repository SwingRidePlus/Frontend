import styled from "styled-components";

export const UnReservationContainer = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
  padding: 20px;
`;

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

export const ContentContainer = styled.div`
  margin-top: 10px;
`;

export const DateText = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ArrowImage = styled.img`
  margin: 0 10px;
`;

export const AddressText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

export const AddressDetail = styled.div`
  color: #888888;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

export const DriverInfoWrapper = styled.div`
display: flex;
  align-items: center;
  /* justify-content: space-between;  */
  margin-top: 10px;
`;

export const DirverProfileWrap = styled.div`
  padding-right: 10px;
`;

export const DirverProfile = styled.div`
  width: 53px;
  height: 53px;
  border: 1px solid #EAEAEA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DriverName = styled.div`
  color: #888888;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

export const DriverVehicle = styled.div`
  color: #888888;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

export const VehicleNumber = styled.div`
  display: inline-block;
  background-color: #FF6701;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: flex-end;
  gap: 10px;
`;


export const IconButton = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid #EAEAEA;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  color: #888888;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const VehicleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px; 
`;

export const Divider = styled.div`
  border: 1px solid #EAEAEA;
  margin-top: 13px; 
`;

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
  justify-content: flex-end;
  padding-top: 10px;
  width: 100%;
`;

export const CancelPromiseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;