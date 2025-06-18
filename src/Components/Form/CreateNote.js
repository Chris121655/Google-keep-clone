import { useState } from 'react';
import './CreateNote.css';

const CreateNote = ({ addNote, activeColor, setActiveColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const colors = ['#ffffff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#d7aefb', '#fdcfe8'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.content.trim()) {
      addNote(note);
      setNote({
        title: '',
        content: ''
      });
      setIsExpanded(false);
    }
  };

  return (
    <form className="create-note" onSubmit={handleSubmit} style={{ backgroundColor: activeColor }}>
      {isExpanded && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          autoComplete="off"
        />
      )}
      <textarea
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        value={note.content}
        onChange={handleChange}
        onClick={() => setIsExpanded(true)}
      />
      {isExpanded && (
        <div className="note-footer">
          <div className="color-palette">
            {colors.map(color => (
              <div
                key={color}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => setActiveColor(color)}
              />
            ))}
          </div>
          <button type="submit">Close</button>
        </div>
      )}
    </form>
  );
};

export default CreateNote;