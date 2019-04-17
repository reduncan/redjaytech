import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function OurTeam(props) {
    
    const { classes } = props;

    return (
        <div>
            <p>Our Team</p>
        </div>
    )
};

OurTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurTeam);