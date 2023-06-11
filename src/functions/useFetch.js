import { useState, useEffect } from 'react';
import { Storyblok } from './Storyblok';
import axios from 'axios';

export function useFetch(url, isStoryblok, params) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = isStoryblok ? await Storyblok.get(url, params) : await axios.get(url);
      setLoading(false);
      if (isStoryblok)
        setData(response.data.stories);
      else
        setData(response.data);
    })();
  }, []);

  return [data, isLoading];
}