import { Routes as Router, Route } from 'react-router-dom';

import { PrivateArea } from 'components/PrivateArea';

import { Home } from 'views/Home';
import { Login } from './views/Login';
import { SignUp } from './views/SignUp';

function Routes() {
  return (
    <Router>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

      <Route element={<PrivateArea />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Router>
  )
}

export { Routes };