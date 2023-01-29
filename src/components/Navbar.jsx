import {
  AddHomeWorkOutlined,
  HomeOutlined,
  MessageOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "background.default",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  padding: "0 5px",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          UI-Home
        </Typography>
        <AddHomeWorkOutlined
          
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        {/* Center */}
        <Search>
          <InputBase
            placeholder="Search.."
            sx={{
              color: "text.primary",
              width: "100%",
              backgroundColor: "background.default",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
          />
        </Search>

        {/* Right */}
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Badge>
            <HomeOutlined />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsOutlined />
          </Badge>
          <Badge badgeContent={3} color="error">
            <MessageOutlined />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{
              height: 30,
              width: 30,
            }}
            onClick={() => setOpen(true)}
          />
        </Stack>

        {/* Pops up when the when screen is smaller than 600px */}
        <Stack
          onClick={() => setOpen(true)}
          direction={"row"}
          spacing={2}
          alignItems="center"
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
        >
          <Avatar
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{
              height: 30,
              width: 30,
            }}
          />
          <Typography variant="span">Anna</Typography>
        </Stack>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginTop: 4,
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
