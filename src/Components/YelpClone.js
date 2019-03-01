import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function YelpClone(props) {
    
    const { classes } = props;

    return (
        <div>
            <p>Yelp Clone</p>
        </div>
    )
};

YelpClone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YelpClone);