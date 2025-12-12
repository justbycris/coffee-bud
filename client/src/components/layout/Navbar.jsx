import style from './Layout.module.css';

export const Navbar = () => {
  return (
    <>
    <nav className={style.nav}>
      <a href="#">CofeeShops</a>
      <a href="#">Sign Up</a>
      <a href="#">Login</a>
    </nav>
    </>
    
  );
};