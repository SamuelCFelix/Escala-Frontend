import { Box } from "@mui/material";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    padding: "0px 20px",
  },
  boxProximoCulto: {
    /* background: "#000000", */
    background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "446px",
    height: "492px",
    borderRadius: "10px",
  },
};

const PaginaEquipe = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxProximoCulto}></Box>
    </Box>
  );
};
export default PaginaEquipe;
