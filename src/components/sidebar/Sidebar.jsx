import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
export const Sidebar = () => {
  const {dispatch }=useContext(DarkModeContext)
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Admin</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </li>
        </Link>
        <li>
          <FilterFramesIcon className="icon" />
          <span>Orders</span>
        </li>
        <li>
          <AirportShuttleIcon className="icon" />
          <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
          <QueryStatsIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsActiveIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <SettingsIcon className="icon" />
          <span>System Health</span>
        </li>
        <li>
          <PsychologyOutlinedIcon className="icon" />
          <span>Logs</span>
        </li>
        <li>
          <SettingsSystemDaydreamIcon className="icon" />
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
          <ManageAccountsOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <PowerSettingsNewIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "LIGHT" })}
      ></div>
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "DARK" })}
      ></div>
    </div>
  </div>
  )
}
