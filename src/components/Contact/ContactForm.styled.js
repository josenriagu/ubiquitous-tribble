import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 70%;
  margin: 2.5rem auto 0;
  padding: 0 4rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 1rem;
  box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 0.5rem 2rem;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
    section {
      width: 47.5%;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      :nth-of-type(5) {
        width: 100%;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
      sup {
        color: red;
        font-size: 1rem;
      }
    }
  }
  button {
    width: 25%;
    margin: 3.5rem auto 1.5rem;
    @media (max-width: 500px) {
      width: 50%;
    }
  }
`;
