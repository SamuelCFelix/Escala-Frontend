import {
  Box,
  Button,
  ButtonBase,
  Fade,
  Icon,
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
    marginBottom: "30px",
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
    /*     background: "red", */
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
    /* background: "blue", */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  box1Stepper0: {
    /* background: "green", */
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
    width: "65%",
    height: "100%",
    ml: "25px",
    mr: "40px",
  },
  boxTabela: {
    display: "flex",
    width: "100%",
    height: "56px",
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
    fontSize: "14px",
    color: "#ffffff",
    ml: "2%",
  },
  estiloIcones: {
    fontSize: "16px",
    color: "#F3A913",
    mr: "2%",
  },
};

const CriarEquipe = () => {
  const [activeStep, setActiveStep] = useState(0);

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
              rows={7}
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
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "55%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AddCircleOutlineOutlinedIcon
                    sx={{ ...styles.estiloIcones, fontSize: "20px" }}
                  />
                </Box>
              </Box>
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
    </Box>
  );
};
export default CriarEquipe;
