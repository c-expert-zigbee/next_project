import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import signUpImage from "src/styles/images/login/mainLogo.png";
import Image from "next/image";
import styles from "./image-holder.module.scss";
import CustomButton from "../Button";

export default function ImageHolderAuth() {
  return (
    <Box display="flex" justifyContent="center">
      <Card elevation={2} className={styles["blueHolder"]}>
        <Box p={5} className={styles["imageHolder"]}>
          <Box className={styles["imageHolderContainer"]}>
            <Image
              src={signUpImage.src}
              layout="fill"
              objectFit="cover"
              alt="imageInsideCard"
            />
          </Box>
          <Box mt={4}>
            <Typography variant="h5">Canapé#2</Typography>
            <Typography className={styles["artistDescription"]}>Jérémy Hervo</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5" className={styles["ethFeatured"]}>
                TBD ETH
              </Typography>
              <Box display="flex" justifyContent="flex-end">
                <CustomButton className={styles.roundedButton}>Waitlist</CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
