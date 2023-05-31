import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends,post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <div className="topbaricon1">
            <Person style={{fontSize:"30px"}}/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbaricon2">
            <Chat style={{fontSize:"30px"}} />
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbaricon3">
            <Notifications style={{fontSize:"30px"}}/>
            <span className="topbarIconBadge">3</span>
            </div>
          </div>
        </div>
        <img src="/assets/profiles/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
