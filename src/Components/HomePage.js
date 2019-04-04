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
        backgroundColor: 'rgb(74, 73, 74)',
        height: "100vh"
    },
    main: {
        marginTop: 0,
        height: "100%",
        backgroundImage: 'url("/redjay-light.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    appBar: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        position: "fixed"
    },
    icon: {
        color: 'rgb(237, 32, 36)'
    },
    sectionTitle: {
        color: 'rgb(35, 35, 35)',
        background: 'rgb(255, 255, 255)'
    },
    sectionHeaderLeft: {
        textAlign: 'left',
        marginTop: 86
    },
    sectionHeaderRight: {
        textAlign: 'right',
        marginTop: 86
    },
    whoWeAreCon: {
        color: 'rgb(35, 35, 35)',
        background: 'rgb(255, 255, 255)',
        height: 200,
        textAlign: 'center'
    },
    whatWeDo: {
        height: 400,
        backgroundImage: 'url("/redjay-grayscale.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    whatWeDoCon: {
        color: 'rgb(35, 35, 35)',
        background: 'rgb(255, 255, 255)',
        height: 200,
        textAlign: 'right',
    },
    ourExperienceCon: {
        color: 'rgb(35, 35, 35)',
        background: 'rgb(255, 255, 255)',
        height: 200,
        textAlign: 'right'
    }
});

function HomePage(props) {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton aria-label="Menu" className={classes.icon}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.main}></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionTitle}>
                    <h2 className={classes.sectionHeaderRight}>WHO WE ARE</h2>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.whoWeAreCon}>
                    <p>Bacon ipsum dolor amet picanha tongue meatball buffalo kevin strip steak, ground round sausage beef ribs pancetta tail flank. Meatloaf pork chop pork belly swine pastrami cow. Bresaola jowl ham andouille. Corned beef chuck ham strip steak jerky pork loin salami, boudin brisket kevin landjaeger. Beef shoulder tenderloin, biltong ribeye frankfurter strip steak drumstick. Tongue shoulder filet mignon, drumstick leberkas kielbasa beef ribs cupim corned beef bresaola.</p>
                    <p>Bacon ipsum dolor amet doner turkey ball tip, shank venison ground round pig picanha pork belly biltong sausage swine brisket jowl. Kevin capicola short loin venison burgdoggen pig shank swine landjaeger buffalo chuck. Rump turkey shank burgdoggen ball tip tongue short loin hamburger. Ribeye pig flank short ribs jerky. Short ribs ball tip burgdoggen landjaeger, jerky andouille pastrami jowl boudin doner filet mignon turducken hamburger porchetta. Chuck capicola cupim biltong. Jowl buffalo fatback swine cow capicola ribeye pastrami biltong.</p>
                </Grid>
            </Grid>
            <div className={classes.whatWeDo}></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.whatWeDoCon}>
                    <p>Ground round flank tri-tip pork chop buffalo bacon hamburger, fatback ham hock. Boudin venison pancetta tongue pork shank picanha meatball porchetta landjaeger. Tongue beef chuck prosciutto, picanha tri-tip leberkas hamburger flank. Bresaola sausage turkey turducken pastrami. Shankle beef ribs flank alcatra bacon leberkas pork belly venison spare ribs prosciutto. T-bone swine shoulder kielbasa tenderloin. Biltong chuck meatball pancetta alcatra pork chop.</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionTitle}>
                    <h2 className={classes.sectionHeaderLeft}>WHAT WE DO</h2>
                </Grid>
            </Grid>
            <div className={classes.whatWeDo}></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionTitleRight}>
                    <h2 className={classes.sectionHeaderRight}>OUR EXPERIENCE</h2>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.ourExperienceCon}>
                    <p>Buffalo biltong ribeye ham, alcatra pastrami bresaola cupim cow. Ham shoulder porchetta turkey kielbasa, ground round flank meatloaf pork ribeye ball tip tri-tip. Shankle ham hock tongue kevin filet mignon pork belly prosciutto buffalo sausage hamburger landjaeger turducken turkey doner rump. T-bone bacon pork belly frankfurter shank meatloaf ribeye. Pancetta sausage venison bacon meatloaf picanha rump drumstick tongue andouille. Jerky landjaeger brisket, ground round t-bone ribeye andouille pancetta fatback jowl capicola corned beef pastrami pork belly ball tip.</p>
                </Grid>
            </Grid>
        </div >
    )
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);