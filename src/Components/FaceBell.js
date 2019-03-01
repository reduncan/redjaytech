import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function FaceBell(props) {
    
    const { classes } = props;

    return (
        <div>
            <p>Face Bell</p>
        </div>
    )
};

FaceBell.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaceBell);