import React from "react";
import InteractiveConversationDemo from "./InteractiveConversationDemo";
import LiveMetricsDashboard from "./LiveMetricsDashboard";
import ConversationBuilderInterface from "./ConversationBuilderInterface";

const PlatformScreenshots = () => {
  return (
    <div className="space-y-0">
      <InteractiveConversationDemo />
      <LiveMetricsDashboard />
      <ConversationBuilderInterface />
    </div>
  );
};

export default PlatformScreenshots;