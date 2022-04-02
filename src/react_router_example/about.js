import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p> 이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트이다.</p>
      <Link to='/'>홈으로 돌아가기</Link>
    </div>
  );
};

export default About;
