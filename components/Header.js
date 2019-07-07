import React from 'react'

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return(
       <header>
         <h1 style={divCenter}>KANECAS</h1>
         <nav>
          <ul>
            <li><a href="mikazuki.html">podcast</a></li>
            <li><a href="index.html">新着リリース</a></li>
            <li><a href="index.html">応援リンク</a></li>
          </ul>
         </nav>
       </header>
    );
  }
}

var divCenter ={
  textAlign: 'center',
  color: 'white',
}