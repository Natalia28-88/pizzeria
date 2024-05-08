import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';
import { Sort as SortType, SortPropertyEnum } from '../redux/filter/types';

import arrowTop from '../assets/img/arrow-top.svg';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const list: SortItem[] = [
  { name: 'рейтингу', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'убыванию цены', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'возрастанию цены', sortProperty: SortPropertyEnum.PRICE_ASC },
  {
    name: 'алфавиту в обратном порядке',
    sortProperty: SortPropertyEnum.TITLE_DESC,
  },
  {
    name: 'алфавиту от А до Я',
    sortProperty: SortPropertyEnum.TITLE_ASC,
  },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  // React.useEffect(() => {
  //   const handleClickOutside = (event: React.MouseEvent) => {
  //     const path = event.composedPath();
  //     if (!path.includes(sortRef.current)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.body.addEventListener('click', handleClickOutside);

  //   return () => document.body.removeEventListener('click', handleClickOutside);
  // }, []);

  //   document.body.addEventListener('click', handleClickOutside);

  //   return () => document.body.removeEventListener('click', handleClickOutside);
  // }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img
          width={10}
          height={6}
          src={arrowTop}
          alt="arrow"
          className={open ? 'active' : ''}
        />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? 'active' : ''
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
