import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Card from './Pages/Card.jsx';
import CardDetails from './Pages/CardDetails.jsx';
import Error from './Pages/Error.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Card />
  },
  {
    path : '/card',
    element : <Card />
  },
  {
    path : '/card/:id',
    element : <CardDetails />
  },
  {
    path : '*',
    element: <Error />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
