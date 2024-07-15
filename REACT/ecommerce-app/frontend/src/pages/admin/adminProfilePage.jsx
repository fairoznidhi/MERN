import React from "react";
import { Grid, Typography, Avatar, Badge, TextField, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const AdminProfilePage = () => {
  const adminProfile = {
    name: "Tasfi Fairoz Nidhi",
    phoneNumber: "01781910404",
    email: "fairoz1697@gmail.com",
    imageUrl: "",
  };

  return (
    <Grid container justifyContent="center" mt={4}>
      <Card sx={{ width: 600, p: 3, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={adminProfile.imageUrl}
                  alt={adminProfile.name}
                  style={{ width: 80, height: 80 }}
                />
              </StyledBadge>
            </Grid>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                Admin Profile
              </Typography>
            </Grid>
            <Grid item container direction="column" spacing={2}>
              <Grid item container alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <Typography variant="body1" color="textSecondary">
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="name"
                    defaultValue={adminProfile.name}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <Typography variant="body1" color="textSecondary">
                    Phone Number:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="phone-number"
                    defaultValue={adminProfile.phoneNumber}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <Typography variant="body1" color="textSecondary">
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="email"
                    defaultValue={adminProfile.email}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
