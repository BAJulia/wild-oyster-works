import type { VideoLink } from '../data/types';

/** Embeds videos that have a URL, and shows a quiet "coming soon" note for those that don't. */
export function VideoList({ videos }: { videos: VideoLink[] }) {
  if (videos.length === 0) return null;
  return (
    <div className="video-list">
      {videos.map((video) =>
        video.url ? (
          <figure key={video.title} className="video">
            <div className="video__frame">
              {/\.(mp4|webm)$/i.test(video.url) ? (
                <video src={video.url} controls preload="metadata" />
              ) : (
                <iframe src={video.url} title={video.title} loading="lazy" allowFullScreen />
              )}
            </div>
            <figcaption>{video.title}</figcaption>
          </figure>
        ) : (
          <div key={video.title} className="video video--pending">
            <span className="video__icon" aria-hidden="true">▶</span>
            <div>
              <p className="video__title">{video.title}</p>
              {video.note && <p className="video__note">{video.note}</p>}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
