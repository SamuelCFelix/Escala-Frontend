import { Close, Person, Search } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  Divider,
  Fade,
  FormControlLabel,
  IconButton,
  Modal,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const styles = {
  boxModal: {
    backgroundColor: "#000000",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "446px",
    height: "auto",
    boxShadow: 24,
  },
  boxConteudoModal: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  },
  areaBoxTitulo: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "44px",
    alignItems: "center",
    justifyContent: "center",
    mb: "10px",
  },
  boxTitulo: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "44px",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },
  textTitulo: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    padding: "0px 20px",
  },
  baseTitulo: {
    background: "#F3A913",
    width: "100%",
    height: "3.5%",
  },
  textField: {
    display: "flex",
    width: "100%",
    "& input": {
      color: "#ffffff",
    },
    "& .MuiInputLabel-root": {
      color: "#BDBDBD",
      "&.MuiInputLabel-shrink": {
        color: "#F3A913",
        ml: "-12px",
      },
    },
    "& .MuiSelect-icon": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F3A913",
      },
      "&:hover fieldset": {
        borderColor: "#F3A913",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F3A913",
      },
      "& .MuiInputBase-input": {
        color: "#ffffff",
      },
    },
    "& .MuiMenuItem-root.Mui-selected": {
      color: "#ffffff",
    },
    "& .MuiSvgIcon-root": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root .MuiSelect-select": {
      textAlign: "center",
    },
    "& .MuiInputBase-input.MuiFilledInput-input": {
      paddingLeft: "0px",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      ml: "-6px",
      mt: "-8px",
      fontSize: "14px",
    },
  },
  avatarMembro: {
    width: "30px",
    height: "30px",
    background: "#F3A913",
  },
  botaoDefault: {
    display: "flex",
    width: "auto",
    height: "25px",
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
  },
  boxStepper: {
    width: "100%",
  },
  boxConteudoStepper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "calc(100% - 180px)",
  },
  step: {
    "& .MuiStepIcon-text": {
      fill: "#ffffff",
    },
    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
      color: "#ffffff", // text color (next)
      mt: "4px",
    },
    "& .MuiStepLabel-root .Mui-completed": {
      color: "#ffffff", // text color (COMPLETED)
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "#F3A913", // text color (ACTIVE)
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root": {
      color: "#565656", // circle color (NEXT)
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root.Mui-active": {
      color: "#F3A913", // circle color (ACTIVE)
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed": {
      color: "#F3A913", // circle color (ACTIVE)
    },
    "& .MuiStepConnector-root.MuiStepConnector-alternativeLabel.Mui-disabled .MuiStepConnector-line":
      {
        borderColor: "#565656", // Cor padrão da linha quando ainda não completado
      },
    "& .MuiStepConnector-root.MuiStepConnector-alternativeLabel.Mui-active .MuiStepConnector-line":
      {
        borderColor: "#F3A913", // Cor padrão da linha quando ativado
      },
    "& .MuiStepConnector-root.MuiStepConnector-alternativeLabel.Mui-completed .MuiStepConnector-line":
      {
        borderColor: "#F3A913", // Cor padrão da linha quando completado
      },
  },
  boxAreaBotaoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "48px",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "-6px",
  },
  divider: {
    borderColor: "#565656",
    width: "95%",
    height: "1px",
  },
  boxDoubleBotoes: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
    mr: "20px",
  },
  checkbox: {
    color: "#F3A913",
    "&.Mui-checked": {
      color: "#F3A913",
    },
    "& .MuiSvgIcon-root": {
      width: "0.8em",
    },
  },
  textFieldSearch: {
    display: "flex",
    width: "52%",
    height: "28px",
    "& .MuiInputBase-root.MuiFilledInput-root": {
      height: "30px",
      paddingLeft: "0px",
    },
    "& input": {
      color: "#ffffff",
      p: "0px",
      ml: "6px",
    },
    "& .MuiInputLabel-root": {
      color: "#BDBDBD",
      "&.MuiInputLabel-shrink": {
        color: "#ffffff",
      },
    },
    "& .MuiSelect-icon": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F3A913",
      },
      "&:hover fieldset": {
        borderColor: "#F3A913",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F3A913",
      },
      "& .MuiInputBase-input": {
        color: "#ffffff",
      },
    },
    "& .MuiMenuItem-root.Mui-selected": {
      color: "#ffffff",
    },
    "& .MuiSvgIcon-root": {
      color: "#F3A913",
    },
    "& .MuiOutlinedInput-root .MuiSelect-select": {
      textAlign: "center",
    },
  },
  boxAreaConteudoStepper: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  },
  boxPerfis: {
    display: "flex",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "flex-start",
    mb: "8px",
  },
  boxInfoPerfil: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textInfoPerfil: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    paddingLeft: "6px",
  },
  boxAreaMembros: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 52px)",
    maxHeight: "32vh",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
  },
  boxCheckAndSearch: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const ModalCriarAviso = (params) => {
  const { openModalCriarAviso, setOpenModalCriarAviso } = params;
  const [activeStep, setActiveStep] = useState(0);
  const [checkedTodos, setCheckedTodos] = useState(true);

  const [membros, setMembros] = useState([
    {
      membro: "João Vinícius Soares",
      email: "joaoexemplo@adpaz-zs.com.br",
    },
    {
      membro: "Samuel Cardoso Félix",
      email: "samuelexemplo@adpaz-zs.com.br",
    },
    {
      membro: "Hatus Yodes Santos",
      email: "hatusexemplo@adpaz-zs.com.br",
    },
    {
      membro: "Gabriela Santos Eugênio",
      email: "gabrielaexemplo@adpaz-zs.com.br",
    },
    { membro: "Renata Xavier Silva", email: "renataexemplo@adpaz-zs.com.br" },
    { membro: "Samuel Silva Xavier", email: "silvaexemplo@adpaz-zs.com.br" },
  ]);

  const handleChangeCheckTodos = (event) => {
    setCheckedTodos(event.target.checked);
  };

  const boxTituloCards = (titulo) => {
    return (
      <Box sx={styles.areaBoxTitulo}>
        <Box sx={styles.boxTitulo}>
          <Typography sx={styles.textTitulo}>{titulo}</Typography>
          <Box sx={styles.baseTitulo} />
        </Box>
      </Box>
    );
  };

  const stepsCriarAviso = [
    {
      label: "Informações",
      conteudo: [
        <Box sx={styles.boxAreaConteudoStepper}>
          <TextField
            focused
            label="Título do aviso"
            placeholder="Digite o título do aviso"
            variant="filled"
            sx={styles.textField}
          />
          <TextField
            placeholder="Texto..."
            multiline
            rows={5}
            sx={styles.textField}
          />
        </Box>,
      ],
    },
    {
      label: "Destinatários",
      conteudo: [
        <Box sx={styles.boxAreaConteudoStepper}>
          <Box sx={styles.boxCheckAndSearch}>
            <FormControlLabel
              sx={{ color: "#ffffff" }}
              control={
                <Checkbox
                  checked={checkedTodos}
                  onChange={handleChangeCheckTodos}
                  inputProps={{ "aria-label": "controlled" }}
                  label="Todos os membros"
                  sx={styles.checkbox}
                />
              }
              label="Todos os membros"
            />
            <TextField
              focused
              variant="filled"
              placeholder="Procurar membro"
              sx={styles.textFieldSearch}
              InputProps={{
                startAdornment: <Search sx={styles.dataIcon} />,
              }}
            />
          </Box>
          <Box sx={styles.boxAreaMembros}>
            {membros?.map(({ membro, email }, index) => (
              <Box key={index} sx={styles.boxPerfis}>
                <Checkbox
                  checked={checkedTodos}
                  onChange={handleChangeCheckTodos}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={styles.checkbox}
                />
                <Avatar sx={styles.avatarMembro}>
                  <Person sx={{ fontSize: "18px" }} />
                </Avatar>
                <Box sx={styles.boxInfoPerfil}>
                  <Typography sx={styles.textInfoPerfil}>{membro}</Typography>
                  <Typography
                    sx={{
                      ...styles.textInfoPerfil,
                      color: "#F3CE24",
                    }}
                  >
                    {email}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>,
      ],
    },
  ];

  return (
    <>
      <Modal
        open={openModalCriarAviso}
        onClose={() => {
          setOpenModalCriarAviso(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalCriarAviso}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Criar Aviso")}
              <IconButton
                onClick={() => {
                  setOpenModalCriarAviso(false);
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Box sx={styles.boxStepper}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {stepsCriarAviso?.map((step, index) => (
                    <Step key={step.label} sx={styles.step}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box sx={styles.boxConteudoStepper}>
                {stepsCriarAviso[activeStep].conteudo}
              </Box>
              <Box sx={styles.boxAreaBotaoCard}>
                <Divider sx={styles.divider} />
                <Box sx={styles.boxDoubleBotoes}>
                  <Button
                    onClick={() => {
                      if (activeStep === 0) {
                        setOpenModalCriarAviso(false);
                      } else if (activeStep === 1) {
                        setActiveStep(activeStep - 1);
                      }
                    }}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    {activeStep === 0 && "Cancelar"}
                    {activeStep === 1 && "Voltar"}
                  </Button>
                  <Button
                    onClick={() => {
                      if (activeStep === 0) {
                        setActiveStep(activeStep + 1);
                      } else if (activeStep === 1) {
                        setOpenModalCriarAviso(false);
                        setActiveStep(0);
                      }
                    }}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    {activeStep === 0 && "Próximo"}
                    {activeStep === 1 && "Enviar"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default ModalCriarAviso;
