import React from 'react'

export default class Footer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return(
       <footer style={fotter}>
         <h2 style={divCenter}>KANEとは</h2>
          <p>
            KANE(カネ)です。情報発信をベースに間接的にエンジニアを応援する人！
            <br/>人の成長や充実を真剣に考えてます。Podcastやってます
          </p>
       </footer>
    );
  }
}
var fotter={
  backgroundColor: 'pink',
}

var divCenter ={
  textAlign: 'center',
  color: 'white',
}