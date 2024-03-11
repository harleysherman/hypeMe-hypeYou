import { v4 as uuidv4 } from 'uuid';
const profileContent = (profile) => {
  if (!profile) {
    return <h4>No Profile associated with this username</h4>;
  }

  return (
    <div>
      <h2>{profile.username}</h2>
      {profile.achievements.map((achievement) => (
        <div key={uuidv4()}>
          <div>{achievement.titleAchievement}</div>
          <div>{achievement.body}</div>
          {achievement.comments.map((comment) => (
            <p key={uuidv4()}>{comment}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default profileContent;
