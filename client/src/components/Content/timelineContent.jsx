// import { Stack } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const timelineArray = (achievements) => {
  console.log(achievements);
  // const navigate = useNavigate();
  const achieveNav = (username) => {
    navigate(`/profile/${username}`)
  }
  return achievements.map((achievement) => ({
    title: achievement.createdAt,
    url: `/profile/${achievement.user.username}`,
    timelineContent: (
      <>
        <Link to={`/profile/${achievement.user.username}`}>
         {achievement.user.username}
        </Link>
        {/* <Link> */}
        <h5>{achievement.titleAchievement}</h5>
        <p>{achievement.body}</p>
        {/* </Link> */}
      </>
    ),
  }));
};
export default timelineArray;
