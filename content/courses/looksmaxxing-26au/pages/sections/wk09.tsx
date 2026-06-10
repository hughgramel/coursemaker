import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk09SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="film-review-fix">
        Section: Film, review, fix
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 9 &middot; Hands-on worksheet</p>

      <p>
        This section closes the loop on two weeks of posture and photography
        content. You will film yourself standing and walking, watch the footage
        with a structured checklist, receive peer feedback, and leave with two
        concrete action items. You will also take an updated weekly photo set
        using the camera-angle and lighting rules from lecture.
      </p>

      <p>
        Work in pairs throughout. One person films while the other performs,
        then swap. You need a phone on a tripod or leaned against a stable
        surface at standing eye level.
      </p>

      <AnchorHeading as="h2" id="part-1-setup">
        Part 1: Setup (5 minutes)
      </AnchorHeading>

      <ol>
        <li>
          <strong>Position your camera.</strong> Lens at standing eye level.
          Film from five to six feet away so the full body is in frame. Use
          portrait orientation for the standing shot and landscape for the
          walking clip.
        </li>
        <li>
          <strong>Lighting check.</strong> Face toward the main light source
          (a window or open doorway works). Confirm there is no harsh overhead
          light directly above your head. If you are inside with only ceiling
          lights, angle 45 degrees toward the nearest window.
        </li>
        <li>
          <strong>Baseline posture.</strong> Before filming, stand however you
          normally stand when you are not thinking about it. Do not try to
          &ldquo;fix&rdquo; yourself yet. That is the whole point: you want
          the film to show your actual default, not a performance.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-standing-clip">
        Part 2: Standing clip (10 minutes)
      </AnchorHeading>

      <ol start={4}>
        <li>
          <strong>Film a 15-second standing clip.</strong> Stand naturally,
          arms at sides. Film from the front, then from the side without
          moving the camera position. You will review both angles.
        </li>
        <li>
          <strong>Self-review with the checklist below.</strong> Watch your
          clip once before your partner comments. Mark each item Y (present
          and healthy) or N (absent or compensating).
        </li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Check point</th>
            <th>What to look for</th>
            <th>Y / N</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Head position (side view)</td>
            <td>Ear directly over shoulder, not forward of it</td>
            <td></td>
          </tr>
          <tr>
            <td>Shoulder height (front view)</td>
            <td>Both shoulders level; neither rolled forward</td>
            <td></td>
          </tr>
          <tr>
            <td>Chest (side view)</td>
            <td>Sternum lifted slightly; not caved inward</td>
            <td></td>
          </tr>
          <tr>
            <td>Lower back (side view)</td>
            <td>Neutral curve, not exaggerated arch or totally flat</td>
            <td></td>
          </tr>
          <tr>
            <td>Pelvis (side view)</td>
            <td>ASIS and PSIS roughly level; no excessive anterior tilt</td>
            <td></td>
          </tr>
          <tr>
            <td>Knee position (front view)</td>
            <td>Knees over second toe, not collapsing inward</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <ol start={6}>
        <li>
          <strong>Peer review.</strong> Your partner watches the same clip and
          marks the checklist independently. Compare marks. Discuss any point
          where you disagreed. The disagreement itself is instructive: it tells
          you which compensations are subtle enough that the person performing
          them cannot feel them.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-walking-clip">
        Part 3: Walking clip (10 minutes)
      </AnchorHeading>

      <ol start={7}>
        <li>
          <strong>Film a 20-second walking clip.</strong> Walk at your normal
          pace from one end of the room to the other. Film from the side. Do
          not look at the camera. Walk as though you are going somewhere.
        </li>
        <li>
          <strong>Self-review with the gait checklist below.</strong>
        </li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Check point</th>
            <th>What to look for</th>
            <th>Y / N</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Head position</td>
            <td>Chin level, gaze forward, not at the floor</td>
            <td></td>
          </tr>
          <tr>
            <td>Shoulder movement</td>
            <td>Relaxed and back, not hunched or raised toward ears</td>
            <td></td>
          </tr>
          <tr>
            <td>Arm swing</td>
            <td>Natural forward-back swing opposite to leg; no crossing the midline</td>
            <td></td>
          </tr>
          <tr>
            <td>Foot strike</td>
            <td>Heel-to-toe roll, not flat-footed slap</td>
            <td></td>
          </tr>
          <tr>
            <td>Step width</td>
            <td>Feet tracking close to a straight line, not wide straddle</td>
            <td></td>
          </tr>
          <tr>
            <td>Pace</td>
            <td>Unhurried but purposeful; no shuffle or excessive bounce</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <ol start={9}>
        <li>
          <strong>Peer review.</strong> Same process as the standing clip. Your
          partner marks the checklist and you compare. Note that gait
          compensations are harder to self-detect than standing ones: the body
          in motion distributes the effort and makes compensations feel normal.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-action-items">
        Part 4: Write two action items (10 minutes)
      </AnchorHeading>

      <ol start={10}>
        <li>
          <strong>Choose two &ldquo;N&rdquo; marks from your checklists.</strong>{" "}
          Pick the two that appeared in both your self-review and your
          partner&rsquo;s review. If there is no overlap, defer to your
          partner&rsquo;s observation.
        </li>
        <li>
          <strong>Write each action item in this format:</strong>{" "}
          &ldquo;I will [specific exercise or cue] every [frequency] to address
          [specific check point].&rdquo; For example: &ldquo;I will do 10 chin
          tucks every morning to address forward head position.&rdquo; or
          &ldquo;I will do the doorway pec stretch for 30 seconds on each side
          after I sit down at my desk, to address rounded shoulders.&rdquo;
        </li>
        <li>
          <strong>Add both items to your habit stack.</strong> From week 2,
          you built a habit stack. These two items need an anchor. Identify
          the existing habit each will follow.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-updated-photos">
        Part 5: Updated weekly photo set (10 minutes)
      </AnchorHeading>

      <ol start={13}>
        <li>
          <strong>Set up the photo station using the rules from lecture.</strong>{" "}
          Camera at standing eye level (not below). Soft frontal light: face
          the window or a large diffused light source. No overhead-only
          lighting. Neutral background, consistent with your week-2 baseline.
        </li>
        <li>
          <strong>Take three photos.</strong> Front, side, three-quarter turn
          (45 degrees from the camera). Same clothing or no shirt, same
          distance from the camera, as week 2.
        </li>
        <li>
          <strong>Compare against your week-2 photos.</strong> Do not edit or
          filter either set. Look for changes in posture, body composition, and
          how the camera captures your face and frame under better lighting.
          Note one observation about what changed.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">What to ship</AnchorHeading>
      <ul>
        <li>
          Completed standing and gait checklists (both self-review and
          peer-review columns filled in).
        </li>
        <li>
          Two written action items in the format above, each anchored to an
          existing habit from your week-2 stack.
        </li>
        <li>
          Your updated weekly photo set (front, side, three-quarter), taken
          with correct camera height and lighting.
        </li>
        <li>
          One written sentence comparing your week-9 photos to your week-2
          baseline: what you notice has changed and what has not.
        </li>
      </ul>
    </>
  );
}

export const wk09SectionSearchBody =
  "posture gait film review checklist standing walking forward head rounded shoulders hip flexor anterior pelvic tilt arm swing heel-to-toe action items habit stack weekly photos camera eye level lighting section worksheet Week 9";
