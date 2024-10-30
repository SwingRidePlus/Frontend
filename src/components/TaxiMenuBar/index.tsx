// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Home from 'assets/Icon/MenuBar/Select/Home';
import Home_Not from 'assets/Icon/MenuBar/NotSelect/Home';
import Reservation from 'assets/Icon/MenuBar/Select/Reservation';
import Reservation_Not from 'assets/Icon/MenuBar/NotSelect/Reservation';
import All from 'assets/Icon/MenuBar/Select/All';
import All_Not from 'assets/Icon/MenuBar/NotSelect/All';
import { useNavigate } from 'react-router-dom';

interface MenuBarProps {
  selectState: number;
}

const icons = [
  {
    selected: Reservation,
    notSelected: Reservation_Not,
    title: '탐색',
    location: '/taxiexplore'
  },
  { selected: All, notSelected: All_Not, title: '내 예약', location: '/driverbook' }
];

const MenuBar = ({ selectState }: MenuBarProps) => {
  const navigate = useNavigate();

  return (
    <_.MenuBar_Container>
      {icons.map((icon, index) => (
        <_.Menubar_Icon
          key={index}
          onClick={() => {
            navigate(icon.location, { state: { fromHome: true } });
          }}
        >
          {selectState === index + 1 ? <icon.selected /> : <icon.notSelected />}
          <_.Menubar_Title select={selectState === index + 1}>
            {icon.title}
          </_.Menubar_Title>
        </_.Menubar_Icon>
      ))}
    </_.MenuBar_Container>
  );
};

export default MenuBar;
