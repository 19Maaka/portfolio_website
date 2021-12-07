import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, this is Maaka <br />
          Game developer, student
        </SectionTitle>
        <SectionText>
        Originated from Hong Kong, graduated from Auckland University of Technology Major in Software Development. Passion in game development. Experience in AI human detection and software design.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;