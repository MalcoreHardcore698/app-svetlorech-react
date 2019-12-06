import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import Markets from './pages/Markets'
import Rental from './pages/Rental'
import Contact from './pages/Contact'
import Page from './pages/Page'
import NotFound from './NotFound'

const Main = ({ data }) => {
  return(
    <main>
      <Switch>
        <Route exact path="/" render={(props) => <Home data={data} />} />
        <Route path="/news" render={(props) => <News />} />
        <Route path="/markets" render={(props) => <Markets />} />
        <Route path="/rental" render={(props) => <Rental />} />
        <Route path="/contact" render={(props) => <Contact />} />
        
        {data.pages.map((item, i) =>
            <Route key={i} path={"/page_" + i} render={(props) => <Page data={item} />} />
          )}

        <Route render={(props) => <NotFound />} />
      </Switch>
    </main>
  )
}

export default Main
