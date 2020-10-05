import styled from 'styled-components';

const Button = styled.button`
  background: var(--secondary);
  border: none;
  border-radius: 10px;
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
  transition: opacity .3s;
  
  @media screen and (min-width: 0) {
    font-size: ${(props) => (props.large ? '0.8em' : '0.5em')};
    height: ${(props) => (props.large && '25px')}; 
    margin: 2px;
    padding: 5px 0;
    width: ${(props) => (props.large ? '50%' : '60px')};
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.large ? '1.2em' : '1em')};
    height: ${(props) => (props.large && '40px')};
    margin: 0 10px;
    padding: 10px 0;
    width: ${(props) => (props.large ? '50%' : '140px')};
  }

  &:hover {
    transform: scale(1.2);
  }

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
