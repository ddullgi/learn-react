import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/mouse_cursor" className="link">
        <h1>마우스 커서 조정</h1>
      </NavLink>
    </>
  );
};

export default Home;
