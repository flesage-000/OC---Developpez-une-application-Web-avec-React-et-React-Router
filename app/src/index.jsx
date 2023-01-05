import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './pages/Home/App';
import About from './pages/About/About';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/home/:kasaId",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// function Router() {
//   return (
//       <BrowserRouter>
//           <Header/>
//           <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="logement/:id" element={<Logement />} />
//               <Route path="/A-Propos" element={<Propos />} />
//               <Route path="*" element={<ErrorPage />} />
//           </Routes>
//           <Footer/>
//       </BrowserRouter>
//   );
// }

// export default Router