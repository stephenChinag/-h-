import { useGetCalls } from "@/hooks/useGetCalls";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CallRecording } from "@stream-io/video-react-sdk";
function CallList({ type }: { type: "ended" | "upcoming" | "recordings" }) {
  const { callRecordings, endedCalls, isLoading, upcomingCalls } =
    useGetCalls();

  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };
  return <div>CallList</div>;
}

export default CallList;
