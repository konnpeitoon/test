import React from 'react'
import Moon from '../img/moon_mike.png';
import Nashitogetai from '../img/nasitogetai_mike.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return(
       <div style={divCenter}>
          {/* <Link to="/Mikazuki"><img className="mike" src={Moon} style={divStyle} /></Link>  */}
          <img className="mike" src={Moon} style={divStyle} /> 
          <img className="mike" src={Moon} style={divStyle} /> 
          <img className="mike" src={Nashitogetai} style={divStyle} />  
          <img className="mike" src={Moon} style={divStyle} /> 
       </div>
    );
  }
}

var divCenter ={
  margin: '20px 20px',
  display: 'flex',
  justifyContent: 'center',

}
var divStyle = {
  width: '18%',
  height: '18%',
};