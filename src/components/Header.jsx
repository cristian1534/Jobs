import React, { useContext } from "react";
import { AuthContext } from "../auth/auth";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const firebase = useFirebaseApp();
  
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
     
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="top-breadcrumb mt-3"></div>
        </div>
      </div>
      <div className="img img-test"></div>
      <div className="card social-prof">
        <div className="card-body">
          <div className="wrapper">
            {currentUser && (
              <img src={currentUser.photoURL} alt="" className="user-profile" />
            )}
            {currentUser && <h3>{`${currentUser.displayName}`}</h3>}
            <p>Web Developer</p>
          </div>
          <div className="row ">
            <div className="col-lg-12">
              <ul className=" nav nav-tabs justify-content-center s-nav">
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/register">Registrate</a>
                </li>
                <li>
                  <a href="/login">Ingresar</a>
                </li>
                <li>
                  <a onClick={() => handleLogOut()}>Salir</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
