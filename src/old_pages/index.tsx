import { Flex } from '@/components/atoms';
import { HeroCard, Navbar } from '@/components/organisms';
import { styled } from '@/style';
import React, { useEffect, useRef, useState } from 'react';

const Container = styled(Flex)`
    width: 100%;
    height: 100%;
    position: relative;
`;

const isClient = typeof window === 'object';

const useWindowScroll = (): number => {
    const frame = useRef(0);

    const [state, setState] = useState<number>(isClient ? window.scrollY : 0);

    useEffect(() => {
        const handler = () => {
            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(() => {
                setState(window.scrollY);
            });
        };

        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });

        return () => {
            cancelAnimationFrame(frame.current);
            window.removeEventListener('scroll', handler);
        };
    }, []);

    return state;
};

function Home() {
    const y = useWindowScroll();

    return (
        <main>
            <Container alignItems="center" justifyContent="center">
                <Navbar />

                <HeroCard y={y} />
            </Container>
        </main>
    );
}

export default Home;
