import styles from "./swirled-image.module.scss";
import Box from "@material-ui/core/Box";
import Image from "next/image";

export default function SwirledImage({image, height = 250}) {
  return (
    <Box className={styles.greySwirl} style={{height: height}}>
      <Image src={image} layout="fill" alt="curator" className={styles.image} />
    </Box>
  )
}