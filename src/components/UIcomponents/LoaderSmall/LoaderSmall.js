import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function LoaderSmall() {
  return (
    <Loader
      type="ThreeDots"
      color="#FE6083"
      height={20}
      width={20}
      timeout={3000}
    />
  );
}
