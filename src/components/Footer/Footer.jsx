import useNow from '../../hooks/useNow';
import ExternalLink from '../ExternalLink';
import { AppFooter } from './Footer.styled';

const Footer = () => {
  const year = useNow().getFullYear();

  return (
    <AppFooter data-testid="footer">
      <span>&copy; {year} Josemaria Nriagu</span>
      <ExternalLink href="https://github.com/josenriagu/ubiquitous-tribble/issues/new/choose">
        Submit an issue
      </ExternalLink>
    </AppFooter>
  );
};

export default Footer;
