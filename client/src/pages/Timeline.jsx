import { Chrono } from "react-chrono";
import Stack from "react-bootstrap/Stack";
import { Form } from "react-bootstrap";
import timelineArray from "../components/Content/timelineContent";
import { useQuery } from "@apollo/client";
import { QUERY_ACHIEVEMENTS } from "../utils/queries";
// import { useState, useEffect } from "react";

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
  const items = timelineArray(achievements);
  console.log(items);
  // useEffect(()=>{
  //   if(achievements){
  //   setAchievements(achievements)
  //   }
  // }, [data])
  // if(!loading){setAchievements(timelineArray(achievements))}

  return (
    <Stack gap={3}>
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items} mode="VERTICAL" />
      </div>
      <div>
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
      </div>
    </Stack>
  );
}
