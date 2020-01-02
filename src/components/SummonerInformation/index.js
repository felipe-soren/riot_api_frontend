import React from 'react';

import { Container, Summoner } from './styles';


const SummonerInformation = ({ summoner, like, dislike }) => (
  
  <Container>
    <Summoner>
    <header>
      <button><i className="fa fa-thumbs-up" onClick={like}></i></button>
      <strong>{summoner.summonerName}</strong>
      <button><i className="fa fa-thumbs-down" onClick={dislike}></i></button>
    </header>
    <ul>
      <li>
        {`${summoner.leaguePoints} PDL`}
      </li>
      <li>
        {`${summoner.tier} ${summoner.rank}`}
      </li>
      <li>
        {`Likes: ${summoner.like}`}
      </li>
      <li>
        {`Dislikes: ${summoner.dislike}`}
      </li>
    </ul>
    </Summoner>
  </Container>
)

export default SummonerInformation;