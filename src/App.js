import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state ={
    city:'',
    temp:'',
    main:'',
    humidity:''
  }
  handleChange = (e) =>{
    this.setState({city:e.target.value})
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    const cityName = this.state.city;
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=[USE YOUR OWN API KEY HERE]&units=metric`)
    .then((response)=>{
      this.setState({temp:response.data.list[39].main.temp});
    this.setState({main:response.data.list[39].weather[0].main});
    this.setState({humidity:response.data.list[39].main.humidity + '%'});
    })
    .catch((error)=>{
      this.setState({temp:'City name is invalid'});
    this.setState({main:'City name is invalid'});
    this.setState({humidity:'City name is invalid'});
    })
    

    
  }
  render(){
  
  return (
    <div className="App">
    <div className='ui container' style={{marginTop:'10%'}}>
    <div className='ui segment'>
      <form className='ui form' onSubmit={this.handleSubmit}>
        <div className='ui field'>
          <div className='ui massive icon input'>
          <input type='text' placeholder='Enter city' onChange={(e)=>this.setState({city:e.target.value})} />
          <button className='ui button primary'><i className='search icon'></i></button>
          </div>
        </div>
      </form>
      <p style={{marginLeft:'30%', fontSize:'250%', color:'blue'}}>Temperature: {this.state.temp}</p>
      <p style={{marginLeft:'30%', fontSize:'250%', color:'blue'}}>Weather: {this.state.main}</p>
      <p style={{marginLeft:'30%', fontSize:'250%', color:'blue'}}>Humidity: {this.state.humidity}</p>
    </div>
    </div>
    </div>
  );
}
}

export default App;
