import React from 'react';
import * as _ from "./style";
import Arrow from "assets/Icon/Reservation/Arrow_right_light.svg";
import PhoneIcon from "assets/Icon/Reservation/Call.svg";
import MessageIcon from "assets/Icon/Reservation/Send.svg";

interface SelectedDays {
  start: Date | null;
  end: Date | null;
}

interface UnReservationProps {
  selectedDays: SelectedDays;
}

const UnReservation: React.FC<UnReservationProps> = ({ selectedDays }) => {
  const { start } = selectedDays;
  const selectDateString = start ? start.toLocaleDateString() : '없음';

  return (
    <_.UnReservationContainer>
      <_.Header>
        <_.DateText>{selectDateString}</_.DateText>
        <_.ConfirmButton>예약 확정</_.ConfirmButton>
      </_.Header>

      <_.ContentContainer>
        <_.AddressContainer>
          <_.AddressText>00시 00읍 00번지</_.AddressText>
          <_.ArrowImage src={Arrow} />
          <_.AddressText>99시 00읍 00번지</_.AddressText>
        </_.AddressContainer>
        <_.AddressDetail>오전 10:00</_.AddressDetail>
      </_.ContentContainer>

      <_.DriverInfoWrapper>
        <_.DirverProfileWrap>
          <_.DirverProfile>
            <img/>
          </_.DirverProfile>
        </_.DirverProfileWrap>
        <div>
          <_.DriverName>이승현</_.DriverName>
          <_.DriverVehicle>그랜저 XG</_.DriverVehicle>
        </div>
            <_.ButtonContainer>
                <_.IconButton src = {PhoneIcon}/>
                <_.IconButton src = {MessageIcon}/>
            </_.ButtonContainer>
      </_.DriverInfoWrapper>

      <_.VehicleInfoWrapper>
        <_.VehicleNumber>서울 12가 3456</_.VehicleNumber>
        <_.CancelPromiseWrap>
          <_.CancelPromiseButton>
            <_.CancelPromise> 예약 취소 </_.CancelPromise>
          </_.CancelPromiseButton>
        </_.CancelPromiseWrap>
      </_.VehicleInfoWrapper>
    </_.UnReservationContainer>
  );
}

export default UnReservation;