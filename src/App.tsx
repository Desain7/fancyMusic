import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Navigator from '../src/components/header'
import Footer from './components/footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1842025914))
  }, [])
  return (
    <div className="App">
      <Navigator></Navigator>
      <Suspense fallback="isLoading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppPlayerBar></AppPlayerBar>
      <Footer></Footer>
    </div>
  )
}

export default App
