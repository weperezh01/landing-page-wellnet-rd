import "../styles/Header.css";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="header" id="id-header">
      <Logo/>
      <Menu/>
    </div>
  );
}
