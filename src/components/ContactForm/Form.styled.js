import styled from 'styled-components';

export const FormBtn = styled.button`
  display: inline-flex;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.box2};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.muted : p.theme.colors.primary;
  }};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
