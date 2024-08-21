"use clent";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (values: boolean) => void;
}) {
  const [isMicCamToogledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within streamCall component");
  }
  useEffect(() => {
    if (isMicCamToogledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.camera.enable();
    }
  }, [isMicCamToogledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <div className="w-full max-w-md">
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
          <label className="flex items-center justify-center font-medium gap-2">
            <input
              type="checkbox"
              checked={isMicCamToogledOn}
              onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            />
            Join with mic and Camera off
          </label>
          <DeviceSettings />
        </div>
        <div className="flex justify-center mt-4">
          <Button
            className="bg-green-500 px-4 py-2.5"
            onClick={() => {
              call.join();
              setIsSetupComplete(true);
            }}
          >
            Join Meeting
          </Button>
        </div>
      </div>
    </div>
  );
}
