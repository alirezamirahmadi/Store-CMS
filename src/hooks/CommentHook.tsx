import { useQuery, useMutation, useQueryClient } from "react-query";

import apiRequests from "../services/axios/AxiosConfig";
import type { CommentType } from "../type/CommentType";

const useQueryComment = () => {
  return useQuery('comments',
    async () => await apiRequests.get('CommentData').then(res => res.data)
  )
}

const useMutationComment = (action: 'PUT' | 'DELETE') => {

  const queryClient = useQueryClient();

  return useMutation(async (body: CommentType) => {
    switch (action) {
      case 'PUT':
        return apiRequests.put(`CommentData/${body.id}`, body);
      case 'DELETE':
        return apiRequests.delete(`CommentData/${body.id}`);
    }
  },
{
  onSuccess: () => {
    queryClient.invalidateQueries('comments');
  }
})
}

export {
  useQueryComment,
  useMutationComment
}