
import HomeCard from "../../components/home/homeCard/HomeCard";
import Chart from "../../components/global/chart/Chart";
import UserWidget from "../../components/users/userWidget/UserWidget";
import OrderWidget from "../../components/order/orderWidget/OrderWidget";
import { HomeCardData, HomeChartData, UserData, OrderData } from "../../assets/data/Data";

export default function Home ():React.JSX.Element {
  return(
    <>
    {
      OrderData.slice(0,3).map(user =>(
        <OrderWidget key={user.id} order={user}/>
      ))
    }
    </>
  )
}