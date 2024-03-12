// import { Stack } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";

const timelineArray = (achievements) => {
  console.log(achievements);
  return achievements.map((achievement) => ({
    title: achievement.createdAt,
    cardTitle: achievement.titleAchievement,
    cardSubtitle: achievement.user.username,

    cardDetailedText: achievement.body,
    // timelineContent: (
    //   <Stack>
    //     <div>{achievement.body}</div>
    //     <div>
    //       {achievement.comments.map((comment) => (
    //         <p key={uuidv4()}>{comment}</p>
    //       ))}
    //     </div>
    //   </Stack>
    // ),
  }));
};

export default timelineArray;
