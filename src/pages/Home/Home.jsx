import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <NavLink to="/mouse_cursor" className="link">
        <h1>마우스 커서 조정</h1>
      </NavLink>
      <NavLink to="/mine_sweeper" className="link">
        <h1>지뢰 찾기</h1>
      </NavLink>
      <NavLink to="/web_animaitons_API" className="link">
        <h1>Inflearn WebAnimaitonsAPI 수업 정리</h1>
      </NavLink>
      <NavLink to="/eternalreturn" className="link">
        <h1>이터널 리턴</h1>
      </NavLink>
      <div className={styles.css}>Activity.</div>
    </>
  );
};

export default Home;
