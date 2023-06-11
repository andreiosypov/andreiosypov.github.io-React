import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
  accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});