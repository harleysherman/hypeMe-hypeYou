import profileContent from "../components/Content/profileContent";
import {useQuery} from '@apollo/client'
import { QUERY_PROFILE } from "../utils/queries";

export default function Profile(){

// eslint-disable-next-line no-unused-vars
const {loading, data} = useQuery(QUERY_PROFILE)

const profile = data?.profile || {}

    return (
profileContent(profile)
    );
}