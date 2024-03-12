import { useRouteError } from 'react-router-dom';
import Pic from "../../src/assets/aurochsPhoto.jpeg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>I am not sure how you got here. But here is a Auroch.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={ Pic } alt="Random Auroch Pic"></img>
    </div>
  );
}
