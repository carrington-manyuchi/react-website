import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white pb-1">
      <div class="container">
        <div className="row">
          <div className="col md-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
          <div className="col">
            <h6>Quick Links </h6>
            <hr />
            <div className="mb-3">
              <Link to="/">Home</Link>
            </div>
            <div className="mb-3">
              <Link to="/about">About</Link>
            </div>
            <div className="mb-3">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="mb-3">
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="col md-4">
            <h6>Contact Information </h6>
            <hr />
            <div>
              <p className="text-white mb1">
                The Media Mill, 7 Quince St, Auckland Park, Johannesburg, 2000
              </p>
            </div>
            <div>
              <p className="text-white mb1">+2761 544 9366</p>
            </div>
            <div>
              <p className="text-white mb1">+2761 544 6666</p>
            </div>
            <div>
              <p className="text-white mb1">digitalacademy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <p> Copyright @2023 | Developed by Carrington</p>
      </div>
      <hr />
    </section>
  );
}

export default Footer;
