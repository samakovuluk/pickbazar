import React from 'react';
import {
  SearchResultWrapper,
  ItemWrapper,
  SubmenuHeading,
} from './SearchBox.style';

type SuggestionsProps = {
  suggestions?: any;
  itemStyle?: any;
  wrapperStyle?: any;
  setSuggestionValue?: any;
  clearSearch?: any;
};

const SearchResults: React.FC<SuggestionsProps> = ({
  suggestions,
  itemStyle,
  wrapperStyle,
  setSuggestionValue,
  clearSearch,
}) => {
  const setSuggestion = (suggestion: any) => {
    setSuggestionValue(suggestion);
  };

  return (
    <SearchResultWrapper {...wrapperStyle}>
      <SubmenuHeading>
        <h3>Recent Search</h3> <button onClick={clearSearch}>Clear</button>
      </SubmenuHeading>
      {suggestions.map((suggestion: any) => (
        <ItemWrapper
          {...itemStyle}
          key={suggestion}
          onClick={() => setSuggestion(suggestion)}
        >
          {suggestion}
        </ItemWrapper>
      ))}
    </SearchResultWrapper>
  );
};

export default SearchResults;
