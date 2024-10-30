import React, { useRef, useState, useEffect } from 'react';
import * as _ from "./style";
import Arrow from "assets/icon/Reservation/Arrow_right_light.svg";
import Reset from "assets/icon/Reservation/reload.svg";
import Puls from 'assets/icon/Puls';
import useReservationManagement from 'hooks/useReservationManagement';
import axios from 'axios';

interface SelectedDays {
  start: Date | null;
  end: Date | null;
}

interface UnReservationProps {
  selectedDays: SelectedDays;
}

const UnReservation: React.FC<UnReservationProps> = ({ selectedDays }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    taxiPrice,
    charge: initialCharge,
    originalPrice,
    reservations,
    error,
    handlePriceChange,
    updateReservationPrice,
  } = useReservationManagement();

  const [charge, setCharge] = useState<number>(initialCharge);

  useEffect(() => {
    setCharge(initialCharge);
  }, [initialCharge]);

  useEffect(() => {
    setCharge(taxiPrice);
  }, [taxiPrice]);
  const handleCancelReservation = async (id: number) => {
    try {
      const token = localStorage.getItem('accessToken'); 
      if (!token) {
        alert('토큰이 존재하지 않습니다.'); 
        return;
      }
      
      await axios.delete(`https://swing-be-stag.xquare.app/reservation/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('예약이 취소되었습니다.'); 
      
    } catch (err) {
      console.error(err);
      alert('예약 취소에 실패했습니다.'); 
    }
  };

  return (
    <_.UnReservationContainer>
      {error ? (
        <div>{error}</div>
      ) : reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id}>
            <_.Header>
              <_.DateText>{reservation.date}</_.DateText>
              <_.ConfirmButton>진행중</_.ConfirmButton>
            </_.Header>
            <_.Divider />
            <_.AddressContainer>
              <_.AddressText>{reservation.origin}</_.AddressText>
              <_.ArrowImage src={Arrow} />
              <_.AddressText>{reservation.destination}</_.AddressText>
            </_.AddressContainer>
            <_.AddressDetail>{reservation.time}</_.AddressDetail>
            <_.Main_TaxiPrice onClick={() => inputRef.current?.focus()}>
              <_.Main_TaxiPricePicker>
                <div>
                  ₩{' '}
                  <_.Main_TaxiPriceInput
                    ref={inputRef}
                    type="number"
                    value={charge}
                    onChange={(e) => {
                      const newPrice = Number(e.currentTarget.value);
                      const maxPrice = originalPrice * 1.3;
                      if (newPrice <= maxPrice) {
                        setCharge(newPrice);
                      } else {
                        alert('최대 30%까지만 인상 가능합니다.');
                        setCharge(originalPrice);
                      }
                    }}
                  />
                </div>
                <div onClick={() => inputRef.current?.focus()}>
                  <Puls />
                </div>
              </_.Main_TaxiPricePicker>
              <_.Main_TaxiPriceUppers>
                <_.Main_TaxiPriceUpper onClick={() => {
                  setCharge(originalPrice); 
                  updateReservationPrice(reservation.id); 
                }}>
                  <img src={Reset} alt="Reset"/>
                </_.Main_TaxiPriceUpper>
                {[5, 10, 15, 20].map(percentage => (
                  <_.Main_TaxiPriceUpper key={percentage} onClick={() => {
                    handlePriceChange(percentage);
                    updateReservationPrice(reservation.id); 
                  }}>
                    +{percentage}%
                  </_.Main_TaxiPriceUpper>
                ))}
              </_.Main_TaxiPriceUppers>
              <_.Main_TaxiPriceInfo>
                최대 인상 가능 요금은 <span>30%</span>에요.
              </_.Main_TaxiPriceInfo>
            </_.Main_TaxiPrice>
            <_.CancelPromiseWrap>
              <_.CancelPromiseButton onClick={() => handleCancelReservation(reservation.id)}>
                <_.CancelPromise> 예약 취소 </_.CancelPromise>
              </_.CancelPromiseButton>
            </_.CancelPromiseWrap>
          </div>
        ))
      ) : (
        <div>예약이 없습니다.</div>
      )}
      <div>
        <_.ExpectPriceTitle>예상 선불금</_.ExpectPriceTitle>
        <_.ExpectPrice>
          ₩ {charge ? Math.floor(charge * 0.5).toLocaleString() : '0'} 
        </_.ExpectPrice>
      </div>
    </_.UnReservationContainer>
  );
}

export default UnReservation;