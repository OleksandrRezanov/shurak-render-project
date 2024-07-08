import React from 'react';
import '../styles/Content.scss';

const Content = () => {
  return (
    <div className='content'>
      <div>
        <h1 className='content__title'>Анімація</h1>

        <p className='content__body'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laboriosam sint tempora unde dolorum sapiente enim quis natus cum dolorem facere sunt praesentium, ut voluptatibus ducimus est esse quam placeat. Libero ipsam vero assumenda soluta perspiciatis amet repellendus nemo veritatis placeat tenetur. Quos, veritatis voluptatem repellendus minus culpa porro magni cumque dolores repudiandae voluptas praesentium sunt necessitatibus.
        </p>

        <h2 className='content__price-label'>Вартість:</h2>

        <p className='content__price-value'>Рендер Eevee - від 5000 грн</p>

        <p className='content__price-value'>Рендер Cycles - від 8000 грн</p>
      </div>

      <div className='content__img' />
    </div>
  );
};

export default Content;
