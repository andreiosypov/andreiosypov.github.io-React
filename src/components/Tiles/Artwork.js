import React from 'react';
import PropTypes from 'prop-types';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiCard,
} from '@elastic/eui';

const Artwork = props => {

  const description = '';

  const cardFooterContent = (
    <EuiFlexGroup justifyContent="center">
      <EuiFlexItem grow={false}>
        <EuiButton>Details</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  const cardImage = props.content.image ? (
    <div>
      <img
        src={props.content.image.filename}
        alt={props.name}
      />
    </div>
  ) : null;

  console.log(props);

  return (
    <EuiFlexItem>
      <EuiCard
        textAlign="center"
        image={cardImage}
        title={props.name}
        description={description}
        footer={cardFooterContent}
      />
    </EuiFlexItem>
  );
};

Artwork.propTypes = {
  /**
   * Name
   */
  name: PropTypes.string,
  /**
   * content
   */
  content: PropTypes.any,
};
  
export default Artwork;