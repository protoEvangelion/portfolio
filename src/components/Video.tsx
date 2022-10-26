import React from 'react';
import nodegh from '../assets/videos/nodegh.webm';
import lumin from '../assets/videos/lumin.webm';
import liferay from '../assets/videos/liferay.webm';
import one from '../assets/videos/one.webm';

const vids = {
    nodegh,
    lumin,
    liferay,
    one,
};

export function Video({ url }) {
    const vid = vids[url];
    return (
        vid && (
            <video autoPlay muted loop controls width="100%">
                <source src={vid} type="video/webm" />
            </video>
        )
    );
}
