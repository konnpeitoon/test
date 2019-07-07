import React from 'react';
import ReactDOM from 'react-dom';
// import Header from  './components/Header';
// import Footer from  './components/Footer';
// import Mike from  './components/Mike';
// import Newrelese from  './components/Newrelese';

export default class Home extends React.Component {

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
    );
  }
}