import { Box, Stack } from "@mui/material";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Libre Baskerville",
    background: "#000000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxCenter: {
    /* background: "red", */
    width: "50%",
    height: "70%",
  },
  stackopcoes: {
    background: "green",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxLider: {
    background: "blue",
    width: "49%",
    height: "100%",
    borderRadius: "10px",
  },
  boxServo: {
    background: "blue",
    width: "49%",
    height: "100%",
    borderRadius: "10px",
  },
};
const PrimerioAcesso = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxCenter}>
        <Stack direction={"row"} sx={styles.stackopcoes}>
          <Box sx={styles.boxLider}></Box>
          <Box sx={styles.boxServo}></Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default PrimerioAcesso;
