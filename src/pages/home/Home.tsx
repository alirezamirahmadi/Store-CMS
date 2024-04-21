
import HomeCard from "../../components/home/homeCard/HomeCard";
import Chart from "../../components/global/chart/Chart";
import UserWidget from "../../components/users/userWidget/UserWidget";
import OrderWidget from "../../components/order/orderWidget/OrderWidget";
import { HomeCardData, HomeChartData, UserData, OrderData } from "../../assets/data/Data";

export default function Home(): React.JSX.Element {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {
          HomeCardData.map(card => (
            <HomeCard key={card.id} {...card} />
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 mt-8">
        {
          HomeChartData.map(chart => (
            <Chart key={chart.id} id={chart.id} data={chart.data} dataKeyX='name' dataKeyY='amount' title={chart.title} />
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 mx-8">
        <div className="shadow-xl rounded-xl">
          {
            UserData.slice(0, 3).map(user => (
              <UserWidget key={user.id} user={user} />
            ))
          }
        </div>
        <div className="shadow-xl rounded-xl">
          {
            OrderData.slice(0, 3).map(order => (
              <OrderWidget key={order.id} order={order} />
            ))
          }
        </div>
      </div>
    </>
  )
}