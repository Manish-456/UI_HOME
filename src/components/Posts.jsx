
import {   CommentOutlined, MoreVert, ShareOutlined, ThumbUp, ThumbUpOutlined } from '@mui/icons-material'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
const Posts = () => {
  return (

          <Card sx={{
            margin : 5
          }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} src={'https://material-ui.com/static/images/avatar/1.jpg'} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="2hrs ago"
      />
      <CardMedia
        component="img"
        height="5%"
        image="https://images.pexels.com/photos/69058/red-deer-herd-stag-hind-69058.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, corrupti! ❤
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Checkbox  icon={<ThumbUpOutlined />} checkedIcon={<ThumbUp sx={{
        color: 'blue'
      }} />} />
        <IconButton aria-label="Comment">
          <CommentOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <ShareOutlined />
        </IconButton>
     
    
      </CardActions>
    </Card>
  )
}

export default Posts
