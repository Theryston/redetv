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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
            }]
          }, {
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://br.web.img3.acsta.net/r_1920_1080/pictures/21/11/08/10/24/1856083.jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/21/08/20/19/19565091_hd_013.mp4',
            }]
          }, {
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
            }]
          }, {
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
            }]
          }, {
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
            }]
          }, {
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
            }]
          }]
        }, {
          name: '',
          number: 2,
          episodes: [{
            name: 'Conecte-se',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
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
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
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
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        show_name: 'Conecte-se',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
      {
        main: false,
        show_name: 'Conecte-se',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
      },
    ]
  }

  async getLogosActive(): Promise<LogoModel[]> {
    return [
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: true,
      }
    ]
  }

  async getLogosNoActive(): Promise<LogoModel[]> {
    return [
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",
        company_name: "empresa_top",
        active: false,
      }
    ]
  }
}
