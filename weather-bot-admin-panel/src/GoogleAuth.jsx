import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth} from "./firebase";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {
    const navigate = useNavigate()
    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
          const user = result.user;
          if (user) {
            
            await localStorage.setItem("userInfo",JSON.stringify({
              email: user.email,
              firstName: user.displayName,
          }))
            navigate('/admin')
          }
        });
      }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Authentication
        </Typography>

        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 , display:"flex", gap:"10px"}} onClick={googleLogin}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TnrQxTZSfvVAv5WMvi3cNJZdO09N-NfkXQ&s"
            alt="google_icon"
            style={{width:"25px", height:"25px", borderRadius:"100%"}}
          />
          <Typography variant="p" >Continue with Google</Typography>
        </Button>
      </Box>
    </Container>
  );
}
