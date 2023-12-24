import { Box, Button, TextField, Typography } from "@mui/material";
import BackgroundImage from "../img/Foto Produção Samuel.jpeg";
import { useState } from "react";
import axios from "axios";
import LogoRodape from "../img/Logo ZS.png";
import { Link } from "react-router-dom";

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
    padding: "30px 20px",
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
      fontSize: "16px",
      "&.MuiInputLabel-shrink": {
        marginTop: "5px",
        transform: "translate(5px, -26px)",
        fontSize: "15px",
        color: "#fff",
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
  botaoEqueciSenha: {
    height: "5px",
    marginTop: "10px",
    marginLeft: "-4px",
    color: "#fff",
    background: "transparent",
    fontFamily: "Libre Baskerville",
    fontSize: "14px",
    textTransform: "none",
    autoCapitalize: "none",
    textDecorationLine: "underline",
    transition: "none",
    border: "none",
    outline: "none",
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus-visible": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&.MuiButton-contained": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
  },
  botaoEntrar: {
    width: 210,
    height: 40,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "20px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
  },
  botaoCadastrar: {
    height: "5px",
    margin: "30px 0px 0px 60px",
    color: "#fff",
    background: "transparent",
    fontFamily: "Libre Baskerville",
    fontSize: "14px",
    textTransform: "none",
    autoCapitalize: "none",
    transition: "none",
    border: "none",
    outline: "none",
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus-visible": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
    "&.MuiButton-contained": {
      background: "transparent",
      outline: "none",
      boxShadow: "none",
    },
  },
  boxRodape: {
    width: "100vw",
    height: "4vw",
    position: "fixed",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  //Botão de Login
  const handleLogin = async (event) => {
    if (email === "" || password === "") {
      if (email === "") {
        setErrorEmail(true);
      }
      if (password === "") {
        setErrorPassword(true);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      console.log(email, password);
    }
  };

  //APERTAR ENTER
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };

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
              error={errorEmail}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorEmail(false);
              }}
              onKeyDown={handleKeyDown}
              sx={styles.inputLogin}
            />
            <TextField
              error={errorPassword}
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorPassword(false);
              }}
              onKeyDown={handleKeyDown}
              sx={styles.inputLogin}
            />
          </Box>
          <Button sx={styles.botaoEqueciSenha}>Esqueci minha senha</Button>
          <Button
            variant="contained"
            onClick={(event) => handleLogin(event)}
            sx={styles.botaoEntrar}
          >
            ENTRAR
          </Button>
          <Button component={Link} to="/cadastrar" sx={styles.botaoCadastrar}>
            Ainda não tenho uma conta
          </Button>
        </Box>
      </Box>
      <Box sx={styles.boxRodape}>
        <img
          src={LogoRodape}
          style={{ width: "200px", marginBottom: "10px", marginLeft: "-10px" }}
          alt="LogoRodape"
        />
      </Box>
    </Box>
  );
};

export default Login;
