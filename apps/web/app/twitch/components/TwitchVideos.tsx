'use client'

import React from 'react';
import useHostname from '../hooks/useHostname';
import { DEFAULTS } from '../constants';
import { generateUrl } from '../utils/TwitchPlayerNonInteractive';

export interface TwitchVideosProps extends React.HTMLAttributes<HTMLIFrameElement> {
  videos: string[];
  parent?: string;
  autoplay?: boolean;
  muted?: boolean;
  time?: string;
  title?: string;
  height?: string | number;
  width?: string | number;
}

// const defaultProps: Partial<TwitchVideosProps> = {
//   autoplay: DEFAULTS.AUTOPLAY,
//   muted: DEFAULTS.MUTED,
//   time: DEFAULTS.TIME,
//   title: DEFAULTS.TITLE.TWITCH_PLAYER,
//   height: DEFAULTS.MEDIA.HEIGHT,
//   width: DEFAULTS.MEDIA.WIDTH,
// };

const TwitchVideos: React.FC<TwitchVideosProps> = ({
  parent,
  videos,
  autoplay,
  muted,
  time,
  title,
  height,
  width,
  ...props
}) => {
  const hostname = useHostname();

  if (!parent && !hostname) {
    return null;
  }

  const playerUrls = videos.map((video) =>
    generateUrl(
      {
        video,
      },
      parent ?? hostname!,
      // {
      //   autoplay,
      //   muted,
      //   time,
      // }
    )
  );

  return (
    <div className="grid grid-cols-2 gap-6">
      {playerUrls.map((playerUrl, index) => (
        <div key={index} className="Card">
          <div className="Card--body">
            <div className="bg-white p-4 rounded shadow-md w-full border border-gray-300">
              <iframe
                title={title}
                height={height}
                width={width}
                src={playerUrl}
                frameBorder={0}
                {...props}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// TwitchVideos.defaultProps = defaultProps;

export default TwitchVideos;
