import { useSelector, useDispatch } from "react-redux";
import { setTheme } from '@/Store/Slice/themeSlice';

const ThemeToggle = (props) => {

    const dispatchTheme = useDispatch();
    const theme = useSelector(state => state.theme.value);

    const toggleTheme = (newTheme) => {
        dispatchTheme(setTheme(newTheme));
    }

    return (
        <>
            <button className={`dropdown-toggle ${props.type == 'link' ? 'nav-link' : 'btn btn-primary'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {theme === 'dark' && <i className="bi bi-moon-fill"></i>}
                {theme === 'light' && <i className="bi bi-sun-fill"></i>}
                {theme === 'auto' && <i className="bi bi-circle-half"></i>}
                <span className="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button
                        type="button"
                        className={theme === 'light' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                        onClick={() => toggleTheme('light')}
                    >
                        <i className="bi bi-sun-fill me-2 opacity-50"></i>
                        Light
                        <i className="bi bi-check2 ms-auto d-none"></i>
                    </button>

                </li>
                <li>
                    <button
                        type="button"
                        className={theme === 'dark' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                        onClick={() => toggleTheme('dark')}
                    >
                        <i className="bi bi-moon-fill me-2 opacity-50"></i>
                        Dark
                        <i className="bi bi-check2 ms-auto d-none"></i>
                    </button>

                </li>
                <li>
                    <button
                        type="button"
                        className={theme === 'auto' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                        onClick={() => toggleTheme('auto')}
                    >
                        <i className="bi bi-circle-half me-2 opacity-50"></i>
                        Auto
                        <i className="bi bi-check2 ms-auto d-none"></i>
                    </button>

                </li>
            </ul>
        </>
    )
}

export default ThemeToggle;

