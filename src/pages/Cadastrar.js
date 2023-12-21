import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
  boxCadastro: {
    display: "flex",
    minWidth: 670,
    minHeight: 314,
    background: "rgba(2, 2, 2, 0.7)",
    boxShadow: `
                0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25)
              `,
    borderRadius: "10px",
    color: "#ffff",
  },
  conteudoCadastro: {
    minWidth: "94%",
    padding: "30px 20px",
  },
  boxAlinhar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloCadastro: {
    fontFamily: "Libre Baskerville",
    fontSize: "2.5rem",
    width: "200px",
  },
  inputCadastro: {
    background: "rgba(86, 86, 86, 0.8)",
    borderRadius: "10px",
    width: "300px",
    marginBottom: "12%",
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
  botaoCriarConta: {
    width: 210,
    height: 40,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "3%",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
  },
  botaoJaTenhoConta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "4%",
    ml: "39%",
    height: "5px",
    width: "140px",
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

const Cadastrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorSenha, setErrorSenha] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleLogin = async (event) => {
    if (email !== "" && password === "") {
      handlePreencher(password);
    } else if (email === "" && password !== "") {
      handlePreencher(email);
    } else if (email !== "" && password !== "") {
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (email !== "" && password === "") {
        handlePreencher(password);
      } else if (email === "" && password !== "") {
        handlePreencher(email);
      } else if (email !== "" && password !== "") {
        handleLogin(event);
      }
    }
  };

  const handlePreencher = (preencher) => {
    if (preencher === password) {
      setErrorSenha(true);
    } else if (preencher === email) {
      setErrorEmail(true);
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxCadastro}>
        <Box sx={styles.conteudoCadastro}>
          <Box sx={styles.boxAlinhar}>
            <Typography variant="h3" sx={styles.tituloCadastro}>
              Cadastre-se
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { mt: "40px", width: "81ch" },
            }}
            noValidate
            autoComplete="off"
            direction={"row"}
          >
            <Stack direction={"row"} height={"245px"}>
              <Box width={"95%"}>
                <TextField
                  error={errorEmail}
                  id="outlined-basic"
                  label="Nome completo"
                  variant="outlined"
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorEmail(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                <TextField
                  error={errorEmail}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorEmail(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                <TextField
                  error={errorEmail}
                  id="outlined-basic"
                  label="Senha"
                  variant="outlined"
                  type="password"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorEmail(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
              </Box>
              <Box width={"93%"} ml={"7%"}>
                <TextField
                  error={errorSenha}
                  id="outlined-basic"
                  label="Data de nascimento"
                  variant="outlined"
                  type="text"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setErrorSenha(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                <TextField
                  error={errorSenha}
                  id="outlined-basic"
                  label="CPF"
                  variant="outlined"
                  type="text"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setErrorSenha(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                <TextField
                  error={errorSenha}
                  id="outlined-basic"
                  label="Confirmar senha"
                  variant="outlined"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setErrorSenha(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
              </Box>
            </Stack>
          </Box>

          <Button
            variant="contained"
            onClick={(event) => handleLogin(event)}
            sx={styles.botaoCriarConta}
          >
            CRIAR CONTA
          </Button>
          <Button component={Link} to="/login" sx={styles.botaoJaTenhoConta}>
            Já tenho uma conta
          </Button>
        </Box>
      </Box>

      <Box sx={styles.boxRodape}>
        <img
          src={LogoRodape}
          style={{ width: "200px", marginBottom: "10px" }}
          alt="LogoRodape"
        />
      </Box>
    </Box>
  );
};

export default Cadastrar;
