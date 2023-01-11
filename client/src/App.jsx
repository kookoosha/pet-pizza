import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './assets/pizza.json';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццыыы</h2>
            <div className="content__items">
              {
                pizzas.map((pizza) => (
                  <PizzaBlock
                    imageUrl={pizza.imageUrl}
                    title={pizza.title}
                    price={pizza.price}
                    sizes={pizza.sizes}
                    types={pizza.types}
                    // {...pizza}
                  />
                ))
              }
              {/* <PizzaBlock title="Мексиканская" price=" 490 " /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
