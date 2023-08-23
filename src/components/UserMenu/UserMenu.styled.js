import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
   text-transform: capitalize;
  background: linear-gradient(to bottom right, #bf953f, #fcf6ba);
  border: 0;
  display:block;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  margin: auto;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &:not([disabled]):focus {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #bf953f, .125rem .125rem 0.5rem #fcf6ba;
}
&:not([disabled]):hover {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #bf953f, .125rem .125rem 0.5rem #fcf6ba;
}
}
`;
