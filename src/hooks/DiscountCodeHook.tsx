import { useQuery, useMutation, useQueryClient } from "react-query";

import apiRequests from "../services/axios/AxiosConfig";
import type { DiscountCodesType } from "../type/DiscountCodesType";

const useQueryDiscountCount = () => {
  return useQuery('discountCodes',
    async () => await apiRequests.get('DiscountCodeData').then(res => res.data)
  )
}

const useMutationDiscountCode = (action: 'POST' | 'PUT' | 'DELETE') => {

  const queryClient = useQueryClient();

  return useMutation(async (body: DiscountCodesType) => {
    switch (action) {
      case 'POST':
        return await apiRequests.post('DiscountCodeData', body);
      case 'PUT':
        return await apiRequests.put(`DiscountCodeData/${body.id}`, body);
      case 'DELETE':
        return await apiRequests.delete(`DiscountCodeData/${body.id}`);
    }
  },
    {
      onSuccess: () => { queryClient.invalidateQueries('discountCodes') }
    })
}

export {
  useQueryDiscountCount,
  useMutationDiscountCode
}