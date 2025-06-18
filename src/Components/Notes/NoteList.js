import Note from './Notes';
import './Note.css';

const NoteList = ({ notes, deleteNote, togglePin, toggleArchive, changeColor }) => {
  const pinnedNotes = notes.filter(note => note.pinned);
  const otherNotes = notes.filter(note => !note.pinned);

  return (
    <div className="note-container">
      {pinnedNotes.length > 0 && (
        <div className="note-section">
          <h2>Pinned</h2>
          <div className="notes-grid">
            {pinnedNotes.map(note => (
              <Note
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                togglePin={togglePin}
                toggleArchive={toggleArchive}
                changeColor={changeColor}
              />
            ))}
          </div>
        </div>
      )}
      <div className="note-section">
        {pinnedNotes.length > 0 && <h2>Others</h2>}
        <div className="notes-grid">
          {otherNotes.map(note => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              togglePin={togglePin}
              toggleArchive={toggleArchive}
              changeColor={changeColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteList;