import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show, key) => {
          return (
            <ShowCard show={show} key={show.imdbID} />
          )
        })}
      </div>
    )
  }
})

export default Search
