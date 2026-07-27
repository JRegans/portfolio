import "./Button.css";

function Button({ href, children, variant = "primary", ...props }) {
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;