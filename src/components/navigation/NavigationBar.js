import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <section className="navigation-container">
            <nav className="navigation">
                <NavLink to={'/'}>
                    <h1 className="nav-logo">navigat<span style={{ color: "#3476EF" }}>edu</span></h1>
                </NavLink>
                <NavLink to={'/learn'} className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Learn</NavLink>
                <NavLink to={'/glossary'} className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Glossary</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>About</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}>Contact</NavLink>
            </nav>
            <div></div>
        </section>
    );
}

export default NavigationBar;