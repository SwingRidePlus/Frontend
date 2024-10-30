import styled from 'styled-components';

export const Main_Container = styled.div`
  width: 100vw;
  min-height: 100vh; 
  padding: 42px 32px 52px;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  position: relative; 
`;

export const MainTitle = styled.div`
    color: var(--Black, #000);

    /* Title1 */
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */
`
export const MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    background-color: #FF6701;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
      background-color: #FF5C00;
    }
  }

  span {
    font-weight: bold;
  }
`;

export const MonthButtonText = styled.button`
  color: white;
`

export const CalendarContainer = styled.div`
  padding: 40px 0 0 0;
`

export const UnReservationContainer = styled.div`
  padding: 20px 0 0 0;
  margin-bottom: 50px;
`