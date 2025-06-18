import Note from './Notes';
import './Note.css';

const ArchiveList = ({ notes, deleteNote, toggleArchive, changeColor }) => {
  return (
    <div className="note-container">
      <div className="note-section">
        <h2>Archived Notes</h2>
        <div className="notes-grid">
          {notes.map(note => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleArchive={toggleArchive}
              changeColor={changeColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchiveList;