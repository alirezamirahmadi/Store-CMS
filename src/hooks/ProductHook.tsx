import { useQuery, useMutation, useQueryClient } from "react-query";

import apiRequests from "../services/axios/AxiosConfig";
import { ProductType } from "../type/ProductType";

const useQueryProduct = () => {
  return useQuery('products',
    async () => await apiRequests.get('ProductData').then(res => res.data)
  )
}

const useMutationProduct = (action: 'POST' | 'PUT' | 'DELETE') => {

  const queryClient = useQueryClient();

  return useMutation(async (body: ProductType) => {
    switch (action) {
      case 'POST':
        return apiRequests.post('ProductData', body);
      case 'PUT':
        return apiRequests.put(`ProductData/${body.id}`, body);
      case 'DELETE':
        return apiRequests.delete(`ProductData/${body.id}`);
    }
  },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products');
      }
    })
}

export {
  useQueryProduct,
  useMutationProduct
}