import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
  mutation addAchievement($titleAchievement: String!, $body: String!) {
    addAchievement(titleAchievement: $titleAchievement, body: $body) {
      _id
      titleAchievement
      body
      createdAt
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

export const ADD_PROFILE_PIC = gql`
  mutation addProfilePic($profilePic: String) {
    addProfilePic(profilePic: $profilePic) {
      _id
      username
      email
      profilePic
    }
  }
`;

export const ADD_ACHIEVEMENT_PHOTO = gql`
  mutation addAchievementPhoto($achievementId: ID!, $url: String) {
    addAchievementPhoto(achievementId: $achievementId, url: $url) {
      _id
      titleAchievement
      url
      body
      createdAt
    }
  }
`;
