import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Logout, Person } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import LogoPardal from "../../img/logoZS.png";
import Rodape from "../rodape";

const styles = {
  configMenuLayoutBar: {
    bgcolor: "#000000",
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "#000000 ",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  menuItem: {
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  listItemIcon: {
    color: "#F3A913",
  },
};

const LayoutBar = () => {
  const autenticated = localStorage?.getItem("token");
  const [user, setUser] = useState({});

  const [anchorElMenu, setAnchorElMenu] = useState(null);

  useEffect(() => {
    if (!autenticated) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }, [autenticated]);

  useEffect(() => {
    const storedData = localStorage?.getItem("login");
    const userData = JSON?.parse(storedData);

    setUser(userData);
  }, []);

  const handleClickOpenMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  function handleLogout() {
    localStorage?.clear();
    window.location.href = "/login";
  }

  return (
    <Box
      sx={{
        background: "#1B1B1B",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Barra de navegação */}
      <AppBar position="static" sx={{ background: "#000000", height: "64px" }}>
        <Toolbar>
          <IconButton
            onClick={() => {
              window.location.href = "/home";
            }}
            sx={{ width: "166px", height: "64px", overflow: "hidden" }}
          >
            <img
              src={LogoPardal}
              alt="Logo Pardal"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(3.0)",
              }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {""}
          </Typography>
          <IconButton onClick={handleClickOpenMenu}>
            <Avatar
              sx={{ background: "#F3A913" }}
              src={user?.foto ? user?.foto : undefined}
            >
              {!user?.foto && user?.nome?.charAt(0)?.toUpperCase()}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu de usuário */}
      <Menu
        anchorEl={anchorElMenu}
        id="account-menu"
        open={anchorElMenu !== null}
        onClose={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: styles.configMenuLayoutBar,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleCloseMenu} sx={styles.menuItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
          }}
          sx={styles.menuItem}
        >
          <ListItemIcon sx={styles.listItemIcon}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Conteúdo principal */}
      <Box
        sx={{
          flex: 1, // Faz o Box ocupar o espaço restante entre a AppBar e o rodapé
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      {/* Rodapé */}
      <Box sx={{ background: "#1b1b1b", color: "#fff" }}>
        <Rodape />
      </Box>
    </Box>
  );
};

export default LayoutBar;
