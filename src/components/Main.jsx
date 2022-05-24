import React from "react";
import Post from "../components/Post";

const Main = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="h5 text-blue">@JaneSmith</div>
                  <div className="h7 ">
                    <strong>Name :</strong> Jane Smith
                  </div>
                  <div className="h7">
                    <strong>About :</strong> Developer of web applications,
                    JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="h6 text-muted">Followers</div>
                    <div className="h5">5.2342</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Following</div>
                    <div className="h5">6758</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Themes</div>
                    <div className="h5">6758</div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Latest Photos</h3>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className=""
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                        className=""
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                        className="active"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item active">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 gedf-main">
              <div className="card social-timeline-card">
                <div className="card-header">
                  <ul
                    className="nav nav-tabs card-header-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="posts-tab"
                        data-toggle="tab"
                        href="#posts"
                        role="tab"
                        aria-controls="posts"
                        aria-selected="true"
                      >
                        Share your insights
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="posts"
                      role="tabpanel"
                      aria-labelledby="posts-tab"
                    >
                      <div className="form-group">
                        <div className="form-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="customFile"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Upload image
                            </label>
                          </div>
                        </div>
                        <label className="sr-only" htmlFor="message">
                          post
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="3"
                          placeholder="What are you thinking?"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="images"
                      role="tabpanel"
                      aria-labelledby="images-tab"
                    >
                      <div className="py-4"></div>
                    </div>
                  </div>
                  <div className="btn-toolbar justify-content-between">
                    <div className="btn-group">
                      <button type="submit" className="btn btn-theme-primary">
                        share
                      </button>
                    </div>
                    <div className="btn-group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-globe"></i>
                      </button>
                      <div
                        className="dropdown-menu "
                        aria-labelledby="btnGroupDrop1"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-globe"></i> Public
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-users"></i> Friends
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-user"></i> Just me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Post />
            </div>
            <div className="col-lg-3">
              <div className="card social-timeline-card">
                <div className="card-body">
                  <h5 className="card-title">People you may know</h5>
                  <ul className="friend-list">
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar5.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
