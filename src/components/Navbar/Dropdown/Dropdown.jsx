const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FRAGANCIAS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Femeninas</a></li>
                  <li><a className="dropdown-item" href="#">Masculinas</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Unisex</a></li>
                </ul>
            </li>
    );
}

export default Dropdown;
