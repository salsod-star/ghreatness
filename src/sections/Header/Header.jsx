import Styles from "./header.module.css";
function Header({ children }) {
  return <header className={Styles.container}>{children}</header>;
}

export default Header;
