import { Injectable } from '@nestjs/common';

import { PokeResponse, Result } from './interfaces/poke-rersponse.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async execSeed(many: string) {
    await this.pokemonService.removeAll();
    const data = await this.http.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${many}`,
    );
    const pokemonToInsert: { name: string; no: number }[] = [];
    data.results.forEach(async ({ name, url }: Result) => {
      const segmnets = url.split('/');
      const no = +segmnets[segmnets.length - 2];
      const nameLowerCase = name.toLocaleLowerCase();
      pokemonToInsert.push({ no, name: nameLowerCase });
    });
    await this.pokemonService.createMany(pokemonToInsert);
    return `Seeding completed`;
  }
}
