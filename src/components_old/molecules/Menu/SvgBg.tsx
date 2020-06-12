import { styled } from '@/style';
import * as React from 'react';

const Svg = styled.svg`
    ${props =>
        props.menuOpen
            ? `
        opacity: 1;
        visibility: visible;
      `
            : `
        opacity: 0;
        visibility: hidden;
      `};

    position: absolute;
    height: 100%;
    transition: opacity, visibility;
    transition-duration: 0.5s;
    width: 100%;
    transform: translateX(0);
`;

export function AnimatedSvgBg(props) {
    return (
        <Svg viewBox="0 0 1366 1366" preserveAspectRatio="none" {...props}>
            <defs>
                <radialGradient
                    id="animatedWave_svg__backgroundGradient"
                    cx="100%"
                    cy="0%"
                    r="100%"
                >
                    <stop offset="0%" stopColor="#0c295e" />
                    <stop offset="100%" stopColor="#051128" />
                </radialGradient>
            </defs>
            <style>
                {
                    '.animatedWave_svg__reflect{transform:scaleX(-1)}.animatedWave_svg__translate{transform:translateX(-200%)}'
                }
            </style>
            <rect fill="url(#animatedWave_svg__backgroundGradient)" width="100%" height="100%" />
            <path d="M0 0h2732" id="animatedWave_svg__motion" />
            <path d="M2732 0H0" id="animatedWave_svg__motion-reverse" />
            <g fill="#134194">
                <g opacity={0.08}>
                    <path d="M821.493 1245.502C1016.37 1150.47 1215.09 1131 1366 1131v234H0v-69.432c281.988.002 536.909 88.71 821.493-50.066z" />
                    <path
                        className="animatedWave_svg__reflect"
                        d="M821.493 1245.502C1016.37 1150.47 1215.09 1131 1366 1131v234H0v-69.432c281.988.002 536.909 88.71 821.493-50.066z"
                    />
                    <path
                        className="animatedWave_svg__translate"
                        d="M821.493 1245.502C1016.37 1150.47 1215.09 1131 1366 1131v234H0v-69.432c281.988.002 536.909 88.71 821.493-50.066z"
                    />
                    <animateMotion
                        dur="50s"
                        repeatCount="indefinite"
                        rotate="auto"
                        keyPoints="0;0.5;0.75"
                        keyTimes="0;0.33;0.66"
                        calcMode="linear"
                    >
                        <mpath xlinkHref="#animatedWave_svg__motion" />
                    </animateMotion>
                </g>
                <g opacity={0.08}>
                    <path d="M1366 1142v223H0v-59.09c221.894.005 536.909 90.261 821.493-35.627C1016.37 1184.077 1215.09 1142 1366 1142z" />
                    <path
                        className="animatedWave_svg__reflect"
                        d="M1366 1142v223H0v-59.09c221.894.005 536.909 90.261 821.493-35.627C1016.37 1184.077 1215.09 1142 1366 1142z"
                    />
                    <path
                        className="animatedWave_svg__translate"
                        d="M1366 1142v223H0v-59.09c221.894.005 536.909 90.261 821.493-35.627C1016.37 1184.077 1215.09 1142 1366 1142z"
                    />
                    <animateMotion
                        dur="65s"
                        repeatCount="indefinite"
                        rotate="auto-reverse"
                        keyPoints="0;0.7;0.66"
                        keyTimes="0;0.33;0.66"
                    >
                        <mpath xlinkHref="#animatedWave_svg__motion-reverse" />
                    </animateMotion>
                </g>
                <g opacity={0.08}>
                    <path d="M634.493 1300.928C842.465 1248.142 1215.09 1180 1366 1180v185.115H0v-29.712c236.5-.003 452.005 11.843 634.493-34.475z" />
                    <path
                        className="animatedWave_svg__reflect"
                        d="M634.493 1300.928C842.465 1248.142 1215.09 1180 1366 1180v185.115H0v-29.712c236.5-.003 452.005 11.843 634.493-34.475z"
                    />
                    <path
                        className="animatedWave_svg__translate"
                        d="M634.493 1300.928C842.465 1248.142 1215.09 1180 1366 1180v185.115H0v-29.712c236.5-.003 452.005 11.843 634.493-34.475z"
                    />
                    <animateMotion
                        dur="80s"
                        repeatCount="indefinite"
                        rotate="auto"
                        keyPoints="0;1;0"
                        keyTimes="0;0.5;1"
                        calcMode="linear"
                    >
                        <mpath xlinkHref="#animatedWave_svg__motion" />
                    </animateMotion>
                </g>
            </g>
        </Svg>
    );
}
