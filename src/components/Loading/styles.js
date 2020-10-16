import styled from 'styled-components';

const Loader = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
`;

Loader.Wrapper = styled.div`
  align-items: center;
  display: inherit;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

Loader.Message = styled.span`
  color: white;
  font-weight: bold;
  margin-top: 40px;
  text-shadow: 0 2px 5px black;
`;

export default Loader;
