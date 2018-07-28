import { Block } from 'components/atoms'
import { IconButton } from 'components/molecules'
import { media } from 'styled'
import { colors } from 'theme'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Block)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0.9)};
	height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};
	& > :not(:first-child) {
		margin-left: 1rem;
	}
	${media.lessThan('small')`
    align-items: flex-start;
  `};
	${media.greaterThan('small')`
    height: auto;
  `};
`

export const StyledIcon = styled(IconButton)`
	margin-top: -10px;
	margin-right: 10px;
	height: 20px;
	color: white;
	display: inline-block;
	transform-origin: center;
	${media.lessThan('small')`
    margin-top: 2px;
  `};
`

export const Nav = styled.nav`
	display: flex;
	flex: 1;
	justify-content: flex-start;

	${media.lessThan('small')`
    display: none;

    ${props =>
			props.isOpen &&
			css`
				display: block;
				position: absolute;
				width: 90%;
				top: 35px;
				left: 20px;
				> li {
					padding: 15px 0 15px 0;
					border-bottom: 1px solid ${colors['gray4']};
				}
			`};
  `};
`
