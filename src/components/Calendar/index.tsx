// 라이브러리
import React, { useCallback } from 'react';

// 파일
import * as _ from './style';
import { calendar } from 'types/calender';

const Calendar = ({
  selectedDays,
  setSelectedDays,
  currentMonth,
  reservedDays 
}: calendar) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay: Date, compareDay?: Date | null): boolean => {
    return (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    );
  };

  const isBetweenDays = (
    day: Date,
    startDay: Date | null,
    endDay: Date | null
  ): boolean => {
    if (!startDay || !endDay) return false;
    return day > startDay && day < endDay;
  };

  const isPastDay = (day: Date): boolean => {
    return day < today;
  };

  const onClickDay = useCallback(
    (day: Date) => {
      if (isPastDay(day)) {
        return;
      }
      
      setSelectedDays({ start: day, end: null });
    },
    [setSelectedDays]
  );

  const buildCalendarDays = (): Date[] => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    const days: Date[] = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(new Date(NaN));
    }

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      );
    }

    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]): JSX.Element[] => {
    return calendarDays.map((day, i) => {
      const dayOfWeek = day.getDay();
      const isInvalidDate = isNaN(day.getTime());
      const pastDay = !isInvalidDate && isPastDay(day);
      const selectedStart =
        !isInvalidDate && isSameDay(day, selectedDays.start);
      const selectedEnd = !isInvalidDate && isSameDay(day, selectedDays.end);
      const betweenDays =
        !isInvalidDate &&
        isBetweenDays(day, selectedDays.start, selectedDays.end);

      let className = '';
      if (isInvalidDate || pastDay) {
        className += ' disabled-day';
      }
      if (selectedStart) {
        className += ' selected-start';
      }
      if (selectedEnd) {
        className += ' selected-end';
      }
      if (betweenDays) {
        className += ' between-days';
      }
      if (!isInvalidDate && reservedDays.some(reservedDay => isSameDay(day, reservedDay))) {
        className += ' reserved-day'; 
      }

      return (
        <_.Calendar_Date_Td
          dayOfweek={dayOfWeek}
          key={i}
          onClick={() => !isInvalidDate && onClickDay(day)}
          disabled={isInvalidDate || pastDay}
          className={className}
        >
          {!isInvalidDate ? day.getDate() : ''}
        </_.Calendar_Date_Td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]): JSX.Element[][] => {
    return Array.from({ length: Math.ceil(calendarTags.length / 7) }, (_, i) =>
      calendarTags.slice(i * 7, (i + 1) * 7)
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <_.Calendar_Container>
      <_.Calendar_Date_Title>
        {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
      </_.Calendar_Date_Title>
      <_.Calendar_Table>
        <thead>
          <_.Calendar_DayofWeek_Tr>
            {daysOfWeek.map((day, i) => (
              <_.Calendar_DayofWeek_Td
                day={day}
                key={i}
                data-testid="calendarHead"
              >
                {day}
              </_.Calendar_DayofWeek_Td>
            ))}
          </_.Calendar_DayofWeek_Tr>
        </thead>
        <tbody>
          {calendarRows.map((row, i) => (
            <_.Calendar_Date_Tr key={i}>{row}</_.Calendar_Date_Tr>
          ))}
        </tbody>
      </_.Calendar_Table>
    </_.Calendar_Container>
  );
};

export default Calendar;