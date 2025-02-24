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
  SettingsOutlined,
  SmsFailedOutlined,
  Star,
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
  Pagination,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Typography,
  tabsClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import ModalEscalarMembro from "./modais/modalEscalarMembro";
import ModalCriarAviso from "./modais/modalCriarAviso";
import AvisoDefault from "./cardsAvisos/avisoDefault";
import AvisoNovaSolicitacao from "./cardsAvisos/avisoNovaSolicitacao";
import AvisoSistema from "./cardsAvisos/avisoSistema";
import AvisoNaoPreenchido from "./cardsAvisos/avisoNaoPreenchido";
import AvisoFaltaAnunciada from "./cardsAvisos/avisoFaltaAnunciada";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ModalCriarEvento from "./modais/modalCriarEvento";
import CardEvento from "./cardEvento";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import api from "../../../api";
import ModalDisponibilidade from "./modais/modalDisponibilidade";
import ModalConfirmarCandidatura from "../paginaGeral/modais/modalConfirmarCandidatura";
import useDeviceType from "../../../hooks/useDeviceType";
import { useMediaQuery } from "react-responsive";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 20px",
    gap: "20px",
    overflow: "auto",
    mb: "14px",
  },
  boxCardDefault: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "446px",
    maxWidth: "90dvw",
    minHeight: "487px",
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
  textPerfilProximoCulto: {
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
    "&:disabled": {
      color: "#ffffff",
      background: "rgba(243, 169, 19, 0.6)",
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
  boxInfoProximoCulto: {
    /*  background: "blue", */
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "70px",
    gap: "10px",
    paddingTop: "10px",
  },
  boxEscalaProximoCulto: {
    /* background: "green", */
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "calc(100% - 80px)",
    overflowY: "auto",
  },
  areaPerfilEscalado: {
    /* background: "red", */
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
  boxInfoPerfilProximoCulto: {
    /* background: "blue", */
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
    fontSize: "10px",
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
  boxAreaInformacoesPerfil: {
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
  boxAreaConteudoTabsInformacoes: {
    width: "100%",
    height: "calc(100% - 146px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
    mt: "12px",
    overflowY: "auto",
  },
  boxCardEscalado: {
    position: "relative",
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
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  boxLinhaDivisoria: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: "1px",
    height: "88%",
    border: "1px solid #F3A913",
    borderRadius: "5px",
    backgroundColor: "#F3A913",
    transform: "translateY(-50%)",
  },
};

const PaginaGeral = (params) => {
  const { usuario } = params;
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const breakPoint01 = useMediaQuery({ query: "(max-width: 962px)" });

  const [isAdm, setIsAdm] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [editarEscala, setEditarEscala] = useState(false);
  const [openModalEscalarMembro, setOpenModalEscalarMembro] = useState(false);
  const [openModalCriarAviso, setOpenModalCriarAviso] = useState(false);
  const [openModalCriarEvento, setOpenModalCriarEvento] = useState(false);
  const [valueTabInformacoes, setValueTabInformacoes] = useState("escalado");
  const [loadingTabelaInformacoesTags, setLoadingTabelaInformacoesTags] =
    useState(false);
  const [tagsUsuario, setTagsUsuario] = useState([]);
  const [
    loadingTabelaInformacoesEscalado,
    setLoadingTabelaInformacoesEscalado,
  ] = useState(true);
  const [escalacoesUsuario, setEscalacoesUsuario] = useState([]);
  const [openModalDisponibilidade, setOpenModalDisponibilidade] =
    useState(false);

  const [proximaEscala, setProximaEscala] = useState([]);
  const [copyProximaEscala, setCopyProximaEscala] = useState([]);
  const [loadingTabelaProximaEscala, setLoadingTabelaProximaEscala] =
    useState(true);
  const [infoEscalarMembro, setInfoEscalarMembro] = useState([]);
  const [loadingApiEscalarMembro, setLoadingApiEscalarMembro] = useState(false);
  const [openModalConfirmarCandidatura, setOpenModalConfirmarCandidatura] =
    useState(false);
  const [fotosUsuarios, setFotosUsuarios] = useState([]);

  //UseEffect's

  useEffect(() => {
    handleBuscarTagsMembroEquipe();
    handleBuscarProximaEscala();
    handleBuscarEscalacoesUsuario();
  }, []);

  useEffect(() => {
    if (usuario) {
      if (
        usuario?.autorizacao === "adm001" ||
        usuario?.autorizacao === "adm002"
      ) {
        setIsAdm(true);
      } else {
        setIsAdm(false);
      }
    }
  }, [usuario]);

  //API's

  //Tabela Próximo Culto

  const handleBuscarProximaEscala = async () => {
    try {
      setLoadingTabelaProximaEscala(true);
      const response = await api.post("/buscarProximaEscala", {
        equipeId: usuario?.equipeId,
      });

      if (response?.status === 200) {
        setProximaEscala(response?.data?.proximaProgramacao);
        setCopyProximaEscala(response?.data?.proximaProgramacao);
        setFotosUsuarios(response?.data?.fotosUsuarios);
        setLoadingTabelaProximaEscala(false);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar próxima escala: ", error);
    }
  };

  const handleAtualizarEscalaData = async () => {
    try {
      setLoadingApiEscalarMembro(true);

      const response = await api.post("/updateEscalaData", {
        equipeId: usuario?.equipeId,
        escalaDataId: proximaEscala?.escalaDataId,
        escalados: proximaEscala?.escalados,
      });

      if (response?.status === 200) {
        setCopyProximaEscala(proximaEscala);
        setEditarEscala(false);
        setSnackbar("success", "Escala salva com sucesso");

        const userInCurrentScale = proximaEscala?.escalados?.some(
          (escalados) => escalados.membroId === usuario?.usuarioId
        );

        const userInPreviousScale = copyProximaEscala?.escalados?.some(
          (escalados) => escalados.membroId === usuario?.usuarioId
        );

        if (
          userInCurrentScale ||
          (userInPreviousScale && !userInCurrentScale)
        ) {
          handleBuscarEscalacoesUsuario();
        }
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("Erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("Erro ao salvar alterações da escala: ", error);
    } finally {
      setLoadingApiEscalarMembro(false);
    }
  };

  //Tabela Informações

  const handleBuscarEscalacoesUsuario = async () => {
    try {
      setLoadingTabelaInformacoesEscalado(true);

      const response = await api.post("/buscarEscalacoesUsuario", {
        equipeId: usuario?.equipeId,
        usuarioId: usuario?.usuarioId,
      });

      if (response?.status === 200) {
        setEscalacoesUsuario(response?.data);
        setLoadingTabelaInformacoesEscalado(false);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar escalações do usuário: ", error);
    }
  };

  const handleBuscarTagsMembroEquipe = async () => {
    try {
      setLoadingTabelaInformacoesTags(true);

      const response = await api.post("/buscarTagsMembroEquipe", {
        usuarioId: usuario?.usuarioId,
      });

      if (response?.status === 200) {
        setTagsUsuario(response?.data);
        setLoadingTabelaInformacoesTags(false);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar tags do usuário: ", error);
    }
  };

  function handleRemoveUsuarioEscala(membroId) {
    const indexEscalado = proximaEscala.escalados.findIndex(
      (escalado) => escalado.membroId === membroId
    );

    if (indexEscalado !== -1) {
      const novosEscalados = [...proximaEscala.escalados];
      novosEscalados[indexEscalado] = {
        ...novosEscalados[indexEscalado],
        membroId: "sem membro",
        membroNome: "sem membro",
      };

      setProximaEscala({ ...proximaEscala, escalados: novosEscalados });
    }
  }

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
      {/* Tabela PRÓXIMO CULTO */}
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Próximo Culto")}
        <Box sx={styles.areaConteudoCard}>
          {loadingTabelaProximaEscala && (
            <Box sx={styles.boxAreaCircularProgress}>
              <CircularProgress />
            </Box>
          )}

          {!loadingTabelaProximaEscala && (
            <>
              {proximaEscala ? (
                <>
                  <Box sx={styles.boxInfoProximoCulto}>
                    <Typography
                      sx={{
                        ...styles.textTitulo,
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {proximaEscala.culto}
                    </Typography>
                    <Typography sx={{ ...styles.textTitulo, fontSize: "18px" }}>
                      {proximaEscala.horario}
                    </Typography>
                    <Typography sx={styles.textTituloInfoEscala}>
                      <CalendarMonthOutlined
                        sx={{ color: "#F3A913", fontSize: "16px" }}
                      />
                      {`${proximaEscala.data} - ${proximaEscala.dia}`}
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
                  <Box
                    key={proximaEscala.programacaoId + 1}
                    sx={styles.boxEscalaProximoCulto}
                  >
                    {proximaEscala?.escalados?.map(
                      (
                        { membroId, membroNome, tagId, tagNome, possuiTag },
                        index
                      ) => (
                        <Box key={index} sx={styles.areaPerfilEscalado}>
                          <Avatar
                            src={
                              fotosUsuarios?.find(
                                (infoUser) => infoUser.membroId === membroId
                              )?.membroFoto || undefined
                            }
                            sx={{
                              ...styles.avatarIcon,
                              background:
                                membroId !== "sem membro"
                                  ? "#F3A913"
                                  : "#D32F2F",
                            }}
                          >
                            {membroId !== "sem membro" ? (
                              fotosUsuarios?.find(
                                (infoUser) => infoUser.membroId === membroId
                              )?.membroFoto ? null : (
                                <>{membroNome?.charAt(0)?.toUpperCase()}</>
                              )
                            ) : (
                              <ReportProblemOutlined
                                sx={{ fontSize: "24px", color: "#F3A913" }}
                              />
                            )}
                          </Avatar>

                          <Box sx={styles.boxInfoPerfilProximoCulto}>
                            <Typography
                              sx={{
                                ...styles.textPerfilProximoCulto,
                                ...styles.configBox,
                                width: "auto",
                                gap: "4px",
                                color:
                                  membroId !== "sem membro"
                                    ? "#ffffff"
                                    : "#D32F2F",
                              }}
                            >
                              {membroId !== "sem membro"
                                ? membroNome
                                : "NÃO PREENCHIDO"}
                              {/* {!possuiTag && membroId !== "sem membro" && (
                              <Chip
                                label="Sem TAG"
                                variant="outlined"
                                sx={{
                                  ...styles.chipName,
                                  borderColor: "#D32F2F",
                                }}
                              />
                            )} */}
                              {usuario.usuarioId === membroId && (
                                <Chip
                                  label="Eu"
                                  variant="outlined"
                                  sx={styles.chipName}
                                />
                              )}
                            </Typography>
                            <Typography
                              sx={{
                                ...styles.textPerfilProximoCulto,
                                color: "#F3CE24",
                                fontSize: "14px",
                              }}
                            >
                              {tagNome}
                            </Typography>
                          </Box>
                          {editarEscala && membroId !== "sem membro" && (
                            <IconButton
                              onClick={() => {
                                handleRemoveUsuarioEscala(membroId);
                              }}
                              sx={{
                                "&.MuiButtonBase-root.MuiIconButton-root:hover ":
                                  {
                                    backgroundColor: "rgba(211, 47, 47, 0.2)",
                                  },
                              }}
                            >
                              <PersonRemoveAlt1Outlined
                                sx={{
                                  color: "#D32F2F",
                                  fontSize: "24px",
                                }}
                              />
                            </IconButton>
                          )}
                          {membroId === "sem membro" &&
                            ((isAdm && (
                              <IconButton
                                sx={styles.IconButtonHover}
                                onClick={() => {
                                  setInfoEscalarMembro({
                                    escalaDataId: proximaEscala?.escalaDataId,
                                    programacaoId: proximaEscala?.programacaoId,
                                    culto: proximaEscala?.culto,
                                    data: proximaEscala?.data,
                                    horario: proximaEscala?.horario,
                                    dia: proximaEscala?.dia,
                                    tagId: tagId,
                                    tagNome: tagNome,
                                    escalados: proximaEscala?.escalados,
                                  });

                                  setOpenModalEscalarMembro(true);
                                }}
                              >
                                <PersonAddAlt1Outlined
                                  sx={{ color: "#F3A913", fontSize: "22px" }}
                                />
                              </IconButton>
                            )) ||
                              (!proximaEscala?.escalados.some(
                                (escala) =>
                                  escala.membroId === usuario?.usuarioId
                              ) &&
                                tagsUsuario?.some(
                                  (userTags) => userTags.id === tagId
                                ) &&
                                usuario?.statusUsuario && (
                                  <IconButton
                                    sx={styles.IconButtonHover}
                                    onClick={() => {
                                      setInfoEscalarMembro({
                                        escalaDataId:
                                          proximaEscala?.escalaDataId,
                                        programacaoId:
                                          proximaEscala?.programacaoId,
                                        culto: proximaEscala?.culto,
                                        data: proximaEscala?.data,
                                        horario: proximaEscala?.horario,
                                        dia: proximaEscala?.dia,
                                        tagId: tagId,
                                        tagNome: tagNome,
                                        escalados: proximaEscala?.escalados,
                                      });

                                      setOpenModalConfirmarCandidatura(true);
                                    }}
                                  >
                                    <PersonAddAlt1Outlined
                                      sx={{
                                        color: "#F3A913",
                                        fontSize: "22px",
                                      }}
                                    />
                                  </IconButton>
                                )))}
                          <Divider
                            sx={{
                              ...styles.divider,
                              width: "100%",
                              position: "absolute",
                              bottom: 0,
                            }}
                          />
                        </Box>
                      )
                    )}
                  </Box>
                </>
              ) : (
                <Box sx={{ ...styles.configBox, height: "100%" }}>
                  <Typography sx={styles.textTitulo}>
                    Sem próxima programação
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
        <Box sx={styles.boxAreaBotaoCard}>
          <Divider sx={styles.divider} />
          {isAdm && (
            <>
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
                    onClick={() => {
                      setProximaEscala(copyProximaEscala);
                      setEditarEscala(false);
                    }}
                  >
                    <Close sx={{ fontSize: "18px" }} />
                    Cancelar
                  </Button>
                  <Button
                    disabled={
                      proximaEscala?.escalados ===
                        copyProximaEscala?.escalados || loadingApiEscalarMembro
                    }
                    variant="contained"
                    sx={{
                      ...styles.botaoDefault,
                      mb: "8px",
                      gap: "4px",
                    }}
                    onClick={() => {
                      handleAtualizarEscalaData();
                      setEditarEscala(false);
                    }}
                  >
                    <SaveOutlined sx={{ fontSize: "18px" }} />
                    Salvar
                  </Button>
                </Box>
              ) : (
                <Button
                  disabled={loadingTabelaProximaEscala || !proximaEscala}
                  variant="contained"
                  sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
                  onClick={() => setEditarEscala(true)}
                >
                  <EditCalendarOutlined sx={{ fontSize: "18px" }} />
                  Editar Escala
                </Button>
              )}
            </>
          )}
        </Box>
      </Box>

      {/* TABELA DE AVISOS E EVENTOS */}
      {/* <Box sx={styles.areaBoxMid}>
         *****Tabela AVISOS******* 
        < Box sx={styles.boxCardDefaultMid}>
          <Box sx={{ ...styles.areaBoxTitulo, position: "relative" }}>
            <Box sx={styles.boxTitulo}>
              <Typography sx={styles.textTitulo}>Avisos</Typography>
              <Box sx={styles.baseTitulo} />
            </Box>
            <Box sx={styles.boxNumeroAvisos}>
              <Typography sx={styles.numeroAvisos}>7</Typography>
            </Box>
          </Box>
          <Box sx={{ ...styles.areaConteudoCard, overflowY: "auto" }}>
            <AvisoDefault />

            <AvisoNovaSolicitacao />

            <AvisoSistema />

            <AvisoNaoPreenchido />

            <AvisoFaltaAnunciada />
            <Box sx={{ ...styles.configBox, height: "100%" }}>
              <Typography sx={styles.textTitulo}>Em Breve</Typography>
            </Box>
          </Box>
          <Box sx={styles.boxAreaBotaoCard}>
            <Divider sx={styles.divider} />
            {isAdm && (
              <Button
                disabled
                variant="contained"
                sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
                onClick={() => {
                  setOpenModalCriarAviso(true);
                }}
              >
                <AssignmentLateOutlined sx={{ fontSize: "18px" }} />
                Criar Aviso
              </Button>
            )}
          </Box>
        </Box>
        *********Tabela EVENTOS*********
        <Box sx={styles.boxCardDefaultMid}>
          {boxTituloCards("Eventos")}
          <Box sx={styles.areaConteudoCard}>
            <CardEvento />
            <Box sx={{ ...styles.configBox, height: "100%" }}>
              <Typography sx={styles.textTitulo}>Em Breve</Typography>
            </Box>
          </Box>
          <Box sx={styles.boxAreaBotaoCard}>
            <Divider sx={styles.divider} />
            {isAdm && (
              <Button
                disabled
                variant="contained"
                sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
                onClick={() => {
                  setOpenModalCriarEvento(true);
                }}
              >
                <Box sx={styles.boxDoubleIconeBotaoEvento}>
                  <CalendarTodayOutlinedIcon sx={{ fontSize: "18px" }} />
                  <Star sx={styles.positionStarCalendario} />
                </Box>
                Criar Evento
              </Button>
            )}
          </Box>
        </Box>
      </Box> */}
      {/* Tabela INFORMAÇÕES */}
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Informações")}
        <Box sx={styles.areaConteudoCard}>
          <Box sx={styles.boxAreaInformacoesPerfil}>
            <Avatar
              sx={styles.avatarIcon}
              src={usuario?.foto ? usuario?.foto : undefined}
            >
              {!usuario?.foto && usuario?.nome?.charAt(0)?.toUpperCase()}
            </Avatar>
            <Typography sx={styles.textPerfilNome}>
              {usuario?.nome}
              {isAdm && (
                <Chip label="Admin" variant="outlined" sx={styles.chipName} />
              )}
              {!usuario?.statusUsuario && (
                <Chip
                  label="Inativo"
                  variant="outlined"
                  sx={{
                    ...styles.chipName,
                    borderColor: "#D32F2F",
                  }}
                />
              )}
            </Typography>

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
                  onClick={() => {
                    if (valueTabInformacoes !== "escalado") {
                      handleBuscarEscalacoesUsuario();
                    }
                  }}
                  label="Escalado"
                  value="escalado"
                  sx={{ color: "#ffffff" }}
                />
                <Tab
                  onClick={() => {
                    if (valueTabInformacoes !== "tags") {
                      handleBuscarTagsMembroEquipe();
                    }
                  }}
                  label="Tags"
                  value="tags"
                  sx={{ color: "#ffffff" }}
                />
              </Tabs>
            </Box>
            <Box sx={styles.boxAreaConteudoTabsInformacoes}>
              {valueTabInformacoes === "escalado" && (
                <>
                  {loadingTabelaInformacoesEscalado && (
                    <Box sx={styles.boxAreaCircularProgress}>
                      <CircularProgress />
                    </Box>
                  )}
                  {!loadingTabelaInformacoesEscalado && (
                    <>
                      {escalacoesUsuario?.map(
                        (
                          { data, dia, horario, culto, usuarioEscalado },
                          index
                        ) => (
                          <>
                            <Box key={index} sx={styles.boxCardEscalado}>
                              <Box sx={styles.boxInfoEscalado1}>
                                <Typography
                                  sx={{
                                    ...styles.textDataCardEscalado,
                                    width: "auto",
                                  }}
                                >
                                  {dia}
                                  <Divider
                                    sx={{
                                      ...styles.divider,
                                      width: "104%",
                                      mt: "-2px",
                                      mb: "2px",
                                    }}
                                  />
                                </Typography>
                                <Typography
                                  sx={styles.textDataCardEscaladoCulto}
                                >
                                  {culto}
                                </Typography>
                                <Typography
                                  sx={{
                                    ...styles.textDataCardEscalado,
                                    color: "#F3CE24",
                                  }}
                                >
                                  {usuarioEscalado.tagNome}
                                </Typography>
                              </Box>
                              <Box sx={styles.boxInfoEscalado2}>
                                <Typography sx={styles.text2DataCardEscalado}>
                                  {data.split("/").slice(0, 2).join("/")}
                                </Typography>

                                <Typography sx={styles.text2DataCardEscalado}>
                                  {horario}
                                </Typography>
                              </Box>
                              <Box sx={styles.boxLinhaDivisoria} />
                            </Box>
                          </>
                        )
                      )}

                      {escalacoesUsuario?.length === 0 && (
                        <Box sx={{ ...styles.configBox, height: "100%" }}>
                          <Typography sx={styles.textTitulo}>
                            Nenhuma escala
                          </Typography>
                        </Box>
                      )}
                    </>
                  )}
                </>
              )}

              {valueTabInformacoes === "tags" && (
                <>
                  {loadingTabelaInformacoesTags && (
                    <Box sx={styles.boxAreaCircularProgress}>
                      <CircularProgress />
                    </Box>
                  )}
                  {!loadingTabelaInformacoesTags && (
                    <>
                      {tagsUsuario?.map(({ nome }, index) => (
                        <Chip
                          key={index}
                          label={nome}
                          variant="outlined"
                          sx={styles.chipDefault}
                        />
                      ))}
                      {tagsUsuario?.length === 0 && (
                        <Box sx={{ ...styles.configBox, height: "100%" }}>
                          <Typography sx={styles.textTitulo}>
                            Nenhuma TAG
                          </Typography>
                        </Box>
                      )}
                    </>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={styles.boxAreaBotaoCard}>
          <Divider sx={styles.divider} />
          <Button
            variant="contained"
            sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
            onClick={() => {
              setOpenModalDisponibilidade(true);
            }}
          >
            <Box sx={styles.boxDoubleIconeBotaoEvento}>
              <AddchartOutlinedIcon sx={{ fontSize: "18px" }} />
            </Box>
            Cadastrar diponibilidade
          </Button>
        </Box>
      </Box>

      {/* Modais */}
      <ModalEscalarMembro
        usuarioLogado={usuario}
        infoEscalarMembro={infoEscalarMembro}
        openModalEscalarMembro={openModalEscalarMembro}
        setOpenModalEscalarMembro={setOpenModalEscalarMembro}
        handleBuscarProximaEscala={handleBuscarProximaEscala}
        handleBuscarEscalacoesUsuario={handleBuscarEscalacoesUsuario}
        editarEscala={editarEscala}
        setProximaEscala={setProximaEscala}
        setFotosUsuarios={setFotosUsuarios}
        fotosUsuarios={fotosUsuarios}
        setCopyProximaEscala={setCopyProximaEscala}
      />
      <ModalCriarAviso
        openModalCriarAviso={openModalCriarAviso}
        setOpenModalCriarAviso={setOpenModalCriarAviso}
      />
      <ModalCriarEvento
        openModalCriarEvento={openModalCriarEvento}
        setOpenModalCriarEvento={setOpenModalCriarEvento}
      />
      <ModalDisponibilidade
        usuarioLogado={usuario}
        openModalDisponibilidade={openModalDisponibilidade}
        setOpenModalDisponibilidade={setOpenModalDisponibilidade}
      />

      <ModalConfirmarCandidatura
        usuarioLogado={usuario}
        openModalConfirmarCandidatura={openModalConfirmarCandidatura}
        setOpenModalConfirmarCandidatura={setOpenModalConfirmarCandidatura}
        infoEscalarMembro={infoEscalarMembro}
        handleBuscarEscalacoesUsuario={handleBuscarEscalacoesUsuario}
        setCopyProximaEscala={setCopyProximaEscala}
        setFotosUsuarios={setFotosUsuarios}
        fotosUsuarios={fotosUsuarios}
        setProximaEscala={setProximaEscala}
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
export default PaginaGeral;
