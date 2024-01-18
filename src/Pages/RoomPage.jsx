import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
function RoomPage() {
    const {roomId} =useParams();
    const meetingContainerRef = useRef();   

    useEffect(() => {
        const myMeeting = async () => {
            const appID = 1357590257;
            const serverSecret = "103fb7d934de0be6d16b25ea4b2fc02e";
            const kitToken = await ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                Date.now().toString(),
                "Satya"
            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingContainerRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div className="Room-Page">
            <div ref={meetingContainerRef}/>
        </div>
    )
}

export default RoomPage