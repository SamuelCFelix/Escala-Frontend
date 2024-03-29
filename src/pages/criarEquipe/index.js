import {
  Alert,
  Autocomplete,
  Backdrop,
  Box,
  Button,
  ButtonBase,
  Chip,
  Divider,
  Fade,
  FormControl,
  Icon,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Paper,
  Select,
  Slide,
  Snackbar,
  Stack,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  stepConnectorClasses,
  Pagination,
  Tab,
  Tabs,
  tabsClasses,
} from "@mui/material";
import { motion } from "framer-motion";
import "../../../src/style.css";
import { Fragment, forwardRef, useEffect, useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { pickersLayoutClasses } from "@mui/x-date-pickers";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { format } from "date-fns-tz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

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
    width: "384px",
    height: "72px",
    mb: "16px",
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
    height: "3.8%",
  },
  boxCenter: {
    background: "#1B1B1B",
    width: "898px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  boxStepper: {
    width: "852px",
    mt: "20px",
    mb: "20px",
  },
  step: {
    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
      color: "#ffffff", // text color (next)
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
    "& .MuiStepConnector-line": {
      borderColor: "#F3A913", // Cor padrão da linha
    },
  },
  boxConteudo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "355px",
  },
  boxBotao: {
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    mb: "5px",
  },
  boxBotoesStepper: {
    width: "32%",
    height: "100%",
    mr: "4%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botaoDefault: {
    display: "flex",
    width: "140px",
    height: "30px",
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
  botaoDefaultModal: {
    width: "100px",
    height: "25px",
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
  boxStepperBase: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  box1Stepper0: {
    display: "flex",
    flexDirection: "column",
    width: "305px",
    height: "100%",
    mr: "25px",
    ml: "40px",
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
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root .MuiSelect-select": {
      textAlign: "center",
    },
  },

  box2Stepper0: {
    display: "flex",
    flexDirection: "column",
    width: "548px",
    height: "100%",
    maxHeight: "600px",
    ml: "25px",
    mr: "40px",
  },
  boxTabela: {
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
    display: "flex",
    width: "100%",
    height: "275px",
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
    width: "700px",
    height: "320px",
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
    height: "21%",
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
    height: "3.8%",
  },
  boxInputsModal: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  boxBotaoModal: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
  },
  boxBotoesModal: {
    width: "210px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mr: "10px",
  },
  boxModalDelete: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #D32F2F",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "145px",
    boxShadow: 24,
  },
  boxConteudoModalDelete: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxAreaTituloModalDelete: {
    width: "100%",
    height: "52%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTituloModalDelete: {
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloModalDelete: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "6% 0%",
  },
  baseTituloModalDelete: {
    background: "#D32F2F",
    width: "95%",
    height: "3.5%",
  },
  boxBotaoModalDelete: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    mb: "8px",
  },
  boxBotoesModalDelete: {
    width: "210px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mr: "10px",
  },
  boxProgramacoes: {
    display: "flex",
    flexDirection: "column",
    width: "528px",
    maxHeight: "275px",
    overflowY: "auto",
  },
  boxCulto: {
    display: "flex",
    width: "516px",
    height: "40px",
    justifyContent: "space-between",
    mb: "10px",
  },
  boxCardCulto: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    display: "flex",
    width: "496px",
    height: "40px",
  },
  conteudoCardCulto: {
    display: "flex",
    width: "108px",
    alignItems: "center",
    justifyContent: "center",
  },
  conteudoCardCulto2: {
    display: "flex",
    width: "180px",
    alignItems: "center",
    justifyContent: "center",
  },
  boxBotaoSettings: {
    display: "flex",
    width: "auto",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  box1Stepper1: {
    display: "flex",
    flexDirection: "column",
    width: "408px",
    height: "100%",
    ml: "30px",
  },
  box2Stepper1: {
    display: "flex",
    flexDirection: "column",
    width: "408px",
    height: "100%",
    maxHeight: "600px",
    mr: "30px",
  },
  boxChipDefault: {
    display: "flex",
    width: "100%",
    height: "44px",
    alignItems: "center",
    justifyContent: "start",
    gap: "5px",
  },
  chipDefault: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "32px",
    minHeight: "32px",
  },
  boxChipAdd: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: "10px 0px",
    gap: "6px",
    width: "100%",
    height: "140px",
    maxHeight: "140px",
    overflowY: "auto",
    background: "rgba(0, 0, 0, 0.56)",
  },
  box1Stepper2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  boxTabs: {
    display: "flex",
    width: "800px",
    height: "42px",
  },
  estiloTabs: {
    [`& .${tabsClasses.scrollButtons}`]: {
      color: "#F3A913",
      "&.Mui-disabled": { opacity: 0.3 },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#F3A913",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F3A913",
    },
  },
  boxConteudoTabs: {
    background: "rgba(0, 0, 0, 0.38)",
    width: "800px",
    height: "274px",
    mt: "10px",
  },
  boxRadapeTabs: {
    width: "800px",
    height: "24px",
  },
  boxProgramacaoCards: {
    /* background: "blue", */
    display: "flex",
    width: "100%",
    height: "242px",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  CardProgramacao: {
    display: "flex",
    flexDirection: "column",
    background: "#1B1B1B",
    width: "225px",
    height: "225px",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    mt: "5px",
    paddingTop: "5px",
    gap: "5px",
  },
  boxInfoCard: {
    /* background: "blue", */
    position: "relative",
    display: "flex",
    width: "100%",
    height: "25px",
    alignItems: "center",
    justifyContent: "center",
  },
  boxLimiteTextInfo: {
    display: "flex",
    width: "172px",
    alignItems: "center",
    justifyContent: "center",
  },
  boxIconeCardInfoLeft: {
    position: "absolute",
    left: "0",
    top: "calc(50% + 2px)",
    transform: "translateY(-50%)",
    alignItems: "center",
    justifyContent: "flex-start",
    ml: "5px",
  },
  boxIconeCardInfoRight: {
    position: "absolute",
    right: "0",
    top: "calc(50% + 2px)",
    transform: "translateY(-50%)",
    alignItems: "center",
    justifyContent: "flex-start",
    mr: "5px",
  },
  boxListChipsCardInfo: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "70px",
    maxHeight: "70px",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
    gap: "5px",
  },
  boxPaginacao: {
    display: "flex",
    width: "100%",
    height: "32px",
    alignItems: "center",
    justifyContent: "center",
  },
  estiloPaginacao: {
    "& .MuiPaginationItem-root": {
      color: "#ffffff",
      height: "26px",
      minWidth: "26px",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#F3A913",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#F3A913",
      },
    },
    "& .MuiPaginationItem-root:not(.Mui-selected):hover": {
      backgroundColor: "rgba(243, 169, 19, 0.6)",
    },
  },
};

const CriarEquipe = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [activeStep, setActiveStep] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [disableStepperButton, setDisableStepperButton] = useState(true);
  const [nomeEquipe, setNomeEquipe] = useState("");
  const [descricaoEquipe, setDescricaoEquipe] = useState("");
  const [diaDaSemana, setDiaDaSemana] = useState("");
  const [horario, setHorario] = useState(null);
  const [servindo, setServindo] = useState("");
  const [tituloCulto, setTituloCulto] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [programacoes, setProgramacoes] = useState([]);
  const [positionProgramacao, setPositionProgramacao] = useState("");
  const [tags, setTags] = useState([]);
  const [valueTag, setValueTag] = useState("");
  const [valueTab, setValueTab] = useState(0);
  const [cardsCulto, setCardsCulto] = useState([]);

  useEffect(() => {
    if (diaDaSemana && horario && servindo && tituloCulto) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [diaDaSemana, horario, servindo, tituloCulto]);

  useEffect(() => {
    if (activeStep === 0) {
      if (
        nomeEquipe.trim().length > 0 &&
        descricaoEquipe.trim().length > 0 &&
        programacoes.length > 0
      ) {
        setDisableStepperButton(false);
      } else {
        setDisableStepperButton(true);
      }
    }
  }, [nomeEquipe, descricaoEquipe, programacoes, activeStep]);

  useEffect(() => {
    if (activeStep === 1) {
      if (tags.length > 0) {
        setDisableStepperButton(false);
      } else {
        setDisableStepperButton(true);
      }
    }
  }, [tags, activeStep]);

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

  const diasDaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const titulosCultoDefault = [
    "Culto Celebração - ZS10",
    "Culto Celebração - ZS17",
    "Culto Terça-Feira",
    "Culto de Doutrina",
  ];

  const handleClickSettings = (
    event,
    index,
    dia,
    horarioTimePicker,
    servindo,
    culto
  ) => {
    setDiaDaSemana(dia);
    setHorario(horarioTimePicker);
    setServindo(servindo);
    setTituloCulto(culto);
    setPositionProgramacao(index);
    setAnchorEl(event.currentTarget);
  };

  function normalizeTag(tag) {
    return tag
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function handleGerarProgramacao() {
    let novaProgramacao = {
      dia: diaDaSemana,
      horario: format(new Date(horario), "HH:mm", {
        timeZone: "America/Sao_Paulo",
      }),
      horarioTimePicker: horario,
      servindo: servindo,
      culto: tituloCulto,
    };

    if (
      !programacoes.some(
        (item) =>
          item.dia === novaProgramacao.dia &&
          item.horario === novaProgramacao.horario &&
          item.servindo === novaProgramacao.servindo &&
          normalizeTag(item.culto) === normalizeTag(novaProgramacao.culto)
      )
    ) {
      let novoArrayProgramacoes = [...programacoes, novaProgramacao];
      setProgramacoes(novoArrayProgramacoes);
      handleCloseModal();
      setDiaDaSemana("");
      setHorario(null);
      setServindo("");
      setTituloCulto("");
    } else {
      setSnackbar("warning", "Programação existente");
    }
  }

  function handleEditProgramacao() {
    let positionEdit = positionProgramacao;

    let editProgramacao = {
      dia: diaDaSemana,
      horario: format(new Date(horario), "HH:mm", {
        timeZone: "America/Sao_Paulo",
      }),
      horarioTimePicker: horario,
      servindo: servindo,
      culto: tituloCulto,
    };

    let normalizedEditProgramacaoCulto = normalizeTag(editProgramacao.culto);

    if (
      !programacoes.some(
        (item, index) =>
          index !== positionEdit &&
          item.dia === editProgramacao.dia &&
          item.horario === editProgramacao.horario &&
          item.servindo === editProgramacao.servindo &&
          normalizeTag(item.culto) === normalizedEditProgramacaoCulto
      )
    ) {
      let novoArrayProgramacoes = [...programacoes];
      novoArrayProgramacoes[positionEdit] = editProgramacao;
      setProgramacoes(novoArrayProgramacoes);
      handleCloseModal();
      setDiaDaSemana("");
      setHorario(null);
      setServindo("");
      setTituloCulto("");
      setPositionProgramacao("");
    } else {
      setSnackbar("warning", "Programação existente");
    }
  }

  function handleDeletarProgramacao() {
    let novoArrayProgramacoes = programacoes.filter(
      (programacao, index) => index !== positionProgramacao
    );
    setProgramacoes(novoArrayProgramacoes);
    handleCloseModal();
    setDiaDaSemana("");
    setHorario(null);
    setServindo("");
    setTituloCulto("");
    setPositionProgramacao("");
  }

  function handleAddChip() {
    if (valueTag !== "") {
      let tagExists = tags.some(
        (tag) => normalizeTag(tag.tag) === normalizeTag(valueTag)
      );

      if (!tagExists) {
        let newTag = { tag: valueTag };
        let newArrayTags = [...tags, newTag];
        setTags(newArrayTags);
        setValueTag("");
        console.log(newArrayTags);
      } else {
        setSnackbar("warning", "Tag existente");
      }
    }
  }

  function handleDeleteChip(positionTag) {
    let novoArrayTags = tags.filter((tag, index) => index !== positionTag);
    setTags(novoArrayTags);
  }

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };

  const handlenProximoStep = () => {
    if (activeStep < 2) {
      setActiveStep((proximo) => proximo + 1);
    }
    if (activeStep === 1) {
      let programacoesCard = [...programacoes];
      setCardsCulto(programacoesCard);
      console.log(programacoes);
      console.log(programacoesCard);
    }
  };

  const handlenVoltarStep = () => {
    if (activeStep > 0) {
      setActiveStep((voltar) => voltar - 1);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenModalEdit(false);
    setOpenModalDelete(false);
  };

  const handleCloseMenu = () => {
    setDiaDaSemana("");
    setHorario(null);
    setServindo("");
    setTituloCulto("");
    setAnchorEl(null);
  };

  const CustomInputComponent = forwardRef(({ value, onChange }, ref) => (
    <input
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      list="tituloCulto-list"
    />
  ));

  const stepsCriarEquipe = [
    {
      label: "Informações da equipe",
      conteudo: [
        <Box sx={styles.boxStepperBase}>
          <Box sx={styles.box1Stepper0}>
            <TextField
              value={nomeEquipe}
              onChange={(event) => {
                setNomeEquipe(event.target.value);
              }}
              label="Nome da equipe"
              variant="outlined"
              sx={{ ...styles.textField, mb: "20px" }}
            />
            <TextField
              value={descricaoEquipe}
              onChange={(event) => {
                setDescricaoEquipe(event.target.value);
              }}
              label="Descrição da equipe"
              multiline
              rows={10}
              sx={styles.textField}
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
                      setOpenModal(true);
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
                <Box sx={styles.boxProgramacoes}>
                  {programacoes.map(
                    (
                      { dia, horario, horarioTimePicker, servindo, culto },
                      index
                    ) => (
                      <Box sx={styles.boxCulto} key={`${dia}-${horario}`}>
                        <Box sx={styles.boxCardCulto}>
                          <Box sx={styles.conteudoCardCulto}>
                            <Typography sx={styles.textoTabelaVazio}>
                              {dia}
                            </Typography>
                          </Box>
                          <Box sx={styles.conteudoCardCulto}>
                            <Typography sx={styles.textoTabelaVazio}>
                              {horario}
                            </Typography>
                          </Box>
                          <Box sx={styles.conteudoCardCulto}>
                            <Typography sx={styles.textoTabelaVazio}>
                              {servindo}
                            </Typography>
                          </Box>
                          <Box sx={styles.conteudoCardCulto2}>
                            <Typography
                              sx={{
                                ...styles.textoTabelaVazio,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {culto}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={styles.boxBotaoSettings}>
                          <IconButton
                            sx={{ width: "16px", height: "16px" }}
                            onClick={(event) =>
                              handleClickSettings(
                                event,
                                index,
                                dia,
                                horarioTimePicker,
                                servindo,
                                culto
                              )
                            }
                          >
                            <Icon>
                              <SettingsOutlinedIcon
                                sx={{ color: "#F3A913", fontSize: "16px" }}
                              />
                            </Icon>
                          </IconButton>

                          <Menu
                            id={index}
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            PaperProps={{
                              sx: {
                                backgroundColor: "#565656",
                              },
                            }}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuList>
                              <MenuItem
                                sx={{
                                  color: "#ffffff",
                                }}
                                onClick={() => {
                                  setOpenModalEdit(true);
                                  setAnchorEl(false);
                                }}
                              >
                                <ListItemIcon>
                                  <EditOutlinedIcon
                                    sx={{ color: "#F3A913" }}
                                    fontSize="small"
                                  />
                                </ListItemIcon>
                                <ListItemText>Editar</ListItemText>
                              </MenuItem>
                              <MenuItem
                                sx={{
                                  color: "#ffffff",
                                }}
                                onClick={() => {
                                  setOpenModalDelete(true);
                                  setAnchorEl(false);
                                }}
                              >
                                <ListItemIcon>
                                  <DeleteOutlineOutlinedIcon
                                    color="error"
                                    fontSize="small"
                                  />
                                </ListItemIcon>
                                <ListItemText>Deletar</ListItemText>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                      </Box>
                    )
                  )}
                </Box>
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
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "43px",
                    }}
                  >
                    <ListItem sx={{ mt: "-14px" }}>
                      <FiberManualRecordIcon sx={{ width: "8px", mr: "5px" }} />
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "14px" }}
                        primary="Quinta-Feira / 19:30 / 2 pessoas servindo / Culto de Doutrina"
                      />
                    </ListItem>
                    <ListItem sx={{ mt: "-14px" }}>
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
      conteudo: [
        <Box sx={{ ...styles.boxStepperBase, justifyContent: "space-between" }}>
          <Box sx={styles.box1Stepper1}>
            <Typography
              sx={{
                ...styles.textoTabelaVazio,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Agora vamos criar as TAGS:
            </Typography>
            <Typography sx={{ ...styles.textoTabelaVazio, mt: "12px" }}>
              As tags são identificações que serão necessárias para criação das
              escalas. Elas também serão atribuídas por você aos servos da sua
              equipe de forma individual futuramente.
            </Typography>
            <Typography sx={{ ...styles.textoTabelaVazio, mt: "12px" }}>
              Todos os cultos tem uma quantidade de pessoas servindo, e será
              através das tags que será informado a necessidade de cada culto.
            </Typography>
            <Typography
              sx={{ ...styles.textoTabelaVazio, mt: "12px", mb: "5px" }}
            >
              Exemplo:
            </Typography>

            <Box sx={{ ...styles.boxCardCulto, width: "100%" }}>
              <Box sx={styles.conteudoCardCulto}>
                <Typography sx={styles.textoTabelaVazio}>
                  Quinta-Feira
                </Typography>
              </Box>
              <Box sx={styles.conteudoCardCulto}>
                <Typography sx={styles.textoTabelaVazio}>19:30</Typography>
              </Box>
              <Box sx={styles.conteudoCardCulto}>
                <Typography sx={styles.textoTabelaVazio}>3</Typography>
              </Box>
              <Box sx={styles.conteudoCardCulto2}>
                <Typography
                  sx={{
                    ...styles.textoTabelaVazio,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Culto de Doutrina
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ ...styles.textoTabelaVazio, mt: "5px" }}>
              Nesse culto precisa de 3 servos e suas TAGS serão:
            </Typography>
            <Box sx={styles.boxChipDefault}>
              <Chip
                label="Cortes de Câmera"
                variant="outlined"
                sx={styles.chipDefault}
              />
              <Chip
                label="Gimball"
                variant="outlined"
                sx={styles.chipDefault}
              />
              <Chip
                label="Câmera Central"
                variant="outlined"
                sx={styles.chipDefault}
              />
            </Box>
          </Box>
          <Box sx={styles.box2Stepper1}>
            <TextField
              value={valueTag}
              onChange={(event) => {
                setValueTag(event.target.value);
              }}
              sx={{
                ...styles.textField,
                "&.MuiFormControl-root.MuiTextField-root .MuiInputLabel-root.MuiInputLabel-shrink":
                  {
                    color: "#F3A913",
                  },
                "&.MuiFormControl-root-MuiTextField-root.MuiInputBase-root-MuiFilledInput-root:hover":
                  {
                    backgroundColor: "rgba(0, 0, 0, 0.56)",
                  },
                "& .MuiInputBase-root.MuiFilledInput-root:after": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root.MuiFilledInput-root:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.56)",
                },
                "& .MuiInputBase-root.MuiFilledInput-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.56)",
                },
              }}
              label="Nome da tag"
              variant="filled"
              InputProps={{
                sx: {
                  borderBottom: "2px solid #F3A913",
                  background: "rgba(0, 0, 0, 0.56)",
                },
              }}
            />
            <Box sx={styles.boxChipAdd}>
              {tags.map((tag, index) => (
                <Chip
                  label={tag.tag}
                  variant="outlined"
                  onDelete={() => {
                    handleDeleteChip(index);
                  }}
                  sx={{
                    ...styles.chipDefault,
                    backgroundColor: "rgba(0, 0, 0, 0.56)",
                    "&.MuiButtonBase-root.MuiChip-root .MuiChip-deleteIcon": {
                      color: "rgba(243, 169, 19, 0.7)",
                    },
                  }}
                />
              ))}
            </Box>
            <Button
              sx={{
                ...styles.botaoDefault,
                width: "100%",
                height: "42px",
                borderRadius: "4px",
                fontSize: "14px",
                lineHeight: "26px",
                letterSpacing: "0.46px",
              }}
              onClick={() => {
                handleAddChip();
              }}
            >
              Adicionar Tag
            </Button>
          </Box>
        </Box>,
      ],
    },
    {
      label: "Escala de Serviço",
      conteudo: [
        <Box sx={styles.boxStepperBase}>
          <Box sx={styles.box1Stepper2}>
            <Box sx={styles.boxTabs}>
              <Tabs
                value={valueTab}
                onChange={handleChangeTabs}
                variant="scrollable"
                scrollButtons
                indicatorColor="#F3A913"
                sx={styles.estiloTabs}
              >
                <Tab label="Domingo" sx={{ color: "#ffffff" }} />
                <Tab label="Segunda-Feira" sx={{ color: "#ffffff" }} />
                <Tab label="Terça-Feira" sx={{ color: "#ffffff" }} />
                <Tab label="Quarta-Feira" sx={{ color: "#ffffff" }} />
                <Tab label="Quinta-Feira" sx={{ color: "#ffffff" }} />
                <Tab label="Sexta-Feira" sx={{ color: "#ffffff" }} />
                <Tab label="Sábado" sx={{ color: "#ffffff" }} />
              </Tabs>
            </Box>
            <Box sx={styles.boxConteudoTabs}>
              <Box sx={styles.boxProgramacaoCards}>
                {cardsCulto.map((card) => (
                  <Box sx={styles.CardProgramacao}>
                    <Box sx={styles.boxInfoCard}>
                      <Box sx={styles.boxIconeCardInfoLeft}>
                        <ChurchOutlinedIcon sx={styles.estiloIcones} />
                      </Box>
                      <Box sx={styles.boxLimiteTextInfo}>
                        <Typography
                          sx={{
                            ...styles.textoTabelaVazio,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {card.culto}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={styles.boxInfoCard}>
                      <Box sx={styles.boxIconeCardInfoLeft}>
                        <CalendarMonthOutlinedIcon sx={styles.estiloIcones} />
                      </Box>
                      <Typography sx={styles.textoTabelaVazio}>
                        {card.dia}
                      </Typography>
                    </Box>
                    <Box sx={styles.boxInfoCard}>
                      <Box sx={styles.boxIconeCardInfoLeft}>
                        <AccessTimeOutlinedIcon sx={styles.estiloIcones} />
                      </Box>
                      <Typography sx={styles.textoTabelaVazio}>
                        {card.horario}
                      </Typography>
                    </Box>
                    <Box sx={styles.boxInfoCard}>
                      <Box sx={styles.boxIconeCardInfoLeft}>
                        <GroupsOutlinedIcon sx={styles.estiloIcones} />
                      </Box>
                      <Typography sx={styles.textoTabelaVazio}>
                        {card.servindo}
                      </Typography>
                    </Box>
                    <Box sx={styles.boxInfoCard}>
                      <Box
                        sx={{
                          ...styles.boxIconeCardInfoLeft,
                          top: "calc(50% + 3px)",
                        }}
                      >
                        <LocalOfferOutlinedIcon sx={styles.estiloIcones} />
                      </Box>
                      <Typography sx={styles.textoTabelaVazio}>Tags</Typography>
                      <Box sx={styles.boxIconeCardInfoRight}>
                        <IconButton
                          onClick={() => {
                            /* setOpenModal(true); */
                          }}
                        >
                          <AddCircleOutlineOutlinedIcon
                            sx={{ ...styles.estiloIcones, fontSize: "18px" }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={styles.boxListChipsCardInfo}>
                      <Chip
                        label="Cortes de Câmera"
                        variant="outlined"
                        sx={styles.chipDefault}
                      />
                      <Chip
                        label="Câmera Lateral - Esquerda"
                        variant="outlined"
                        sx={styles.chipDefault}
                      />
                      <Chip
                        label="Gimball"
                        variant="outlined"
                        sx={styles.chipDefault}
                      />
                      <Chip
                        label="Câmera Central"
                        variant="outlined"
                        sx={styles.chipDefault}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={styles.boxPaginacao}>
                <Pagination
                  count={2}
                  shape="rounded"
                  sx={styles.estiloPaginacao}
                />
              </Box>
            </Box>
            <Box sx={styles.boxRadapeTabs}>
              <List>
                <ListItem sx={{ mt: "-18px" }}>
                  <FiberManualRecordIcon
                    sx={{ width: "8px", mr: "5px", color: "#ffffff" }}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      ...styles.textoTabelaVazio,
                      fontSize: "14px",
                    }}
                    primary="Adicione as TAGS para cada culto e depois clique no botão Criar"
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>,
      ],
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
              sx={styles.botaoDefault}
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
              disabled={disableStepperButton}
              sx={{
                ...styles.botaoDefault,
                "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": {
                  background: "#565656",
                  color: "#ffffff",
                },
              }}
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
        open={openModal || openModalEdit}
        onClose={() => {
          handleCloseModal();
          setDiaDaSemana("");
          setHorario(null);
          setServindo("");
          setTituloCulto("");
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal || openModalEdit}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              <Box sx={styles.boxAreaTituloModal}>
                <Box sx={styles.boxTituloModal}>
                  <Typography sx={styles.tituloModal}>
                    {openModal && "Crie uma programação"}
                    {openModalEdit && "Editar programação"}
                  </Typography>
                  <Box sx={styles.baseTituloModal} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}>
                <FormControl
                  sx={{
                    ...styles.textField,
                    width: "auto",
                    marginTop: "15px",
                    ml: "10px",
                  }}
                >
                  <InputLabel id="labelDia">Dia da semana</InputLabel>
                  <Select
                    labelId="labelDia"
                    value={diaDaSemana}
                    label="Dia da semana"
                    onChange={(event) => {
                      setDiaDaSemana(event.target.value);
                    }}
                    sx={{
                      width: "165px",
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "170px",
                          backgroundColor: "#565656",
                          borderRadius: "4px",
                          boxShadow:
                            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
                          overflowY: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          scrollbarWidth: "none",
                        },
                      },
                      MenuListProps: {
                        sx: {
                          "& .Mui-selected": {
                            color: "#F3A913",
                            "&.MuiButtonBase-root.MuiMenuItem-root.Mui-selected":
                              {
                                background: "transparent",
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                                },
                              },
                          },
                        },
                      },
                    }}
                  >
                    {diasDaSemana.map((dia) => (
                      <MenuItem
                        key={dia}
                        value={dia}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#ffffff",
                        }}
                      >
                        {dia}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{
                      ...styles.textField,
                      marginTop: "5px",
                      padding: "10px 0px",
                      width: "auto",
                      "& .MuiFormControl-root.MuiTextField-root": {
                        minWidth: "0px",
                      },
                      "&.MuiInputBase-root.MuiOutlinedInput-root.Mui-error.MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#F3A913",
                        },
                    }}
                    components={["TimePicker"]}
                  >
                    <TimePicker
                      value={horario}
                      onChange={(newValue) => {
                        setHorario(newValue);
                      }}
                      sx={{
                        width: "114px",
                        height: "56px",
                      }}
                      slotProps={{
                        layout: {
                          sx: {
                            [`.${pickersLayoutClasses.contentWrapper}`]: {
                              maxHeight: "170px",
                              backgroundColor: "#565656",
                              color: "#ffffff",
                              borderRadius: "4px",
                              boxShadow:
                                "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",

                              "@media (pointer: fine)": {
                                ".MuiList-root.MuiMultiSectionDigitalClockSection-root:hover":
                                  {
                                    overflowY: "auto",
                                    "&::-webkit-scrollbar": {
                                      display: "none",
                                    },
                                  },
                              },
                              "& .Mui-selected": {
                                backgroundColor: "#F3A913",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "#F3A913",
                                  color: "white",
                                },
                                "&:focus": {
                                  backgroundColor: "#F3A913",
                                  color: "white",
                                },
                              },
                              "& .MuiButtonBase-root.MuiMenuItem-root.MuiMultiSectionDigitalClockSection-item":
                                {
                                  "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                                  },

                                  "&[aria-selected='true']:hover": {
                                    backgroundColor: "#F3A913",
                                  },
                                },
                            },
                          },
                        },
                        actionBar: {
                          actions: [],
                        },
                      }}
                      ampm={false}
                      label="Horário"
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl
                  sx={{
                    ...styles.textField,
                    width: "auto",
                    marginTop: "15px",
                  }}
                >
                  <InputLabel id="servindo">Servindo</InputLabel>
                  <Select
                    labelId="servindo"
                    value={servindo}
                    label="Servindo"
                    onChange={(event) => {
                      setServindo(event.target.value);
                    }}
                    sx={{
                      width: "110px",
                      height: "56px",
                      "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
                        {
                          marginLeft: "18px",
                        },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "170px",
                          backgroundColor: "#565656",
                          borderRadius: "4px",
                          boxShadow:
                            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
                          overflowY: "auto",
                          "&::-webkit-scrollbar": {
                            display: "none",
                          },
                          scrollbarWidth: "none",
                        },
                      },
                      MenuListProps: {
                        sx: {
                          "& .Mui-selected": {
                            color: "#ffffff",
                            "&.MuiButtonBase-root.MuiMenuItem-root.Mui-selected":
                              {
                                background: "#F3A913",
                                width: "40px",
                                borderRadius: "2px",
                                margin: "auto",
                                "&:hover": {
                                  backgroundColor: "#F3A913",
                                },
                              },
                          },
                        },
                      },
                    }}
                  >
                    {[...Array(20)].map((_, index) => (
                      <MenuItem
                        key={index + 1}
                        value={index + 1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#ffffff",
                        }}
                      >
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Autocomplete
                  sx={{
                    ...styles.textField,
                    width: "auto",
                    marginTop: "15px",
                  }}
                  freeSolo
                  disableClearable
                  options={titulosCultoDefault}
                  value={tituloCulto}
                  onChange={(event, newValue) => {
                    setTituloCulto(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Título do culto"
                      variant="outlined"
                      inputComponent={CustomInputComponent}
                      sx={{
                        width: "260px",
                      }}
                      onChange={(event) => {
                        setTituloCulto(event.target.value);
                      }}
                    />
                  )}
                  PaperComponent={({ children }) => (
                    <Paper
                      sx={{
                        display: "flex",
                        maxHeight: "170px",
                        backgroundColor: "#565656",
                        borderRadius: "4px",
                        boxShadow:
                          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
                        overflowY: "auto",
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                        scrollbarWidth: "none",
                        '& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected="true"]':
                          {
                            color: "#F3A913",
                            backgroundColor: "transparent",
                            "&.Mui-focused": {
                              backgroundColor: "transparent",
                            },
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.04)",
                            },
                          },
                        '& .MuiAutocomplete-listbox .MuiAutocomplete-option:not([aria-selected="true"])':
                          {
                            color: "#ffffff",
                            backgroundColor: "transparent",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.04)",
                            },
                          },
                      }}
                    >
                      {children}
                    </Paper>
                  )}
                  renderOption={(props, option) => (
                    <MenuItem {...props}>{option}</MenuItem>
                  )}
                />
              </Box>
              <Box sx={styles.boxBotaoModal}>
                <Box sx={styles.boxBotoesModal}>
                  <Button
                    sx={styles.botaoDefaultModal}
                    onClick={() => {
                      handleCloseModal();
                      setDiaDaSemana("");
                      setHorario(null);
                      setServindo("");
                      setTituloCulto("");
                    }}
                  >
                    Cancelar
                  </Button>
                  {openModal && (
                    <Button
                      disabled={disableButton}
                      sx={{
                        ...styles.botaoDefaultModal,
                        "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": {
                          background: "#565656",
                          color: "#ffffff",
                        },
                      }}
                      onClick={() => {
                        handleGerarProgramacao();
                      }}
                    >
                      Adicionar
                    </Button>
                  )}
                  {openModalEdit && (
                    <Button
                      disabled={disableButton}
                      sx={{
                        ...styles.botaoDefaultModal,
                        "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": {
                          background: "#565656",
                          color: "#ffffff",
                        },
                      }}
                      onClick={() => {
                        handleEditProgramacao();
                      }}
                    >
                      Editar
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModalDelete}
        onClose={() => {
          handleCloseModal();
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalDelete}>
          <Box sx={styles.boxModalDelete}>
            <Box sx={styles.boxConteudoModalDelete}>
              <Box sx={styles.boxAreaTituloModalDelete}>
                <Box sx={styles.boxTituloModalDelete}>
                  <Typography sx={styles.tituloModalDelete}>
                    Deletar Programação?
                  </Typography>
                  <Box sx={styles.baseTituloModalDelete} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}>{""}</Box>
              <Box sx={styles.boxBotaoModalDelete}>
                <Box sx={styles.boxBotoesModalDelete}>
                  <Button
                    sx={{
                      ...styles.botaoDefaultModal,
                      background: "#565656",
                      "&:hover": {
                        background: "#666666",
                      },
                    }}
                    onClick={() => {
                      handleCloseModal();
                    }}
                  >
                    Cancelar
                  </Button>

                  <Button
                    sx={{
                      ...styles.botaoDefaultModal,
                      background: "#D32F2F",
                      "&:hover": {
                        background: "#E63737",
                      },
                      color: "#ffffff",
                    }}
                    onClick={() => {
                      handleDeletarProgramacao();
                    }}
                  >
                    Confirmar
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
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
export default CriarEquipe;
