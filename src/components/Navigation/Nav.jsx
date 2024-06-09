import Styles from "./nav.module.css";

function Nav({ handleSetReftType }) {
  return (
    <nav className={Styles.container}>
      <span>Greatness</span>
      <ul
        className={Styles.nav}
        onClick={(e) => {
          //   const targetEl = document.getElementById(e.button.getAttributes("id"));
          if (e.target.type === "button") {
            const refType = e.target.getAttribute("data-scroll-target");
            handleSetReftType(refType);
            console.log(refType);
          }
        }}
      >
        <li>
          <button type="button" data-scroll-target="home">
            Home
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="entertainment">
            Entertainment
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="education">
            Education
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="gaming">
            Gaming
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="news">
            News
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="about">
            About
          </button>
        </li>
        <li>
          <button type="button" data-scroll-target="contact">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
