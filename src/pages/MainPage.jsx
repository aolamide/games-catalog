import React from 'react'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter/Filter';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import GameCard from '../components/GameCard/GameCard'
import data from '../data';


const Logo = 'https://9ijakids.com/wp-content/uploads/2020/06/cropped-9ijakids_logo___160px-2.png';

const MainPage = () => {
  const [gamesToDisplay, setGamesToDisplay] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterObject, setFilterObject] = useState({
    group : '',
    level : ''
  });

  //Function to filter records based on filter conditions or search text
  const filterRecords = game => {
    const { Topic, Group, Level } = game;

    return Group.includes(filterObject.group) 
    && Level.includes(filterObject.level) 
    && Topic.toLowerCase().startsWith(searchText.trim()) 
  }

  useEffect(() => {
    //when search text or filter condition changes, updates the array of games to display
    setGamesToDisplay(data.filter(filterRecords))
  }, [searchText, filterObject])

  return (
    <div>
      <Header text={'9ijakids Game List'} image={Logo} />
      <Search setSearchText={setSearchText} />
      <Filter setFilters={setFilterObject} filterObject={filterObject} />

      <div className='card-container'>
        {gamesToDisplay.length === 0 ? <p>No games match your query.</p> : ''}
        {
          gamesToDisplay.map(((game, i) => <GameCard key={game.GameTitle} game={game} />))
        }
      </div>
      <div>
        <p>Built with &hearts; by Olamide</p>
      </div>
    </div>
  )
}

export default MainPage