import React from 'react'

import Integrations from '../Components/Integrations'
import {Routes, Route} from "react-router-dom"
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/integration" element={<Integrations />} />
      </Routes>
    </div>
  );
}


const MainRoutes = () => {
  return (
    <div>MainRoutes</div>
  )
}

export default MainRoutes

