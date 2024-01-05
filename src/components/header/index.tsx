/* eslint-disable jsx-a11y/anchor-is-valid */
import { Switch } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIGHT, LOGO } from '../../constants';
import useDarkSide from '../../hooks/useDarkMode';
import { styles } from '../../styles/tailwind/header/index.css';

export default function Header() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === LIGHT ? true : false);

    const onSwitchChange = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }

    return (
        <header>
            <nav className={`${styles.nav}`}>
                <div className={`${styles.wrapper}`}>
                    <Link to="/" className="flex items-center">
                        <img src={LOGO} className="mr-3 h-6 sm:h-9" alt="Logo" />
                        <span className={`${styles.logoText}`}>aamar pay</span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Switch className='bg-gray-400' checked={darkSide} onChange={onSwitchChange} />
                    </div>
                </div>
            </nav>
        </header>
    )
}
