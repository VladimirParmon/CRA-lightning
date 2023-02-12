import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SetState } from '../models/utils';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function getRoutes(
  vanityName: string,
  isLogged: boolean,
  setIsLogged: SetState<boolean>,
) {
  const redirectTo = isLogged ? '/main' : '/login';
  return (
    <MemoryRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={redirectTo} replace={true} />} />
        <Route path='/main' element={<MainPage vanityName={vanityName} />} />
        <Route path='/login' element={<LoginPage setIsLogged={setIsLogged} />} />
      </Routes>
    </MemoryRouter>
  );
}
