import * as React from 'react';
import headshot from '@/assets/headshot.jpg';
import { styled } from '@/style';
import { Planet as UnPositionedPlanet } from '@/components/atoms';

interface ISphere {
    url: string;
}

const Planet = styled(UnPositionedPlanet)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Sphere = styled<ISphere, 'figure'>('figure')`
    margin: 0;
    border-radius: 50%;
    background: url(${props => props.url}) no-repeat;
    background-size: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 1%;
        left: 5%;
        width: 90%;
        height: 90%;
        border-radius: 50%;
        background: radial-gradient(circle at 95% 20%, #ffffff, rgba(255, 255, 255, 0) 30%);
        -webkit-filter: blur(2px);
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: radial-gradient(
            circle at 70% 40%,
            rgba(245, 237, 48, 0),
            rgba(200, 190, 20, 0.2) 50%,
            #575300 100%
        );
    }
`;

const Shadow = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 0) 50%
    );
    -webkit-transform: rotateX(90deg) translateZ(-160px);
    transform: rotateX(90deg) translateZ(-160px);
    z-index: 1;
`;

const Stage = styled.div`
    cursor: pointer;
    width: 20vh;
    height: 20vh;
    margin-top: 25vh;
    perspective: 1200px;
    perspective-origin: 50% 50%;

    &:hover {
        .flipper {
            transform: rotateY(180deg);
        }
    }

    .flipper {
        height: 100%;
        width: 100%;
        transition: 0.5s;
        transform-style: preserve-3d;
        position: relative;

        figure,
        > div {
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        a {
            height: 100%;
            padding-left: 1rem;

            svg {
                width: 90%;
                font-size: 100px;
                height: 100%;
            }
        }
    }

    figure:first-child {
        z-index: 2;
        transform: rotateY(0deg);
    }

    div:nth-child(2) {
        transform: rotateY(180deg);
    }
`;

export const Sphere3d: React.SFC = () => (
    <Stage>
        <div className="flipper">
            <Sphere url={headshot}>
                <Shadow />
            </Sphere>

            <Planet diameter={7} firstColor="cyan" secondColor="magenta">
                <a href="https://github.com/protoEvangelion">
                    <svg viewBox="0 0 800 50">
                        <defs>
                            <path id="MyPath" d="M0 0 C 0 100, 600 150, 800 0" />
                        </defs>
                        <text textAnchor="middle">
                            <textPath
                                fill="white"
                                xlinkHref="#MyPath"
                                startOffset="50%"
                                id="innerText"
                            >
                                @protoEvangelion
                            </textPath>
                        </text>
                    </svg>
                </a>
            </Planet>
        </div>
    </Stage>
);
