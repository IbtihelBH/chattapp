import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const style = {
  nav: `bg-purple-700 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl font-sans font-semibold animate-bounce`,
  logoutButton: `bg-purple-600 px-4 py-2 hover:bg-purple-700 text-white rounded-full flex items-center space-x-2`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Typey-Toe</h1>
      {user ? (
        <button onClick={() => auth.signOut()} className={style.logoutButton}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </button>
      ) : (
        <SignIn buttonStyle={style.logoutButton} />
      )}
    </div>
  );
};

export default Navbar;
