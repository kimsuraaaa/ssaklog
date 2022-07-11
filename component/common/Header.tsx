import HeaderStyle from '../../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className={HeaderStyle.header}>
        <h1>
          <Link href="/" passHref>
            SSAKLOG
          </Link>
        </h1>
        <nav className={HeaderStyle.nav}>
          <ul>
            <li>
              <Link href="/login" passHref>
                Login
              </Link>
            </li>
            <li>
              <Link href="/list" passHref>
                List
              </Link>
            </li>
            <li>
              <Link href="/signup" passHref>
                signup
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
