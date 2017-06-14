import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'
if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          component={(props) => <AsyncRoute
            props={props}
            loadingPromise={System.import('./Landing')} />
            // './Landing' must be string not a variable holding a string
            // Because webpack uses static analysis so it cannot be dynamic
          }
        />
        <Match
          pattern='/search'
          component={(props) => <AsyncRoute
            props={Object.assign({shows: preload.shows}, props)}
            loadingPromise={System.import('./Search')} />
            // './Search' must be string not a variable holding a string
          }

        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <AsyncRoute
              props={Object.assign({show: shows[0]}, props)}
              loadingPromise={System.import('./Details')} />
              // './Details' must be string not a variable holding a string
          }}
        />
      </div>
    </Provider>
  )
}

export default App
