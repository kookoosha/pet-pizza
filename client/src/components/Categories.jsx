import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((categ, index) => (
          <li
          // todo решить вопрос в 22 строке eslint
            key={index}
            className={value === index ? 'active' : ''}
            onClick={(() => onChangeCategory(index))}
            onKeyDown={(() => onChangeCategory(index))}
          >
            {categ}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
