import React, { useState, useMemo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar/index';
import TopBar from './TopBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lightThemeConfig, darkThemeConfig, baseConfig } from './theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const initTheme = createMuiTheme(baseConfig)

const DashboardLayout = (props) => {
  const [theme, setTheme] = useState(initTheme)
  const [index, setIndex] = useState(0)

  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const themeCache = useMemo(() => {
    return [createMuiTheme(baseConfig), createMuiTheme(darkThemeConfig)]
  }, [])

  useEffect(() => {
    setTheme(themeCache[index])
  }, [index])

  const changeTheme = () => {
    setIndex((index + 1) % 2)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} changeTheme={changeTheme}/>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          changeTheme={changeTheme}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              { props.children }
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default DashboardLayout;
