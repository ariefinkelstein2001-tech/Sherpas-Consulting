// Recursos / publicaciones — MASTER PROMPT §5.6. Links externos reales.

export type ResourceType = 'article' | 'video' | 'podcast';

export interface Resource {
  type: ResourceType;
  typeLabel: string;
  title: string;
  source: string;
  url: string;
}

export const resources: Resource[] = [
  {
    type: 'article',
    typeLabel: 'Artículo',
    title: 'Proyecto de ley 40 horas y salud mental',
    source: 'RedMad',
    url: 'https://redmad.cl/opinion/proyecto-de-ley-40-horas-y-salud-mental/',
  },
  {
    type: 'video',
    typeLabel: 'Video',
    title: 'Bienestar y felicidad',
    source: 'UC',
    url: 'https://www.youtube.com/watch?v=seRPjfyraQ4',
  },
  {
    type: 'video',
    typeLabel: 'Video',
    title: 'Bienestar y felicidad',
    source: 'UC',
    url: 'https://www.youtube.com/watch?v=wQC0r37nZbE',
  },
  {
    type: 'podcast',
    typeLabel: 'Podcast',
    title: 'Episodio en Spotify',
    source: 'Spotify',
    url: 'https://open.spotify.com/episode/2TR4G4N3iBqsD2XSuRZVOh',
  },
];
