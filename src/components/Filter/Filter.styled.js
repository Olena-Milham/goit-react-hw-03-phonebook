import styled from 'styled-components';

export const SearchBox = styled.input`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
`;
