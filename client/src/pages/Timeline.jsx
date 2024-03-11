import { Chrono } from "react-chrono";
import Stack from "react-bootstrap/Stack";
import { Form } from "react-bootstrap";
import timelineArray from "../components/Content/timelineContent";
import { useQuery } from '@apollo/client';
import { QUERY_ACHIEVEMENTS } from "../utils/queries";


export default function Timeline() {

  // eslint-disable-next-line no-unused-vars
  const {loading, data, error} = useQuery(QUERY_ACHIEVEMENTS)
  if (error){
    console.log(error)
    return
  }
  const achievements = data?.achievement || []

  


    return (
      <Stack gap={3}>
        {/* <div style={{ width: "500px", height: "400px" }}>
          <Chrono items={timelineArray(achievements)} mode="VERTICAL" />
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
        </div> */}
      </Stack>
    );
}
