import React from 'react';
import { useLocation } from 'react-router-dom';
import * as _ from './style';
import Arrow from "assets/icon/Reservation/Arrow_right_light.svg";

interface BookBoxProps {
  date: string;
  time: string;
  origin: string;
  destination: string;
  charge: number;
  onAccept: () => void; 
  onCancel: () => void; 
}

const BookBox: React.FC<BookBoxProps> = ({ date, time, origin, destination, charge, onAccept, onCancel }) => {
  const location = useLocation(); 
  const prepayAmount = Math.floor(charge * 0.5).toLocaleString();

  return (
    <_.RealAllContainer>
      <_.AllContainer>
        <_.Header>
          <_.DateText>{date}</_.DateText>
          <_.ConfirmButton>{location.pathname === '/driverbook' ? '완료' : '진행중'}</_.ConfirmButton>
        </_.Header>
        <_.Divider />
        <_.AddressContainer>
          <_.AddressText>{origin}</_.AddressText>
          <_.ArrowImage src={Arrow} />
          <_.AddressText>{destination}</_.AddressText>
        </_.AddressContainer>
        <_.AddressDetailWrap>
          <_.AddressDetail>{time}</_.AddressDetail>
        </_.AddressDetailWrap>
        
        <_.ExpectPriceWrap>
          <_.ExpectPrice>₩ {charge}</_.ExpectPrice>
          <_.ExpectPriceTitle>예상 선불금</_.ExpectPriceTitle>
          <_.ExpectPrice>₩ {prepayAmount}</_.ExpectPrice>
        </_.ExpectPriceWrap>

        <_.AcceptBookWrap>
          {location.pathname === '/driverbook' ? ( 
            <_.AcceptBook onClick={onCancel}>예약 취소</_.AcceptBook> 
          ) : location.pathname === '/taxiexplore' ? ( 
            <_.AcceptBook onClick={onAccept}>예약 수락</_.AcceptBook> 
          ) : null}
        </_.AcceptBookWrap>
      </_.AllContainer>
    </_.RealAllContainer>
  );
};

export default BookBox;