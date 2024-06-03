import { Outlet } from 'react-router-dom'

import useViewModel from './viewModel';

function PrivateArea() {
  useViewModel();

  return <>
    <Outlet />
  </>;
}

export { PrivateArea }