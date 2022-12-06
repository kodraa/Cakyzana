import React from 'react'
import { ContentContainer, FullScreenSection } from '../../global'

function Section(props) {
  return (
    <FullScreenSection style={{outline: '1px solid black'}}>
        <ContentContainer>
            {props.children}
        </ContentContainer>
    </FullScreenSection>
  )
}

export default Section