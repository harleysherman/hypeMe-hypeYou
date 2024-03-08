import { Chrono } from "react-chrono";
export default function Timeline() {
// stand in until there is data
    const items = [{
      title: "03/08/2024",
      cardTitle: "Username",
      cardSubtitle:"Achievement Title",
      cardDetailedText: "This is my Achievement, This is what happened.",
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "http://someurl/image.jpg"
    //     }
    //   }
    },
    ]



    return (
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items} mode="VERTICAL" />
      </div>
    );
}
