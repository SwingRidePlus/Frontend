// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Home from 'assets/Icon/MenuBar/Select/Home';
import Home_Not from 'assets/Icon/MenuBar/NotSelect/Home';
import Travel from 'assets/Icon/MenuBar/Select/Travel';
import Travel_Not from 'assets/Icon/MenuBar/NotSelect/Travel';
import All from 'assets/Icon/MenuBar/Select/All';
import All_Not from 'assets/Icon/MenuBar/NotSelect/All';
import { useNavigate } from 'react-router-dom';

interface MenuBarProps {
  selectState: number;
}

const icons = [
  { selected: Home, notSelected: Home_Not, title: '홈', location: '/' },
  {
    selected: Travel,
    notSelected: Travel_Not,
    title: '내 예약',
    location: '/asdfasdf'
  },
  { selected: All, notSelected: All_Not, title: '전체', location: '/asdfasdf' }
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
