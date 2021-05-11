import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism';
import { Link as GatsbyLink } from 'gatsby';

// import { Context } from '../../context'
// import { Nav } from '../Nav'
// import { useConfig } from '../../data'

// Mdx components
import * as themeUiComponents from 'theme-ui';
import Img from 'gatsby-image';

import { Container, Box, Close, Image, MenuButton, Link } from 'theme-ui';
// import { transparentize } from '@theme-ui/color'

// Theme specific componenbts
// import { Logo } from '../Logo'
// import { SiteMetaData } from '../SiteMetaData'
// import { SourceList } from '../SourceList'
// import { SourceDays } from '../SourceDays'
// import { SourceMonths } from '../SourceMonths'
// import { SourceWords } from '../SourceWords'
// import { SourceTags } from '../SourceTags'

// const components = {
//   a: ({ href, children }) => {
//     // If it's an external url use Link and target _blank
//     if (href.match(/^(http|https):/g)) {
//       return (
//         <Link href={href} target="_blank" rel="noopener">
//           {children}
//         </Link>
//       )
//     }
//     // if it's a # use Link which will fires an anchorScroll in gatsby-browser
//     if (href.match(/#/gi)) {
//       return <Link href={href}>{children}</Link>
//     }
//     // if it's anything else use GatsbyLink
//     return (
//       <Link as={GatsbyLink} to={href}>
//         {children}
//       </Link>
//     )
//   },
//   pre: ({ children }) => <Fragment>{children}</Fragment>,
//   code: Prism,
//   Fragment,
//   SiteMetaData,
//   SourceList,
//   SourceDays,
//   SourceMonths,
//   SourceWords,
//   SourceTags,
//   EmbeddedImage: props => <Image src={props.src.fluid.src} />,
//   Img,
//   ...themeUiComponents,
// }

export const Main = ({ children }) => {
    // const {
    //   site: {
    //     siteMetadata: {
    //       config: { sidebarWidth },
    //     },
    //   },
    // } = useConfig()

    return (
        <Fragment>
            <Box
                as="header"
                sx={{
                    borderBottom: theme =>
                        console.log('theme!!!!!!!!!!!!!!!', theme) ||
                        `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
                }}
            ></Box>
        </Fragment>
    );
};

Main.propTypes = {
    /** React children */
    children: PropTypes.any,
};
