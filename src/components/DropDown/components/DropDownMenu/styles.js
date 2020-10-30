import styled from 'styled-components';

const DropDownMenuContainer = styled.ul`
  background-color: var(--secondary);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  list-style-type: none;
  padding: 0;
  position: absolute;
  top: 100%;
`;

export default DropDownMenuContainer;
