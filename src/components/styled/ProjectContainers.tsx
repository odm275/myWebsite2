import styled from "@emotion/styled"

/* Project Card*/
export const MultipleProjectsCardsContainer = styled.div`
  display: grid;
  justify-items: stretch;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  margin-left: 0;
  @media (max-width: 768px) {
    display: block;
  }
`
