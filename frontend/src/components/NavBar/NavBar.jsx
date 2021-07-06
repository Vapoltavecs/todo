import { useDispatch } from "react-redux";
import actions from "../../redux/reducers/actions/actions";
import classes from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>ToDo app</div>
      <div className={classes.header__navbar}>
        <NavLink to="/create"> Создать задачу</NavLink>
        <NavLink to="/tasks">Мои задачи</NavLink>
        <a
          href="/"
          className={classes.header__button}
          onClick={() =>
            dispatch(actions.authActions({ userId: 0, isMatch: false }))
          }
        >
          Выйти
        </a>
      </div>
    </div>
  );
};

export default NavBar;
