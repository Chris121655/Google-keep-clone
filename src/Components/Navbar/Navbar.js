import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="material-icons">menu</span>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep" />
          <h1>Keep</h1>
        </div>
        <div className="search-bar">
          <span className="material-icons">search</span>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="user-actions">
          <span className="material-icons">refresh</span>
          <span className="material-icons">view_agenda</span>
          <span className="material-icons">settings</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;