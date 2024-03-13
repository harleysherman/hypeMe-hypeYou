import { Chrono } from "react-chrono";
import Stack from "react-bootstrap/Stack";
// import { Form } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { QUERY_ACHIEVEMENTS } from "../utils/queries";

export default function Timeline() {
  // eslint-disable-next-line no-unused-vars
  const { loading, data, error } = useQuery(QUERY_ACHIEVEMENTS);
 
  // const [achievementList, setAchievements] = useState([]);
  if (error) {
    console.log(error);
    return;
  }
  if (loading) {
    return "loading";
  }
  const achievements = data?.achievements || [];

  // console.log(achievements);
  // console.log(timelineArray(achievements));
  const timelineArray = (achievements) => {
    console.log(achievements);
    if(!achievements) {
      return;
    }
   
    return achievements.map((achievement) => ({
      title: achievement.createdAt,
      cardTitle: achievement.user.username || "",
      url: `/profile/${achievement.user.username || ""}`,
      timelineContent: (
        <>
          {/* <Link> */}
          <h5>{achievement.titleAchievement}</h5>
          <p>{achievement.body}</p>
          {/* </Link> */}
        </>
      ),
    }));
  };
  const items = timelineArray(achievements);
  // console.log(items);
  // useEffect(()=>{
  //   if(achievements){
  //   setAchievements(achievements)
  //   }
  // }, [data])
  // if(!loading){setAchievements(timelineArray(achievements))}

  return (
    <div className="full-viewport">
      <Stack gap={3}>
        <div className="timeline">
          <Chrono scrollable="true" items={items} mode="VERTICAL" />
        </div>
      
        
        {/* <div>
        <Form.Label htmlFor="inputPost">Post your Achievement</Form.Label>
        <Form.Control
          type="Input"
          id="inputPost"
          defaultValue="Achievement Title..."
        />
        <Form.Control
          type="Input"
          id="inputPost"
          defaultValue="Achievement Description..."
        />
        <Form.Text
          id="newPost"
          muted
          placeholder=" Post your Achievement Here"
        ></Form.Text>
      </div> */}
      </Stack>
    </div>
    
  );
}
