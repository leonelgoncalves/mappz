/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutContext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menuButtonRef = useRef(null);
    const topbarMenuRef = useRef(null);
    const topbarMenuButtonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menuButton: menuButtonRef.current,
        topbarMenu: topbarMenuRef.current,
        topbarMenuButton: topbarMenuButtonRef.current
    }));

    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <span>MAPPZ</span>
            </Link>
            <button ref={menuButtonRef} type="button" className="p-link layout-menu-button layout-topbar-button"
                    onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
