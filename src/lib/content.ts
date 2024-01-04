import aboutThisSite from '../content/about-this-site.md?raw';
import buddhistChaplaincy from '../content/buddhist-chaplaincy.md?raw';
import film from '../content/film.md?raw';
import home from '../content/home.md?raw';
import music from '../content/music.md?raw';
import softwareEngineering from '../content/software-engineering.md?raw';

const content: Record<string, { title: string | null; markdown: string }> = {
  home: {
    title: null,
    markdown: home,
  },
  'software-engineering': {
    title: 'Software Engineering',
    markdown: softwareEngineering,
  },
  music: {
    title: 'Music',
    markdown: music,
  },
  film: {
    title: 'Film',
    markdown: film,
  },
  'buddhist-chaplaincy': {
    title: 'Buddhist Chaplaincy',
    markdown: buddhistChaplaincy,
  },
  'about-this-site': {
    title: 'About This Site',
    markdown: aboutThisSite,
  },
};

export default content;
