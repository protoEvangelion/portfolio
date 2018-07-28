import { Heading, Link } from 'components/atoms'
import { color, space } from 'styled'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0;
  height: 300px;
  width: 100%;
  flex-direction: ${ifProp('flip', 'row-reverse', 'row')};
  background: ${props =>
    props.flip
      ? 'primary'
      : `linear-gradient(
			to left,
			${props.theme.colors.fuschia4},
			${props.theme.colors.indigo5}
		)`};

  ${color} ${space};
`

const ProjectImage = styled.img`
  border-radius: 10px;
  height: inherit;
  @media (max-width: 1000px) {
    height: 300px;
    margin-bottom: 20px;
  }
`

const HeadingCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  width: 50vw;
  text-align: center;
`

export const ProjectHeader = ({ header, image, flip, linkText, ...props }) => (
  <Wrapper flip={flip}>
    <ProjectImage src={image} />

    <HeadingCtn>
      <Heading>{header}</Heading>

      <Link {...props}>{linkText}</Link>
    </HeadingCtn>
  </Wrapper>
)

ProjectHeader.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  background: PropTypes.bool,
  flip: PropTypes.bool,
  linkText: PropTypes.string.isRequired,
  href: PropTypes.string,
}
