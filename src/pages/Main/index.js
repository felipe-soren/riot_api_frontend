import React, { Component } from 'react';

import { Container, Form } from './styles';
import SummonerInformation from '../../components/SummonerInformation'
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    summonerInput: '',
    summoner: '',
    summonerError: false
  };

  handleSearchSummoner = async (e) => {
    e.preventDefault();
    this.setState({ summonerError: false })
    if (this.state.summonerInput === '') return this.setState({ summonerError:true })
    try {
      this.setState({ loading: true})
      const summoner = await api.post(`summoner/`, {name: this.state.summonerInput})
      this.setState({ summonerInput: '',
                      summoner: summoner.data })
    } catch (err) {
      this.setState({ loading: true,
                      summoner: '',
                      summonerError: true
      })
    } finally {
      this.setState({ loading: false})
    }
  }

  handleLikeSummoner = async (e) => {
    e.preventDefault();
    try {
      const summoner = await api.post(`summoner/${this.state.summoner.summonerName}/like`, 'user', {headers: {name: `${this.state.summoner.summonerName}`}})
      console.log(summoner)
      this.setState({ summoner: summoner.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleDislikeSummoner = async (e) => {
    e.preventDefault();
    try {
      const summoner = await api.post(`summoner/${this.state.summoner.summonerName}/dislike`, 'user', {headers: {name: `${this.state.summoner.summonerName}`}})
      console.log(summoner)
      this.setState({ summoner: summoner.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container>
        <Form withError={this.state.summonerError} onSubmit={this.handleSearchSummoner}>
          <input type="text" 
          placeholder="Digite o Invocador"
          value={this.state.summonerInput}
          onChange={e => this.setState({ summonerInput: e.target.value })} />
          <button type="submit"> {this.state.loading ? <i className="fa fa-spinner fa-pulse"/> : 'OK'} </button>
        </Form>
        { this.state.summoner ? <SummonerInformation summoner={this.state.summoner} 
        like = {this.handleLikeSummoner}
        dislike = {this.handleDislikeSummoner}/> : null }
      </Container>
      
    );
  }
}
