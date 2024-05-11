import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navber.css";
import { useShopContext } from "../../Hook/useShopContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

function Navber() {
  const { user,setUser } = useShopContext();

  const [navPosition, setNavPosition] = useState(false);
  useEffect(() => {
    const hendleScroll = () => {
      if (window.scrollY > 100) {
        setNavPosition(true);
      } else {
        setNavPosition(false);
      }
    };
    window.addEventListener("scroll", hendleScroll);

    return () => {
      window.removeEventListener("scroll", hendleScroll);
    };
  }, [setNavPosition]);

  const hendleSignOut = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));

      setUser(false)

  };
  return (
    <nav className={`nav-wrap ${navPosition ? "nav-fixt" : " "}`}>
      <div className="logo">Ema-joon</div>
      <ul className="">
        <NavLink className="link" to="/">
          Shop
        </NavLink>
        <NavLink className="link gap" to="/revew">
          Revew
        </NavLink>
        <NavLink className="link" to="/inventory">
          Inventory
        </NavLink>

        {user.signIn ? (
          user.img ? (
            <img
              onClick={hendleSignOut}
              className="img-wrap"
              title={user.name ? user.name : " "}
              src={user.img}
              alt=""
            />
          ) : (
            <div
             className="img-wrap"
             onClick={hendleSignOut}
             title={user.name}
            >{user.name.charAt(0).toUpperCase()}</div>
          )
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navber;
