import { Resolvers } from "./resolvers";

export const resolvers: Resolvers = {
  Query: {
    user: async ()=>{
      return {
        id: "uhyo",
        name: "uhyo"
      }
    },
    allUsersInOrganization: async () => {
      return [{
        id: "uhyo",
        name: "uhyo",
      }, {
        id: "pikachu",
        name: "pikachu"
      }]
    }
  },
  User: {
    posts: async (user) => {
      // 本当はuserに紐づいたPostsを取得する
      return [
        {
          id: "pika",
          title: "pika!"
        },
        {
          id: "chu",
          title: "chu!"
        }
      ]
    }
  }
}