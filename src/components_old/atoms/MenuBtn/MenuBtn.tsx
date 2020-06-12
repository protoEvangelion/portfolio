// https://github.com/mleko/react-hamburger-button/blob/master/src/HamburgerButton.tsx

import * as React from 'react';
import { Button, Line1, Line2 } from './MenuBtnStyles';

type SetMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

export interface IMenuBtn {
    setMenuOpen: SetMenuOpen;
    menuOpen: boolean;
    dark: boolean;
    id: string;
    ariaControls: string;
}

export const MenuBtn = React.memo(
    ({ dark, setMenuOpen, menuOpen, ariaControls, id, ...rest }: IMenuBtn) => (
        <Button
            aria-controls={ariaControls}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            className="hamburger-btn"
            id={id}
            type="button"
            menuOpen={menuOpen}
            onKeyUp={e => handleKeyUp(e, menuOpen, setMenuOpen)}
            onClick={() => setMenuOpen(!menuOpen)}
            tabIndex={0}
            {...rest}
        >
            <Line1 dark={dark} menuOpen={menuOpen} />
            <Line2 dark={dark} menuOpen={menuOpen} />
        </Button>
    )
);

function handleKeyUp(e: React.KeyboardEvent, menuOpen: boolean, setMenuOpen: SetMenuOpen) {
    if (menuOpen && e.key === 'Escape') {
        setMenuOpen(false);
    }

    if (!menuOpen) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            setMenuOpen(true);
        }
    }
}
