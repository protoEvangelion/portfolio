import { Svg } from '@/components/atoms';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { projects } from './projectData';
import { Credits, Img, Text, Wrapper } from './ProjectStyles';

export const Projects = () => (
    <main>
        <Credits>
            <h5>
                These projects have been built on the backs of giants alongside top tier teams of
                developers and designers.
            </h5>

            <h4>Props To:</h4>

            <p>
                <a href="https://twitter.com/plhnk">@Paul Hanoka</a> for pushing me to minimize the
                gap between the dev and design gap and affording me the opportunity to build out the
                Liferay design guidelines site.
            </p>
            <p>
                <a href="https://liferay.design/team/hancock-abel">@Abel Hancock</a> for always
                pushing my dev skills beyond their limits and patiently teaching me about design and
                animation.
            </p>
            <p>
                And last but indeed not least, thanks to my amazingly kind and talented dev team and
                managers <a href="https://www.liferay.com/">@Liferay</a>. You enabled me to thrive
                and become a better man. Thank you!
            </p>
        </Credits>

        {projects.map((project, i) => (
            <Wrapper key={project.name} px={['1rem', '4rem', '8rem']} gradient={project.gradient}>
                <Svg name={`curve${i + 1}`} />

                <Fade bottom ssrFadeout>
                    <Text>
                        <h4>{project.name}</h4>

                        <ul>
                            {project.description.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </Text>

                    <a href={project.link}>
                        <Img src={project.media} alt={project.name} />
                    </a>
                </Fade>
            </Wrapper>
        ))}
    </main>
);
