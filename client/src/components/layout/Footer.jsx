import './Footer.module.css';

export const Footer = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <Footer 
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Footer>
  );
};