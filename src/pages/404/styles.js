import styled from 'styled-components';

const Page404Container = styled.div`
  alignItems: center;
  padding: 0;
  text-align: center;
`;

Page404Container.Title = styled.h1`
  font-size: 1.5rem;
  font-style: Roboto;
  padding: 10px;
`;

Page404Container.Link = styled.p`
  color: var(--secondary);
  font-size: 1.5rem;
  font-style: Roboto;

  &:hover {
    text-decoration: underline;
  }
`;

export default Page404Container;
