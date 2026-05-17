import React from 'react';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>; // Added valid JSX wrapper
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;