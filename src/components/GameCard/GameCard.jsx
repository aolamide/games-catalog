import React from 'react'
import './game-card.css'

const UserCard = ({ game }) => {
  const { GameTitle, GameDescription, GameImage } = game;
  return (
    <div className="game-card">
      <img src={GameImage} alt={GameTitle} />
      <div>
        <p className='game-title'>{GameTitle.toUpperCase()}</p>
        <p className='game-desc'>{GameDescription}</p>
      </div>
    </div>
  )
}

export default UserCard