import {
  Box,
  Button,
  ButtonBase,
  Fade,
  Slide,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import "../../../src/style.css";
import { Fragment, useEffect, useState } from "react";

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
  boxConteudo: {
    background: "red",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
};

const CriarEquipe = () => {
  const [activeStep, setActiveStep] = useState(1);

  const stepsCriarEquipe = [
    {
      label: "Informações da equipe",
      description: [<Box>oiiii</Box>],
    },
    {
      label: "Criação das Tags",
      description: [<Box>oiiii</Box>],
    },
    {
      label: "Escala de Serviço",
      description: [<Box>oiiii</Box>],
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
          <Stepper alternativeLabel>
            {stepsCriarEquipe.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={styles.boxConteudo}></Box>
      </Box>
    </Box>
  );
};
export default CriarEquipe;
