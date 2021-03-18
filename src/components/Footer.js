import React from 'react';

import styled from 'styled-components';

const Styles = styled.div`
  footer {
    width: auto;
    padding: 10px 0 0 10px;
  }
  h4,
  h5 {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <Styles>
      <div className="container-flex text-white bg-dark">
        <h4>Av. Vital Brasil, 305 - Sala 1310 - Butantã - São Paulo - SP</h4>
        <h5>11-97043-3870</h5>
      </div>
    </Styles>
  );
}
