import React, { useContext } from 'react';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';
import {Products, Developers, Company} from '../Content'

import { Container, DropdownStyles } from './styles';

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresa"
                content={Company}
              />
            </li>
          </ul>
        </Container>;

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
)}

export default Navbar;