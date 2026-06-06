import RequestForm from "@/components/RequestForm";

interface GHLEmbedFormProps {
  /** Unique suffix so multiple embeds on one page don't collide */
  instanceId?: string;
  height?: number;
}

const GHLEmbedForm = ({ instanceId = "default", height = 560 }: GHLEmbedFormProps) => {
  void instanceId;
  void height;
  return <RequestForm />;
};

export default GHLEmbedForm;
