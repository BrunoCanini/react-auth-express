import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheHome from './pages/TheHome';
import Posts from './pages/Posts';
import DefaultLayout from './pages/DefaultLayout';
import SinglePost from './pages/SinglePost';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './middlewares/PrivateRoute';

function App() {

  return (
      <BrowserRouter>
      <AuthProvider>

          <Routes>

            <Route element={<DefaultLayout />}>
              <Route path='/' element={<TheHome />}></Route>

              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              
              <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

              <Route path='/posts' element={<Posts />}></Route>
              <Route path='/posts/:slug' element={<SinglePost />}></Route>
            </Route>

          </Routes>

        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
