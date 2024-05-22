import { useQuery } from "react-query";

import apiRequests from "../services/axios/AxiosConfig";

const useQueryHomeCard = () => {
  return useQuery('homeCard',
    async () => await apiRequests.get('HomeCardData').then(res => res.data)
  )
}

const useQueryHomeChart = () => {
  return useQuery('homeChart',
    async () => await apiRequests.get('HomeChartData').then(res => res.data)
  )
}

export {
  useQueryHomeCard,
  useQueryHomeChart
}