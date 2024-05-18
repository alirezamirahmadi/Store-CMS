import { useQuery, useMutation } from "react-query";
import apiRequests from "../services/axios/AxiosConfig";
import { UserType } from "../type/UserType";


const useQueryUser = (phone?: string) => {
  return useQuery(`user/${phone}`,
    async () => {
      return await apiRequests.get(phone ? `UserData?phone=${phone}` : 'UserData').then(res => res.data);
    }
  )
}

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