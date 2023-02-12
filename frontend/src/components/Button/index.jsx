export const Button = ({ children, className, type, ...rest }) => {
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};
