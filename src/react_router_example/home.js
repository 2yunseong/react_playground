import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지</p>
      <Link to='/about'>about</Link>
    </div>
  );
};

export default Home;
