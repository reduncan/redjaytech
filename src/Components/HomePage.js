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
        backgroundImage: 'url("./redjay-light.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
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
        color: 'rgb(237, 32, 36)',
        background: 'rgb(255, 255, 255)',
        fontFamily: 'Reem Kufi, sans-serif',
        alignItems: 'center',
        fontSize: 32
    },
    sectionHeaderLeft: {
        textAlign: 'left',
        margin: '0px 0px 0px 20px',
        
    },
    sectionHeaderRight: {
        textAlign: 'right',
        margin: '0px 20px 0px 0px'
    },
    sectionContent: {
        color: 'rgb(35, 35, 35)',
        background: 'rgb(255, 255, 255)',
        fontSize: 20
    },
    sectionText: {
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Reem Kufi, sans-serif'
    },
    links: {
        textDecoration: "none",
        color: 'rgb(237, 32, 36)',
        fontWeight: "bold"
    },
    whatWeDo: {
        height: 650,
        backgroundColor: 'rgb(74, 73, 74)',
        backgroundImage: 'url("./redjay-grayscale1.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    ourExperience: {
        height: 650,
        backgroundColor: 'rgb(74, 73, 74)',
        backgroundImage: 'url("./redjay-light.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
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
                <Grid item xs={12} sm={12} md={6} className={classes.sectionContent}>
                    <p className={classes.sectionText}>REDJAY Technologies is a LGBTQ+ owned and run company. We treat all of our clients equally and offer a safe open place for their creativity to be brought to life. We are a full service web shop specializing in full-stack web development. We believe in helping our clients achieve an immersive web presence whether it be for their portfolio, blog, a fun website to help drive traffic or a larger Software as a Service (SaaS) project to help power their business.</p>
                    <p className={classes.sectionText}><a href="/our-team" className={classes.links}>Learn more about our developers</a></p>
                </Grid>
            </Grid>
            <div className={classes.whatWeDo}></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionContent}>
                    <p className={classes.sectionText}>At REDJAY Technologies we specialize in the MERN Stack (MongDB, Express.js, React.js, Node.js). Yes, MongoDB is a non-relational database, but we also work in MySQL databases if that fits your development needs better. We are also very well versed in RESTful APIs from internal and external sources. Not only do we ensure your project is functional we also do a great job making it look great.</p>
                    <p className={classes.sectionText}>To achieve a beautiful User Experience and Interface (UX/UI) we utilize HTML5 and CSS3. Along with CSS3 we also integrate CSS frameworks like Bootstrap, Spectre, Semantic UI and Material UI.</p>
                    <p className={classes.sectionText}>When we put all of these technologies together we can create almost anything for you! Need a blog, personal website to promote yourself, having an event, or a web application to help power your business? We can do it! We may not have mentioned exactly what you're looking for, but give us a shout and we bet we can create it for you.</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionTitle}>
                    <h2 className={classes.sectionHeaderLeft}>WHAT WE DO</h2>
                </Grid>
            </Grid>
            <div className={classes.ourExperience}></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionTitle}>
                    <h2 className={classes.sectionHeaderRight}>OUR EXPERIENCE</h2>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.sectionContent}>
                    <p className={classes.sectionText}>REDJAY Technologies was founded in 2019. However, our developers have been producing applications and websites since 2018. We have learned from and worked with some of the top developers in the Southeast and across the United States. Our mentors and colleagues consist of top developers from Accenture, BitPay, Trilogy Education and facebook.</p>
                </Grid>
            </Grid>
        </div >
    )
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);