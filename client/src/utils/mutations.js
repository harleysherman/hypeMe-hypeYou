import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        achievements
        communities {
            users
            category
        }
        comments {
            commentBody
            username
            createdAt
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ACHIEVEMENT = gql`
  mutation addAchievement($achievementText: String!) {
    addAchievement(achievementText: $achievementText) {
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

export const ADD_COMMENT = gql`
  mutation addComment($achievementId: ID!, $commentText: String!) {
    addComment(achievementId: $achievementId, commentText: $commentText) {
      _id
      commentBody
      username
      createdAt
    }
  }
`;
