import "./widget.scss"
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) => {

    let data;
    // temporary
    const amount= 100;
    const percentage= 20;

    switch (type) {
        case "user": 
            data = {title: "USERS", isMoney: false, link: "See all users", icon: (<PeopleOutlineIcon className="icon" style={ {color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.219)"} }/>)}
            break;
        case "order": 
            data = {title: "ORDERS", isMoney: false, link: "View all orders", icon: (<ShoppingCartOutlinedIcon className="icon" style={ {color: "goldenrod", backgroundColor: "rgba(218, 168, 32, 0.2)"} }/>)}
            break;
        case "earnings": 
            data = {title: "EARNINGS", isMoney: true, link: "View net earnings", icon: (<MonetizationOnOutlinedIcon className="icon" style={ {color: "green", backgroundColor: "rgba(104, 206, 21, 0.219)"} }/>)}
            break;
        case "balance": 
            data = {title: "BALANCE", isMoney: true, link: "See details", icon: (<AccountBalanceWalletOutlinedIcon className="icon" style={ {color: "purple", backgroundColor: "rgba(163, 19, 219, 0.219)"} }/>)}
            break;
        default : break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpOutlinedIcon className=""/>
                {percentage} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget