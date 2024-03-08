const typeDefs = `
type User {
    id: ID!
    userName: String
    email: String!
    password: String
    achievements: [achievement]
    communities: [Community]
    comments: [Comment]
  }

type Community {
    id: ID!
    communityName: String
    users: [User]
  }


type Achievement {
    id: ID!
    titleAchievement: String!
    body: String!
    createdAt: Date
    users: [User]
    comments: [Comment]
  }

type Comment{
    id: ID
    commentBody: String!
    user: [User]
    createdAt: Date

  }

  type Auth {
    token: ID
    user: User
  }

  type Query{
    users: [User] 
    communities: [Community]
    achievements: [Achievement]
    comments: [Comment]
    user(userName: String!): User
    achievements(userName: String!): [Achievement]
    comments(: String!): [Comments]

  }

  type Mutations{
    addUser(username: String!, email: String!, password: String!): Auth
    addCommunity(communityName: String!): Community
    addAchievement(userId: ID!, titleAcheivement: String!): Achievement
    addComment(achievementId: ID!, commentBody: String!): Achievement
    removeAchievement(achievementId: ID!): Achievement
    removeComment(commentId: ID, achievementId: ID): Achievement
  }
`;

module.exports = typeDefs;

