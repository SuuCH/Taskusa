import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#daf8e7", height: "80vh" }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="E-mail" />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </form>
        </Typography>
      </Container>
    </>
  );
};

export { Login };
