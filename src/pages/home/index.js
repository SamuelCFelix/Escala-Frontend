import { Box } from "@mui/material";
import BackgroundImage from "../../img/Foto Produção Samuel.jpeg";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Libre Baskerville",
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${BackgroundImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const Home = () => {
  return <Box sx={styles.container}>aaaaaaaaaaaaah</Box>;
};
export default Home;
