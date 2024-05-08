import React from 'react';

import iconSad from '../../assets/img/icon-sad.svg';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <img src={iconSad} alt="sad" /> <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
