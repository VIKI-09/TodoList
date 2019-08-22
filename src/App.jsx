import React,{Component} from 'react';
import './App.css';
import Table from './components/Table.jsx';
import axios from 'axios';
const API_URL = 'https://34.65.44.222/tam_processes'



class App extends Component {



componentDidMount(){
  const url =`${API_URL}`;
  axios.get(url)
    .then(res => {
      console.log(res.data);
      this.setState({data:res.data});
      console.log(this.state);
    })
}
render(){
  return (
      <div className="App">
        <header className="App-header">
        </header>
        <Table />
      </div>
    );
  }
};
  export default App;
