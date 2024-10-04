import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BackgroundImage from "../../img/fotoProducaoSamuel.jpeg";
import { useState, forwardRef } from "react";
import LogoRodape from "../../img/logoZS.png";
import { Link, json, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "../../components/popUpCadastro/authContext";
import api from "../../api";
import {
  DeleteOutline,
  Person,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
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
    position: "relative",
    width: "100dvw",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  boxCadastro: {
    display: "flex",
    width: "90dvw",
    maxWidth: "540px",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "rgba(15, 15, 15, 0.7)",
    boxShadow: `
                0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25)
              `,
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    mb: "20px",
  },
  boxAreaColunaHorizontal: {
    display: "flex",
    width: "100%",
    height: "60px",
    mb: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitulo: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "36px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    fontFamily: "Libre Baskerville",
  },
  avatarMembro: {
    width: "80px",
    height: "80px",
    background: "#F3A913",
  },
  boxAreaColunasInput: {
    display: "flex",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
    mb: "12px",
  },
  boxColunaInput: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "26px",
  },
  inputCadastro: {
    background: "rgba(86, 86, 86, 0.8)",
    borderRadius: "5px",
    width: "88%",
    height: "40px",
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontFamily: "Libre Baskerville",
      fontSize: "0.98em",
      transform: "translate(10px, 9px)",
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
      mt: "-6px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "5px",
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
        height: "44px",
      },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d32f2f",
      height: "44px",
    },
    "& .MuiOutlinedInput-root.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#d32f2f",
        height: "44px",
      },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
      mt: "-8px",
      ml: "0px",
    },
  },
  botaoDefault: {
    display: "flex",
    width: "auto",
    height: "30px",
    padding: "0px 20px",
    borderRadius: "5px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    lineHeight: "36px",
    letterSpacing: "1.25px",
    color: "#ffffff",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
    "&:disabled": {
      color: "#ffffff",
      background: "rgba(243, 169, 19, 0.6)",
    },
    zIndex: 999,
  },
  botaoJaTenhoConta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5px",
    width: "auto",
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
    position: "relative",
    zIndex: 999,
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
  iconButtonAddFoto: {
    position: "absolute",
    bottom: 10,
    right: "45.5%",
    transform: "translate(50%, 50%)",
    fontSize: "16px",
    background: "#e77f00",
    "&:hover": {
      background: "#f88800ff",
    },
    borderRadius: "50%",
    zIndex: 99,
  },
  boxAreaCadastro: {
    display: "flex",
    width: "100dvw",
    height: "96dvh",
    minHeight: "500px",
    alignItems: "center",
    justifyContent: "center",
    mb: "40px",
    paddingTop: "40px",
  },
  boxAreaVersaoSistema: {
    display: "flex",
    width: "98dvw",
    height: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textoDefault: {
    fontFamily: "Libre Baskerville",
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "center",
  },
};

const Cadastrar = () => {
  const { showPopup, hidePopup } = useAuth();
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState(null);
  const [fotoUsuarioDB, setFotoUsuarioDB] = useState(null);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [errorNome, setErrorNome] = useState(false);
  const [errorCpf, setErrorCpf] = useState(false);
  const [errorDataNascimento, setErrorDataNascimento] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorConfirmPassword2, setErrorConfirmPassword2] = useState(false);
  const [errorChecked, setErrorChecked] = useState(false);
  const [typePassword, setTypePassword] = useState("password");
  const [typePassword2, setTypePassword2] = useState("password");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const setSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  //Botão de Criar Cadastro
  const handleCriarCadastro = async (event) => {
    if (
      !nome ||
      !cpf ||
      !dataNascimento ||
      !email ||
      !password ||
      !confirmPassword ||
      confirmPassword !== password ||
      !checked ||
      errorNome ||
      errorCpf ||
      errorDataNascimento ||
      errorEmail ||
      errorPassword ||
      errorConfirmPassword ||
      errorConfirmPassword2
    ) {
      if (!nome) {
        setErrorNome(true);
      }
      if (!cpf) {
        setErrorCpf(true);
      }
      if (!dataNascimento) {
        setErrorDataNascimento(true);
      }
      if (!email) {
        setErrorEmail(true);
      }
      if (!password) {
        setErrorPassword(true);
      }
      if (!confirmPassword) {
        setErrorConfirmPassword(true);
      }
      if (confirmPassword !== password) {
        setErrorConfirmPassword(true);
        setErrorConfirmPassword2(true);
      }
      if (checked === false) {
        setErrorChecked(true);
      }
      setSnackbar("error", "Preencha todos os campos corretamente!");
    } else {
      try {
        const capitalizeFirstLetters = (str) => {
          return str
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
        };

        const response = await api.post("/createPerfil", {
          nome: capitalizeFirstLetters(nome),
          foto: fotoUsuarioDB,
          cpf: cpf,
          dataNascimento: dataNascimento,
          email: email,
          senha: password,
          termos: checked,
        });

        if (response.status === 201) {
          showPopup();
          navigate("/login");
        } else {
          setSnackbar("error", "Erro ao conectar com o servidor");
          console.error("erro ao criar perfil", response.data);
        }
      } catch (error) {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao criar perfil: ", error);
      }
    }
  };

  //CheckBox
  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
    setErrorChecked(false);
  };

  //APERTAR ENTER
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCriarCadastro(event);
      setErrorChecked(false);
    }
  };

  const handleInputNome = (event) => {
    const inputNome = event.target.value;

    if (validarSomenteLetras(inputNome)) {
      setNome(inputNome);
    }
  };

  const handleBlurNome = (event) => {
    const inputNome = event.target.value;

    if (inputNome.trim().length === 0) {
      setErrorNome(false);
    } else {
      const spaceFollowedByLetter = / \S/.test(inputNome); // Verifica se há um espaço seguido por qualquer caractere não espaço

      if (!spaceFollowedByLetter) {
        setErrorNome(true);
      } else {
        setErrorNome(false);
      }
    }
  };

  const validarSomenteLetras = (input) => {
    const regex = /^[A-Za-zÀ-ú ]*$/; // Aceita letras, incluindo acentos, e espaços
    return regex.test(input);
  };

  const handleInputCPF = (event) => {
    const inputCPF = event.target.value;
    const formattedCPF = formatarCPF(inputCPF);
    setCpf(formattedCPF);
  };

  const handleBlurCPF = (event) => {
    const inputCPF = event.target.value;
    const formattedCPF = formatarCPF(inputCPF);

    if (formattedCPF.length === 14) {
      setCpf(formattedCPF);
      setErrorCpf(false);
    } else if (formattedCPF.length === 0) {
      setErrorCpf(false);
    } else {
      setErrorCpf(true);
    }
  };

  const formatarCPF = (input) => {
    const cleaned = ("" + input).replace(/\D/g, ""); // Remove caracteres não numéricos

    // Limita a 11 números
    const maxLength = 11;
    const formatted = cleaned.slice(0, maxLength);

    // Aplica a formatação durante a digitação
    const firstPart = formatted.slice(0, 3);
    const secondPart = formatted.slice(3, 6);
    const thirdPart = formatted.slice(6, 9);
    const fourthPart = formatted.slice(9);

    let formattedPartial = "";

    if (firstPart) formattedPartial += `${firstPart}`;
    if (secondPart) formattedPartial += `.${secondPart}`;
    if (thirdPart) formattedPartial += `.${thirdPart}`;
    if (fourthPart) formattedPartial += `-${fourthPart}`;

    return formattedPartial;
  };

  const handleInputDataNascimento = (event) => {
    const inputDataNascimento = event.target.value;
    const formattedDataNascimento = formatarDataNascimento(inputDataNascimento);
    setDataNascimento(formattedDataNascimento);
  };

  const handleBlurDataNascimento = (event) => {
    const inputDataNascimento = event.target.value;
    const formattedDataNascimento = formatarDataNascimento(inputDataNascimento);

    if (formattedDataNascimento.length === 10) {
      setDataNascimento(formattedDataNascimento);
      setErrorDataNascimento(false);
    } else if (formattedDataNascimento.length === 0) {
      setErrorDataNascimento(false);
    } else {
      setErrorDataNascimento(true);
    }
  };

  const formatarDataNascimento = (input) => {
    const cleaned = ("" + input).replace(/\D/g, ""); // Remove caracteres não numéricos

    // Limita a 8 caracteres
    const maxLength = 8;
    const formatted = cleaned.slice(0, maxLength);

    // Aplica a formatação durante a digitação
    const firstPart = formatted.slice(0, 2);
    const secondPart = formatted.slice(2, 4);
    const thirdPart = formatted.slice(4, 8);

    let formattedPartial = "";

    if (firstPart) formattedPartial += `${firstPart}`;
    if (secondPart) formattedPartial += `/${secondPart}`;
    if (thirdPart) formattedPartial += `/${thirdPart}`;

    return formattedPartial;
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@adpaz-zs\.com\.br$/;
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

  const handleBlurConfirmPassword = (event) => {
    const inputConfirmPassword = event.target.value;

    if (inputConfirmPassword.trim().length === 0) {
      setErrorConfirmPassword(false);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Carrega a imagem em um objeto Image
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        // Converte a imagem original para base64 para exibição
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setFotoUsuario(base64String); // Exibição da imagem original com qualidade total
        };
        reader.readAsDataURL(file);

        // Cria um canvas para redimensionar a imagem
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Define o tamanho do canvas (redimensionado)
        const maxDimension = 100; // Tamanho máximo ajustado
        const scale = Math.min(
          maxDimension / img.width,
          maxDimension / img.height
        );
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        // Desenha a imagem redimensionada no canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Converte o canvas para base64 com qualidade reduzida
        const base64StringReduced = canvas.toDataURL("image/jpeg", 0.9); // Qualidade ajustada para 0.9

        // Define a foto para salvar no banco de dados

        setFotoUsuarioDB(base64StringReduced); // Salvar versão reduzida
      };
    }
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.boxAreaCadastro}>
          <Box sx={styles.boxCadastro}>
            <Box sx={styles.boxAreaColunaHorizontal}>
              <Typography sx={styles.textTitulo}>Criar Perfil</Typography>
            </Box>
            <Box
              position={"relative"}
              sx={{
                ...styles.boxAreaColunaHorizontal,
                mb: "34px",
              }}
            >
              <Avatar
                sx={{
                  ...styles.avatarMembro,
                  ...(isMobile ? { width: "70px", height: "70px" } : {}),
                }}
                src={fotoUsuario ? fotoUsuario : undefined}
              >
                {!fotoUsuario && <Person sx={{ fontSize: "32px" }} />}
              </Avatar>

              <IconButton
                onClick={() => {
                  if (fotoUsuario) {
                    setFotoUsuario(null);
                    setFotoUsuarioDB(null);
                  } else {
                    document.getElementById("upload-photo-input").click();
                  }
                }}
                sx={styles.iconButtonAddFoto}
              >
                {fotoUsuario ? (
                  <DeleteOutline
                    sx={{
                      fontSize: "16px",
                      color: "#ffffff",
                    }}
                  />
                ) : (
                  <AddAPhotoOutlinedIcon
                    sx={{
                      fontSize: "16px",
                      color: "#ffffff",
                    }}
                  />
                )}
              </IconButton>
              <input
                id="upload-photo-input"
                type="file"
                accept="image/jpeg, image/png"
                hidden
                onChange={handleFileChange}
              />
            </Box>

            <Box sx={styles.boxAreaColunasInput}>
              <Box sx={styles.boxColunaInput}>
                <TextField
                  error={errorNome}
                  id="nomeCompleto"
                  label="Nome completo"
                  value={nome}
                  variant="outlined"
                  inputProps={{
                    inputMode: "text",
                    pattern: "[A-Za-zÀ-ú ]*",
                    maxLength: 50,
                  }}
                  onChange={(event) => {
                    handleInputNome(event);
                    setErrorNome(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurNome}
                />
                <TextField
                  error={errorCpf}
                  id="cpf"
                  label="CPF"
                  value={cpf}
                  placeholder="___.___.___-__"
                  variant="outlined"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 14,
                  }}
                  onChange={(event) => {
                    handleInputCPF(event);
                    setErrorCpf(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurCPF}
                />
                <TextField
                  error={errorDataNascimento}
                  id="dataDeNascimento"
                  label="Data de nascimento"
                  value={dataNascimento}
                  placeholder="__/__/____"
                  variant="outlined"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 10,
                  }}
                  onChange={(event) => {
                    handleInputDataNascimento(event);
                    setErrorDataNascimento(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurDataNascimento}
                />
              </Box>
              <Box sx={styles.boxColunaInput}>
                <TextField
                  error={errorEmail}
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorEmail(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurEmail}
                  placeholder="email@adpaz-zs.com.br"
                />
                <TextField
                  error={errorPassword}
                  id="senha"
                  label="Senha"
                  value={password}
                  variant="outlined"
                  type={typePassword}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setErrorPassword(false);
                    setErrorConfirmPassword2(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurPassword}
                  InputProps={{
                    endAdornment: (
                      <>
                        <IconButton
                          sx={{ mr: "-8px", mt: "-6px" }}
                          onClick={() => {
                            setTypePassword(
                              typePassword === "password" ? "text" : "password"
                            );
                          }}
                        >
                          {typePassword === "password" ? (
                            <VisibilityOutlined
                              sx={{ color: "#F3A913", fontSize: "20px" }}
                            />
                          ) : (
                            <VisibilityOffOutlined
                              sx={{ color: "#F3A913", fontSize: "20px" }}
                            />
                          )}
                        </IconButton>
                      </>
                    ),
                  }}
                />
                <TextField
                  error={errorConfirmPassword || errorConfirmPassword2}
                  id="confirmarSenha"
                  label="Confirmar senha"
                  helperText={errorConfirmPassword2 ? "Senhas diferentes" : ""}
                  value={confirmPassword}
                  variant="outlined"
                  type={typePassword2}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setErrorConfirmPassword(false);
                    setErrorConfirmPassword2(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                  onBlur={handleBlurConfirmPassword}
                  InputProps={{
                    endAdornment: (
                      <>
                        <IconButton
                          sx={{ mr: "-8px", mt: "-6px" }}
                          onClick={() => {
                            setTypePassword2(
                              typePassword2 === "password" ? "text" : "password"
                            );
                          }}
                        >
                          {typePassword2 === "password" ? (
                            <VisibilityOutlined
                              sx={{ color: "#F3A913", fontSize: "20px" }}
                            />
                          ) : (
                            <VisibilityOffOutlined
                              sx={{ color: "#F3A913", fontSize: "20px" }}
                            />
                          )}
                        </IconButton>
                      </>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                ...styles.boxAreaColunaHorizontal,
                justifyContent: "flex-start",
                ml: "30px",
                mt: "4px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeCheck}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      color: errorChecked ? "red" : "#fff",
                      "&.Mui-checked": {
                        color: "#F3A913",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    color={errorChecked ? "red" : "#fff"}
                    variant="body1"
                    component="div"
                  >
                    Eu li e concordo com os{" "}
                    <a href="#" style={{ color: "#00A7CC" }}>
                      termos de uso e políticas de privacidade
                    </a>
                    .
                  </Typography>
                }
              />
            </Box>
            <Box
              sx={{
                ...styles.boxAreaColunaHorizontal,
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Button
                variant="contained"
                onClick={(event) => handleCriarCadastro(event)}
                sx={styles.botaoDefault}
              >
                Enviar
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={styles.botaoJaTenhoConta}
                onClick={() => {
                  hidePopup();
                }}
              >
                Já tenho uma conta
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Oficial.Beta.Atualização */}
        <Box
          sx={{
            ...styles.boxAreaVersaoSistema,
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <Typography sx={styles.textoDefault}>
            Versão 0.1.0 - 2024 - Todos os direitos reservados
          </Typography>
        </Box>

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
    </>
  );
};

export default Cadastrar;
