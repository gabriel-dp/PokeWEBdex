import {
    SearchContainer,
    SearchInput
} from './styles';

const SearchBar = ({ placeholder, search, setSearch}) => {
    return (
        <SearchContainer>
            <SearchInput 
                placeholder={placeholder}
                value={search}
                onChange={(event) => setSearch(event.target.value)}    
            />
        </SearchContainer>
    )
}

export default SearchBar;