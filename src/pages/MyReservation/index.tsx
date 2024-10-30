import React, { useState, useCallback } from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import Calendar from 'components/Calendar';
import Reservation from 'components/ReservationBox/Reservation/index';
import UnReservation from 'components/ReservationBox/UnReservation/index';

const MyReservation = () => {
  const [selectedDays, setSelectedDays] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Define reservedDays state
  const [reservedDays, setReservedDays] = useState<Date[]>([]); // Initialize with an empty array

  const handlePrevMonth = useCallback(() => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }, []);

  return (
    <_.Main_Container>
      <div>
        <_.MainTitle>내 예약</_.MainTitle>
        <_.CalendarContainer>
          <_.MonthNavigation>
            <_.MonthButtonText onClick={handlePrevMonth}>이전 달</_.MonthButtonText>
            <span>{currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월</span>
            <_.MonthButtonText onClick={handleNextMonth}>다음 달</_.MonthButtonText>
          </_.MonthNavigation>
          <Calendar
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            currentMonth={currentMonth}
            reservedDays={reservedDays} 
          />
        </_.CalendarContainer>
      </div>

      <_.UnReservationContainer>
        <Reservation selectedDays={selectedDays} />
      </_.UnReservationContainer>
      
      <_.UnReservationContainer>
        <UnReservation selectedDays={selectedDays} />
      </_.UnReservationContainer>

      <MenuBar selectState={2} />
    </_.Main_Container>
  );
};

export default MyReservation;