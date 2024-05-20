import { useQuery, useMutation, useQueryClient } from "react-query";
import apiRequests from "../services/axios/AxiosConfig";
import { UserType } from "../type/UserType";


const useQueryUser = (phone?: string) => {
  return phone ? useQuery(`user/${phone}`,
    async () => apiRequests.get(phone ? `UserData?phone=${phone}` : 'UserData').then(res => res.data)
  )
    :
    useQuery('users',
      async () => await apiRequests.get('UserData').then(res => res.data)
    )
}

const useMutationUser = (action: 'POST' | 'PUT' | 'DELETE') => {

  const queryClient = useQueryClient();

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
          await apiRequests.delete(`UserData/${body.id}`)
          break;
        default:
          break;
      }
    },
    {
      onSuccess: () => { queryClient.invalidateQueries('users'); }
    }
  )
}


export {
  useQueryUser,
  useMutationUser
}