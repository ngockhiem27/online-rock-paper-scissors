import React, { useContext } from "react"
import { Grid, Card, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import LoginForm from "../components/login-form"
import { AppContext } from "../context/context"
import { navigate } from "gatsby"
import { isBrowser } from "../helper/helper"

const useStyles = makeStyles(theme => ({
  card: {
    padding: "25px",
    marginTop: "50px",
  },
}))

export default function Login() {
  const classes = useStyles()
  const { state, login } = useContext(AppContext)
  if (state.auth.isAuthenticated) {
    if (isBrowser()) navigate("/")
    return <Layout>Already LoggedIn</Layout>
  }
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={10} md={8}>
          <Card className={classes.card} elevation={5}>
            <LoginForm handleLogin={login} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
