import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../functions/useFetch';
import LoadingIndicator from './LoadingIndicator';

const FetchComponent = props => {
  const [data, isLoading] = useFetch(props.url, props.isStoryblok, props.params);

  //@TODO: fetch data from localstorage first, and if there is nothing, display loading
  if (isLoading) return <LoadingIndicator/>;

  console.log('Weirdness');

  console.log(data);

  return (
    data.map(dataItem => props.render(dataItem))
  );
};

FetchComponent.propTypes = {
  /**
   * Render function
   */
  render: PropTypes.any,
  /**
   * Passed url for fetching
   */
  url: PropTypes.string,
  /**
   * Use storyblok api for fetching
   */
  isStoryblok: PropTypes.bool,
  /**
   * Passed params for storyblok requests
   */
  params: PropTypes.any,
};

FetchComponent.defaultProps = {
  render: null,
  url: '',
  isStoryblok: true,
  params: {}
};
  
export default FetchComponent;