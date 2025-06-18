import './Sidebar.css';

const Sidebar = ({ showArchived, setShowArchived }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-item active">
          <span className="material-icons">lightbulb</span>
          <span>Notes</span>
        </div>
        <div className="sidebar-item" onClick={() => setShowArchived(!showArchived)}>
          <span className="material-icons">archive</span>
          <span>{showArchived ? 'Notes' : 'Archive'}</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons">delete</span>
          <span>Trash</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;