import React, { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

    return <div>
        <header className='container flex-b'>
            <div className='logo'></div>
        </header>
    </div>;
}

export default Header;
