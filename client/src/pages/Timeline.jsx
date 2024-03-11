import { Chrono } from "react-chrono";
import Stack from "react-bootstrap/Stack";
import { Form } from "react-bootstrap";
import 
export default function Timeline() {
// stand in until there is data
// timeline Content 
    const achievement = [
      {
        title: "03/08/2024",
        cardTitle: "Username",
        cardSubtitle: "Achievement Title",
        cardDetailedText: [
          "This is my Achievement, This is what happened.",
          "Likes : 0",
        ],

        //   media: {
        //     type: "IMAGE",
        //     source: {
        //       url: "http://someurl/image.jpg"
        //     }
        //   }
      },
      {
        title: "03/08/2024",
        cardTitle: "Username",
        cardSubtitle: "Achievement Title",
        cardDetailedText: [
          "This is my Achievement, This is what happened.",
          "Likes : 0",
        ],

        //   media: {
        //     type: "IMAGE",
        //     source: {
        //       url: "http://someurl/image.jpg"
        //     }
        //   }
      },
    ];



    return (
      <Stack gap={3}>
        <div style={{ width: "500px", height: "400px" }}>
          <Chrono items={achievement} mode="VERTICAL" />
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
