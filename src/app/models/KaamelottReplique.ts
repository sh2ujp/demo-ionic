import {KaamelottRepliqueInfos} from "./KaamelottRepliqueInfos";

export class KaamelottReplique {
  citation: string;
  infos: KaamelottRepliqueInfos;

  constructor(citation: string, infos: KaamelottRepliqueInfos) {
    this.citation = citation;
    this.infos    = infos;
  }
}
