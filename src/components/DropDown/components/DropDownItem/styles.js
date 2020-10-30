import styled from 'styled-components';

const DropDownItemContainer = styled.li`
  ${(props) => (props.divider && 'border-bottom: 1px solid #cccccc')};
  cursor: pointer;
  ${(props) => (props.divider ? 'padding: 0;' : 'padding: 10px 20px')};
  white-space: nowrap;

  &:hover {
    background-color: var(--white);
    color: var(--secondary);
  }
`;

export default DropDownItemContainer;
