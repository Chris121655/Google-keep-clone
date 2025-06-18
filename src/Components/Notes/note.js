import { useState } from 'react';
import './Note.css';

const Note = ({ note, deleteNote, togglePin, toggleArchive, changeColor }) => {
  const [showActions, setShowActions] = useState(false);
  const colors = ['#ffffff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#d7aefb', '#fdcfe8'];

  return (
    <div 
      className="note" 
      style={{ backgroundColor: note.color }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="note-content">
        {note.title && <h3>{note.title}</h3>}
        <p>{note.content}</p>
      </div>
      {showActions && (
        <div className="note-actions">
          <span 
            className="material-icons" 
            onClick={() => togglePin(note.id)}
            title={note.pinned ? 'Unpin' : 'Pin'}
          >
            {note.pinned ? 'push_pin' : 'outlined_flag'}
          </span>
          <span 
            className="material-icons" 
            onClick={() => toggleArchive(note.id)}
            title={note.archived ? 'Unarchive' : 'Archive'}
          >
            {note.archived ? 'unarchive' : 'archive'}
          </span>
          <span 
            className="material-icons" 
            onClick={() => deleteNote(note.id)}
            title="Delete"
          >
            delete
          </span>
          <div className="color-picker">
            <span className="material-icons" title="Change color">palette</span>
            <div className="color-options">
              {colors.map(color => (
                <div
                  key={color}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => changeColor(note.id, color)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;