import {
  AddCircleOutline,
  Close,
  Person,
  Search,
  Star,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

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
  datePicker: {
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
  textInfoDataEvento: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
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
  boxDoubleTextField: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "26px",
  },
  boxDataInfoEvento: {
    position: "relative",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },
  boxDoubleIconeBotaoEvento: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  positionStarCalendario: {
    fontSize: "6px",
    position: "absolute",
    top: "7px",
    right: "5px",
    color: "#F3A913",
  },
  estiloIconAdd: {
    fontSize: "22px",
    color: "#F3A913",
  },
  iconButtonAddConfig: {
    position: "absolute",
    right: -6,
    width: "30px",
    height: "30px",
    "&.MuiButtonBase-root.MuiIconButton-root:hover": {
      background: "rgba(243,169,19,0.2)",
    },
  },
  boxAreaTurnos: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "240px",
    maxHeight: "32vh",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowY: "auto",
    gap: "6px",
  },
  textTurnosEvento: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
  },
  boxAreaInfoTurno: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    mr: "16px",
  },
  boxIconeTextTurno: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  },
  iconesEvento: {
    fontSize: "18px",
    color: "#F3A913",
  },
  boxAreaCardMembro: {
    display: "flex",
    width: "100%",
    height: "42px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  configAccordion: {
    width: "100%",
    background: "#1B1B1B",
    "&.MuiPaper-root.MuiAccordion-root.Mui-expanded": {
      margin: "0px",
    },
  },
  configAccordionSummary: {
    "& .MuiSvgIcon-root": {
      color: "#F3A913",
    },
    "&.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "48px",
      height: "48px",
    },
  },
};

const ModalCriarEvento = (params) => {
  const { openModalCriarEvento, setOpenModalCriarEvento } = params;
  const [activeStep, setActiveStep] = useState(0);
  const [checkedTodos, setCheckedTodos] = useState(true);
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

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

  const stepsCriarEvento = [
    {
      label: "Informações",
      conteudo: [
        <Box sx={styles.boxAreaConteudoStepper}>
          <Box sx={styles.boxDoubleTextField}>
            <TextField
              focused
              label="Nome do Evento"
              placeholder="Ex.: Culto de Batismo"
              variant="filled"
              sx={styles.textField}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Data do Evento"
                placeholder="Digite o título do Evento"
                variant="filled"
                inputFormat="dd/MM/yyyy"
                sx={styles.datePicker}
              />
            </LocalizationProvider>
          </Box>

          <TextField
            placeholder="Informações do evento..."
            multiline
            rows={5}
            sx={styles.textField}
          />
        </Box>,
      ],
    },
    {
      label: "Programação",
      conteudo: [
        <Box sx={styles.boxAreaConteudoStepper}>
          <Box sx={styles.boxDataInfoEvento}>
            <Box sx={styles.boxDoubleIconeBotaoEvento}>
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: "16px", color: "#F3A913" }}
              />
              <Star sx={styles.positionStarCalendario} />
            </Box>
            <Typography
              sx={styles.textInfoDataEvento}
            >{`19/05/24 - DOMINGO`}</Typography>
            <IconButton sx={styles.iconButtonAddConfig}>
              <AddCircleOutline sx={styles.estiloIconAdd} />
            </IconButton>
          </Box>
          <Divider sx={{ ...styles.divider, mt: "-12px", width: "100%" }} />
          <Box sx={styles.boxAreaTurnos}>
            {/* <Typography fontWeight={600} sx={styles.textInfoDataEvento}>
              Crie turnos para o evento
            </Typography>

            <Typography sx={styles.textInfoDataEvento}>
              Clique no botão de adicionar acima e seleciona o horário de início
              e final do turno. Selecione as tags necessárias para esse turno e
              clique em adicionar.
            </Typography>

            <Typography sx={styles.textInfoDataEvento}>
              Os membros poderão se candidatar as vagas disponíveis em cada
              turno.
            </Typography>

            <Typography
              sx={{
                ...styles.textInfoDataEvento,
                fontSize: "13px",
                color: "#F3A913",
              }}
            >
              Exemplo: Se um evento tem duração de 4 horas, eu posso dividir em
              2 turnos de 2 horas, onde eu terei uma equipe para cada turno.
            </Typography> */}
            {Array.from({ length: 8 }).map((_, index) => (
              <Accordion
                expanded={expandedAccordion === "panel1"}
                onChange={handleChange("panel1")}
                sx={styles.configAccordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={styles.configAccordionSummary}
                >
                  <Box sx={styles.boxAreaInfoTurno}>
                    <Typography
                      sx={{ ...styles.textTurnosEvento, color: "#F3A913" }}
                    >
                      1° Turno
                    </Typography>
                    <Box sx={styles.boxIconeTextTurno}>
                      <AccessTimeOutlinedIcon sx={styles.iconesEvento} />
                      <Typography sx={styles.textTurnosEvento}>
                        08:00 - 10:00
                      </Typography>
                    </Box>
                    <Box sx={styles.boxIconeTextTurno}>
                      <GroupsOutlinedIcon sx={styles.iconesEvento} />
                      <Typography sx={styles.textTurnosEvento}>4</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "0px 0px 4px 12px" }}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Box sx={styles.boxAreaCardMembro} key={index}>
                      <Avatar sx={styles.avatarMembro}>
                        <Person sx={{ fontSize: "18px" }} />
                      </Avatar>
                      <Box sx={styles.boxInfoPerfil}>
                        <Typography sx={styles.textInfoPerfil}>
                          Membro {index + 1}
                        </Typography>
                        <Typography
                          sx={{
                            ...styles.textInfoPerfil,
                            color: "#F3CE24",
                          }}
                        >
                          Câmera Lateral - Esquerda
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
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
        open={openModalCriarEvento}
        onClose={() => {
          setOpenModalCriarEvento(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalCriarEvento}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Criar Evento")}
              <IconButton
                onClick={() => {
                  setOpenModalCriarEvento(false);
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Box sx={styles.boxStepper}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {stepsCriarEvento?.map((step, index) => (
                    <Step key={step.label} sx={styles.step}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box sx={styles.boxConteudoStepper}>
                {stepsCriarEvento[activeStep].conteudo}
              </Box>
              <Box sx={styles.boxAreaBotaoCard}>
                <Divider sx={styles.divider} />
                <Box sx={styles.boxDoubleBotoes}>
                  <Button
                    onClick={() => {
                      if (activeStep === 0) {
                        setOpenModalCriarEvento(false);
                      } else if (activeStep > 0) {
                        setActiveStep(activeStep - 1);
                      }
                    }}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    {activeStep === 0 && "Cancelar"}
                    {activeStep > 0 && "Voltar"}
                  </Button>
                  <Button
                    onClick={() => {
                      if (activeStep < 2) {
                        setActiveStep(activeStep + 1);
                      } else if (activeStep === 2) {
                        setOpenModalCriarEvento(false);
                        setActiveStep(0);
                      }
                    }}
                    variant="contained"
                    sx={{ ...styles.botaoDefault, mb: "8px" }}
                  >
                    {activeStep < 2 && "Próximo"}
                    {activeStep === 2 && "Enviar"}
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
export default ModalCriarEvento;
