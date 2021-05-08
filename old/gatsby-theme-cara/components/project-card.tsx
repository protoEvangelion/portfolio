/** @jsx jsx */
import { isAbsolute } from 'path';
import React from 'react';
import { jsx } from 'theme-ui';
import lumin from '../../../../assets/videos/lumin.webm';
import liferay from '../../../../assets/videos/liferay.webm';
import nodegh from '../../../../assets/videos/nodegh.webm';

const assetMap = {
    lumin,
    liferay,
    nodegh,
};

type ProjectCardProps = {
    link: string;
    title: string;
    children: React.ReactNode;
    bg: string;
};

const ProjectCard = ({ link }) => (
    <div sx={{ position: 'relative' }}>
        <video autoPlay muted loop controls width="100%">
            <source src={assetMap[link]} type="video/webm" />
        </video>
    </div>
);

export default ProjectCard;
