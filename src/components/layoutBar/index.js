import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";
import LogoPardal from "../../img/logoZS.png";
import { useEffect, useState } from "react";

const LayoutBar = () => {
  const autenticated = localStorage?.getItem("token");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!autenticated) {
      window.location.href = "/login";
    }
  }, [autenticated]);

  useEffect(() => {
    const storedData = localStorage?.getItem("login");
    const userData = JSON?.parse(storedData);

    setUser(userData);
  }, []);
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
                  transform: "scale(3.0)",
                }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {""}
            </Typography>
            <IconButton>
              <Avatar sx={{ background: "#F3A913" }}>
                {user?.nome?.charAt(0)?.toUpperCase()}
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default LayoutBar;
