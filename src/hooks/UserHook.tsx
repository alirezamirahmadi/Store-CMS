import { useQuery, useMutation } from "react-query";
import apiRequests from "../services/axios/AxiosConfig";
import { UserType } from "../type/UserType";


const useQueryUser = (userId?: string) => {
  return useQuery(`userInfo/${userId}`,
    async () => {
      return await apiRequests.get(userId ? `UserData?id=${userId}` : 'UserData').then(res => res.data);
    }
  )
}

// const useQueryUser = (userId?: string) => {
//   return useQuery(`UserInfo/${userId}`, async () => {
//     return userId ? await apiRequests.get(`UserData?id=${userId}`).then(res => res.data)
//       : await apiRequests.get(`UserData?id=-1`).then(res => res.data)
//   })
// }

const useMutationUser = (action: 'POST' | 'PUT' | 'DELETE', userId?: string) => {
  return useMutation(
    async (body: UserType) => {
      switch (action) {
        case 'POST':
          await apiRequests.post('UserData', body);
          break;
        case 'PUT':
          await apiRequests.put(`UserData/${body.id}`, body)
          break;
        case 'DELETE':
          await apiRequests.delete(`UserData/${userId}`)
          break;
        default:
          break;
      }
    }
  )
}


export {
  useQueryUser,
  useMutationUser
}