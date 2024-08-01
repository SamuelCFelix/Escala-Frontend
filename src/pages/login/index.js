import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import BackgroundImage from "../../img/fotoProducaoSamuel.jpeg";
import BackgroundImage2 from "../../img/zs-samuel.jpg";
import { forwardRef, useState } from "react";
import LogoRodape from "../../img/logoZS.png";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "../../components/popUpCadastro/authContext";
import api from "../../api";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

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
    overflow: "auto",
  },
  boxLogin: {
    display: "flex",
    minWidth: 340,
    minHeight: 390,
    marginLeft: "auto",
    /* marginRight: "150px", */
    marginRight: "50px",
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
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "&.MuiFormControl-root-MuiTextField-root .MuiInputLabel-root": {
      color: "#d32f2f !important",
    },
    "& label.Mui-error": {
      color: "#d32f2f !important",
    },
    "& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#d32f2f",
      },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d32f2f",
    },
    "& .MuiOutlinedInput-root.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#d32f2f",
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
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "20px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    color: "#ffffff",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
    "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": {
      color: "#ffffffc5",
      background: "rgba(243, 169, 19, 0.5)",
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
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
};

const Login = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { hidePopup } = useAuth();
  const { showCadastroFeitoPopup } = useAuth();
  const [showPopup, setShowPopup] = useState(showCadastroFeitoPopup);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleOpenPopUpSuccess = () => {
    setShowPopup(true);
  };
  const handleClosePopUpSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowPopup(false);
    hidePopup();
  };

  const [openPopUpError, setOpenPopUpError] = useState(false);
  const handleOpenPopUpError = () => {
    setOpenPopUpError(true);
  };
  const handleClosePopUpError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenPopUpError(false);
  };

  const setSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  //Botão de Login
  const handleLogin = async (event) => {
    if (
      email === "" ||
      errorEmail === true ||
      password === "" ||
      errorPassword === true
    ) {
      if (email === "") {
        setErrorEmail(true);
      }
      if (password === "") {
        setErrorPassword(true);
      }
      handleOpenPopUpError();
    } else {
      try {
        setLoadingLogin(true);
        const response = await api.post("/loginAuth", {
          email: email,
          senha: password,
        });
        if (response.status === 200 && response.data) {
          const data = response.data;

          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("login", JSON.stringify(data));
          if (data.primeiroAcesso === true) {
            window.location.href = "/primeiroAcesso";
          } else if (data.usuarioHostId) {
            if (data?.equipe[0] === "sem equipe") {
              window.location.href = `/primeiroAcesso/criarequipe`;
            } else {
              window.location.href = "/home";
            }
          } else if (data.usuarioDefaultId) {
            if (data?.equipeId === "sem equipe") {
              window.location.href = `/primeiroAcesso/escolherequipe`;
            } else if (data?.equipeId === "solicitacao enviada") {
              window.location.href =
                "/primeiroAcesso/escolherequipe/saladeespera";
            } else {
              window.location.href = "/home";
            }
          }
        }
      } catch (error) {
        setSnackbar("error", "Login ou senha incorreta");
      } finally {
        setLoadingLogin(false);
      }
    }
  };

  //APERTAR ENTER
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlurEmail = (event) => {
    const inputEmail = event.target.value;

    if (inputEmail.trim().length === 0) {
      setErrorEmail(false);
    } else {
      const emailValido = validarEmail(inputEmail);

      if (!emailValido) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }
  };

  const handleBlurPassword = (event) => {
    const inputPassword = event.target.value;

    if (inputPassword.trim().length === 0) {
      setErrorPassword(false);
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
              id="emailLogin"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorEmail(false);
              }}
              onKeyDown={handleKeyDown}
              sx={styles.inputLogin}
              onBlur={handleBlurEmail}
              InputProps={{
                endAdornment: <EmailOutlinedIcon sx={{ color: "#F3A913" }} />,
              }}
            />
            <TextField
              error={errorPassword}
              id="senhaLogin"
              label="Senha"
              variant="outlined"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorPassword(false);
              }}
              onKeyDown={handleKeyDown}
              sx={styles.inputLogin}
              onBlur={handleBlurPassword}
              InputProps={{
                endAdornment: <LockOutlinedIcon sx={{ color: "#F3A913" }} />,
              }}
            />
          </Box>
          <Button sx={styles.botaoEqueciSenha}>Esqueci minha senha</Button>
          <Button
            disabled={loadingLogin}
            variant="contained"
            onClick={(event) => handleLogin(event)}
            sx={styles.botaoEntrar}
          >
            {loadingLogin ? (
              <Box sx={styles.boxAreaCircularProgress}>
                <CircularProgress sx={{ color: "#ffffff" }} size={22} />
              </Box>
            ) : (
              "ENTRAR"
            )}
          </Button>
          <Button
            onClick={handleOpenPopUpSuccess}
            component={Link}
            to="/cadastrar"
            sx={styles.botaoCadastrar}
          >
            Ainda não tenho uma conta
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={showPopup}
        autoHideDuration={3000}
        onClose={handleClosePopUpSuccess}
        style={{
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Alert onClose={handleClosePopUpSuccess} severity="success">
          Perfil criado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openPopUpError}
        autoHideDuration={3000}
        onClose={handleClosePopUpError}
        style={{
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Alert
          onClose={handleClosePopUpError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Email e/ou senha incorreta
        </Alert>
      </Snackbar>

      <Box sx={styles.boxRodape}>
        <img
          src={LogoRodape}
          style={{ width: "200px", marginBottom: "10px", marginLeft: "-10px" }}
          alt="LogoRodape"
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        style={{
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
