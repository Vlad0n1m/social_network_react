import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div ><NavLink className={s.item} to="/">Profile</NavLink></div>
      <div ><NavLink className={s.item} to="/feed">Feed</NavLink></div>
      <div ><NavLink className={s.item} to="/dialogs">Dialogs</NavLink></div>
      <div ><NavLink className={s.item} to="/news">News</NavLink></div>
      <div ><NavLink className={s.item} to="/music">Music</NavLink></div>
      <div ><NavLink className={s.item} to="/settings">Settings</NavLink></div>
    </nav>
  )
}


export default Navbar;
