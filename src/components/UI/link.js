import { Link } from "react-router-dom";

export default function CustomLink({ children, path }) {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: "inherit",
        fontFamily: "KernRegular",
      }}
    >
      {children}
    </Link>
  );
}
