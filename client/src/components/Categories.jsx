import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((categ, index) => (
          <li
          // todo решить вопрос в 22 строке eslint
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={(() => onClickCategory(index))}
            onKeyDown={(() => onClickCategory(index))}
          >
            {categ}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
