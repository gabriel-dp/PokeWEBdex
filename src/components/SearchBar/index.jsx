import { SearchContainer, SearchInput } from './styles';

function SearchBar({ placeholder, value, setSearch }) {
	return (
		<SearchContainer>
			<SearchInput
				placeholder={placeholder}
				value={value}
				onChange={(event) => setSearch(event.target.value)}
			/>
		</SearchContainer>
	);
}

export default SearchBar;
