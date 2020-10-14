import styled from 'styled-components';

const AlertContainer = styled.div`
  padding: 20px;
  background-color: var(--danger);
  color: white;
  margin-bottom: 15px;
`;

AlertContainer.CloseButton = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: black;
  }
`;

export default AlertContainer;
