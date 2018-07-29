import React, { Component } from 'react';
import './Navi.css';

class Navi extends Component {
  render() {
    var list = [
      {
        name: 'A',
        icon: 'class-a',
        children: [
          'child A',
          'child B'
        ]
      },
      {
        name: 'B',
        icon: 'class-a',
        children: [
          'child A',
          'child B'
        ]
      },
      {
        name: 'C',
        icon: 'class-a',
        children: [
          'child A',
          'child B'
        ]
      },
    ];
    return (
      <ul id="aaaa">
        {
          list.map((data, index) => {
            return <li key={index}>
              {data.name}
              <i className={data.icon}></i>
              <ul>
                {
                  data.children.map((dt, index) => {
                    return <li key={index}>{dt}</li>
                  })
                }
              </ul>
            </li>
          })
        }
      </ul>
    );
  }

  componentDidMount() {
    document.getElementById('root').classList.add('bbbb');
  }
}

export default Navi;
