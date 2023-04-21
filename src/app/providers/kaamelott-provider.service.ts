import {Injectable}        from '@angular/core';
import {KaamelottReplique} from "../models/KaamelottReplique";
import {HttpClient}        from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KaamelottProviderService {

  constructor(
    private _http: HttpClient //@FIXME: l'injection fait planter la page demo API
  ) { }

  public getReplique(): Promise<KaamelottReplique> {
    return new Promise(async (resolve, reject) => {
      resolve(
        //   donnée en dur pour test
        {
          citation: 'J\'ai toujours dit que je supportais pas les jupes ; mais c\'est l\'uniforme réglementaire.',
          infos: {
            auteur: 'Alexandre Astier',
            acteur: 'Bruno Salomone',
            personnage: 'Caius Camillus',
            saison: 'Livre I',
            episode: '56 : Le Dernier Empereur'
          }
        }
      );

      // Interroge une API REST
      // try {
      //   let params   = new HttpParams();
      //   // params = params.append('apikey', '1898fc97'); // pas de key pour cette API
      //   const result = await this.http.get(
      //     'https://kaamelott.chaudie.re/api/random',
      //     {params: params}
      //   );
      //   console.log(result);
      //
      // } catch (error) {
      //   console.log('Erreur dans l\'toaster API!', error);
      //   reject('Erreur dans l\'toaster API!');
      // }
    });
  }
}
