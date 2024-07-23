import {
  AssignmentLateOutlined,
  CalendarMonthOutlined,
  Close,
  CloudOutlined,
  EditCalendarOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  Person,
  PersonAdd,
  PersonAddAlt1Outlined,
  PersonRemoveAlt1Outlined,
  ReportProblemOutlined,
  SaveOutlined,
  Search,
  SettingsOutlined,
  SmsFailedOutlined,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  LinearProgress,
  Pagination,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  tabsClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import ModalEscalarMembro from "./modais/modalEscalarMembro";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import api from "../../../api";
import ModalPerfilMembro from "./modais/modalPerfilMembro";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 20px",
    gap: "30px",
    mb: "68px",
  },
  boxCardDefault: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minWidth: "446px",
    height: "70vh",
    borderRadius: "10px",
  },
  areaBoxMid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "446px",
    height: "70vh",
    borderRadius: "10px",
  },
  boxCardDefaultMid: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "446px",
    height: "34vh",
    borderRadius: "10px",
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
  textTituloInfoEscala: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    padding: "0px 20px",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  textPerfilEscalaMensal: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    paddingLeft: "6px",
  },
  baseTitulo: {
    background: "#F3A913",
    width: "100%",
    height: "3.5%",
  },
  areaConteudoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 100px)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxAreaBotaoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "48px",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  botaoDefaultCancelar: {
    display: "flex",
    width: "auto",
    height: "30px",
    padding: "0px 40px",
    borderRadius: "5px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    lineHeight: "36px",
    letterSpacing: "1.25px",
    color: "#ffffff",
    background: "#D32F2F",
    "&:hover": {
      background: "#E63737",
    },
  },
  divider: {
    borderColor: "#565656",
    width: "95%",
    height: "1px",
  },
  boxCardEscalaMensal: {
    /* background: "green", */
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    marginBottom: "14px",
  },
  boxInfoEscalaMensal: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "20px",
    gap: "10px",
    paddingTop: "10px",
  },
  areaPerfilEscalado: {
    position: "relative",
    display: "flex",
    width: "calc(100% - 24px)",
    minHeight: "66px",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  avatarIcon: {
    background: "#F3A913",
    width: "50px",
    height: "50px",
  },
  boxInfoPerfilEscalaMensal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "calc(100% - 90px)",
  },
  chipName: {
    border: "1px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "14px",
    fontSize: "9px",
  },
  boxAviso: {
    background: "#1B1B1B",
    display: "flex",
    width: "376px",
    height: "70px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
    padding: "6px 8px",
    border: "1px solid transparent",
    borderRadius: "4px",
    boxSizing: "border-box",
    textTransform: "none",
  },
  boxAreaConteudoAviso: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 46px)",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxAreaTituloDate: {
    width: "100%",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dataTextTituloAviso: {
    color: "#F3A913",
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "left",
    width: "calc(100% - 70px)",
  },
  dataTextAviso: {
    color: "#BDBDBD",
    fontSize: "11px",
    lineHeight: "12px",
    letterSpacing: "0.17px",
    textAlign: "left",
  },
  dataTextDateAviso: {
    color: "#ffffff",
    fontSize: "9px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  boxNumeroAvisos: {
    position: "absolute",
    top: "43%",
    left: "59%",
    transform: "translate(-50%, -50%)",
  },
  numeroAvisos: {
    color: "#ffffff",
    background: "#F3A913",
    borderRadius: "50%",
    fontSize: "10px",
    padding: "1px 5px",
    paddingTop: "2px",
  },
  iconConfigAviso: {
    position: "absolute",
    right: "-30px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  boxTextDestaqueAviso: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
  },
  boxTextoDesfalque: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },
  positionStarCalendario: {
    fontSize: "8px",
    position: "absolute",
    top: "7px",
    right: "5px",
  },
  boxDoubleIconeBotaoEvento: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  boxPaginacao: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "32px",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
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
  IconButtonHover: {
    "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  boxConteudoEvento: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  boxCardEvento: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
    height: "100px",
    height: "100px",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "1px solid #F3A913",
    borderRadius: "5px",
    mb: "32px",
    textTransform: "none",
    zIndex: 9,
    padding: "3px 3px",
    "&:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  boxAreaInfoEvento: {
    display: "flex",
    width: "100%",
    height: "60px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boxDataEvento: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "95px",
    height: "54px",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
  },
  dataTextDateEvento: {
    color: "#EEEEEE",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.17px",
    mb: "6px",
  },
  boxAreaSetasEvento: {
    position: "absolute",
    display: "flex",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    top: "calc(50% - 16px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  IconButtonEvento: {
    "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
    width: "40px",
    height: "40px",
  },
  iconeEvento: {
    position: "absolute",
    bottom: 2,
    fontSize: "18px",
    color: "#F3A913",
  },
  tituloEventoText: {
    color: "#F3A913",
    fontSize: "15px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    fontWeight: 600,
  },
  lineWithTriangles: {
    position: "relative",
    background: "none",
    width: "100%",
    height: "2px",
    borderBottom: "2px dotted #F3A913",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      borderStyle: "solid",
      borderWidth: "6px 6px 0 6px",
      borderColor: "#F3A913 transparent transparent transparent",
    },
    "&::before": {
      left: "-3px",
      transform: "translateY(-25%) rotate(-90deg)",
    },
    "&::after": {
      right: "-3.2px",
      transform: "translateY(-25%) rotate(90deg)",
    },
  },
  boxTituloEvento: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    gap: "3px",
  },
  boxAreaMinhaEquipe: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textPerfilNome: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    margin: "8px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
  boxTabs: {
    width: "auto",
    height: "42px",
  },
  estiloTabs: {
    [`& .${tabsClasses?.scrollButtons}`]: {
      color: "#F3A913",
      "&.Mui-disabled": { opacity: 1 },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#F3A913",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F3A913",
    },
  },
  boxAreaConteudoTabsMinhaEquipe: {
    width: "100%",
    height: "calc(100% - 54px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
    mt: "12px",
    overflowY: "auto",
  },
  boxCardEscalado: {
    width: "98.5%",
    height: "66px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxInfoEscalado1: {
    width: "calc(100% - 60px)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  boxInfoEscalado2: {
    width: "60px",
    height: "46px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: "20px",
  },
  textDataCardEscalado: {
    color: "#BDBDBD",
    fontSize: "14px",
    lineHeight: "143%",
    letterSpacing: "0.17px",
    textAlign: "left",
    width: "100%",
    ml: "8px",
  },
  textDataCardEscaladoCulto: {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "left",
    width: "100%",
    ml: "8px",
  },
  text2DataCardEscalado: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    textAlign: "center",
  },
  chipDefault: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "32px",
    minHeight: "32px",
  },
  boxCardInfoEscaladosMensal: {
    background: "#1B1B1B",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    minHeight: "40px",
    borderRadius: "10px",
    border: "1px solid #F3A913",
    paddingBottom: "4px",
  },
  boxInfoCultoEscalaMensal: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    mt: "8px",
    ml: "8px",
    margin: "8px 0px 6px 8px",
  },
  textInfoCultoEscalaMensal: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0,17px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  iconEscalaMensal: {
    fontSize: "16px",
    color: "#F3A913",
  },
  boxPerfis: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "flex-start",
    ml: "8px",
    mb: "2px",
  },
  avatarMembro: {
    width: "30px",
    height: "30px",
    background: "#F3A913",
  },
  boxInfoPerfil: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 80px)",
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
  boxCardSolicitacao: {
    background: "#1B1B1B",
    width: "90%",
    height: "90px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    mb: "10px",
  },
  boxAreaBotoesSolicitacao: {
    width: "100%",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
  },
  boxAreaInfoSolicatao: {
    display: "flex",
    width: "100%",
    height: "calc(100% - 35px)",
    mb: "5px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
  },
  boxDataSolicitacao: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 56px)",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textCardSolicitacao: {
    color: "#F3A913",
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "left",
  },
  textNameSolicitacao: {
    color: "#FFFFFF",
    fontSize: "11px",
    lineHeight: "12px",
    letterSpacing: "0.17px",
    textAlign: "left",
  },
  boxDoubleTextSolicitacao: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },
  boxAreaTabMembros: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 10px)",
    paddingTop: "10px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  },
  textFieldSearch: {
    display: "flex",
    width: "90%",
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
  boxAreaPerfisMembros: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "calc(100% - 40px)",
    overflowY: "auto",
  },
  boxAreaListMembros: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxDivisaoLista: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "20px",
    gap: "10px",
    paddingTop: "10px",
    mb: "10px",
  },
  textTituloListaMembros: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  dividerList: {
    borderColor: "#565656",
    width: "100%",
    height: "1px",
    justifySelf: "flex-start",
    position: "absolute",
    bottom: 0,
  },
  avatarMembroList: {
    width: "40px",
    height: "40px",
    background: "#F3A913",
  },
  boxCardMembroList: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "50px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  },
  boxAreaInfoMembroList: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 50px)",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textPerfilMembroList: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
  },
  boxAreaTextAndChipMembroLista: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },
  configIconButton: {
    position: "absolute",
    right: "0px",
    top: "50%",
    transform: "translateY(-50%)",
    "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  iconListMembro: {
    color: "#F3A913",
    fontSize: "20px",
  },
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  boxAreaTagsMinhaEquipe: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    overflowY: "auto",
  },
};

const PaginaEquipe = (params) => {
  const { usuario } = params;
  const [userLogin, setUserLogin] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [solicitacoesEntrada, setSolicitacoesEntrada] = useState([]);
  const [
    loadingTabelaSolicitacoesEntrada,
    setLoadingTabelaSolicitacoesEntrada,
  ] = useState(true);
  const [usuarioHostEquipe, setUsuarioHostMinhaEquipe] = useState([]);
  const [administradoresEquipe, setAdministradoresMinhaEquipe] = useState([]);
  const [membrosMinhaEquipe, setMembrosMinhaEquipe] = useState([]);
  const [loadingTabelaMinhaEquipeMembros, setLoadingTabelaMinhaEquipeMembros] =
    useState(true);
  const [tagsMinhaEquipe, setTagsMinhaEquipe] = useState([]);

  const [openModalPerfilMembro, setOpenModalPerfilMembro] = useState(false);

  const [proximaEscala, setProximaEscala] = useState([
    {
      membro: "João Vinícius Soares",
      tag: "Cortes de Câmera",
      possuiTag: true,
    },
    {
      membro: "Samuel Cardoso Félix",
      tag: "Câmera Lateral - Direita",
      possuiTag: true,
    },
    {
      membro: "Hatus Yodes Santos",
      tag: "Câmera Lateral - Esquerda",
      possuiTag: false,
    },
    { membro: "NÃO PREENCHIDO", tag: "Câmera Central", possuiTag: null },
    { membro: "Renata Xavier Silva", tag: "Gimball 1", possuiTag: true },
    { membro: "Samuel Silva Xavier", tag: "Gimball 2", possuiTag: true },
  ]);
  const [editarEscala, setEditarEscala] = useState(false);
  const [openModalEscalarMembro, setOpenModalEscalarMembro] = useState(false);
  const [valueTabInformacoes, setValueTabInformacoes] = useState("membros");

  //UseEffect's

  useEffect(() => {
    buscarTabelaSolicitacoesEntrada();
    buscarMembrosMinhaEquipe();
    buscarTagsMinhaEquipe();
  }, []);

  //API's

  // Tabela Solicitações de Entrada

  const buscarTabelaSolicitacoesEntrada = async () => {
    try {
      setLoadingTabelaSolicitacoesEntrada(true);
      const response = await api.post("/solicitacoesDeEntrada", {
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        setSolicitacoesEntrada(response?.data);
        setLoadingTabelaSolicitacoesEntrada(false);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar solicitações de entrada: ", error);
    }
  };

  const aceitarSolicitacao = async (usuarioDefaultId) => {
    try {
      const response = await api.put("/aceitarMembroEquipe", {
        usuarioId: usuarioDefaultId,
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        buscarTabelaSolicitacoesEntrada();
        buscarMembrosMinhaEquipe();
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao aceitar solicitação de entrada: ", error);
    }
  };

  const recusarSolicitacao = async (usuarioDefaultId) => {
    try {
      const response = await api.delete("/recusarMembroEquipe", {
        usuarioId: usuarioDefaultId,
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        buscarTabelaSolicitacoesEntrada();
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao recusar solicitação de entrada: ", error);
    }
  };

  // Tabela Membros da Equipe

  const buscarMembrosMinhaEquipe = async () => {
    try {
      setLoadingTabelaMinhaEquipeMembros(true);
      const response = await api.post("/buscarMembrosEquipe", {
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        organizarListaMembros(response?.data);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar membros da equipe: ", error);
    }
  };

  const organizarListaMembros = (membros) => {
    const administradoresEquipe = [];
    const membrosEquipe = [];
    let usuarioHost = [];

    usuarioHost = membros.filter((membro) => membro.autorizacao === "adm001");

    administradoresEquipe.push(
      ...membros.filter((membro) => membro.autorizacao === "adm002")
    );

    membrosEquipe.push(
      ...membros.filter(
        (membro) => membro.autorizacao === "" || membro.autorizacao === null
      )
    );

    setUsuarioHostMinhaEquipe([...usuarioHost]);
    setAdministradoresMinhaEquipe([...administradoresEquipe]);
    setMembrosMinhaEquipe([...membrosEquipe]);
    setLoadingTabelaMinhaEquipeMembros(false);
  };

  const buscarTagsMinhaEquipe = async () => {
    try {
      setLoadingTabelaMinhaEquipeMembros(true);
      const response = await api.post("/buscarTagsEquipe", {
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        setTagsMinhaEquipe(response?.data);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar tags da equipe: ", error);
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

  const boxBotaoCards = (titulo) => {
    return (
      <Box sx={styles.boxAreaBotaoCard}>
        <Divider sx={styles.divider} />
        <Button variant="contained" sx={{ ...styles.botaoDefault, mb: "8px" }}>
          {titulo}
        </Button>
      </Box>
    );
  };

  const handleChangeTabsInformacoes = (event, newValue) => {
    setValueTabInformacoes(newValue);
  };

  return (
    <Box sx={styles.container}>
      {/* Tabela ESCALA DO MÊS */}
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Escala do mês")}
        <Box sx={{ ...styles.areaConteudoCard, overflowY: "auto" }}>
          {/* {Array.from({ length: 10 }).map((_, index) => (
            <Box sx={styles.boxCardEscalaMensal}>
              <Box sx={styles.boxInfoEscalaMensal}>
                <Typography sx={styles.textTituloInfoEscala}>
                  <CalendarMonthOutlined
                    sx={{ color: "#F3A913", fontSize: "16px" }}
                  />
                  19/05/24 - DOMINGO
                </Typography>
                <Divider
                  sx={{
                    ...styles.divider,
                    justifySelf: "flex-start",
                    position: "absolute",
                    bottom: 0,
                  }}
                />
              </Box>
              <Box sx={styles.boxCardInfoEscaladosMensal}>
                <Box sx={styles.boxInfoCultoEscalaMensal}>
                  <Typography sx={styles.textInfoCultoEscalaMensal}>
                    <ChurchOutlinedIcon sx={styles.iconEscalaMensal} />
                    Culto Celebração - ZS16
                  </Typography>
                  <Typography sx={styles.textInfoCultoEscalaMensal}>
                    <AccessTimeOutlinedIcon sx={styles.iconEscalaMensal} />
                    Domingo - 16:00
                  </Typography>
                </Box>
                {proximaEscala?.map(({ membro, tag, possuiTag }, index) => (
                  <Box key={index} sx={styles.boxPerfis}>
                    <Avatar
                      sx={{
                        ...styles.avatarMembro,
                        background:
                          membro !== "NÃO PREENCHIDO" ? "#F3A913" : "#D32F2F",
                      }}
                    >
                      {membro !== "NÃO PREENCHIDO" ? (
                        <Person sx={{ fontSize: "18px" }} />
                      ) : (
                        <ReportProblemOutlined
                          sx={{ fontSize: "18px", color: "#F3A913" }}
                        />
                      )}{" "}
                    </Avatar>
                    <Box sx={styles.boxInfoPerfil}>
                      <Typography
                        sx={{
                          ...styles.textInfoPerfil,
                          ...styles.configBox,
                          width: "auto",
                          gap: "4px",
                          color:
                            membro !== "NÃO PREENCHIDO" ? "#ffffff" : "#D32F2F",
                        }}
                      >
                        {membro}
                        {!possuiTag && membro !== "NÃO PREENCHIDO" && (
                          <Chip
                            label="Sem TAG"
                            variant="outlined"
                            sx={{
                              ...styles.chipName,
                              borderColor: "#D32F2F",
                            }}
                          />
                        )}
                        {userLogin && index === 1 && (
                          <Chip
                            label="Eu"
                            variant="outlined"
                            sx={styles.chipName}
                          />
                        )}
                      </Typography>
                      <Typography
                        sx={{
                          ...styles.textInfoPerfil,
                          color: "#F3CE24",
                        }}
                      >
                        {tag}
                      </Typography>
                    </Box>
                    {editarEscala && membro !== "NÃO PREENCHIDO" && (
                      <IconButton
                        sx={{
                          "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
                            backgroundColor: "rgba(211, 47, 47, 0.2)",
                          },
                        }}
                      >
                        <PersonRemoveAlt1Outlined
                          sx={{
                            color: "#D32F2F",
                            fontSize: "22px",
                          }}
                        />
                      </IconButton>
                    )}
                    {membro === "NÃO PREENCHIDO" && (
                      <IconButton
                        sx={styles.IconButtonHover}
                        onClick={() => {
                          setOpenModalEscalarMembro(true);
                        }}
                      >
                        <PersonAddAlt1Outlined
                          sx={{ color: "#F3A913", fontSize: "22px" }}
                        />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          ))} */}
          <Box sx={{ ...styles.configBox, height: "100%" }}>
            <Typography sx={styles.textTitulo}>Escala não gerada</Typography>
          </Box>
        </Box>
        <Box sx={styles.boxAreaBotaoCard}>
          <Divider sx={styles.divider} />
          {editarEscala ? (
            <Box sx={{ ...styles.configBox, gap: "16px" }}>
              <Button
                variant="contained"
                sx={{
                  ...styles.botaoDefaultCancelar,
                  mb: "8px",
                  gap: "4px",
                  padding: "0px 20px",
                }}
                onClick={() => setEditarEscala(false)}
              >
                <Close sx={{ fontSize: "18px" }} />
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{
                  ...styles.botaoDefault,
                  mb: "8px",
                  gap: "4px",
                }}
                onClick={() => setEditarEscala(false)}
              >
                <SaveOutlined sx={{ fontSize: "18px" }} />
                Salvar
              </Button>
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
              onClick={() => setEditarEscala(true)}
            >
              <RestartAltOutlinedIcon sx={{ fontSize: "18px" }} />
              Gerar escala novamente
            </Button>
          )}
        </Box>
      </Box>

      {/* Tabela SOLICITAÇÕES DE ENTRADA */}
      {(usuario?.autorizacao === "adm001" ||
        usuario?.autorizacao === "adm002") && (
        <Box sx={styles.boxCardDefault}>
          {boxTituloCards("Solicitações de entrada")}
          <Box sx={{ ...styles.areaConteudoCard, overflowY: "auto" }}>
            {loadingTabelaSolicitacoesEntrada && (
              <Box sx={styles.boxAreaCircularProgress}>
                <CircularProgress />
              </Box>
            )}

            {!loadingTabelaSolicitacoesEntrada && (
              <>
                {solicitacoesEntrada?.map(
                  ({ usuarioDefaultId, nome, email, createAt }, index) => (
                    <Box key={index} sx={styles.boxCardSolicitacao}>
                      <Box sx={styles.boxAreaInfoSolicatao}>
                        <Avatar
                          sx={{
                            ...styles.avatarMembroList,
                            margin: "0px 0px -22px 6px",
                          }}
                        >
                          <Person />
                        </Avatar>
                        <Box sx={styles.boxDataSolicitacao}>
                          <Box
                            sx={{
                              ...styles.boxDoubleTextSolicitacao,
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography sx={styles.textCardSolicitacao}>
                              SOLICITAÇÃO DE ENTRADA
                            </Typography>
                            <Typography
                              sx={{
                                ...styles.textCardSolicitacao,
                                color: "#ffffff",
                                fontSize: "9px",
                              }}
                            >
                              {createAt}
                            </Typography>
                          </Box>

                          <Box sx={styles.boxDoubleTextSolicitacao}>
                            <Typography
                              sx={{
                                ...styles.textNameSolicitacao,
                                fontWeight: 600,
                              }}
                            >
                              {nome}
                            </Typography>
                            <Typography
                              sx={{
                                ...styles.textNameSolicitacao,
                                color: "#BDBDBD",
                              }}
                            >
                              enviou um pedido de entrada!
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              ...styles.textCardSolicitacao,
                              color: "#F3CE24",
                            }}
                          >
                            {email}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={styles.boxAreaBotoesSolicitacao}>
                        <Button
                          onClick={() => {
                            recusarSolicitacao(usuarioDefaultId);
                          }}
                          variant="contained"
                          sx={{
                            ...styles.botaoDefaultCancelar,
                            height: "20px",
                            fontSize: "10px",
                            padding: "0px 20px",
                          }}
                        >
                          Recusar
                        </Button>
                        <Button
                          onClick={() => {
                            aceitarSolicitacao(usuarioDefaultId);
                          }}
                          variant="contained"
                          sx={{
                            ...styles.botaoDefault,
                            height: "20px",
                            fontSize: "10px",
                            mr: "10px",
                          }}
                        >
                          Aceitar
                        </Button>
                      </Box>
                    </Box>
                  )
                )}

                {solicitacoesEntrada?.length === 0 && (
                  <Box sx={{ ...styles.configBox, height: "100%" }}>
                    <Typography sx={styles.textTitulo}>
                      Nenhuma solicitação
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
          <Box sx={styles.boxAreaBotaoCard}>
            <Divider sx={styles.divider} />
          </Box>
        </Box>
      )}
      {/* Tabela MINHA EQUIPE */}
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Minha equipe")}
        <Box sx={styles.areaConteudoCard}>
          <Box sx={styles.boxAreaMinhaEquipe}>
            <Box sx={styles.boxTabs}>
              <Tabs
                value={valueTabInformacoes}
                onChange={handleChangeTabsInformacoes}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={styles.estiloTabs}
              >
                <Tab
                  label="Membros"
                  value="membros"
                  sx={{ color: "#ffffff" }}
                />
                <Tab
                  label="Programações"
                  value="programacoes"
                  sx={{ color: "#ffffff" }}
                />
                <Tab label="Tags" value="tags" sx={{ color: "#ffffff" }} />
              </Tabs>
            </Box>
            <Box sx={styles.boxAreaConteudoTabsMinhaEquipe}>
              {valueTabInformacoes === "membros" && (
                <>
                  {loadingTabelaMinhaEquipeMembros && (
                    <Box sx={styles.boxAreaCircularProgress}>
                      <CircularProgress />
                    </Box>
                  )}

                  {!loadingTabelaMinhaEquipeMembros && (
                    <>
                      <Box sx={styles.boxAreaTabMembros}>
                        <TextField
                          focused
                          variant="filled"
                          placeholder="Procurar membro"
                          sx={styles.textFieldSearch}
                          InputProps={{
                            startAdornment: <Search />,
                          }}
                        />
                        <Box sx={styles.boxAreaPerfisMembros}>
                          <Box sx={styles.boxAreaListMembros}>
                            <Box sx={styles.boxDivisaoLista}>
                              <Typography sx={styles.textTituloListaMembros}>
                                <StarBorderOutlined
                                  sx={{ color: "#F3A913", fontSize: "16px" }}
                                />
                                ADMINISTRADORES:{" "}
                                {administradoresEquipe?.length + 1}
                              </Typography>
                              <Divider sx={styles.dividerList} />
                            </Box>
                            {usuarioHostEquipe?.map(
                              ({ nome, email }, index) => (
                                <Box sx={styles.boxCardMembroList}>
                                  <Avatar sx={styles.avatarMembroList}>
                                    <Person />
                                  </Avatar>
                                  <Box sx={styles.boxAreaInfoMembroList}>
                                    <Box
                                      sx={styles.boxAreaTextAndChipMembroLista}
                                    >
                                      <Typography
                                        sx={styles.textPerfilMembroList}
                                      >
                                        {nome}
                                      </Typography>
                                      <Chip
                                        label="Admin"
                                        variant="outlined"
                                        sx={styles.chipName}
                                      />
                                      <FlagOutlinedIcon
                                        sx={{
                                          color: "#F3A913",
                                          fontSize: "16px",
                                        }}
                                      />
                                    </Box>
                                    <Typography
                                      sx={{
                                        ...styles.textCardSolicitacao,
                                        color: "#F3CE24",
                                      }}
                                    >
                                      {email}
                                    </Typography>
                                  </Box>
                                  <IconButton
                                    onClick={() => {
                                      setOpenModalPerfilMembro(true);
                                    }}
                                    sx={styles.configIconButton}
                                  >
                                    <ManageAccountsOutlinedIcon
                                      sx={styles.iconListMembro}
                                    />
                                  </IconButton>
                                </Box>
                              )
                            )}
                            {administradoresEquipe?.map(
                              ({ nome, email }, index) => (
                                <Box sx={styles.boxCardMembroList}>
                                  <Avatar sx={styles.avatarMembroList}>
                                    <Person />
                                  </Avatar>
                                  <Box sx={styles.boxAreaInfoMembroList}>
                                    <Box
                                      sx={styles.boxAreaTextAndChipMembroLista}
                                    >
                                      <Typography
                                        sx={styles.textPerfilMembroList}
                                      >
                                        {nome}
                                      </Typography>
                                      <Chip
                                        label="Admin"
                                        variant="outlined"
                                        sx={styles.chipName}
                                      />
                                    </Box>
                                    <Typography
                                      sx={{
                                        ...styles.textCardSolicitacao,
                                        color: "#F3CE24",
                                      }}
                                    >
                                      {email}
                                    </Typography>
                                  </Box>
                                  <IconButton sx={styles.configIconButton}>
                                    <ManageAccountsOutlinedIcon
                                      sx={styles.iconListMembro}
                                    />
                                  </IconButton>
                                </Box>
                              )
                            )}
                          </Box>
                          <Box sx={styles.boxAreaListMembros}>
                            <Box sx={styles.boxDivisaoLista}>
                              <Typography sx={styles.textTituloListaMembros}>
                                <GroupsOutlinedIcon
                                  sx={{ color: "#F3A913", fontSize: "16px" }}
                                />
                                MEMBROS: {membrosMinhaEquipe?.length}
                              </Typography>
                              <Divider sx={styles.dividerList} />
                            </Box>
                            {membrosMinhaEquipe?.map(
                              ({ nome, email }, index) => (
                                <Box sx={styles.boxCardMembroList}>
                                  <Avatar sx={styles.avatarMembroList}>
                                    <Person />
                                  </Avatar>
                                  <Box sx={styles.boxAreaInfoMembroList}>
                                    <Box
                                      sx={styles.boxAreaTextAndChipMembroLista}
                                    >
                                      <Typography
                                        sx={styles.textPerfilMembroList}
                                      >
                                        {nome}
                                      </Typography>
                                    </Box>
                                    <Typography
                                      sx={{
                                        ...styles.textCardSolicitacao,
                                        color: "#F3CE24",
                                      }}
                                    >
                                      {email}
                                    </Typography>
                                  </Box>
                                  <IconButton sx={styles.configIconButton}>
                                    <ManageAccountsOutlinedIcon
                                      sx={styles.iconListMembro}
                                    />
                                  </IconButton>
                                </Box>
                              )
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )}
                </>
              )}
              {valueTabInformacoes === "programacoes" && (
                <Box sx={{ ...styles.configBox, height: "100%" }}>
                  <Typography sx={styles.textTitulo}>Em Breve</Typography>
                </Box>
              )}

              {/* {valueTabInformacoes === "tags" && (
                <Box sx={styles.boxAreaTagsMinhaEquipe}>
                  {tagsMinhaEquipe?.map(({ id, nome }, index) => (
                    <Chip
                      key={index}
                      label={nome}
                      variant="outlined"
                      sx={styles.chipDefault}
                    />
                  ))}
                </Box>
              )} */}

              {valueTabInformacoes === "tags" && (
                <Box sx={{ ...styles.configBox, height: "100%" }}>
                  <Typography sx={styles.textTitulo}>Em Breve</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={styles.boxAreaBotaoCard}>
          <Divider sx={styles.divider} />
          {/* <Button
            variant="contained"
            sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
            onClick={() => {}}
          >
            <Box sx={styles.boxDoubleIconeBotaoEvento}>
              <AddchartOutlinedIcon sx={{ fontSize: "18px" }} />
              <Star sx={styles.positionStarCalendario} />
            </Box>
            Cadastrar diponibilidade
          </Button> */}
        </Box>
      </Box>

      {/* Modais */}
      <ModalEscalarMembro
        openModalEscalarMembro={openModalEscalarMembro}
        setOpenModalEscalarMembro={setOpenModalEscalarMembro}
      />

      <ModalPerfilMembro
        usuarioPerfil={usuario}
        openModalPerfilMembro={openModalPerfilMembro}
        setOpenModalPerfilMembro={setOpenModalPerfilMembro}
      />

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
export default PaginaEquipe;
