import { AddCircleOutline, Close, Person, Search } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  Fade,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import api from "../../../../../api";

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
  boxAreaConteudoModal: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "320px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxCheckboxAndSearch: {
    display: "flex",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
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
  configCheckbox: {
    color: "#F3A913",
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
    },
    "&.MuiButtonBase-root.MuiCheckbox-root.Mui-disabled": {
      color: "rgba(243, 169, 19, 0.5)",
    },
  },
  textCheckboxLabel: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  boxAreaCardsProgramacao: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 40px)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "auto",
  },
  boxProgramacao: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    mb: "10px",
  },
  cardProgramacao: {
    background: "#1B1B1B",
    borderRadius: "5px",
    border: "1px solid #F3A913",
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 28px)",
    padding: "10px",
    minHeight: "120px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  boxDoubleIcon: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dataText: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "6px",
  },
  dataIcon: {
    color: "#F3A913",
    fontSize: "18px",
  },
  dataIconInsid: {
    color: "#F3A913",
    fontSize: "10px",
    background: "#000000",
    border: "1px solid #000000",
    borderRadius: "50%",
    position: "absolute",
    bottom: -3,
    right: -3,
  },
  chipDefault: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "26px",
    minHeight: "26px",
  },
  boxAreaTagsCard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    flexWrap: "wrap",
    gap: "6px",
    mb: "6px",
  },
  configIconButton: {
    ml: "-6px",
    "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  botaoAddIndisponibilidade: {
    color: "#F3A913",
    fontSize: "18px",
  },
  chipIndisponibilidade: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #D32F2F",
    borderRadius: "10px",
    color: "#ffffff",
    height: "18px",
    minHeight: "18px",
    fontSize: "10px",
    "& .MuiChip-deleteIcon": {
      color: "#D32F2F",
      fontSize: "13px",
      "&:hover": {
        color: "#E63737",
      },
    },
  },
  configCheckboxMenu: {
    color: "#565656",
    "&.Mui-checked": {
      color: "#F3A913",
    },
    "&.MuiButtonBase-root.MuiCheckbox-root:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.1)",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "20px",
    },
  },
  configBoxTextMenu: {
    maxWidth: "240px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "14px",
  },
};

const ModalDisponibilidade = (params) => {
  const {
    openModalDisponibilidade,
    setOpenModalDisponibilidade,
    usuarioLogado,
  } = params;

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [programacoes, setProgramacoes] = useState([]);
  const [checkedDisponibilidade, setCheckedDisponibilidade] = useState({});
  const [checkedDatasIndisponibilidade, setCheckedDatasIndisponibilidade] =
    useState({});
  const [anchorEls, setAnchorEls] = useState({});

  const disponibilidade = [
    {
      programacaoId: "12312312-2f12f1-f12-f12-12f-f12f12-f12",
      disponibilidade: true,
      indisponibilidade: [{ data: "2024-02-08" }, { data: "2024-02-16" }],
    },
  ];

  //UseEffect's

  useEffect(() => {
    if (openModalDisponibilidade) {
      handleBuscarProgramacoesEquipe();
    }
  }, [openModalDisponibilidade]);

  //API's

  const handleBuscarProgramacoesEquipe = async (acao) => {
    try {
      const response = await api.post("/buscarProgramacoesEquipe", {
        equipeId: usuarioLogado?.equipeId,
      });

      if (response?.status === 200) {
        const programacoes = response?.data;
        setProgramacoes(programacoes);

        // Inicializa o estado checkedDisponibilidade com os ids das programações
        const initialCheckedDisponibilidade = programacoes?.reduce(
          (acc, programacao) => {
            acc[programacao.id] = false; // Inicializa todos os checkboxes como desmarcados
            return acc;
          },
          {}
        );

        setCheckedDisponibilidade(initialCheckedDisponibilidade);

        // Inicializa o estado checkedDatasIndisponibilidade com as datas como posição do array
        const initialCheckedIndisponibilidade = programacoes?.reduce(
          (acc, programacao) => {
            programacao.datasMesSeguinte.forEach((data) => {
              acc[data.dataId] = false; // Inicializa todos os checkboxes como desmarcados
            });
            return acc;
          },
          {}
        );

        setCheckedDatasIndisponibilidade(initialCheckedIndisponibilidade);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar programações da equipe: ", error);
    }
  };

  const getNextMonth = () => {
    const monthNames = [
      "JANEIRO",
      "FEVEREIRO",
      "MARÇO",
      "ABRIL",
      "MAIO",
      "JUNHO",
      "JULHO",
      "AGOSTO",
      "SETEMBRO",
      "OUTUBRO",
      "NOVEMBRO",
      "DEZEMBRO",
    ];
    const currentDate = new Date();
    const nextMonthIndex = (currentDate.getMonth() + 1) % 12;
    return monthNames[nextMonthIndex];
  };

  function handleCloseModal() {
    setOpenModalDisponibilidade(false);
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

  const handleClickMenu = (event, id) => {
    setAnchorEls((prevAnchorEls) => ({
      ...prevAnchorEls,
      [id]: event.currentTarget,
    }));
  };

  const handleCloseMenu = (id) => {
    setAnchorEls((prevAnchorEls) => ({
      ...prevAnchorEls,
      [id]: null,
    }));
  };

  const handleChangeCheckTodos = (event) => {
    const isChecked = event.target.checked;
    setCheckedDisponibilidade((prevCheckedDisponibilidade) => {
      const updatedCheckedDisponibilidade = {};
      for (const key in prevCheckedDisponibilidade) {
        updatedCheckedDisponibilidade[key] = isChecked;
      }
      return updatedCheckedDisponibilidade;
    });
  };

  const handleChangeIndividualCheck = (id) => (event) => {
    const isChecked = event.target.checked;
    setCheckedDisponibilidade((prevCheckedDisponibilidade) => ({
      ...prevCheckedDisponibilidade,
      [id]: isChecked,
    }));
  };

  const handleChangeCheckDataIndisponibilidade = (dataId) => (event) => {
    const isChecked = event.target.checked;
    setCheckedDatasIndisponibilidade((prevCheckedDatasIndisponibilidade) => ({
      ...prevCheckedDatasIndisponibilidade,
      [dataId]: isChecked,
    }));
  };

  const handleDeleteIndisponibilidade = (dataId) => {
    setCheckedDatasIndisponibilidade((prevCheckedDatasIndisponibilidade) => ({
      ...prevCheckedDatasIndisponibilidade,
      [dataId]: false,
    }));
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

  return (
    <>
      <Modal
        open={openModalDisponibilidade}
        onClose={() => {
          setOpenModalDisponibilidade(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalDisponibilidade}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Disponibilidade")}
              <IconButton
                onClick={() => {
                  setOpenModalDisponibilidade(false);
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Box sx={styles.boxAreaConteudoModal}>
                <Box sx={styles.boxCheckboxAndSearch}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Object.values(checkedDisponibilidade).every(
                          (prev) => prev === true
                        )}
                        onChange={handleChangeCheckTodos}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{
                          ...styles.configCheckbox,
                          "& .MuiSvgIcon-root": {
                            fontSize: "20px",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={styles.textCheckboxLabel}>
                        Marcar todos
                      </Typography>
                    }
                  />
                  <TextField
                    focused
                    variant="filled"
                    placeholder="Procurar programação"
                    sx={styles.textFieldSearch}
                    InputProps={{
                      startAdornment: <Search />,
                    }}
                  />
                </Box>
                <Box sx={styles.boxAreaCardsProgramacao}>
                  {programacoes?.map(
                    (
                      { id, culto, dia, horario, tags, datasMesSeguinte },
                      index
                    ) => (
                      <Box key={id} sx={styles.boxProgramacao}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkedDisponibilidade[id]}
                              onChange={handleChangeIndividualCheck(id)}
                              inputProps={{ "aria-label": "controlled" }}
                              sx={styles.configCheckbox}
                            />
                          }
                          label={
                            <Typography sx={styles.textCheckboxLabel}>
                              Disponível
                            </Typography>
                          }
                        />
                        <Box sx={styles.cardProgramacao}>
                          <Typography sx={styles.dataText}>
                            <ChurchOutlinedIcon sx={styles.dataIcon} />
                            {culto}
                          </Typography>
                          <Typography sx={styles.dataText}>
                            <Box sx={styles.boxDoubleIcon}>
                              <CalendarMonthOutlinedIcon sx={styles.dataIcon} />
                              <AccessTimeOutlinedIcon
                                sx={styles.dataIconInsid}
                              />
                            </Box>
                            {`${dia} - ${horario}`}
                          </Typography>
                          <Typography sx={styles.dataText}>
                            <GroupsOutlinedIcon sx={styles.dataIcon} />
                            {tags?.length}
                          </Typography>
                          <Box sx={styles.boxAreaTagsCard}>
                            {tags?.map(({ id, nome }, index) => (
                              <Chip
                                key={index}
                                label={nome}
                                variant="outlined"
                                sx={styles.chipDefault}
                              />
                            ))}
                          </Box>
                          <Typography sx={styles.dataText}>
                            <ReportProblemOutlinedIcon
                              sx={{ ...styles.dataIcon, color: "#FF8C00" }}
                            />
                            Indisponibilidade
                            <IconButton
                              onClick={(event) => handleClickMenu(event, id)}
                              sx={styles.configIconButton}
                            >
                              <AddCircleOutline
                                sx={styles.botaoAddIndisponibilidade}
                              />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEls[id]}
                              open={Boolean(anchorEls[id])}
                              onClose={() => handleCloseMenu(id)}
                              PaperProps={{
                                sx: {
                                  backgroundColor: "#1B1B1B",
                                  border: "1px solid #F3A913",
                                  maxHeight: "152px",
                                  maxWidth: "286px",
                                },
                              }}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuList
                                sx={{ paddingTop: "4px", paddingBottom: "4px" }}
                              >
                                {datasMesSeguinte?.map(
                                  ({ dataId, data }, index) => (
                                    <MenuItem
                                      key={index + data}
                                      sx={{ color: "#ffffff", height: "34px" }}
                                    >
                                      <FormGroup>
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={
                                                checkedDatasIndisponibilidade[
                                                  dataId
                                                ]
                                              }
                                              onChange={handleChangeCheckDataIndisponibilidade(
                                                dataId
                                              )}
                                              sx={styles.configCheckboxMenu}
                                            />
                                          }
                                          label={
                                            <Typography
                                              variant="body1"
                                              sx={styles.configBoxTextMenu}
                                            >
                                              {data}
                                            </Typography>
                                          }
                                        />
                                      </FormGroup>
                                    </MenuItem>
                                  )
                                )}
                              </MenuList>
                            </Menu>
                          </Typography>
                          <Typography
                            sx={{
                              ...styles.dataText,
                              fontSize: "11px",
                              color: "#F3A913",
                              mt: "-8px",
                            }}
                          >
                            Indisponibilidade referente ao mês de{" "}
                            <span style={{ color: "#ffffff" }}>
                              {getNextMonth()}
                            </span>
                          </Typography>
                          <Box sx={{ ...styles.boxAreaTagsCard, mb: "0px" }}>
                            {datasMesSeguinte?.map(
                              ({ dataId, data }, index) => (
                                <>
                                  {checkedDatasIndisponibilidade[dataId] && (
                                    <Chip
                                      key={index}
                                      label={data}
                                      variant="outlined"
                                      onDelete={() =>
                                        handleDeleteIndisponibilidade(dataId)
                                      }
                                      sx={styles.chipIndisponibilidade}
                                    />
                                  )}
                                </>
                              )
                            )}
                          </Box>
                        </Box>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
              <Box sx={styles.boxAreaBotaoCard}>
                <Divider sx={styles.divider} />
                <Box sx={styles.boxDoubleBotoes}>
                  <Button
                    onClick={() => {
                      handleCloseModal();
                    }}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => {}}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    Salvar
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
    </>
  );
};
export default ModalDisponibilidade;
