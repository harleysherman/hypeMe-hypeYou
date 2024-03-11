import { Stack } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const timelineArray = (achievements) => {
  return achievements.map((achievement) => ({
    title: achievement.createdAt,
    cardTitle: achievement.username,
    cardSubtitle: achievement.achievementTitle,
    timelineContent: (
      <Stack>
        <div>{achievement.body}</div>
        <div>
          {achievement.comments.map((comment) => (
            <p key={uuidv4()}>{comment}</p>
          ))}
        </div>
      </Stack>
    ),
  }));
};

export default timelineArray;
