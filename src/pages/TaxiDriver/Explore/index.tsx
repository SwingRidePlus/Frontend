import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import MenuBar from 'components/TaxiMenuBar/index';
import BookBox from 'components/BookDetailBox/index';

interface BookingData {
  id: number;
  date: string;
  time: string;
  origin: string;
  destination: string;
  charge: number;
}

const Explore = () => {
  const [bookingData, setBookingData] = useState<BookingData[]>([]);
  const navigate = useNavigate();

  const fetchBookingData = useCallback(async () => {
    const token = localStorage.getItem('accessToken'); 

    if (!token) {
      console.error("토큰이 없습니다. 로그인 상태를 확인하세요.");
      return;
    }

    try {
      const response = await axios.get<BookingData[]>('https://swing-be-stag.xquare.app/calls', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookingData(response.data);
    } catch (error) {
      console.error('예약 데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
  }, []);

  useEffect(() => {
    fetchBookingData();
  }, [fetchBookingData]);

  const acceptBooking = async (bookingId: number) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      console.error("토큰이 없습니다. 로그인 상태를 확인하세요.");
      return;
    }

    try {
      await axios.post(`https://swing-be-stag.xquare.app/call/${bookingId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("예약이 수락되었습니다.");
      fetchBookingData(); 
    } catch (error) {
      console.error('예약 수락 중 오류가 발생했습니다:', error);
      alert("예약 수락에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const cancelBooking = async (bookingId: number) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      console.error("토큰이 없습니다. 로그인 상태를 확인하세요.");
      return;
    }

    try {
      await axios.delete(`https://swing-be-stag.xquare.app/call/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("예약이 취소되었습니다.");
      fetchBookingData(); 
    } catch (error) {
      console.error('예약 취소 중 오류가 발생했습니다:', error);
      alert("예약 취소에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const handleAcceptBooking = (bookingId: number) => {
    const acceptedBooking = bookingData.find((booking) => booking.id === bookingId); 
    if (acceptedBooking) {
      const shouldRedirect = confirm("이 예약을 수락하시겠습니까?"); 
      if (shouldRedirect) {
        acceptBooking(bookingId); 
        navigate('/driverbook', { state: { acceptedBooking } }); 
      }
    }
  };

  const handleCancelBooking = (bookingId: number) => {
    const shouldCancel = confirm("이 예약을 취소하시겠습니까?"); 
    if (shouldCancel) {
      cancelBooking(bookingId); 
    }
  };

  return (
    <_.Main_Container>
      <_.MainTitle>탐색</_.MainTitle>
      {bookingData.map((booking) => (
        <BookBox
          key={booking.id}
          date={booking.date}
          time={booking.time}
          origin={booking.origin}
          destination={booking.destination}
          charge={booking.charge}
          onAccept={() => handleAcceptBooking(booking.id)}
          onCancel={() => handleCancelBooking(booking.id)} // 예약 취소 핸들러 전달
        />
      ))}
      <MenuBar selectState={1} />
    </_.Main_Container>
  );
};

export default Explore;