import s from "./Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Home</a></div>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Feed</a></div>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Messages</a></div>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">News</a></div>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Music</a></div>
      <div ><a className={s.item} href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Settings</a></div>
    </nav>
  )
}


export default Navbar;
