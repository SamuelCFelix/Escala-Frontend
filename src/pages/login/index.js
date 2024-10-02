import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import BackgroundImage from "../../img/fotoProducaoSamuel.jpeg";
import { forwardRef, useEffect, useState } from "react";
import LogoRodape from "../../img/logoZS.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/popUpCadastro/authContext";
import api from "../../api";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import useDeviceType from "../../hooks/useDeviceType";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Libre Baskerville",
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${BackgroundImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100dvw",
    height: "100dvh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  boxLogin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "340px",
    maxWidth: "90dvw",
    height: "auto",
    background: "rgba(2, 2, 2, 0.7)",
    boxShadow: `
                0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25)
              `,
    borderRadius: "10px",
    color: "#ffff",
    backdropFilter: "blur(10px)",
    gap: "10px",
    padding: "20px",
    mb: "10px",
  },
  tituloLogin: {
    fontFamily: "Libre Baskerville",
    fontSize: "2.5rem",
    width: "100%",
    textAlign: "start",
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
    mt: "2px",
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
    width: "80%",
    height: "40px",
    mt: "6px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    mt: "16px",
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
  boxLogoRodape: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    width: "100%",
    height: "64px",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  boxInputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: "30px",
    mt: "20px",
  },
  centralizar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

const Login = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

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
  const [typePassword, setTypePassword] = useState("password");

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

  //Botão de Login
  const handleLogin = async (event) => {
    if (!email || errorEmail || !password || errorPassword) {
      if (!email) {
        setErrorEmail(true);
      }
      if (!password) {
        setErrorPassword(true);
      }
      setSnackbar("error", "Login ou Senha incorreta");
    } else {
      try {
        setLoadingLogin(true);
        const response = await api.post("/loginAuth", {
          email: email,
          senha: password,
        });
        if (response.status === 200) {
          const data = response.data;

          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("login", JSON.stringify(data));

          if (data.primeiroAcesso === true) {
            window.location.href = "/primeiroAcesso";
          } else if (!data?.equipeId) {
            if (data.autorizacao === "adm001") {
              window.location.href = `/primeiroAcesso/criarequipe`;
            } else {
              window.location.href = `/primeiroAcesso/escolherequipe`;
            }
          } else if (data.equipeId === "solicitacao enviada") {
            window.location.href =
              "/primeiroAcesso/escolherequipe/saladeespera";
          } else {
            window.location.href = "/home";
          }
        }
      } catch (error) {
        // Verifica se o erro é de credenciais inválidas (401)
        if (error.response && error.response.status === 401) {
          setSnackbar("error", "Login ou Senha incorreta");
        } else {
          setSnackbar("error", "Erro ao conectar com o servidor");
          console.error("erro com a conexão com o servidor", error);
        }
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

  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          ...styles.boxLogin,
          ml: !isMobile && "auto",
          mr: !isMobile && "5%",
        }}
      >
        <Typography variant="h3" sx={styles.tituloLogin}>
          Login
        </Typography>
        <Box sx={styles.boxInputs} autoComplete="off">
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
            placeholder="email@adpaz-zs.com.br"
          />
          <TextField
            error={errorPassword}
            id="senhaLogin"
            label="Senha"
            variant="outlined"
            type={typePassword}
            onChange={(event) => {
              setPassword(event.target.value);
              setErrorPassword(false);
            }}
            onKeyDown={handleKeyDown}
            sx={styles.inputLogin}
            onBlur={handleBlurPassword}
            InputProps={{
              endAdornment: (
                <>
                  <IconButton
                    sx={{ mr: "-8px" }}
                    onClick={() => {
                      setTypePassword(
                        typePassword === "password" ? "text" : "password"
                      );
                    }}
                  >
                    {typePassword === "password" ? (
                      <VisibilityOutlined sx={{ color: "#F3A913" }} />
                    ) : (
                      <VisibilityOffOutlined sx={{ color: "#F3A913" }} />
                    )}
                  </IconButton>
                </>
              ),
            }}
          />
        </Box>
        <Button sx={styles.botaoEqueciSenha}>Esqueci minha senha</Button>
        <Box sx={styles.centralizar}>
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
        </Box>
        <Box sx={styles.centralizar}>
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

      {/* <Box sx={styles.boxLogoRodape}>
        <img
          src={LogoRodape}
          alt="LogoRodape"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "scale(2.4)",
          }}
        />
      </Box> */}
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
