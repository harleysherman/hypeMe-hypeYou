import profileContent from "../components/Content/profileContent";
import {useQuery} from '@apollo/client'
import { QUERY_PROFILE } from "../utils/queries";
import { useParams } from "react-router-dom";
export default function Profile() {
    const { username } = useParams();
  const { loading, data, error } = useQuery(QUERY_PROFILE, {
    variables: { username: username },
  });


  if (loading) return <p>Loading...</p>;

  
  if (error) return console.log(error);;

  const profile = data?.user || {};
  console.log(profile);

  return (
    <div>
      <h3 className="justify-content-start">{profile.username}</h3>
      {profileContent(profile)}
    </div>
  );
}