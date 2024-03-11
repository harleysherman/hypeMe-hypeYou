import { gql } from "@apollo/client";

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//       }
//     }
//   }
// `;

export const QUERY_ACHIEVEMENTS = gql`
  query getAchievements {
    achievement {
      _id
      titleAchievement
      body
      comments {
        commentBody
        username
      }
    }
  }
`;

export const QUERY_SINGLE_ACHIEVEMENT = gql`
  query getSingleThought($achievementId: ID!) {
    achievement(achievementId: $achievementId) {
      _id
      titleAchievement
      body
      comments {
        commentBody
        username
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile {
    profile {
      _id
      username
      email
      titleAchievement
      body
      comments {
        commentBody
        username
      }
    }
  }
`;
