import { Box } from "@mui/material";
import Posts from "./Posts";


const Feed = () => {
  return <Box p={2} flex={4}>
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
  </Box>;
};

export default Feed;
