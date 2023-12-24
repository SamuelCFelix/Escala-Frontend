import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
    minWidth: 725,
    minHeight: 314,
    background: "rgba(2, 2, 2, 0.7)",
    //background: "blue",
    boxShadow: `
                0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25)
              `,
    borderRadius: "10px",
    color: "#ffff",
  },
  conteudoCadastro: {
    minWidth: "95%",
    padding: "20px 18px 14px 18px",
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
    ml: "40%",
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
    position: "relative",
    zIndex: "2",
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
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [errorNome, setErrorNome] = useState(false);
  const [errorCpf, setErrorCpf] = useState(false);
  const [errorDataNascimento, setErrorDataNascimento] = useState(false);
  const [errorTelefone, setErrorTelefone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorChecked, setErrorChecked] = useState(false);

  //Botão de Criar Cadastro
  const handleCriarCadastro = async (event) => {
    if (
      nome === "" ||
      cpf === "" ||
      dataNascimento === "" ||
      telefone === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      confirmPassword !== password ||
      checked === false
    ) {
      if (nome === "") {
        setErrorNome(true);
      }
      if (cpf === "") {
        setErrorCpf(true);
      }
      if (dataNascimento === "") {
        setErrorDataNascimento(true);
      }
      if (telefone === "") {
        setErrorTelefone(true);
      }
      if (email === "") {
        setErrorEmail(true);
      }
      if (password === "") {
        setErrorPassword(true);
      }
      if (confirmPassword === "") {
        setErrorConfirmPassword(true);
      }
      if (confirmPassword !== password) {
        setErrorConfirmPassword(true);
      }
      if (checked === false) {
        setErrorChecked(true);
      }
    } else {
      console.log("PERFIL CRIADO COM SUCESSO!!!");
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

  const validarSomenteLetras = (input) => {
    const regex = /^[A-Za-zÀ-ú ]*$/; // Aceita letras, incluindo acentos, e espaços
    return regex.test(input);
  };

  const handleInputCPF = (event) => {
    const inputCPF = event.target.value;
    const formattedCPF = formatarCPF(inputCPF);
    setCpf(formattedCPF);
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

  const handleInputTelefone = (event) => {
    const inputTelefone = event.target.value;
    const formattedTelefone = formatarTelefone(inputTelefone);
    setTelefone(formattedTelefone);
  };

  const formatarTelefone = (input) => {
    const cleaned = ("" + input).replace(/\D/g, ""); // Remove caracteres não numéricos

    // Limita a 11 números
    const maxLength = 11;
    const formatted = cleaned.slice(0, maxLength);

    // Aplica a formatação durante a digitação
    const firstPart = formatted.slice(0, 2);
    const secondPart = formatted.slice(2, 7);
    const thirdPart = formatted.slice(7, 11);

    let formattedPartial = "";

    if (firstPart) formattedPartial += `(${firstPart})`;
    if (secondPart) formattedPartial += ` ${secondPart}`;
    if (thirdPart) formattedPartial += `-${thirdPart}`;

    return formattedPartial;
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
              "& > :not(style)": { ml: "22px", mt: "36px", width: "80ch" },
            }}
            noValidate
            autoComplete="off"
            direction={"row"}
          >
            <Stack direction={"row"} height={"336px"}>
              {/*COLUNA 1 - INPUT CADASTRAR*/}
              <Box width={"95%"}>
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
                />
                <TextField
                  error={errorTelefone}
                  id="numeroDeTelefone"
                  label="Número de telefone"
                  value={telefone}
                  placeholder="(__) _____-____"
                  variant="outlined"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 15,
                  }}
                  onChange={(event) => {
                    handleInputTelefone(event);
                    setErrorTelefone(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
              </Box>

              {/*COLUNA 2 - INPUT CADASTRAR */}
              <Box width={"93%"} ml={"7%"}>
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
                />
                <TextField
                  error={errorPassword}
                  id="senha"
                  label="Senha"
                  value={password}
                  variant="outlined"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setErrorPassword(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                <TextField
                  error={errorConfirmPassword}
                  id="confirmarSenha"
                  label="Confirmar senha"
                  value={confirmPassword}
                  variant="outlined"
                  type="password"
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setErrorConfirmPassword(false);
                  }}
                  onKeyDown={handleKeyDown}
                  sx={styles.inputCadastro}
                />
                {errorConfirmPassword && (
                  <Typography
                    height="10px"
                    mt={"-32px"}
                    mb={"22px"}
                    variant="body2"
                    color="error"
                  >
                    Senhas diferentes
                  </Typography>
                )}
                <Box display="flex" alignItems="center">
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeCheck}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      color: errorChecked ? "red" : "#fff", // Altera a cor para vermelho quando estiver com erro
                      "&.Mui-checked": {
                        color: "#F3A913",
                      },
                    }}
                  />
                  <Typography
                    color={errorChecked ? "red" : "#fff"}
                    variant="body1"
                    component="div"
                  >
                    Eu li e concordo com o{" "}
                    <a href="#" style={{ color: "#00A7CC" }}>
                      termo de uso e políticas de privacidade
                    </a>
                    .
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Button
            variant="contained"
            onClick={(event) => handleCriarCadastro(event)}
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
          style={{ width: "200px", marginBottom: "10px", marginLeft: "-10px" }}
          alt="LogoRodape"
        />
      </Box>
    </Box>
  );
};

export default Cadastrar;
