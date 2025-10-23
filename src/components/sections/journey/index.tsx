import {
  Section,
  SectionContainer,
  SectionTitle,
} from "@/components/ui/SectionComp";
import JourneyTable from "./JourneyTable";

function JourneySection() {
  return (
    <Section id="journey" ariaLabelledBy="journey-title">
      <SectionContainer>
        <SectionTitle>My Adventure Log 🐾🐾</SectionTitle>
        <JourneyTable />
      </SectionContainer>
    </Section>
  );
}

export default JourneySection;