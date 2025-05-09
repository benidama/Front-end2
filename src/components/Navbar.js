import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Post Buddy</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
