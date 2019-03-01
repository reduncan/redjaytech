import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import ContactIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

class SideBar extends React.Component {
    state = {
        left: false
    };

    toggleSideBar = (open) => () => {
        this.setState({
            left: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Home', 'About Me', 'Directory Manipulator', 'Yelp Clone', 'FaceBell'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{
                                (() => {
                                    switch (index) {
                                        case 0: <HomeIcon />
                                            break;
                                        case 1: <PersonIcon />
                                            break;
                                        case 2: <ContactIcon />
                                            break;
                                        case 3: <CodeIcon />
                                            break;
                                        case 4: <CodeIcon />
                                            break;
                                        case 5: <CodeIcon />
                                            break;
                                    }
                                })()
                            }</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);