import React from 'react';
import { EuiLoadingSpinner } from '@elastic/eui';

const LoadingIndicator = () => {
  return (
    <div>
      <EuiLoadingSpinner size="xl"/>
    </div>
  );
};
  
export default LoadingIndicator;