import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './Home';
// import Mikazuki from './Mikazuki';
import Header from  './components/Header';
import Footer from  './components/Footer';
import Mike from  './components/Mike';
import Newrelese from  './components/Newrelese';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return(
      <div>
      <Header />
      <Mike />
      <Newrelese />
      <Footer />
      </div>
      // <BrowserRouter>
      //     <Route exact path='/' component={Home} />
      //     <Route path='/Mikazuki' component={Mikazuki} />
      // </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)