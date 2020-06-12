import { Link } from '@/components/atoms';
import * as R from 'ramda';
import * as React from 'react';
import { List } from './MenuStyles';
import { AnimatedSvgBg } from './SvgBg';

type SetMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

interface IMenuProps extends React.HTMLAttributes<Element> {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    dark?: boolean;
    role?: string;
    menuOpen?: boolean;
    navItems: string[];
    id?: string;
    setMenuOpen?: SetMenuOpen;
}

// Handles main nav & popup menu
export const Menu = React.memo(
    ({
        dark = false,
        navItems,
        menuOpen,
        id = 'navbar',
        role = 'menubar',
        setMenuOpen,
        ...rest
    }: IMenuProps) => (
        <List
            dark={dark}
            id={id}
            role={role}
            menuOpen={menuOpen}
            onKeyUp={e => handleKeyUp(e, setMenuOpen)}
            data-testid="menu"
            {...rest}
        >
            {menuOpen && <AnimatedSvgBg menuOpen={menuOpen} />}

            {navItems.map(item => (
                <li key={`${id}_${item}`} role={role === 'menubar' ? 'none' : undefined}>
                    <Link
                        tabIndex={0}
                        to={
                            item === 'HOME' ? '/' : `/${item === 'ABOUT' ? '' : item.toLowerCase()}`
                        }
                        role="menuitem"
                    >
                        {item}
                    </Link>
                </li>
            ))}
        </List>
    )
);

function handleKeyUp(
    { key, currentTarget, target }: React.KeyboardEvent,
    setMenuOpen?: SetMenuOpen
) {
    const t = target as HTMLElement;

    const navItemNodes = (currentTarget.childNodes as unknown) as ReadonlyArray<HTMLElement>;
    const firstItem = navItemNodes[0].firstChild;
    const lastItem = navItemNodes[navItemNodes.length - 1].firstChild;
    const prevItem = t.parentNode && t.parentNode.previousSibling;
    const nextItem = t.parentNode && t.parentNode.nextSibling;
    const menuBtn = currentTarget.previousSibling;

    const nodeToFocus = R.cond([
        [
            R.either(R.equals('ArrowLeft'), R.equals('ArrowUp')),
            () => (prevItem ? prevItem.firstChild : lastItem),
        ],
        [
            R.either(R.equals('ArrowRight'), R.equals('ArrowDown')),
            () => (nextItem ? nextItem.firstChild : firstItem),
        ],
        [R.equals('Escape'), () => menuBtn],
        [R.equals('End'), () => lastItem],
        [R.equals('Home'), () => firstItem],
        [
            R.T,
            () => {
                const matchNode = R.find(R.curry(firstLetterMatches)(key));
                const matchedNode = matchNode(navItemNodes);
                return matchedNode && matchedNode.firstChild;
            },
        ],
    ])(key);

    function firstLetterMatches(firstLetter: string, node: HTMLElement) {
        return (
            node.textContent && node.textContent.toLowerCase().startsWith(firstLetter.toLowerCase())
        );
    }

    nodeToFocus && nodeToFocus.focus();

    if (key === 'Escape' && setMenuOpen) {
        setMenuOpen(false);
    }
}
