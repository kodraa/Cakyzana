import React from 'react'
import { CONSTANTS } from '../../global'
import EngArTitle from '../globalComponents/EngArTitle'
import Section from '../globalComponents/Section'

function TestSection() {
  return (
    <Section>
      <EngArTitle 
        english={"This Month"}
        arabic={"اللي سبق شم الحبق"}
        bottom={"-95%"}
        right={"-120%"}
        arColor={CONSTANTS.pink}
      />
    </Section>
  )
}

export default TestSection