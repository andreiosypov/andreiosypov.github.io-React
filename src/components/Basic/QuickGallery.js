import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../functions/useFetch';
import LoadingIndicator from './LoadingIndicator';
import Gallery from 'react-grid-gallery';


const QuickGallery = props => {
  const [data, isLoading] = useFetch(props.url, props.isStoryblok, props.params);

  //@TODO: fetch data from localstorage first, and if there is nothing, display loading
  if (isLoading) return <LoadingIndicator/>;

  const tempImages = data.map((dataItem) => {return ({
    src: dataItem.content.image.filename,
    thumbnail: dataItem.content.image.filename,
    thumbnailWidth: dataItem.content.image.filename ? parseInt(dataItem.content.image.filename.split('/')[5].split('x')[0]) : 100,
    thumbnailHeight: dataItem.content.image.filename ? parseInt(dataItem.content.image.filename.split('/')[5].split('x')[1]) : 100,
    caption: dataItem.name,
    tags: dataItem.content.sale_status==='sold' ? [{value: 'sold', title: 'Sold'}]: []
  }); });

  return (
    <Gallery images={tempImages}/>
  );
};

QuickGallery.propTypes = {
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

QuickGallery.defaultProps = {
  render: null,
  url: '',
  isStoryblok: true,
  params: {}
};
  
export default QuickGallery;