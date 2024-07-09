// src/components/MeetingRoom.js
import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const MeetingRoom = ({ roomName }) => {
  return (
    <div>
      <JitsiMeeting
        domain="meet.jit.si"
        roomName={roomName}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: 'YOUR_USERNAME',
        }}
        onApiReady={(externalApi) => {
          // Attach custom event listeners to the Jitsi Meet External API
          // You can also store it locally to execute commands
          console.log('Jitsi Meet API is ready', externalApi);
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = '400px';
        }}
      />
    </div>
  );
};

export default MeetingRoom;
