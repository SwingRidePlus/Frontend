import React from 'react';
import * as _ from "./style";
import Arrow from "assets/icon/Reservation/Arrow_right_light.svg";
import Reset from "assets/icon/Reservation/reload.svg";

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
        <_.ConfirmButton>진행중</_.ConfirmButton>
      </_.Header>
      <_.Divider />
      <_.AddressContainer>
        <_.AddressText>00시 00읍 00번지</_.AddressText>
        <_.ArrowImage src={Arrow} />
        <_.AddressText>99시 00읍 00번지</_.AddressText>
      </_.AddressContainer>
      <_.AddressDetail>오전 10:00</_.AddressDetail>
      <_.BaseCostBoxWrap>
        <_.BaseCostBox />
        <div style={{ display: 'flex', alignItems: 'center', paddingTop: '5px',}}>
          <_.ResetButtonWrap>
            <_.ResetButton>
              <_.ResetButtonImg src={Reset}/>
            </_.ResetButton>
          </_.ResetButtonWrap>
          <_.PlusButtonWrap>
            <_.PlusButton>+5%</_.PlusButton>
          </_.PlusButtonWrap>
          <_.PlusButtonWrap>
            <_.PlusButton>+10%</_.PlusButton>
          </_.PlusButtonWrap>
          <_.PlusButtonWrap>
            <_.PlusButton>+15%</_.PlusButton>
          </_.PlusButtonWrap>
          <_.PlusButtonWrap>
            <_.PlusButton>+20%</_.PlusButton>
          </_.PlusButtonWrap>
        </div>
        <_.InfoSomething>최대 인상 가능 요금은 <_.InfoSomethingRed>30%</_.InfoSomethingRed>에요.</_.InfoSomething>
        <div>
          <_.ExpectTextWrap>
            <_.ExpectText> 예상 선불금 </_.ExpectText>
          </_.ExpectTextWrap>
          <_.BaseExpectBoxWrap>
            <_.BaseExpectBox>
              5000
            </_.BaseExpectBox>
          </_.BaseExpectBoxWrap>
        </div>
        <_.CancelPromiseWrap>
          <_.CancelPromiseButton>
            <_.CancelPromise> 예약 취소 </_.CancelPromise>
          </_.CancelPromiseButton>
        </_.CancelPromiseWrap>
      </_.BaseCostBoxWrap>
    </_.UnReservationContainer>
  );
}

export default UnReservation;