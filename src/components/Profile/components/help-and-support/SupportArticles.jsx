import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const articles = [
    {id: 1, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sit ullamcorper cursus adipiscing viverra neque rhoncus quis. Ornare sed bibendum diam amet non. Viverra risus ultrices facilisis " },
    {id: 2, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sit ullamcorper cursus adipiscing viverra neque rhoncus quis. Ornare sed bibendum diam amet non. Viverra risus ultrices facilisis " },
    {id: 3, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sit ullamcorper cursus adipiscing viverra neque rhoncus quis. Ornare sed bibendum diam amet non. Viverra risus ultrices facilisis " },
    {id: 4, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida sit ullamcorper cursus adipiscing viverra neque rhoncus quis. Ornare sed bibendum diam amet non. Viverra risus ultrices facilisis " }
]

export default function SupportArticles(){
  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitle}>Support Articles</Typography>
      <Grid container>
        <Grid item xs={12}>
            {articles.map((item, index) => (
                <Box key={index} className={styles.supportArticleCard}>
                    <Typography variant="body1" className={styles.supportArticleCardTitle}>{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary" className={styles.supportArticleCardContent}>{item.description}</Typography>
                </Box>
            ))}
        </Grid>
      </Grid>
    </Box>
  )
}
