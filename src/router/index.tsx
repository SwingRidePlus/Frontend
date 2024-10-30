import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import SearchLocation from 'pages/SearchLocation';
import ReservationDetail from 'pages/ReservationDetail';
import MyReservation from 'pages/MyReservation/index';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Explore from 'pages/TaxiDriver/Explore';
import DriverBook from 'pages/TaxiDriver/DrvierBook';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [{ index: true, element: <Main /> }]
    },
    {
      path: '/searchlocation',
      children: [{ index: true, element: <SearchLocation /> }]
    },
    {
      path: '/reservationdetail',
      children: [{ index: true, element: <ReservationDetail /> }]
    },
    {
      path: '/myreservation',
      children: [{ index: true, element: <MyReservation /> }]
    },
    {
      path: '/signup',
      children: [{ index: true, element: <SignUp /> }]
    },
    {
      path: '/signin',
      children: [{ index: true, element: <SignIn /> }]
    },
    {
      path: '/taxiexplore',
      children: [{ index: true, element: <Explore /> }]
    },
    {
      path: '/driverbook',
      children: [{ index: true, element: <DriverBook /> }]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
