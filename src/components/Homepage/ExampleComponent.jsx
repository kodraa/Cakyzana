import React from 'react'
import styled from 'styled-components'
import { BasicContentDiv, CONSTANTS } from '../../global'
import EngArTitle from '../globalComponents/EngArTitle'
import Section from '../globalComponents/Section'

function ExampleComponent() {
  return (
    <Section>{/* Title goes here */}
        <EngArTitle  
            english={"Example"}
            arabic={"مثال"}
            bottom={"-95%"}
            right={"-120%"}
            arColor={CONSTANTS.pink}
        />
        <ContentDiv>
            {/* Add another div here to be centered vertically in ContentDiv, to have equal space between the content + title, and the content + the next section */}
        </ContentDiv>
    </Section>
  )
}

export default ExampleComponent

const ContentDiv = styled(BasicContentDiv)`
    display: flex;
    align-items: center;
` 
// We extend the BasicContentDiv with ContentDiv and add display: flex; align-items: center; to center the content vertically in the section