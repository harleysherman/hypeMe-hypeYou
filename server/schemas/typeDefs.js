const typeDefs = `
type User {
    _id: ID!
    username: String
    email: String!
    password: String
    achievements: [Achievement]
    communities: [Community]
    comments: [Comment]
  }

type Community {
    _id: ID!
    category: String!
    users: [User]
  }


type Achievement {
    _id: ID!
    titleAchievement: String!
    body: String!
    createdAt: String
    user: User
    comments: [Comment]
  }

type Comment{
    _id: ID
    commentBody: String!
    username: String
    createdAt: String

  }

  type Auth {
    token: ID
    user: User
  }

  type Query{
    users: [User] 
    communities: [Community]
    achievements: [Achievement]
    user(username: String!): User
    achievement(username: String!): Achievement
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCommunity(category: String!): Community
    addAchievement(userId: ID!, titleAchievement: String!, body: String!): Achievement
    addComment(achievementId: ID!, commentBody: String!, username: String!): Achievement
    removeAchievement(achievementId: ID!): Achievement
    removeComment(commentId: ID, achievementId: ID): Achievement
  }
`;

module.exports = typeDefs;

