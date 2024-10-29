import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import SearchLocation from 'pages/SearchLocation';
import MyReservation from 'pages/MyReservation/index';

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
      path: '/myreservation',
      children: [{ index: true, element: <MyReservation /> }]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}