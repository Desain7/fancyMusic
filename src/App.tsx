import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Navigator from '../src/components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navigator></Navigator>
      <Suspense fallback="isLoading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
