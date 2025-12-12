import style from './Header.module.css';
import { Navbar } from '../Navbar.jsx'


export const Header = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <>
    <Navbar/>
      <div className={style.header}>
        <h1 className={style.title}>CoffeeBud</h1>
        <p className={style.slogan}>Local coffee shops.</p>
      </div>
    </>
  );
};

