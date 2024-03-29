import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function HomePage() {
// State from Categories component
  const [categoryId, setCategoryId] = React.useState(0);

  // State from Sort component
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  // State from Home Page
  const [itemsOfPizza, setItemsOfPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Fetch pizza
  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://63ce5a71fdfe2764c720818d.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType.sortProperty}&order=asc`)
      .then((data) => data.json())
      .then((pizzas) => { setItemsOfPizza(pizzas); setIsLoading(false); })
      .catch((error) => {
        console.error('Error:', error);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
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
  );
}
