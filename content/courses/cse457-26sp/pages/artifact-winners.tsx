import { AnchorHeading } from "@/components/AnchorHeading";

export function ArtifactWinnersPage() {
  return (
    <>
      <AnchorHeading as="h1" id="artifact-winners">Artifact Winners</AnchorHeading>
      <p>
        Past-quarter standouts from the open-ended Artifact project.
      </p>

      <AnchorHeading as="h2" id="winter-2026">Winter 2026</AnchorHeading>
      <ul>
        <li><strong>Best Visualization:</strong> Caustics in a swimming pool</li>
        <li><strong>Best Interaction:</strong> Hand-tracked sculpting</li>
        <li><strong>Best Concept:</strong> Generative botanical garden</li>
      </ul>

      <AnchorHeading as="h2" id="autumn-2025">Autumn 2025</AnchorHeading>
      <ul>
        <li><strong>Best Visualization:</strong> Subsurface scattering on skin</li>
        <li><strong>Best Interaction:</strong> Live MIDI-reactive shaders</li>
      </ul>
    </>
  );
}

export const artifactWinnersSearchBody =
  "Artifact winners visualization interaction concept caustics hand tracking sculpting generative botanical subsurface scattering MIDI shaders";
