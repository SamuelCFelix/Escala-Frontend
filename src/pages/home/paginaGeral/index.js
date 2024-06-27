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
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
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
    padding: "0px 40px",
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
};

const PaginaGeral = () => {
  const [userLogin, setUserLogin] = useState(true); // Simula se o usuário logado está na escala

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
  const [openModalCriarAviso, setOpenModalCriarAviso] = useState(false);
  const [openModalCriarEvento, setOpenModalCriarEvento] = useState(false);

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

  return (
    <Box sx={styles.container}>
      {/* Tabela PRÓXIMO CULTO */}
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Próximo Culto")}
        <Box sx={styles.areaConteudoCard}>
          <Box sx={styles.boxInfoProximoCulto}>
            <Typography
              sx={{ ...styles.textTitulo, fontSize: "18px", fontWeight: 600 }}
            >
              CULTO CELEBRAÇÃO - ZS16
            </Typography>
            <Typography sx={{ ...styles.textTitulo, fontSize: "18px" }}>
              16:00
            </Typography>
            <Typography
              sx={{
                ...styles.textTitulo,
                alignSelf: "flex-start",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
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
          <Box sx={styles.boxEscalaProximoCulto}>
            {proximaEscala?.map(({ membro, tag, possuiTag }, index) => (
              <Box key={index} sx={styles.areaPerfilEscalado}>
                <Avatar
                  sx={{
                    ...styles.avatarIcon,
                    background:
                      membro !== "NÃO PREENCHIDO" ? "#F3A913" : "#D32F2F",
                  }}
                >
                  {membro !== "NÃO PREENCHIDO" ? (
                    <Person sx={{ fontSize: "24px" }} />
                  ) : (
                    <ReportProblemOutlined
                      sx={{ fontSize: "24px", color: "#F3A913" }}
                    />
                  )}{" "}
                </Avatar>
                <Box sx={styles.boxInfoPerfilProximoCulto}>
                  <Typography
                    sx={{
                      ...styles.textPerfilProximoCulto,
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
                        sx={{ ...styles.chipName, borderColor: "#D32F2F" }}
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
                      ...styles.textPerfilProximoCulto,
                      color: "#F3CE24",
                      fontSize: "14px",
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
                        fontSize: "24px",
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
                      sx={{ color: "#F3A913", fontSize: "24px" }}
                    />
                  </IconButton>
                )}
                <Divider
                  sx={{
                    ...styles.divider,
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                  }}
                />
              </Box>
            ))}
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
                  padding: "0px 20px",
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
              <EditCalendarOutlined sx={{ fontSize: "18px" }} />
              Editar Escala
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={styles.areaBoxMid}>
        {/* Tabela AVISOS */}
        <Box sx={styles.boxCardDefaultMid}>
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
          </Box>
          <Box sx={styles.boxAreaBotaoCard}>
            <Divider sx={styles.divider} />
            <Button
              variant="contained"
              sx={{ ...styles.botaoDefault, mb: "8px", gap: "4px" }}
              onClick={() => {
                setOpenModalCriarAviso(true);
              }}
            >
              <AssignmentLateOutlined sx={{ fontSize: "18px" }} />
              Criar Aviso
            </Button>
          </Box>
        </Box>
        {/* Tabela EVENTOS */}
        <Box sx={styles.boxCardDefaultMid}>
          {boxTituloCards("Eventos")}
          <Box sx={styles.areaConteudoCard}>
            <Box sx={styles.boxConteudoEvento}>
              <Button sx={styles.boxCardEvento}>
                <Box sx={styles.boxAreaInfoEvento}>
                  <Box sx={styles.boxDataEvento}>
                    <Typography
                      sx={{ ...styles.dataTextDateEvento, mb: "-3px" }}
                    >
                      11/05/24
                    </Typography>
                    <Typography
                      sx={{
                        ...styles.dataTextDateEvento,
                        fontSize: "8px",
                        mb: "0px",
                      }}
                    >
                      (SEGUNDA-FEIRA)
                    </Typography>
                    <Box sx={styles.boxDoubleIconeBotaoEvento}>
                      <CalendarTodayOutlinedIcon
                        sx={{ fontSize: "18px", color: "#F3A913" }}
                      />
                      <Star
                        sx={{
                          ...styles.positionStarCalendario,
                          color: "#F3A913",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={styles.boxDataEvento}>
                    <Typography sx={styles.dataTextDateEvento}>
                      15:30 - 19:00
                    </Typography>
                    <AccessTimeOutlinedIcon sx={styles.iconeEvento} />
                  </Box>
                  <Box sx={styles.boxDataEvento}>
                    <Typography
                      sx={{ ...styles.dataTextDateEvento, color: "#D32F2F" }}
                    >
                      2/8
                    </Typography>
                    <GroupsOutlinedIcon sx={styles.iconeEvento} />
                  </Box>
                </Box>
                <Box sx={styles.boxTituloEvento}>
                  <Typography sx={styles.tituloEventoText}>
                    Culto de Batismo
                  </Typography>
                  <Box sx={styles.lineWithTriangles} />
                </Box>
              </Button>
              <Box sx={styles.boxPaginacao}>
                <Pagination
                  /* count={groupedCards.length > 0 ? groupedCards.length : 1}
                  page={page}
                  onChange={handleChangePage} */
                  count={2}
                  page={1}
                  shape="rounded"
                  hidePrevButton
                  hideNextButton
                  sx={styles.estiloPaginacao}
                />
              </Box>
              <Box sx={styles.boxAreaSetasEvento}>
                <IconButton sx={styles.IconButtonEvento}>
                  <KeyboardArrowLeftOutlined
                    sx={{ color: "#F3A913", fontSize: "40px" }}
                  />
                </IconButton>
                <IconButton sx={styles.IconButtonEvento}>
                  <KeyboardArrowRightOutlined
                    sx={{ color: "#F3A913", fontSize: "40px" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.boxAreaBotaoCard}>
            <Divider sx={styles.divider} />
            <Button
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
          </Box>
        </Box>
      </Box>
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Informações")}
        <Box sx={styles.areaConteudoCard}> </Box>
        {boxBotaoCards("Cadastrar disponibilidade")}
      </Box>

      {/* Modais */}
      <ModalEscalarMembro
        openModalEscalarMembro={openModalEscalarMembro}
        setOpenModalEscalarMembro={setOpenModalEscalarMembro}
      />
      <ModalCriarAviso
        openModalCriarAviso={openModalCriarAviso}
        setOpenModalCriarAviso={setOpenModalCriarAviso}
      />
      <ModalCriarEvento
        openModalCriarEvento={openModalCriarEvento}
        setOpenModalCriarEvento={setOpenModalCriarEvento}
      />
    </Box>
  );
};
export default PaginaGeral;
