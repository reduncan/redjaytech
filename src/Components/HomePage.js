import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        backgroundColor: 'rgb(35, 35, 35)'
    },
    main: {
        marginTop: 0,
        minHeight: 740,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    appBar: {
        backgroundColor: "transparent !important",
        boxShadow: "none"
    },
    icon: {
        color: 'white'
    }
});

const style = {
    backgroundImage: 'url("/redjay-light.png")'
}

function HomePage(props) {

    const { classes } = props;

    return (
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12} style={style} className={classes.main}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton aria-label="Menu" className={classes.icon}>
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);