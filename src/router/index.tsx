import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import SearchLocation from 'pages/SearchLocation';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [{ index: true, element: <Main /> }]
    },
    {
      path: '/searchlocation',
      children: [{ index: true, element: <SearchLocation /> }]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
