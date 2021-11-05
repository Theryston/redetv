import { Injectable } from '@angular/core';

import { LogoModel, ShowModel, SourceModel } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

  async getAllShows(): Promise<ShowModel[]> {
    return [
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['https://www.esflix.espost.com.br/public/upload/cover/conecte-se.webp'],
        name: 'Conecte-se',
        description: 'O programa CONECTE-SE, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Conecte-se na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
        categories_id: ['omoxisxnsox'],
        categories: [{
          name: 'Branding'
        }, {
          name: 'Empreendedor'
        }, {
          name: 'Negócios'
        }],
        seasons: [{
          name: '',
          number: 1,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
            }]
          }]
        }],
        created_at: Date.now(),
      },
    ]
  }
  async getSources(): Promise<SourceModel[]> {
    return [
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204221&authkey=AGo_SlNe4f5bA80',
      },
    ]
  }

  async getLogos(): Promise<LogoModel[]> {
    return [
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      }
    ]
  }
}
