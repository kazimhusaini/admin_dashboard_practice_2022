import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Feacturd } from "../../components/featured/Feacturd"
import { Widget } from "../../components/widget/Widget"
import { Chart } from "../../components/chart/Chart"
import "./home.scss"
import { ListTable } from "../../components/table/Table"
export function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Feacturd/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <ListTable/>
        </div>
      </div>
    </div>
  )
}

