import * as React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const IconCtn = styled.div`
  margin-top: 35px;
  margin-bottom: 10px;
`

const Icon = styled.i`
  padding: 0 10px 0 10px;
  color: ${palette('grayscale', 0)};
  &:hover {
    cursor: pointer;
    color: ${palette('gradient', 0)};
  }
`

export const SocialBtns = () => (
  <IconCtn>
    <a href="http://stackoverflow.com/users/story/6502003">
      <Icon key="stackoverflowBtn" className="fa fa-stack-overflow fa-2x" aria-hidden="true" />
    </a>
    <a href="https://github.com/protoEvangelion">
      <Icon key="githubBtn" className="fa fa-github fa-2x" aria-hidden="true" />
    </a>
    <a href="https://www.freecodecamp.com/protoevangelion">
      <Icon key="freecodecampBtn" className="fa fa-free-code-camp fa-2x" aria-hidden="true" />
    </a>
  </IconCtn>
)
