import React from 'react'
import './TweetSection.css'
import TweetCard from './TweetCards/TweetCard'
import RegistrationPop from './RegistrationPop/RegistrationPop'

export default function TweetSection() {
  return (
    <div className='TweetCardSection'>
        <div className="Heading">
            <div className='Title'>FinkHub</div>
            <p className='Description'>Participa en los temas que más te interesen con gente con los mismos intereses</p>
        </div>
        <RegistrationPop/>
        <TweetCard/>
        <TweetCard/>
    </div>
  )
}
