import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { FaGamepad } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <BsCodeSlash size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            Experiece with <br />
            C#, C++, Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL                                                                                                                                                                                   
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaGamepad size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Gmae Engine</ListTitle>
          <ListParagraph>
            Experience with <br />
            Unity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
