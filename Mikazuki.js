import React from 'react';
import ReactDOM from 'react-dom';
import Footer from  './components/Footer';
import Newrelese from  './components/Newrelese';

export default class Mikazuki extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return(
      <div>
        <Newrelese />
        <Footer />
      </div>
    );
  }
}