import * as React from 'react';
import './style.css';
import { debounce } from '@maile/utils';

// 第一个组件
function Card() {
  debounce(() => {
    console.log(1);
  });
  return <div className="box">Card first</div>;
}
export default Card;
