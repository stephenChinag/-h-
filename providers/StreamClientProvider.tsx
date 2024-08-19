"use client";

import Loader from "@/components/Loader";
import { tokenProvider } from "@/server/stream.actions";
import { useUser } from "@clerk/nextjs";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoCilent, setVideSetVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    if (!apiKey) throw new Error(" Stream API key missing");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideSetVideoClient(client);
  }, [user, isLoaded]);

  if (!videoCilent) return <Loader />;

  return <StreamVideo client={videoCilent}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
