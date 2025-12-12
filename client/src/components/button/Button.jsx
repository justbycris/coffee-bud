import './Button.module.css';

export const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};