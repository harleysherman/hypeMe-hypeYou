import { useEffect } from "react";

function CloudinaryUploadWidget() {
  useEffect(() => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dmpeo4qem",
        uploadPreset: "iuwjcwu3",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);

          //perform image update thru mutation
          const ADD_PHOTO = `     
          mutation photo($url: String!) {
            url: result.info.thumbnail_url
          }
        `;

        return ADD_PHOTO;
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, []);

  return (
    <button id="upload_widget" className="cloudinary-button">
      Upload
    </button>
  );
}

export default CloudinaryUploadWidget;
