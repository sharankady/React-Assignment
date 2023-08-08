import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout/AppLayout'

import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import { UserContextProvider } from './context/userContext'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'



const App = () => {
  return (

   
    <AuthContextProvider>
       < UserContextProvider>
    <BrowserRouter>
       <Routes>
        <Route index element={<Login/>}/>
        <Route path='/' index element={<Login/>}/>
        <Route path='signup' index element={<Signup/>}/>
        <Route path='app' element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
          <Route path='dashboard' index element={<Dashboard/>}/>
          <Route path='activity' element={<ComingSoon/>}/>
          <Route path='library' element={<ComingSoon/>}/>
          <Route path='security' element={<ComingSoon/>}/>
          <Route path='schedules' element={<ComingSoon/>}/>
          <Route path='payouts' element={<ComingSoon/>}/>
          <Route path='settings' element={<ComingSoon/>}/>
        </Route>
        <Route path='*' element={<p>invalid page</p>} />
       </Routes>
     
    </BrowserRouter>
    </UserContextProvider>
    </AuthContextProvider>
   
  )
}

export default App