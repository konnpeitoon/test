import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class Newrelese extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}
  render () {
    var list = [];
    var data = [
      { icon: "nachidtogetai" ,day: "2019/6/7",text: "kaztoさんをゲストにエンジニアのホニャホニャを聞きました！" },
      { icon: "nachidtogetai" ,day: "2019/6/7",text: "kaztoさんをゲストにエンジニアのホニャホニャを聞きました！" },
      { icon: "nachidtogetai" ,day: "2019/6/7",text: "kaztoさんをゲストにエンジニアのホニャホニャを聞きました！" },
      { icon: "nachidtogetai" ,day: "2019/6/7",text: "kaztoさんをゲストにエンジニアのホニャホニャを聞きました！" },
      { icon: "nachidtogetai" ,day: "2019/6/7",text: "kaztoさんをゲストにエンジニアのホニャホニャを聞きました！" },
    ];
    for(var i in data){
      list.push(<li　class="radioList">{data[i].icon}{data[i].day}{data[i].text}</li>);
    }
    return(
      <div stale={newscontent}>
        <h2 style={divCenter}>NewRelese</h2>
        <div className="newcontents">
          <div className="newcontents_aria">
            <ul>{list}</ul>
          </div>
          <div className="newcontents_aria">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'higuyume'
          }}
          options={{
            username: 'higuyume',
            width: '400',
            height: '500'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
        </div>
        </div>
      </div>  
    );
  }
}

var newscontent={
  display:'flex',
}

var divCenter ={
  textAlign: 'center',
  color: 'white',
}