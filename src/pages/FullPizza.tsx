import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://65805f246ae0629a3f550688.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className="container">
      <img className="pizza-block__image" src={`/${pizza.imageUrl}`} />
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <div className="pizza-block__price"> {pizza.description}</div>
      <br />
      <div className="pizza-block__price"> {pizza.price} ₽</div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
