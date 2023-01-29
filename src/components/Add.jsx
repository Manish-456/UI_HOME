import {
  AddOutlined,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddOutlined />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          borderradius={4}
          p={2}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create a Post
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems="center" mb={2}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/111108242?v=4"
              alt=""
            />
            <Typography variant="span">Manish Tamang</Typography>
          </Stack>
          <TextField
            sx={{
              width: "100%",
            }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind ?"
            variant="standard"
          />
          <Stack direction={"row"} spacing={4} mt={2} mb={4}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Stack>
            <Button variant="contained" color="primary" borderRadius={4}>
              Post
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
