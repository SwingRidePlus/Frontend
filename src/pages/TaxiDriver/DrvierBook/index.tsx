import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate를 추가
import axios from 'axios';
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

const DriverBook = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { acceptedBooking }: { acceptedBooking: BookingData[] } = location.state || {};
  const [bookingData, setBookingData] = useState<BookingData[]>([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken'); 

        const response = await axios.get('https://swing-be-stag.xquare.app/mycall', {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        });
        
        setBookingData(response.data); 
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, []);

  const handleAcceptBooking = (bookingId: number) => {
    console.log('Booking accepted:', bookingId);
  };

  const handleCancelBooking = async (bookingId: number) => {
    try {
      const accessToken = localStorage.getItem('accessToken'); 

      await axios.patch(`https://swing-be-stag.xquare.app/call/${bookingId}`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      });

      console.log('Booking canceled:', bookingId);
      navigate('/taxiexplore');
    } catch (error) {
      console.error('Error canceling booking:', error);
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
      <MenuBar selectState={2} />
    </_.Main_Container>
  );
};

export default DriverBook;