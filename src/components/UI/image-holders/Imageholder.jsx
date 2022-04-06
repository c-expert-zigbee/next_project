import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import signUpImage from "src/styles/images/login/mainLogo.png";
import Image from "next/image";
import styles from "./image-holder.module.scss";

export default function ImageHolder() {
  return (
    <Box display="flex" justifyContent="center">
      <Card elevation={2} className={styles["blueHolder"]}>
        <Box p={3} className={styles["imageHolder"]}>
          <Box className={styles["imageHolderContainer"]}>
            <Image
              src={signUpImage.src}
              layout="fill"
              objectFit="cover"
              alt="imageInsideCard"
            />
          </Box>
        </Box>
        <Box p={3}>
          <Typography className={styles["nameFeatured"]}>Anglerfish</Typography>
          <Typography className={styles["artistDescription"]}>Adam G</Typography>
          <Box className={styles["flexContainerfeatured"]}>
            <Typography variant="h5" className={styles["ethFeatured"]}>
              300 ETH
              {/* {bid && <Typography className="currentBidFeatured">Current bid</Typography>} */}
            </Typography>
            <Box className={styles["bidButtonCustomCardLading"]}>
              {/* <button className="buyButtonfeatured">
                    {bid ? "Bid" : "Buy"}
                  </button> */}
              {/* {bid && (
                    <Typography className="timeCustomCard">ending 2h 57m 31s</Typography>
                  )} */}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
