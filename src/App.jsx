import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import CreatePost from './components/CreatePost'
import ViewAll from './components/ViewAll'
import ViewMyPost from './components/ViewMyPost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/viewmypost" element={<ViewMyPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
