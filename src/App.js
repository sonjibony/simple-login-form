
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './routes/PrivateRoute';
import Shop from './components/Shop';

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element:<PrivateRoute><Home></Home></PrivateRoute>
        },
        {
path: '/shop',
element: <PrivateRoute><Shop></Shop></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
