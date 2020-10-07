import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
  const containerStyles = {
    color: '#43d190',
  };

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress style={containerStyles} variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ index }) {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const a = 100 / 21;
    const b = index * a;
    setProgress(b);
  }, [index]);

  return (
    <div>
      <CircularProgressWithLabel value={progress} />
    </div>
  );
}
