import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./profile.module.scss";
import { Favorite, Add } from "@mui/icons-material";
import Image from "next/image";
import { styled } from "@mui/system";


const StyledImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
  `;
const FollowTypography = styled(Typography)`
font-family: 'KernBold';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.022em;
opacity:1;
`;
const ShareTypography = styled(Typography)`
font-family: 'KernRegular';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
opacity:1;
color: #FFFFFF;
`;


export default function ProfileHero(){
  return (
    <Box className={styles["bg-img"]}>
      {/*<Box className={styles.profileHeroContainerOverlay}>
        <IconButton>
          <Image src={UploadCloudIcon} width={70} height={60} />
        </IconButton>
      </Box>*/}
      
          {/* <StyledImage src={banner.src} alt="cover" unoptimized layout="fill" /> */}
       
      <Box px={3} display="flex">
      <Box mx={1}><ShareTypography variant="subtitle2" >share</ShareTypography></Box>
        <Favorite className={styles.starIcon} fontSize='small' />
        <Box mx={1}><FollowTypography variant="subtitle2" >Follow</FollowTypography></Box>
      </Box>
    </Box>
  )
}
