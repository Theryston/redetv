import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { LogoModel, ShowModel, SourceModel } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  BASE_URL = 'https://api.redetvto.com.br';
  // BASE_URL = 'http://localhost:2933';

  constructor(private http: HttpClient) { }

  async getRedetvLogo(): Promise<{ url: string, _id: string } | undefined> {
    try {
      return await this.http.get<{ url: string, _id: string } | undefined>(this.BASE_URL + `/show/redetv/logo`).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getMainShows(): Promise<ShowModel[]> {
    try {
      let show: any = await this.http.get<ShowModel[]>(this.BASE_URL + `/show/list`).toPromise();
      show = show.filter((f: any) => f.main);
      return show;
    } catch (error) {
      throw error;
    }
  }
  async getAllShows(): Promise<ShowModel[]> {
    try {
      let show: any = await this.http.get<ShowModel[]>(this.BASE_URL + `/show/list`).toPromise();
      show = show.filter((s: any): any => {
        return s.categories.filter((c: any) => c.name === 'Programas religiosos').length > 0 ? false : true && !s.main;
      });
      return show;
    } catch (error) {
      throw error;
    }
  }
  async getReliShows(): Promise<ShowModel[]> {
    try {
      let show: any = await this.http.get<ShowModel[]>(this.BASE_URL + `/show/list`).toPromise();
      show = show.filter((s: any): any => {
        return s.categories.filter((c: any) => c.name === 'Programas religiosos').length > 0 ? true : false && !s.main;
      });
      return show;
    } catch (error) {
      throw error;
    }
  }
  async getShow(_id: string): Promise<any> {
    try {
      return await this.http.get<ShowModel>(this.BASE_URL + `/show/${_id}`).toPromise();
    } catch (error) {
      throw error;
    }
  }
  async getSources(): Promise<any> {
    try {
      let sources = await this.http.get<ShowModel[] | any>(this.BASE_URL + `/show/source/list`).toPromise();
      sources = sources.filter((s: any): any => {
        if (s.poster_key !== null) {
          return true;
        }
      });
      sources.splice(8, sources.length - 8);
      return sources;
    } catch (error) {
      throw error;
    }
  }
  async getSource(_id: string | any): Promise<any> {
    try {
      return await this.http.get<SourceModel>(this.BASE_URL + `/show/source/${_id}`).toPromise();
    } catch (error) {
      throw error;
    }
  }
  async getLogosActive(): Promise<LogoModel[]> {
    try {
      const allLogos: any = await this.http.get(this.BASE_URL + `/show/logo/list`).toPromise();
      const logos = allLogos.filter((logo: LogoModel) => logo.active);
      return logos;
    } catch (error) {
      throw error;
    }
  }

  async getLogosNoActive(): Promise<LogoModel[]> {
    try {
      const allLogos: any = await this.http.get(this.BASE_URL + `/show/logo/list`).toPromise();
      const logos = allLogos.filter((logo: LogoModel) => !logo.active);
      return logos;
    } catch (error) {
      throw error;
    }
  }

  async getLogosFrinds(): Promise<LogoModel[]> {
    try {
      const logos: any = await this.http.get(this.BASE_URL + `/show/news/list`).toPromise();
      return logos;
    } catch (error) {
      throw error;
    }
  }

  async addViewToSource(source_id: string | undefined) {
    try {
      await this.http.put(this.BASE_URL + `/show/source/view/${source_id}`, {}).toPromise();
      return true;
    } catch (error) {
      throw error;
    }
  }

  async addLikeToSource(source_id: string | undefined) {
    try {
      await this.http.put(this.BASE_URL + `/show/source/like/${source_id}`, {}).toPromise();
      return true;
    } catch (error) {
      throw error;
    }
  }

  async addView() {
    try {
      let ip = localStorage.getItem('ip');
      if (ip === null) {
        localStorage.setItem('ip', await this.geraStringAleatoria(1000))
        ip = localStorage.getItem('ip');
      }
      return await this.http.post(this.BASE_URL + '/show/view', { user_ip: ip }).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async setViewOffline() {
    try {
      let ip = localStorage.getItem('ip');
      if (ip === null) {
        localStorage.setItem('ip', await this.geraStringAleatoria(1000))
        ip = localStorage.getItem('ip');
      }
      return await this.http.patch(this.BASE_URL + `/show/view`, { user_ip: ip }).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getViewsOnline() {
    try {
      return await this.http.get(this.BASE_URL + `/show/view/online`).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getAllViews() {
    try {
      return await this.http.get(this.BASE_URL + `/show/view`).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async geraStringAleatoria(length: number) {
    let stringAleatoria = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
  }
}
