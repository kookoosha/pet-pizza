import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

// import pizzas from './assets/pizza.json';

function App() {
  const [itemsOfPizza, setItemsOfPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Fetch pizza
  React.useEffect(() => {
    fetch('https://63bfd8b90cc56e5fb0e06c3d.mockapi.io/items')
      .then((data) => data.json())
      .then((pizzas) => setTimeout(() => { setItemsOfPizza(pizzas); setIsLoading(false); }, 1000))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
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
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                  : itemsOfPizza.map((pizza) => (
                    <PizzaBlock
                      key={pizza.id}
                      imageUrl={pizza.imageUrl}
                      title={pizza.title}
                      price={pizza.price}
                      sizes={pizza.sizes}
                      types={pizza.types}
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
