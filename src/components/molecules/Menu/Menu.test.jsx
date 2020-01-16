import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Menu } from './Menu';
import '@/tests/__mocks__/matchMedia';

const StandardMenu = () => (
    <Menu aria-haspopup="false" aria-label="Site Navigation" navItems={['one', 'two', 'three']} />
);

describe('Menu is keyboard accessible', () => {
    test('left/up arrow key cycles through nav items', () => {
        const { container, getByText } = render(<StandardMenu />);

        fireEvent.keyUp(container.firstChild, { key: 'ArrowLeft' });
        expect(document.activeElement).toEqual(getByText('three'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowLeft' });
        expect(document.activeElement).toEqual(getByText('two'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowUp' });
        expect(document.activeElement).toEqual(getByText('one'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowUp' });
        expect(document.activeElement).toEqual(getByText('three'));
    });

    test('right/down arrow key cycles', () => {
        const { container, getByText } = render(<StandardMenu />);

        fireEvent.keyUp(container.firstChild, { key: 'ArrowRight' });
        expect(document.activeElement).toEqual(getByText('one'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowRight' });
        expect(document.activeElement).toEqual(getByText('two'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowDown' });
        expect(document.activeElement).toEqual(getByText('three'));

        fireEvent.keyUp(document.activeElement, { key: 'ArrowDown' });
        expect(document.activeElement).toEqual(getByText('one'));
    });

    test('if key matches first letter it shifts focus', () => {
        const { getByText } = render(<StandardMenu />);

        const one = getByText('one');
        const two = getByText('two');
        const three = getByText('three');

        three.focus();
        fireEvent.keyUp(one, { key: 't' });
        expect(document.activeElement).toEqual(two);

        fireEvent.keyUp(one, { key: 'o' });
        expect(document.activeElement).toEqual(one);
    });
});
