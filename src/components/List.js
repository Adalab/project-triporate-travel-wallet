import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './List.scss';

class List extends React.Component {
  render() {
    const Array = [1, 2, 3];
    return (
      <div className="list">
        <ul>
        {Array.map((item, index) =>{return(<li key= {index}> <Link to={`/detail/${item}`} >Aqui irá la tarjeta {item}</Link></li>)})}
        </ul>
      </div>
    );
  }
}

export default List;
