import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.js/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import CreateNote from './components/form/CreateNote';
import NoteList from './Components/Notes/NoteList';
import ArchiveList from './Components/Notes/ArchiveList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Grocery List', content: 'Milk, Eggs, Bread', color: '#fff475', pinned: false, archived: false },
    { id: 2, title: 'Meeting Notes', content: 'Discuss project timeline', color: '#fbbc04', pinned: true, archived: false },
    { id: 3, title: 'Ideas', content: 'Build a React app', color: '#a7ffeb', pinned: false, archived: false },
    { id: 4, title: 'Archived Note', content: 'This is archived', color: '#d7aefb', pinned: false, archived: true }
  ]);
  const [showArchived, setShowArchived] = useState(false);
  const [activeColor, setActiveColor] = useState('#ffffff');
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now(), pinned: false, archived: false, color: activeColor }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const changeColor = (id, color) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, color } : note
    ));
  };

  const filteredNotes = notes.filter(note => 
    !note.archived && 
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const archivedNotes = notes.filter(note => 
    note.archived && 
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="app">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar showArchived={showArchived} setShowArchived={setShowArchived} />
      <div className="main-content">
        <CreateNote addNote={addNote} activeColor={activeColor} setActiveColor={setActiveColor} />
        {showArchived ? (
          <ArchiveList 
            notes={archivedNotes} 
            deleteNote={deleteNote} 
            toggleArchive={toggleArchive}
            changeColor={changeColor}
          />
        ) : (
          <NoteList 
            notes={filteredNotes} 
            deleteNote={deleteNote} 
            togglePin={togglePin}
            toggleArchive={toggleArchive}
            changeColor={changeColor}
          />
        )}
      </div>
    </div>
  );
}

export default App;