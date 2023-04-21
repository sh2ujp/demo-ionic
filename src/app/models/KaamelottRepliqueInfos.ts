export class KaamelottRepliqueInfos {
  auteur: string;
  acteur: string;
  personnage: string;
  saison: string;
  episode: string;

  constructor(auteur: string, acteur: string, personnage: string, saison: string, episode: string) {
    this.auteur     = auteur;
    this.acteur     = acteur;
    this.personnage = personnage;
    this.saison     = saison;
    this.episode    = episode;
  }
}
