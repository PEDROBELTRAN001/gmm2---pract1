import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaJuegos: Juego[] =[
    {
    nombre: 'Kylian',
    id: 1,
    apellidos: 'Mbappé',
    genero: 'Masculino',
    equipo: 'Real Madrid',
    posicion: 'Delantero',
    f_nacimiento: '1998-12-20',
    edad: 27,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR-kA2qhgpR_OGf2pph2Dqwcsi5TiVhLmWotVyjgcyvSmMhFQREEAUM4&s=10'
  },
  {
    id: 2,
    nombre: 'Erling',
    apellidos: 'Haaland',
    genero: 'Masculino',
    equipo: 'Manchester City',
    posicion: 'Delantero Centro',
    f_nacimiento: '2000-07-21',
    edad: 26,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl7_DzhfuHZtn-cY3wRpb8zcSaCP_NfJL3zv8r7adeA&s=10'
  },
  {
    id: 3,
    nombre: 'Jude',
    apellidos: 'Bellingham',
    genero: 'Masculino',
    equipo: 'Real Madrid',
    posicion: 'Centrocampista',
    f_nacimiento: '2003-06-29',
    edad: 23,
    imagen: 'https://i.pinimg.com/236x/94/18/ee/9418eee95515401ae8bfba7eca986b9d.jpg'
  },
  {
    id: 4,
    nombre: 'Vinícius',
    apellidos: 'Júnior',
    genero: 'Masculino',
    equipo: 'Real Madrid',
    posicion: 'Extremo Izquierdo',
    f_nacimiento: '2000-07-12',
    edad: 26,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KCD1wJYsuZej4vmmcxKU4dHTlbzpYeN8tUL_tfTPDA&s=10'
  },
  {
    id: 5,
    nombre: 'Kevin',
    apellidos: 'De Bruyne',
    genero: 'Masculino',
    equipo: 'Manchester City',
    posicion: 'Centrocampista',
    f_nacimiento: '1991-06-28',
    edad: 35,
    imagen: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    nombre: 'Mohamed',
    apellidos: 'Salah',
    genero: 'Masculino',
    equipo: 'Liverpool FC',
    posicion: 'Extremo Derecho',
    f_nacimiento: '1992-06-15',
    edad: 34,
    imagen: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 7,
    nombre: 'Harry',
    apellidos: 'Kane',
    genero: 'Masculino',
    equipo: 'Bayern Múnich',
    posicion: 'Delantero Centro',
    f_nacimiento: '1993-07-28',
    edad: 33,
    imagen: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    nombre: 'Rodri',
    apellidos: 'Hernández',
    genero: 'Masculino',
    equipo: 'Manchester City',
    posicion: 'Pivote',
    f_nacimiento: '1996-06-22',
    edad: 30,
    imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 9,
    nombre: 'Bukayo',
    apellidos: 'Saka',
    genero: 'Masculino',
    equipo: 'Arsenal FC',
    posicion: 'Extremo Derecho',
    f_nacimiento: '2001-09-05',
    edad: 24,
    imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 10,
    nombre: 'Lamine',
    apellidos: 'Yamal',
    genero: 'Masculino',
    equipo: 'FC Barcelona',
    posicion: 'Extremo Derecho',
    f_nacimiento: '2007-07-13',
    edad: 19,
    imagen: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 11,
    nombre: 'Florian',
    apellidos: 'Wirtz',
    genero: 'Masculino',
    equipo: 'Bayer Leverkusen',
    posicion: 'Media Punta',
    f_nacimiento: '2003-05-03',
    edad: 23,
    imagen: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 12,
    nombre: 'Jamal',
    apellidos: 'Musiala',
    genero: 'Masculino',
    equipo: 'Bayern Múnich',
    posicion: 'Media Punta',
    f_nacimiento: '2003-02-26',
    edad: 23,
    imagen: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 13,
    nombre: 'Lautaro',
    apellidos: 'Martínez',
    genero: 'Masculino',
    equipo: 'Inter de Milán',
    posicion: 'Delantero Centro',
    f_nacimiento: '1997-08-22',
    edad: 28,
    imagen: 'https://images.unsplash.com/photo-1560272564-6695205432b0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 14,
    nombre: 'Antoine',
    apellidos: 'Griezmann',
    genero: 'Masculino',
    equipo: 'Atlético de Madrid',
    posicion: 'Segundo Delantero',
    f_nacimiento: '1991-03-21',
    edad: 35,
    imagen: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 15,
    nombre: 'Federico',
    apellidos: 'Valverde',
    genero: 'Masculino',
    equipo: 'Real Madrid',
    posicion: 'Centrocampista',
    f_nacimiento: '1998-07-22',
    edad: 28,
    imagen: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 16,
    nombre: 'Pedri',
    apellidos: 'González',
    genero: 'Masculino',
    equipo: 'FC Barcelona',
    posicion: 'Centrocampista',
    f_nacimiento: '2002-11-25',
    edad: 23,
    imagen: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 17,
    nombre: 'William',
    apellidos: 'Saliba',
    genero: 'Masculino',
    equipo: 'Arsenal FC',
    posicion: 'Defensa Central',
    f_nacimiento: '2001-03-24',
    edad: 25,
    imagen: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 18,
    nombre: 'Thibaut',
    apellidos: 'Courtois',
    genero: 'Masculino',
    equipo: 'Real Madrid',
    posicion: 'Guardameta',
    f_nacimiento: '1992-05-11',
    edad: 34,
    imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 19,
    nombre: 'Phil',
    apellidos: 'Foden',
    genero: 'Masculino',
    equipo: 'Manchester City',
    posicion: 'Extremo Izquierdo',
    f_nacimiento: '2000-05-28',
    edad: 26,
    imagen: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 20,
    nombre: 'Robert',
    apellidos: 'Lewandowski',
    genero: 'Masculino',
    equipo: 'FC Barcelona',
    posicion: 'Delantero Centro',
    f_nacimiento: '1988-08-21',
    edad: 37,
    imagen: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=600&auto=format&fit=crop'
  }
  ];

  obtenerJuegos():  Juego[] {
    return this.listaJuegos;
  }

  //buscar por nombre los juegos
  obtenerJuegoPorNombre(nombre: string): Juego | undefined {
    return this.listaJuegos.find((juego) => juego.nombre.toLowerCase() === nombre.toLowerCase());
  }
}
