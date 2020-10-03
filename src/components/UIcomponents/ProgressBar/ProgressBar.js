import React from 'react';

const ProgressBar = props => {
  const { completed } = props;

  const containerStyles = {
    display: 'inline-block',
    height: 6,
    width: 440,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#43D190',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold',
  // };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;
