import useNow from '../../hooks/useNow';
import { AppFooter } from './Footer.styled';

const Footer = () => {
  const year = useNow().getFullYear();

  return (
    <AppFooter data-testid="footer">
      <span>&copy; {year} Josemaria Nriagu</span>
    </AppFooter>
  );
};

export default Footer;
