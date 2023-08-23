import { URLS, DEFAULTS } from '../constants';

export interface TwitchPlayerMedia {
  channel?: string
  video?: string
  collection?: string
}

export interface TwitchPlayerOptions {
  autoplay?: boolean
  muted?: boolean
  time?: string
}

const generateUrlDefaultOptions: TwitchPlayerOptions = {
  autoplay: DEFAULTS.AUTOPLAY,
  muted: DEFAULTS.MUTED,
  time: DEFAULTS.TIME
};

export const generateUrl = (
  video: string,
  parent: string | string[],
  options = generateUrlDefaultOptions
): string => {
  const fullOptions = { ...generateUrlDefaultOptions, ...options };
  const params = new URLSearchParams();

  if(video){
    params.append('video',video);
  }

  Object.entries(fullOptions).forEach(([key, value]) => {
    params.append(key, value.toString());
  });
  
  if (Array.isArray(parent)) {
    parent.forEach((parent) => params.append('parent', parent));
  } else {
    params.append('parent', parent);
  }

  return `${URLS.TWITCH_PLAYER_URL}/?${params.toString()}`;
};