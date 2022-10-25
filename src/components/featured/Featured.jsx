import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
const Featured = () => {
  return (
    <div className="featured">
      <div className="top"> 
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon  fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text="70%" strokeWidth={3}/>
        </div>
        <p className="title"> Total sales made today</p>
        <p className="amount"> $420</p>
        <p className="description"> Previous transcription processing. Last payment may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                $23.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last Week</div>
            <div className="itemResult negative">
              <div className="resultAmount">
                <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                $1234
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                $12.4k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured