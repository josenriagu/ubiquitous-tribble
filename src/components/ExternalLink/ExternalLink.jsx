// link that opens in a new tab and says so to assistive technology
const ExternalLink = ({ href, className, arrow, children }) => {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {arrow && <span aria-hidden="true">{' ↗'}</span>}
      <span className="sr-only">{' (opens in a new tab)'}</span>
    </a>
  );
};

export default ExternalLink;
