import React, { PureComponent } from 'react';
import { default as logo404 } from '@/assest/img/404.gif';
import { Box, makeStyles, Typography } from '@material-ui/core';
export default function Page404() {
  const useStyles = makeStyles({
    wrapper: {
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    logo: {
      width: '100%',
    },
    text: {
      fontSize: 26,
      fontWeight: "bold",
      color: '#212121',
      paddingTop: 10
    }
  })
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <img src={logo404} className={classes.logo}/>
        {/* <Typography className={classes.text}>404页面找不到</Typography> */}
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <img src={logo404} className={classes.logo}/>
        {/* <Typography className={classes.text}>404页面找不到</Typography> */}
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <img src={logo404} className={classes.logo}/>
        {/* <Typography className={classes.text}>404页面找不到</Typography> */}
      </Box>
    </Box>
  )
}