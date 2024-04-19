
import HomeCard from "../../components/home/homeCard/HomeCard";
import Chart from "../../components/global/chart/Chart";
import UserWidget from "../../components/users/userWidget/UserWidget";
import { HomeCardData, HomeChartData, UserData } from "../../assets/data/Data";

export default function Home ():React.JSX.Element {
  return(
    <>
    {
      UserData.slice(0,3).map(user =>(
        <UserWidget key={user.id} user={user}/>
      ))
    }
    </>
  )
}