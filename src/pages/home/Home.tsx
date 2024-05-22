
import HomeCard from "../../components/home/homeCard/HomeCard";
import Chart from "../../components/global/chart/Chart";
import UserWidget from "../../components/users/userWidget/UserWidget";
import OrderWidget from "../../components/order/orderWidget/OrderWidget";
import { useQueryHomeCard } from "../../hooks/HomeHook";
import { useQueryHomeChart } from "../../hooks/HomeHook";
import { useQueryOrder } from "../../hooks/OrderHook";
import { useQueryUser } from "../../hooks/UserHook";
import type { HomeCardType } from "../../type/HomeType";
import type { HomeChartType } from "../../type/HomeType";
import type { OrderType } from "../../type/OrderType";
import type { UserType } from "../../type/UserType";
import Loading from "../../components/global/loading/Loading";

export default function Home(): React.JSX.Element {

  const { data: HomeCardData, isLoading, isFetching } = useQueryHomeCard();
  const { data: HomeChartData } = useQueryHomeChart();
  const { data: OrderData } = useQueryOrder();
  const { data: UserData } = useQueryUser();

  if (isLoading || isFetching) {
    return (<div className="mt-20"><Loading /></div>)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {
          HomeCardData?.map((card: HomeCardType) => (
            <HomeCard key={card.id} {...card} />
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 mt-8">
        {
          HomeChartData?.map((chart: HomeChartType) => (
            <Chart key={chart.id} id={chart.id} data={chart.data} dataKeyX='name' dataKeyY='amount' title={chart.title} />
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 mx-8">
        <div className="shadow-xl rounded-xl">
          {
            UserData?.slice(0, 3).map((user: UserType) => (
              <UserWidget key={user.id} user={user} />
            ))
          }
        </div>
        <div className="shadow-xl rounded-xl">
          {
            OrderData?.slice(0, 3).map((order: OrderType) => (
              <OrderWidget key={order.id} order={order} />
            ))
          }
        </div>
      </div>
    </>
  )
}