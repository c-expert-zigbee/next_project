// import React from "react";
import cardOne from "../../../styles/images/home/card1.png";
import cardtwo from "../../../styles/images/home/card2.png";
import cardthree from "../../../styles/images/home/card3.png";
import { Card, CardContent, Menu } from "@material-ui/core";

import main from "../../../styles/images/landingPage/1 21.png";

// export default class ImageNft extends React.Component {
//   state = { anchorEl: {} };
//   handleClick = (event, val) => {
//     var obj = this.state.anchorEl;
//     obj[val] = event.currentTarget;
//     this.setState({ anchorEl: obj });
//   };

//   handleClose = (val) => {
//     var obj = this.state.anchorEl;
//     obj[val] = null;
//     this.setState({ anchorEl: obj });
//   };
//   render() {
//     const { index, openDialog, image } = this.props;
//     const { anchorEl } = this.state;
//     return (
//       <>
//         <Card className="cardCollectionImageNft">
//           <CardContent>
//             <div
//               onClick={openDialog}
//               className="div-image"
//               style={{
//                 width: "100%",
//                 height: "240px",
//                 backgroundImage: `url(${image})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               {/* <div className="imageContainerExpo">
//                 <img src={main} alt="expo" className="imageCustomCardLanding" />
//               </div> */}
//               {/* <div className="spantagOne">GARY TAXALI</div>
//               <div className="spantagTwo">300 ETH</div>
//               <div className="spantagThree">LOOKING INWARD</div> */}
//             </div>
//             <div style={{ paddingLeft: 12, paddingRight: 10 }}>
//               <div className="nameFeatured">Adam Goldberg</div>
//               <div className="artistDescription">Fenbufen</div>
//               <div className="flexContainerfeatured">
//                 <div className="ethFeatured">
//                   300 ETH
//                   {/* {bid && <div className="currentBidFeatured">Current bid</div>} */}
//                 </div>
//                 <div className="bidButtonCustomCardLading">
//                   {/* <button className="buyButtonfeatured">
//                     {bid ? "Bid" : "Buy"}
//                   </button> */}
//                   {/* {bid && (
//                     <div className="timeCustomCard">ending 2h 57m 31s</div>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <div className="cardCotainingIcons">
//           <img src={cardOne} alt="no" className="imgIcons" />
//           <img src={cardtwo} alt="no" className="imgIcons" />
//           <img
//             src={cardthree}
//             onClick={(e) => {
//               this.handleClick(e, index);
//             }}
//             alt="no"
//           />
//           <Menu
//             id="long-menu"
//             elevation={0}
//             getContentAnchorEl={null}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "center",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "center",
//             }}
//             anchorEl={anchorEl[index]}
//             keepMounted
//             open={anchorEl[index]}
//             onClose={() => {
//               this.handleClose(index);
//             }}
//           >
//             {[
//               "Register Asset",
//               "Create/Move Collection",
//               "IP Monitor",
//               "View Certificate",
//               "Curators",
//               "Invite/Share",
//               "Privacy",
//             ].map((s) => (
//               <div
//                 className="menuItem"
//                 onClick={() => {
//                   this.handleClose(index);
//                 }}
//               >
//                 {s}
//               </div>
//             ))}
//           </Menu>
//         </div>
//         <br />
//       </>
//     );
//   }
// }

import React from "react";
import { Grid } from "@material-ui/core";
import "../../../styles/landingPage.css";

import heart from "../../../styles/images/landingPage/Group 4685.png";
import share from "../../../styles/images/landingPage/share.png";
export default function CustomCardLanding({
  bid,
  lowSection,
  low,
  index,
  openDialog,
  image,
}) {
  const handleClick = (event, val) => {
    var obj = anchorEl;
    obj[val] = event.currentTarget;
    setAnchorEl(obj);
  };

  const handleClose = (val) => {
    var obj = anchorEl;
    obj[val] = null;
    setAnchorEl(obj);
  };

  return (
    <Grid container className="cardCustomLanding">
      <Grid item xs={12}>
        <Card className="cardCustomStylingLanding">
          <CardContent onClick={openDialog}>
            <div className="imageContainerExpo">
              {/* {bid && (
                  <div className="timeCustomCardCreator">ENDING 2h 57m 31s</div>
                )} */}
              <img src={image} alt="expo" className="imageCustomCardLanding" />
            </div>
            {lowSection && (
              <div style={{ paddingLeft: 12, paddingRight: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="nameFeatured"> Anglerfish</div>
                  <div>
                    <img
                      src={heart}
                      alt="hear"
                      className="imageCardsLandingHeart"
                    />
                    <img
                      src={share}
                      alt="hear"
                      className="imageCardsLandingShare"
                    />
                  </div>
                </div>
                <div className="artistDescription">Adam G</div>
                <div className="flexContainerfeatured">
                  <div className="ethFeatured">
                    300 ETH
                    {bid && (
                      <div className="currentBidFeatured">Current bid</div>
                    )}
                  </div>
                  <div className="bidButtonCustomCardLading">
                    <button className="buyButtonfeatured">
                      {bid ? "Bid" : "Buy"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="cardCotainingIcons">
          <img
            src={cardthree}
            onClick={(e) => {
              this.handleClick(e, index);
            }}
            alt="no"
          />
          <Menu
            id="long-menu"
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            anchorEl={anchorEl[index]}
            keepMounted
            open={anchorEl[index]}
            onClose={() => {
              handleClose(index);
            }}
          >
            {[
              "Register Asset",
              "Create/Move Collection",
              "IP Monitor",
              "View Certificate",
              "Curators",
              "Invite/Share",
              "Privacy",
            ].map((s) => (
              <div
                className="menuItem"
                onClick={() => {
                  handleClose(index);
                }}
              >
                {s}
              </div>
            ))}
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
}
