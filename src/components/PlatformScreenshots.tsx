import React from "react";
import ConversationDetailView from "./ConversationDetailView";
import ConversationsDashboard from "./ConversationsDashboard";
import AssistantManagement from "./AssistantManagement";
import AssistantCreationFlow from "./AssistantCreationFlow";

const PlatformScreenshots = () => {
  return (
    <div className="space-y-0">
      <ConversationDetailView />
      <ConversationsDashboard />
      <AssistantManagement />
      <AssistantCreationFlow />
    </div>
  );
};

export default PlatformScreenshots;