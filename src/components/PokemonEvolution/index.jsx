import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getIdByUrl, fixedId } from '../../utils/IdManage';
import PokemonImage from '../PokemonImage';

import { EvolutionsContainer, PokemonContainer, ImageContainer, Arrow, PokemonName, NotEvolvesText } from './styles';

function RecursiveEvolution({ id, name, evolvesTo, stage = 0, original }) {
	const isOriginal = original === id;
	return (
		<>
			<PokemonContainer stage={stage}>
				{stage > 0 ? <Arrow stage={stage} /> : ''}
				<Link
					to={`${id}`}
					replace
				>
					<ImageContainer isOriginal={isOriginal}>
						<PokemonImage id={id} />
					</ImageContainer>
				</Link>
				<Link
					to={`${id}`}
					replace
				>
					<PokemonName isOriginal={isOriginal}>{name}</PokemonName>
				</Link>
			</PokemonContainer>
			{evolvesTo &&
				evolvesTo.map((evolution) => (
					<RecursiveEvolution
						key={getIdByUrl(evolution.species.url)}
						id={fixedId(getIdByUrl(evolution.species.url))}
						name={evolution.species.name}
						evolvesTo={evolution.evolves_to}
						stage={stage + 1}
						original={original}
					/>
				))}
		</>
	);
}

const EXCLUDED_FORMS = ['totem', 'gmax', 'hisui', 'white-striped', 'busted', 'pikachu-', 'starter'];
/* 
(totem for alola big variations) 
(gmax for gigantamax versions) 
(hisui for gen8 variants) 
(white for basculin) 
(busted for mimikyu)
(pikachu- for random pikachu forms)
(starter for eevee)
*/

function checkExcluded(form) {
	let isExcluded = false;
	EXCLUDED_FORMS.forEach((subname) => {
		if (form.pokemon.name.includes(subname)) isExcluded = true;
	});
	return isExcluded ? undefined : form.pokemon.name;
}

function PokemonEvolution({ pokedexAPI, id, formId, children }) {
	const [dataAPI, setDataAPI] = useState();
	const [pokeForms, setPokeForms] = useState([]);

	useEffect(() => {
		if (id !== '') {
			const pathAPI = `/api/v2/pokemon-species/${parseInt(id, 10)}/`;
			pokedexAPI.getResource(pathAPI, (response, error) => {
				if (!error) {
					setPokeForms(response.varieties.filter(checkExcluded));
					pokedexAPI.getEvolutionChainById(getIdByUrl(response.evolution_chain.url), (response2, error2) => {
						if (!error2) {
							setDataAPI(response2);
						}
					});
				}
			});
		}
	}, [pokedexAPI, id]);

	return (
		<EvolutionsContainer>
			{children}
			{dataAPI &&
				(dataAPI.chain.evolves_to.length !== 0 ? (
					<RecursiveEvolution
						id={fixedId(getIdByUrl(dataAPI.chain.species.url))}
						name={dataAPI.chain.species.name}
						evolvesTo={dataAPI.chain.evolves_to}
						original={id}
					/>
				) : (
					<NotEvolvesText>This Pokémon does not evolve.</NotEvolvesText>
				))}
			{dataAPI &&
				pokeForms.map((form, index) => {
					const pokemonId = fixedId(getIdByUrl(form.pokemon.url));
					const isOriginal = pokemonId === formId;
					const pokemonLink = form.is_default ? pokemonId : form.pokemon.name;
					return (
						(!form.is_default || (dataAPI.chain.evolves_to.length === 0 && pokeForms.length > 1)) && (
							<PokemonContainer key={form.pokemon.name}>
								<Link
									to={`${pokemonLink}`}
									replace
								>
									<ImageContainer isOriginal={isOriginal}>
										<PokemonImage id={index === 0 ? id : `${id}_f${index + 1}`} />
									</ImageContainer>
								</Link>
								<Link
									to={`${pokemonLink}`}
									replace
								>
									<PokemonName isOriginal={isOriginal}>{form.pokemon.name}</PokemonName>
								</Link>
							</PokemonContainer>
						)
					);
				})}
		</EvolutionsContainer>
	);
}

export default PokemonEvolution;
