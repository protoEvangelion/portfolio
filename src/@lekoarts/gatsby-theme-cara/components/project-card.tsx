/** @jsx jsx */
import { isAbsolute } from 'path';
import React from 'react';
import { jsx } from 'theme-ui';
import go from '../../../../assets/m.mp4';

const assetMap = {
    tenable: go,
};

type ProjectCardProps = {
    link: string;
    src: string;
    title: string;
    children: React.ReactNode;
    bg: string;
};

const ProjectCard = ({ link }) => (
    <div sx={{ position: 'relative' }}>
        <video autoPlay muted loop controls width="100%">
            <source src={assetMap[link]} type="video/mp4" />
        </video>
    </div>
);

export default ProjectCard;
