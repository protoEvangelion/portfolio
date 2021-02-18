/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const ImageCard = ({ title, description, url, image }) => (
    <Link to={url}>
        <div
            className="topic"
            sx={{
                boxShadow:
                    '0 0 0.625em 0 rgba(100, 116, 128, 0.16), 0 0.25em 0.5em -0.375em rgba(100, 116, 128, 0.8)',
                textDecoration: 'none',
                background: '#000',
                borderRadius: '8px',
                padding: '36px 0',
                minWidth: '300px',
                cursor: 'pointer',
                width: '50%',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                display: 'block',
                margin: '1rem',
                textAlign: 'center',
                boxSizing: 'border-box',
                transition: 'box-shadow 0.5s ease-out, transform 0.5s ease-out',
                '.topic-description': {
                    padding: '0 0.5rem',
                    paddingBottom: '0 !important',
                    marginBottom: '0',
                    transition: 'transform 1.2s ease-out, color 0.5s ease-out',
                },
                '&:hover': {
                    boxShadow:
                        '0 0 1.125em 0 rgba(100, 116, 128, 0.16), 0 0.75em 1em -0.375em rgba(100, 116, 128, 0.8)',
                    transform: 'translateY(-7px)',

                    '.topic-title': {
                        transform: 'translateY(-10px)',
                        color: 'white !important',
                    },
                    '.topic-description': {
                        transform: 'translateY(-10px)',
                        color: 'white !important',
                    },
                    '.topic-circle': {
                        transform: 'scale(6)',
                        '::after': {
                            opacity: '0.7',
                        },
                    },
                },
            }}
        >
            <div
                className="topic-circle"
                sx={{
                    backgroundImage: `url('${image}')`,
                    paddingBottom: '0 !important',
                    transform: 'scale(1)',
                    borderRadius: '50%',
                    marginBottom: '16px',
                    height: '120px',
                    width: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: '#00ae55',
                    fontSize: '64px',
                    textAlign: 'center',
                    willChange: 'transform',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    transition: 'filter 0.5s ease-out, transform 0.5s ease-out',
                    '::after': {
                        content: '""',
                        background: 'black',
                        opacity: '0',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        transition: 'opacity 0.5s ease-out',
                    },
                }}
            ></div>
            <h5
                className="topic-title"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: '300',
                    fontSize: '1.3em',
                    margin: '0',
                    transition: 'transform 0.7s ease-out, color 0.5s ease-out',
                }}
            >
                {title}
            </h5>
            <p className="topic-description">{description}</p>
        </div>
    </Link>
);

export default ImageCard;
