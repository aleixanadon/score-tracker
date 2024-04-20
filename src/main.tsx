import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import ScoreTrackerPage from './pages/ScoreTrackerPage/ScoreTrackerPage.tsx'

const router = createBrowserRouter([
  {
    path: "/score-tracker/",
    element: <App />,
    children: [
      {
        path: "/score-tracker/",
        element: <ScoreTrackerPage />
      },
      {
        path: "/score-tracker/home",
        element: <HomePage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
