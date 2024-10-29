import styled from 'styled-components';

export const Main_Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 32px 0px 32px;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const Main_Titile = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Main_Title_Highlight = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #ff6701;
`;

export const Main_Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export const Main_Img = styled.img`
  margin-top: 60px;
`;
