import { SearchContainer, SearchInput } from './styles';

function SearchBar({ placeholder, search, setSearch }) {
	return (
		<SearchContainer>
			<SearchInput
				placeholder={placeholder}
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
		</SearchContainer>
	);
}

export default SearchBar;
