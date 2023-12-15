import { Box, TextField, Typography } from "@mui/material";
import backgroundImage from "../img/Foto Produção Samuel.jpeg";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Libre Baskerville",
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${backgroundImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxLogin: {
    display: "flex",
    minWidth: 340,
    minHeight: 390,
    marginLeft: "auto",
    marginRight: "150px",
    background: "rgba(2, 2, 2, 0.7)",
    boxShadow: `
                0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25)
              `,
    borderRadius: "10px",
    color: "#ffff",
  },
  conteudoLogin: {
    minWidth: 300,
    padding: "45px 20px",
  },
  tituloLogin: {
    fontFamily: "Libre Baskerville",
    fontSize: "2.5rem",
    width: "100px",
    marginLeft: "10px",
  },
  inputLogin: {
    background: "rgba(86, 86, 86, 0.8)",
    borderRadius: "10px",
    width: "100%",
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontFamily: "Libre Baskerville",
      fontSize: "18px",
      "&.MuiInputLabel-shrink": {
        marginTop: "5px",
        transform: "translate(5px, -26px)",
        fontSize: "15px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
    "& input": {
      color: "#fff",
    },
  },
};

const Login = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxLogin}>
        <Box sx={styles.conteudoLogin}>
          <Typography variant="h3" sx={styles.tituloLogin}>
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: "40px 0px 0px  0px", width: "36ch" },
              width: "300px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={styles.inputLogin}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              sx={styles.inputLogin}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
