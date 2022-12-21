export interface DataApi {
  audio: Array<{ bitrate: string; url: string }> | string;
  channel: string;
  published: string;
  thumb: string;
  title: string;
  video: Array<{ quality: string; url: string }> | string;
  views: string;
  bitrate: string;
  quality: string;
  url: string;
}
