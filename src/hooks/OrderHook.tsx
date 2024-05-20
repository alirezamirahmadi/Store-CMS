import { useQuery } from "react-query";

import apiRequests from "../services/axios/AxiosConfig";

const useQueryOrder = () => {
  return useQuery('orders',
    async () => await apiRequests.get('OrderData').then(res => res.data)
  )
}

export {
  useQueryOrder
}