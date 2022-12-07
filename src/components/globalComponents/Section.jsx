import React from 'react'
import { ContentContainer, FullScreenSection } from '../../global'

function Section(props) {
  return (
    <FullScreenSection>
        <ContentContainer>
            {props.children}
        </ContentContainer>
    </FullScreenSection>
  )
}

export default Section