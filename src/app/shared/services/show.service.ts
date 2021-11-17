import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { LogoModel, ShowModel, SourceModel } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  BASE_URL = 'https://redetv.herokuapp.com';

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
        for (let c of s.categories) {
          if (!s.main && c.name !== 'Programas religiosos') {
            return true;
          }
        }
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
        for (let c of s.categories) {
          if (c.name === 'Programas religiosos') {
            return true;
          }
        }
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
      const arr = [];
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
}
