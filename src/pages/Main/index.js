import React, { Component } from 'react';

import { Container, Form } from './styles';
import SummonerInformation from '../../components/SummonerInformation'
import api from '../../services/api';

export default class Main extends Component {
  state = {
    summonerInput: '',
    summoner: ''
  };

  handleSearchSummoner = async (e) => {
    e.preventDefault();
    try {
      const summoner = await api.post(`summoner/`, {name: this.state.summonerInput})
      console.log(summoner)
      this.setState({ summoner: summoner.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleLikeSummoner = async (e) => {
    console.log('ola')
    e.preventDefault();
    try {
      const summoner = await api.post(`summoner/${this.state.summonerInput}/like`, 'user', {headers: {name: `${this.state.summonerInput}`}})
      console.log(summoner)
      this.setState({ summoner: summoner.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleDislikeSummoner = async (e) => {
    console.log('ola')
    e.preventDefault();
    try {
      const summoner = await api.post(`summoner/${this.state.summonerInput}/dislike`, 'user', {headers: {name: `${this.state.summonerInput}`}})
      console.log(summoner)
      this.setState({ summoner: summoner.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSearchSummoner}>
          <input type="text" 
          placeholder="Digite o Invocador"
          onChange={e => this.setState({ summonerInput: e.target.value })} />
          <button type="submit">OK</button>
        </Form>
        { this.state.summoner ? <SummonerInformation summoner={this.state.summoner} 
        like = {this.handleLikeSummoner}
        dislike = {this.handleDislikeSummoner}/> : null }
      </Container>
      
    );
  }
}
