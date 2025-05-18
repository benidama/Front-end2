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
      <h1>
        <Link to="/">Post Buddy</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
