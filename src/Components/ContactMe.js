import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function ContactMe(props) {
    
    const { classes } = props;

    return (
        <div>
            <p>About Me</p>
        </div>
    )
};

ContactMe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactMe);