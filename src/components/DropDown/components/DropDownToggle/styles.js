import styled from 'styled-components';

const DropDownToggleContainer = styled.button`
  background-color: var(--primary);
  border: 0;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto';
  font-size: 1.2em;
  padding: 10px 30px 10px 20px;
  white-space: nowrap;

  &:after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--white);
    content: '';
    height: 0;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  &:hover {
    background-color: var(--secondary);
  }
`;

export default DropDownToggleContainer;
