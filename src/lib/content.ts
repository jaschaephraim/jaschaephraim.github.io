import aboutThisSite from '../content/about-this-site.md?raw';
import buddhistChaplaincy from '../content/buddhist-chaplaincy.md?raw';
import film from '../content/film.md?raw';
import home from '../content/home.md?raw';
import music from '../content/music.md?raw';
import softwareEngineering from '../content/software-engineering.md?raw';

const content: Record<string, string> = {
  home,
  'software-engineering': softwareEngineering,
  music,
  film,
  'buddhist-chaplaincy': buddhistChaplaincy,
  'about-this-site': aboutThisSite,
};

export default content;
