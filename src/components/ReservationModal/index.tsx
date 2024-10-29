import React, { useState } from 'react';
import * as _ from './style';
import TimePicker from 'components/TimePicker';
import { useNavigate } from 'react-router-dom';

const ReservationModal = ({ start, end }: any) => {
  const history = useNavigate();
  const [time, setTime] = useState({
    day: '',
    hour: '',
    minute: ''
  });

  const Day = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return isToday ? '오늘' : `${month}.${day} ${dayOfWeek}`;
  });
  const hours = Array.from({ length: 23 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  console.log(time);
  return (
    <_.Modal_Container_Background>
      <_.Modal_Container>
        <_.Modal_Title>
          예약
          <_.Modal_SubTitle>일반예약</_.Modal_SubTitle>
        </_.Modal_Title>

        <_.Modal_TimeBox>
          출발시간
          <_.Modal_Time>
            {time.day} {time.hour}:{time.minute}
          </_.Modal_Time>
        </_.Modal_TimeBox>

        <_.Modal_TimePickerList>
          <TimePicker
            list={Day}
            onSelectedChange={(selectedPeriod: string) =>
              setTime((prev) => ({ ...prev, day: selectedPeriod }))
            }
          />
          <_.Modal_TimePickerTimeBox>
            <TimePicker
              list={hours}
              onSelectedChange={(selectedHour: string) =>
                setTime((prev) => ({ ...prev, hour: selectedHour }))
              }
            />
            :
            <TimePicker
              list={minutes}
              onSelectedChange={(selectedMinute: string) =>
                setTime((prev) => ({ ...prev, minute: selectedMinute }))
              }
            />
          </_.Modal_TimePickerTimeBox>
          <_.Modal_Overlay />
        </_.Modal_TimePickerList>

        <_.Modal_Buttons>
          <_.Modal_Button
            state={true}
            onClick={() => {
              history('/');
            }}
          >
            취소
          </_.Modal_Button>

          <_.Modal_Button
            state={false}
            onClick={() => {
              history({
                pathname: '/reservationdetail',
                search: `?start=${start}&end=${end}&day=${time.day}&hour=${time.hour}&minute=${time.minute}`
              });
            }}
          >
            선택완료
          </_.Modal_Button>
        </_.Modal_Buttons>
      </_.Modal_Container>
    </_.Modal_Container_Background>
  );
};

export default ReservationModal;
