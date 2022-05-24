import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import { db } from "../database/firebase";
import { storage } from "../database/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "firebase/auth";
import "firebase/storage";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const form = document.querySelector("#form");
  const firebase = useFirebaseApp();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                const user = firebase.auth().currentUser;
                user?.updateProfile({
                  displayName: name,
                  photoURL: url,
                });
              });

            db.collection("User").add({
              name,
              email,
              url,
            });
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });

    form.reset();
    history.push("/login");
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        REGISTRATE
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit}
                        id="form"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              onChange={(e) => setName(e.target.value)}
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Nombre
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              E-mail
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              name="password"
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Contraseña
                            </label>
                          </div>
                        </div>
                        <label>Foto de Perfil</label>
                        <input type="file" onChange={handleImageChange} />
                        <br />
                        <p style={{ float: "right" }}>
                          Ya tenés Cuenta? <a href="/login">Ingresar</a>
                        </p>
                        <div className="d-flex justify-content-center mt-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Confirmar
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
