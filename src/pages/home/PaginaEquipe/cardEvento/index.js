import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  Star,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const styles = {
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
  boxDoubleIconeBotaoEvento: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  positionStarCalendario: {
    fontSize: "8px",
    position: "absolute",
    top: "7px",
    right: "5px",
  },
  iconeEvento: {
    position: "absolute",
    bottom: 2,
    fontSize: "18px",
    color: "#F3A913",
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
};

const CardEvento = ({ evento }) => {
  return (
    <>
      <Box sx={styles.boxConteudoEvento}>
        <Button sx={styles.boxCardEvento}>
          <Box sx={styles.boxAreaInfoEvento}>
            <Box sx={styles.boxDataEvento}>
              <Typography sx={{ ...styles.dataTextDateEvento, mb: "-3px" }}>
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
      {/* <Modal
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
            </Box>
          </Box>
        </Fade>
      </Modal> */}
    </>
  );
};
export default CardEvento;
