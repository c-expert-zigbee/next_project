import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import mainLogo from "/public/images/login/mainLogo.png";
import Image from "next/image";
import styles from "./image-holder.module.scss";
import CustomButton from "../Button";

export default function ImageHolderHorizontal() {
  return (
    <Card elevation={2} className={styles["horizontalHolderContainer"]}>
        <Box p={1} display="flex">
            <Box className={styles.horizontalImage}>
                <Image
                    src={mainLogo}
                    // layout="fill"
                    height={70}
                    width={70}
                    objectFit="cover"
                    alt="imageInsideCard"
                />
            </Box>
            <Box pl={1}>
                <Typography variant="body1">Artwork Title</Typography>
                <Typography variant="caption">Creator Name</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" className={styles.horizontalEthText}>TBD ETH</Typography>
                    <Box display="flex" justifyContent="flex-end" ml={2}>
                        <CustomButton className={styles.horizontalRoundedButton}>Waitlist</CustomButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Card>
  );
}
