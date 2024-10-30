import { useEffect, useState } from 'react';
import axios from 'axios';
import useReservations from 'hooks/useReservations';

const useReservationManagement = () => {
  const [taxiPrice, setTaxiPrice] = useState<number>(0);
  const [charge, setCharge] = useState<number>(0); 
  const originalPrice = charge; 
  const { reservations, error } = useReservations();

  useEffect(() => {
    if (reservations.length > 0) {
      setCharge(Number(reservations[0].charge)); 
    }
  }, [reservations]);

  const handlePriceChange = (percentage: number) => {
    if (originalPrice) {
      const maxPrice = originalPrice * 1.3;
      const newPrice = percentage === 0 
        ? originalPrice 
        : originalPrice * (1 + percentage / 100);

      if (newPrice <= maxPrice) {
        setTaxiPrice(Math.round(newPrice));
      } else {
        alert('최대 30%까지만 인상 가능합니다.');
        setTaxiPrice(originalPrice);
      }
    }
  };

  const updateReservationPrice = async (reservationId: number) => {
    try {
      const response = await axios.patch(`https://swing-be-stag.xquare.app/reservation/price/${reservationId}`, {
        price: taxiPrice, 
      });
      console.log(`예약 ${reservationId}의 가격이 ${response.data.price}로 업데이트되었습니다.`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`가격 변경 오류: ${error.response?.data}`);
      } else {
        console.error('가격 변경 중 오류 발생:', error);
      }
    }
  };

  return {
    taxiPrice,
    charge, 
    originalPrice,
    reservations,
    error,
    handlePriceChange,
    updateReservationPrice,
  };
};

export default useReservationManagement;