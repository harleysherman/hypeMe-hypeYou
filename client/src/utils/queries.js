import { gql } from "@apollo/client";

export const QUERY_ACHIEVEMENTS = gql`
  query getAchievements {
    achievements {
      _id
      titleAchievement
      body
      createdAt
      user {
        _id
        username
        email
      }
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_ACHIEVEMENT = gql`
  query getSingleAchievement($achievementId: ID!) {
    achievement(achievementId: $achievementId) {
      _id
      titleAchievement
      body
      username
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
      username
      titleAchievement
      body
      comments {
        commentBody
        username
      }
    }
  }
`;
