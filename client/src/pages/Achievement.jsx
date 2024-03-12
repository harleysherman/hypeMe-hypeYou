// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList/CommentList';
import CommentForm from '../components/CommentForm/CommentForm';

import { QUERY_SINGLE_ACHIEVEMENT } from '../utils/queries';

const SingleAchievement = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { achievementId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ACHIEVEMENT, {
    // pass URL parameter
    variables: { achievementId },
  });

  const achievement = data?.achievement || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {achievement.user.username} <br />
        <span style={{ fontSize: '1rem' }}>
          had this achievement on {achievement.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {achievement.titleAchievement}
        </blockquote>
        <h3>{ achievement.body }</h3>
      </div>

      <div className="my-5">
        <CommentList comments={achievement.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm achievementId={achievement._id} />
      </div>
    </div>
  );
};

export default SingleAchievement;