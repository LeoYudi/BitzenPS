import { Routes as Router, Route } from 'react-router-dom';
import { Login } from './views/Login';
import { SignUp } from './views/SignUp';

function Routes() {
  return (
    <Router>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Router>
  )
}

export { Routes };