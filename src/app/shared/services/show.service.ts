import { Injectable } from '@angular/core';

import { LogoModel, ShowModel, SourceModel } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

  async getMainShows(): Promise<ShowModel[]> {
    return [
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/1.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204444&authkey=AEhPdKEQahGx2yw',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://br.web.img3.acsta.net/r_1920_1080/pictures/21/11/08/10/24/1856083.jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204446&authkey=AGuusL29fNbTIu8',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204443&authkey=ADeIX_rZ7D_E_o4',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204445&authkey=AEJY8AmZ2zm9d_8',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204447&authkey=ANUbmubwhSaG6OM',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204448&authkey=AN5r0UF8wFeJZNM',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }, {
          name: '',
          number: 2,
          episodes: [{
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204449&authkey=AExE-i4DN6mRz1k',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/2.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/3.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/4.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/5.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/6.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/7.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      }
    ]
  }
  async getAllShows(): Promise<ShowModel[]> {
    return [
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/1.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204444&authkey=AEhPdKEQahGx2yw',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://br.web.img3.acsta.net/r_1920_1080/pictures/21/11/08/10/24/1856083.jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204446&authkey=AGuusL29fNbTIu8',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204443&authkey=ADeIX_rZ7D_E_o4',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204445&authkey=AEJY8AmZ2zm9d_8',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204447&authkey=ANUbmubwhSaG6OM',
              views_count: 1000,
              like_count: 1000,
            }]
          }, {
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204448&authkey=AN5r0UF8wFeJZNM',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }, {
          name: '',
          number: 2,
          episodes: [{
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://onedrive.live.com/download?cid=005AB9D856DFC48D&resid=5AB9D856DFC48D%21204449&authkey=AExE-i4DN6mRz1k',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/2.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/3.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/4.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/5.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/6.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/7.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/8.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/9.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/10.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/11.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/12.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/13.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
            }]
          }]
        }],
        created_at: Date.now(),
      },
      {
        _id: 'isnwsswijswijswisjwis',
        posters: ['assets/shows/14.png'],
        name: 'Programa',
        description: 'O programa Programa, com Carlos Verahnnay, conecta vc, empresário, empreendedor ao mundo Business, ao mundo do branding. Vamos descobrir juntos que existe sempre um método, um padrão por trás de pessoas de sucesso! Domingo às 11h00, você vê Programa na TV e no site da RedeTV! ES',
        short_description: 'Uma viagem pelo universo do empreendedorismo!',
        trailers: ['https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4'],
        release_date_of: Date.now(),
        default_duration: '30min',
        show_hosts_name: ['Carlos Verahnnay'],
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
            name: 'Programa',
            number: 1,
            sources: [{
              poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
              main: true,
              url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
              views_count: 1000,
              like_count: 1000,
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
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        show_name: 'Programa',
        main: true,
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
      {
        main: false,
        show_name: 'Programa',
        url: 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/18/04/24/16/19558442_hd_013.mp4',
        poster: 'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg',
        views_count: 1000,
        like_count: 1000,
      },
    ]
  }

  async getLogosActive(): Promise<LogoModel[]> {
    return [
      {
        url: "assets/logos/(1).jpeg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "assets/logos/(2).jpeg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "assets/logos/(3).jpeg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "assets/logos/(4).jpeg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "assets/logos/(5).jpeg",
        company_name: "empresa_top",
        active: true,
      },
      {
        url: "assets/logos/(6).jpeg",
        company_name: "empresa_top",
        active: true,
      },
    ]
  }

  async getLogosNoActive(): Promise<LogoModel[]> {
    return [
      {
        url: "assets/logos/(7).jpeg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "assets/logos/(8).jpeg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "assets/logos/(9).jpeg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "assets/logos/(10).jpeg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "assets/logos/(11).jpeg",
        company_name: "empresa_top",
        active: false,
      },
      {
        url: "assets/logos/(12).jpeg",
        company_name: "empresa_top",
        active: false,
      },
    ]
  }

  async getLogosFrinds(): Promise<LogoModel[]> {
    return [
      {
        url: "assets/logos/(1).jpeg",
        company_name: "empresa_top",
        active: false,
        link: 'https://google.com'
      },
      {
        url: "assets/logos/(2).jpeg",
        company_name: "empresa_top",
        active: false,
        link: 'https://google.com'
      },
      {
        url: "assets/logos/(3).jpeg",
        company_name: "empresa_top",
        active: false,
        link: 'https://google.com'
      }
    ]
  }
}
