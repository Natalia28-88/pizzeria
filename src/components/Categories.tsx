import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    const categories = [
      'Все',
      'Мясные',
      'Вегетарианские',
      'Гриль',
      'Острые',
      'Закрытые',
    ];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
