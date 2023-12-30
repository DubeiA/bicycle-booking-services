import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.link} href='/'>
        admin.bike-booking.com
      </a>
    </header>
  );
};

export default Header;
