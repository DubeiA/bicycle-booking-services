import css from './footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.text}>Developer: </p>
      <a className={css.link} href='/'>
        Anatolii Dubei
      </a>
    </footer>
  );
};

export default Footer;
