import {images} from "./services/config/images";

interface GenerateFullPathProps {
  poster?: Poster;
  backdrop?: Backdrop;
}

interface Poster {
  path: string;
  size: PosterSizes;
}

interface Backdrop {
  path: string;
  size: BackdropSizes;
}

type BackdropSizes = "w300" | "w780" | "w1280" | "original";
type PosterSizes = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";

const {base_url} = images;

export function generateFullPath({backdrop, poster}: GenerateFullPathProps) {
  if (backdrop) {
    const {path, size} = backdrop;
    const fullPath = `${base_url}${size}/${path}`;

    return fullPath;
  }

  if (poster) {
    const {path, size} = poster;
    const fullPath = `${base_url}${size}/${path}`;

    return fullPath;
  }
}
