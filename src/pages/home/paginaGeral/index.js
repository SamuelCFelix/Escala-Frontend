import {
  AssignmentLateOutlined,
  CalendarMonthOutlined,
  Close,
  EditCalendarOutlined,
  Person,
  PersonAddAlt1Outlined,
  PersonRemoveAlt1Outlined,
  ReportProblemOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ModalEscalarMembro from "./modais/modalEscalarMembro";
import ModalCriarAviso from "./modais/modalCriarAviso";

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
    textTransform: "none",
    mb: "10px",
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
                  <IconButton>
                    <PersonRemoveAlt1Outlined
                      sx={{ color: "#D32F2F", fontSize: "24px" }}
                    />
                  </IconButton>
                )}
                {membro === "NÃO PREENCHIDO" && (
                  <IconButton
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
            <Button sx={styles.boxAviso}>
              <Avatar
                sx={{ ...styles.avatarIcon, width: "40px", height: "40px" }}
              >
                <Person sx={{ fontSize: "24px" }} />
              </Avatar>
              <Box sx={styles.boxAreaConteudoAviso}>
                <Box sx={styles.boxAreaTituloDate}>
                  <Typography sx={styles.dataTextTituloAviso}>
                    AVISO IMPORTANTE DO PASTOR!!!
                  </Typography>
                  <Typography sx={styles.dataTextDateAviso}>
                    17:26 - 28/02/24
                  </Typography>
                </Box>
                <Typography sx={styles.dataTextAviso}>
                  O pastor está convocando todos os servos apaixonados para
                  comparecerem na igreja 4.0 para uma reunião de alinhamento.
                  Sua presença é indispensável, pois bla bl...
                </Typography>
              </Box>
            </Button>
            <Button sx={styles.boxAviso}>
              <Avatar
                sx={{ ...styles.avatarIcon, width: "40px", height: "40px" }}
              >
                <Person sx={{ fontSize: "24px" }} />
              </Avatar>
              <Box sx={styles.boxAreaConteudoAviso}>
                <Box sx={styles.boxAreaTituloDate}>
                  <Typography sx={styles.dataTextTituloAviso}>
                    AVISO IMPORTANTE DO PASTOR!!!
                  </Typography>
                  <Typography sx={styles.dataTextDateAviso}>
                    17:26 - 28/02/24
                  </Typography>
                </Box>
                <Typography sx={styles.dataTextAviso}>
                  O pastor está convocando todos os servos apaixonados para
                  comparecerem na igreja 4.0 para uma reunião de alinhamento.
                  Sua presença é indispensável, pois bla bl...
                </Typography>
              </Box>
            </Button>
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
          <Box sx={styles.areaConteudoCard}> </Box>
          {boxBotaoCards("criar evento")}
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
    </Box>
  );
};
export default PaginaGeral;
