import { Link } from "react-router-dom";
import ServicesImageOne from "./ServicesImageOne";

function Services() {
  return (
    <section className="section bg-c-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading"> Our Services </h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <ServicesImageOne
                className="w-100 border-bottom"
                alt="Services"
              />
              <div className="card-body">
                <h6>Services 1</h6>
                <div className="underline"></div>
                <p>
                  Desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <Link to="/services" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <ServicesImageOne
                className="w-100 border-bottom"
                alt="Services"
              />
              <div className="card-body">
                <h6>Services 2</h6>
                <div className="underline"></div>
                <p>
                  {" "}
                  Desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <Link to="/services" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <ServicesImageOne
                className="w-100 border-bottom"
                alt="Services"
              />
              <div className="card-body">
                <h6>Services 3</h6>
                <div className="underline"></div>
                <p>
                  {" "}
                  Desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <Link to="/services" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
