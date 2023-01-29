import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Feed, Navbar, Rightbar, Sidebar } from "./components";
import Add from "./components/Add";

const App = () => {
  const [mode , setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      
  }})
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar />
      <Stack spacing={2} justifyContent="space-between" direction="row" >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
};

export default App;
