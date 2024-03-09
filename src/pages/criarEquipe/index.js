import {
  Backdrop,
  Box,
  Button,
  ButtonBase,
  Fade,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Slide,
  Stack,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import "../../../src/style.css";
import { Fragment, useEffect, useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    background: "#000000",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTitulo: {
    width: "25%",
    height: "10%",
    mb: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "4% 0%",
  },
  baseTitulo: {
    background: "#F3A913",
    width: "60%",
    height: "3.5%",
  },
  boxCenter: {
    background: "#1B1B1B",
    width: "50%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  boxStepper: {
    width: "100%",
    mt: "30px",
    mb: "30px",
  },
  step: {
    "& .MuiStepLabel-root .Mui-completed": {
      color: "#F3A913", // circle color (COMPLETED)
    },
    "& .MuiStepConnector-line .Mui-completed": {
      borderColor: "#F3A913", // line color (COMPLETED)
    },
    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
      color: "#ffffff", // Just text label (COMPLETED)
    },
    "& .css-z7uhs0-MuiStepConnector-line": {
      borderColor: "#F3A913", // Color line (COMPLETED)
    },
    "& .MuiStepLabel-iconContainer .MuiStepIcon-completed": {
      fill: "#ffffff", // Cor do ícone de verificação (COMPLETED)
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "#F3A913", // circle color (ACTIVE)
    },
    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
      color: "#F3A913", // Just text label (ACTIVE)
    },
    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
      fill: "#ffffff", // circle's number (ACTIVE)
    },
    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
      color: "#ffffff", // Just text label (NEXT)
    },
    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
      color: "#BDBDBD", // circle color (NEXT)
    },
  },
  boxConteudo: {
    /* background: "red", */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  boxBotao: {
    width: "100%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  boxBotoesStepper: {
    width: "35%",
    height: "100%",
    mr: "4%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botaoStepper: {
    width: "48%",
    height: "50%",
    padding: "0px 40px",
    borderRadius: "10px",
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
  boxStepper0: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  box1Stepper0: {
    display: "flex",
    flexDirection: "column",
    width: "35%",
    height: "100%",
    mr: "25px",
    ml: "40px",
  },
  textField: {
    display: "flex",
    width: "100%",
    "& input": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#BDBDBD",
      "&.MuiInputLabel-shrink": {
        color: "#fff",
      },
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
    },
  },
  box2Stepper0: {
    /* background: "green", */
    display: "flex",
    flexDirection: "column",
    width: "65%",
    height: "100%",
    maxHeight: "600px",
    ml: "25px",
    mr: "40px",
  },
  boxTabela: {
    /* background: "blue", */
    display: "flex",
    width: "100%",
    height: "56px",
    mb: "2%",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #F3A913",
  },
  boxColunas: {
    display: "flex",
    width: "20%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #F3A913",
  },
  nomesTabela: {
    fontWeight: 600,
    fontSize: "14px",
    color: "#ffffff",
    ml: "2%",
  },
  estiloIcones: {
    fontSize: "16px",
    color: "#F3A913",
    mr: "2%",
  },
  boxBotaoAdd: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  boxConteudoTabela: {
    /* background: "red", */
    display: "flex",
    width: "100%",
    height: "100%",
  },
  textoTabelaVazio: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  boxModal: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "35%",
    boxShadow: 24,
  },
  boxConteudoModal: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxAreaTituloModal: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTituloModal: {
    width: "35%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloModal: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "6% 0%",
  },
  baseTituloModal: {
    background: "#F3A913",
    width: "95%",
    height: "3.5%",
  },
  boxInputsModal: {
    /* background: "red", */
    width: "100%",
    height: "80%",
    display: "flex",
  },
};

const CriarEquipe = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handlenProximoStep = () => {
    if (activeStep < 2) {
      setActiveStep((proximo) => proximo + 1);
    }
  };

  const handlenVoltarStep = () => {
    if (activeStep > 0) {
      setActiveStep((voltar) => voltar - 1);
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const programacoes = [];

  const stepsCriarEquipe = [
    {
      label: "Informações da equipe",
      conteudo: [
        <Box sx={styles.boxStepper0}>
          <Box sx={styles.box1Stepper0}>
            <TextField
              label="Nome da equipe"
              variant="outlined"
              sx={{ ...styles.textField, mb: "10%" }}
            />
            <TextField
              label="Descrição da equipe"
              multiline
              rows={11}
              sx={{
                ...styles.textField,
                "& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "#fff",
                },
              }}
            />
          </Box>
          <Box sx={styles.box2Stepper0}>
            <Box sx={styles.boxTabela}>
              <Box sx={styles.boxColunas}>
                <CalendarMonthOutlinedIcon sx={styles.estiloIcones} />
                <Typography sx={styles.nomesTabela}>Dia</Typography>
              </Box>
              <Box sx={styles.boxColunas}>
                <AccessTimeOutlinedIcon sx={styles.estiloIcones} />
                <Typography sx={styles.nomesTabela}>Horário</Typography>
              </Box>
              <Box sx={styles.boxColunas}>
                <GroupsOutlinedIcon sx={styles.estiloIcones} />
                <Typography sx={styles.nomesTabela}>Servindo</Typography>
              </Box>
              <Box
                sx={{
                  ...styles.boxColunas,
                  width: "40%",
                  borderRight: "none",
                  position: "relative",
                }}
              >
                <ChurchOutlinedIcon sx={styles.estiloIcones} />
                <Typography sx={styles.nomesTabela}>Culto</Typography>
                <Box sx={styles.boxBotaoAdd}>
                  <IconButton
                    sx={{ width: "18px", height: "18px" }}
                    onClick={() => {
                      handleOpenModal();
                    }}
                  >
                    <AddCircleOutlineOutlinedIcon
                      sx={{ ...styles.estiloIcones, fontSize: "20px" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.boxConteudoTabela}>
              {programacoes.length > 0 ? (
                ""
              ) : (
                <Typography sx={styles.textoTabelaVazio}>
                  Aqui será inserido as programações padrões da sua equipe...
                  <br />
                  <br />
                  Clique no botão de adicionar no canto superior direito.
                  <br />
                  <br />
                  Observação: Cadastre apenas cultos concretos em que sua equipe
                  serve durante a semana. Cultos especiais como eventos e etc,
                  poderão ser criados como “evento” na sua página inicial.
                  <br />
                  <br />
                  Exemplos de programações padrões:
                  <List>
                    <ListItem>
                      <FiberManualRecordIcon sx={{ width: "8px", mr: "5px" }} />
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "14px" }}
                        primary="Quinta-Feira / 19:30 / 2 pessoas servindo / Culto de Doutrina"
                      />
                    </ListItem>
                    <ListItem>
                      <FiberManualRecordIcon sx={{ width: "8px", mr: "5px" }} />
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "14px" }}
                        primary="Domingo / 10:00 / 3 pessoas servindo / Culto Celebração - ZS10"
                      />
                    </ListItem>
                  </List>
                </Typography>
              )}
            </Box>
          </Box>
        </Box>,
      ],
    },
    {
      label: "Criação das Tags",
      conteudo: [<Box sx={styles.boxStepper0}></Box>],
    },
    {
      label: "Escala de Serviço",
      conteudo: [<Box sx={styles.boxStepper0}></Box>],
    },
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Criação da sua equipe</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Box sx={styles.boxStepper}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {stepsCriarEquipe.map((step, index) => (
              <Step key={step.label} sx={styles.step}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={styles.boxConteudo}>
          {stepsCriarEquipe[activeStep].conteudo}
        </Box>
        <Box sx={styles.boxBotao}>
          <Box sx={styles.boxBotoesStepper}>
            <Button
              sx={styles.botaoStepper}
              onClick={() => {
                if (activeStep !== 0) {
                  handlenVoltarStep();
                } else {
                  window.location.href = "/primeiroAcesso";
                }
              }}
            >
              {activeStep === 0 ? "Cancelar" : "Voltar"}
            </Button>
            <Button
              sx={styles.botaoStepper}
              onClick={() => {
                handlenProximoStep();
              }}
            >
              {activeStep === 2 ? "Criar" : "Próximo"}
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              <Box sx={styles.boxAreaTituloModal}>
                <Box sx={styles.boxTituloModal}>
                  <Typography sx={styles.tituloModal}>
                    Crie uma programação
                  </Typography>
                  <Box sx={styles.baseTituloModal} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}></Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
export default CriarEquipe;
