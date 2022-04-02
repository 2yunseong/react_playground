const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  yunseong: {
    name: "이윤성",
    description: "전대 3학년",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params; // ?
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
