import { AnchorHeading } from "@/components/AnchorHeading";

export function LabsPage() {
  return (
    <>
      <AnchorHeading as="h1" id="labs">Lab Resources</AnchorHeading>
      <p>
        Compute, fabrication, and VR resources available to enrolled students.
      </p>

      <AnchorHeading as="h2" id="cse2-labs">CSE2 Computer Labs</AnchorHeading>
      <p>
        The basement of CSE2 (G10 corridor) has machines with the supported
        graphics toolchain pre-installed. Card access is enabled for enrolled
        students automatically.
      </p>

      <AnchorHeading as="h2" id="fab-lab">Fab Lab</AnchorHeading>
      <p>
        The Fab Lab is open during Weeks 8 and 9. Bring a digital file (STL,
        OBJ, SVG); staff will help you print or laser-cut a physical artifact.
      </p>

      <AnchorHeading as="h2" id="vr-lab">VR Lab</AnchorHeading>
      <p>
        The VR Lab is open during Week 10. Try out your Artifact on Quest 3,
        Vision Pro, and Index headsets.
      </p>
    </>
  );
}

export const labsSearchBody =
  "Lab resources CSE2 computer labs Fab Lab VR Lab Quest Vision Pro Index 3D printing laser cutting";
