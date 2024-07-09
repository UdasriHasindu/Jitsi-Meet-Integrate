
import React, { useState } from 'react';
import MeetingRoom from './MeetingRoom';


function App() {
  const [roomName, setRoomName] = useState('');

  return (
    <div className="App">
      <h1>Online Meeting App</h1>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter Room Name"
      />
      {roomName && <MeetingRoom roomName={roomName} />}
    </div>
  );
}

export default App;
