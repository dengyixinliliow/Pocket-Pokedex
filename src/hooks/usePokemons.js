import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
	query pokemons {
		pokemons(first: 151) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
		}
	}
`;

//fetch all pokemons
export const usePokemons = () => {
	const { error, data, loading } = useQuery(GET_POKEMONS);

	return {
		error,
		data,
		loading,
	};
};
