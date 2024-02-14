import {images} from "./services/config/images";

interface GenerateFullPathProps {
  poster?: Poster;
  backdrop?: Backdrop;
  profile?: Profile;
  logo?: Logo;
  still?: Still;
}

interface Poster {
  path: string;
  size: PosterSizes;
}

interface Backdrop {
  path: string;
  size: BackdropSizes;
}

interface Profile {
  path: string;
  size: ProfileSizes;
}

interface Logo {
  path: string;
  size: LogoSizes;
}

interface Still {
  path: string;
  size: StillSizes;
}

type BackdropSizes = "w300" | "w780" | "w1280" | "original";
type PosterSizes = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";
type ProfileSizes = "w45" | "w185" | "h632" | "original";
type LogoSizes = "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original";
type StillSizes = "w92" | "w185" | "w300" | "original";

const {secure_base_url} = images;
const DEFAULT_IMAGE =
  "https://1.bp.blogspot.com/-WvpVOfQURGI/VY4dAcL4YgI/AAAAAAAADqw/BHCEc_1H5Fw/s1600/How%2Bto%2BPlay%2BOptimally%2BAgainst%2BUnknown%2BOpponents.jpg";

export function generateFullPath({backdrop, poster, logo, profile, still}: GenerateFullPathProps) {
  if (backdrop) {
    return createPath(backdrop);
  }

  if (poster) {
    return createPath(poster);
  }

  if (logo) {
    return createPath(logo);
  }

  if (profile) {
    return createPath(profile);
  }

  if (still) {
    return createPath(still);
  }
}

function createPath<T>(typeSize: T) {
  const {path, size} = typeSize as {path: string; size: string};

  if (!path) return DEFAULT_IMAGE;
  const fullPath = `${secure_base_url}${size}/${path}`;

  return fullPath;
}
