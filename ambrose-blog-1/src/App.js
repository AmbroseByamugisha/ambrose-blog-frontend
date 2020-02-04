import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home' 
import Post from './components/Post'

function App() {
  return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </div>
  )
}

export default App
