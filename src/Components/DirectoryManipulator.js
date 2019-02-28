import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function DirectoryManipulator(props) {
    
    const { classes } = props;

    return (
        <div>
            
        </div>
    )
};

DirectoryManipulator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DirectoryManipulator);