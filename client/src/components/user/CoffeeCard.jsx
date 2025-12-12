import { useState } from 'react'
import style from './CoffeeCard.module.css';

export const CoffeeCard = ({name, address, product, type, score, user }) => {
    console.log('Hello Coffee Card')
  return (
    <div className={style.Card}>
      <div className={style.Card_created}>
        <p className={style.Card_user}>BY <span style={{textDecoration: "underline"}}>{user}</span></p>
      </div>
           <h1 className={style.Card_name}>{name}</h1>
      <div className={style.Card_main}>
        <p className={style.Card_product}>{type}</p>
        <p className={style.Card_address}>{address}</p>
      </div>
      <div className={style.Card_stats}>
        <p className={style.Card_product}><span className={style.product_description}>Top product:</span> {product}</p>
        <span className={style.score}>{score} / 10</span>
      </div>
    </div>
  );
};

