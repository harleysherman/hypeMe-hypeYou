import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ACHIEVEMENT_PHOTO } from "../../utils/mutations";
import { QUERY_ACHIEVEMENTS } from "../../utils/queries";

function CloudinaryUploadWidget() {
  const [addAchievementPhoto, { error, loading, data }] = useMutation(
    ADD_ACHIEVEMENT_PHOTO,
    {
      refetchQueries: [QUERY_ACHIEVEMENTS, "getAchievements"],
    }
  );

  useEffect(() => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dmpeo4qem",
        uploadPreset: "iuwjcwu3",
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);

          //perform image update thru mutation
          try {
            const { data } = await addAchievementPhoto({
              variables: {
                achievementId,
                url: result.info.secure_url,
              },
            });
      
            setThoughtText('');
          } catch (err) {
            console.error(err);
          }
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
