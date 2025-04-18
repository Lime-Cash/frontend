import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const handleClick = () => {
    toast.success("Hello World!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About</Link>
      <button onClick={handleClick}>Toast</button>
    </div>
  );
};

export default Home;
