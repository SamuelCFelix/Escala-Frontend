import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";
import LogoPardal from "../../img/logoZS.png";

const LayoutBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar sx={{ background: "#000000", height: "64px" }}>
            <IconButton
              sx={{ width: "166px", height: "64px", overflow: "hidden" }}
            >
              <img
                src={LogoPardal}
                alt="Logo Pardal"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: "scale(3.0)", // Ajuste o valor conforme necessário para o zoom desejado
                }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {""}
            </Typography>
            <IconButton>
              <Avatar sx={{ background: "#F3A913" }}>S</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default LayoutBar;
