import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title"> Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  Jan Doe
                </h1>
                <div className="detailItem">
                  <span className="itemKey"> Email: </span>
                  <span className="itemValue">Janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Phone: </span>
                  <span className="itemValue"> 0925596549 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Age: </span>
                  <span className="itemValue"> 23</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Address: </span>
                  <span className="itemValue"> Hawassa Bole kefle ketema kibele gewi</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Country: </span>
                  <span className="itemValue"> Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
              <Chart aspect={4/1} title="User Spending(Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
            <h1 className="title"> Last Transaction</h1>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single 