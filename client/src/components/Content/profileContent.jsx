
import Card from "react-bootstrap/Card";
const profileContent = (profile) => {
  if (!profile) {
    return <h4>No Profile associated with this username</h4>;
  }
  console.log(profile);
  return profile.achievements.map((achievement) => (
    // eslint-disable-next-line react/jsx-key
    <Card style={{ width: "38rem" }}>
      <Card.Body>
        <Card.Title>{achievement.titleAchievement}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {achievement.createdAt}
        </Card.Subtitle>
        <Card.Text>{achievement.body}</Card.Text>
        <Card.Link href="#">View Conversation About this Achievement</Card.Link>
      </Card.Body>
    </Card>
  ));
};

export default profileContent;
