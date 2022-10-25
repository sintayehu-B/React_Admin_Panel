import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import {useContext} from "react"
import { DarModeContext } from "../../context/darkModeContext"
import {Link} from "react-router-dom"
const Sidebar = () => {
  const { dispatch } = useContext(DarModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
          <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">
          Sinadmin
        </span>
          </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span className="dashboard">
              Dashboard
            </span>
          </li>
          <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration : "none"}}>
          <li>
            <PeopleOutlineIcon className="icon"/>
            <span className="dashboard">
              Users
            </span>
          </li>
            </Link>
            <Link to="/products" style={{textDecoration : "none"}}>
          <li>
            <ProductionQuantityLimitsIcon className="icon"/>
            <span className="dashboard">
              Products
            </span>
          </li>
            </Link>
          <li>
          <BookOnlineIcon className="icon"/>
            <span className="dashboard">
              Orders
            </span>
          </li>
          <li>
          <LocalShippingIcon className="icon"/>
            <span className="dashboard">
              Delivery
            </span>
          </li>
          <p className="title">ANALYSIS</p>
          <li>
            <InsertChartOutlinedOutlinedIcon className="icon"/>
            <span className="dashboard">
              Stats
            </span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span className="dashboard">
              Logs
            </span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon"/>
            <span className="dashboard">
              System Health
            </span>
          </li>
          <li>
          <NotificationsNoneIcon className="icon"/>
            <span className="dashboard">
              Notifications
            </span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span className="dashboard">
              Settings
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <PersonOutlineIcon className="icon"/>
            <span className="dashboard">
              Profile
            </span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span className="dashboard">
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({ type: "LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({ type: "DARK"})}></div>
        {/* <div className="colorOptions"></div> */}
      </div>
    </div>
  )
}

export default Sidebar