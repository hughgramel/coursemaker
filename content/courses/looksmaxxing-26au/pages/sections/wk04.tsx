import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk04Section() {
  return (
    <div>
      <h1>Section 4: The reference-photo cut consultation</h1>
      <p className="fs-6 fw-300">Week 4 &middot; Hands-on worksheet</p>

      <p>
        Barbers are skilled technicians, not mind readers. The gap between
        &ldquo;the usual&rdquo; and &ldquo;the cut that actually fits your face
        and hairline&rdquo; is almost always a communication gap. This section
        closes it. You will identify your face shape, audit your current growth
        pattern, select two reference photos with intention, and practice the
        vocabulary you need to give a barber a brief they can execute.
      </p>

      <AnchorHeading as="h2" id="part-1-face-shape">
        Part 1: Identify your face shape
      </AnchorHeading>
      <p>
        Take a front-facing photo in even light, hair back from the forehead.
        You need to see the full hairline, jaw, and cheekbones. Compare your
        proportions against the six face shapes covered in lecture.
      </p>
      <ol>
        <li>
          Measure (or estimate) the widths at three points: across the forehead
          at the hairline, across the cheekbones at their widest, and across the
          jaw at the widest point. Note which is widest.
        </li>
        <li>
          Measure the length from hairline to chin. Compare it to your
          cheekbone width. Roughly equal suggests oval or round; notably longer
          suggests oblong or diamond.
        </li>
        <li>
          Look at the jawline angle. Defined and angular suggests square. Narrow
          with a pointed chin suggests heart. Wide cheekbones with a narrow
          forehead and jaw suggests diamond.
        </li>
        <li>
          Name your face shape. If it sits between two categories, name both and
          use the one that better describes where you want to add or subtract
          visual weight.
        </li>
        <li>
          Write one sentence: &ldquo;My face is [shape]. The cut goal is to
          [add length / add width / reduce bulk at the sides / balance the
          forehead] to create the illusion of an oval face.&rdquo;
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-growth-pattern">
        Part 2: Audit your growth pattern and hairline
      </AnchorHeading>
      <p>
        Your natural growth pattern constrains which cuts are achievable without
        daily effort. Ignoring it is the most common reason a cut looks good in
        a reference photo and wrong on your head.
      </p>
      <ol>
        <li>
          Wet your hair thoroughly and let it sit without product for five
          minutes. Observe where your hair naturally parts, where it falls flat,
          and where it has volume or cowlicks.
        </li>
        <li>
          Note your hairline shape and any recession. If your temples are
          beginning to recede, write that down. Early androgenetic alopecia
          changes which cuts are sustainable: high-fade styles that expose the
          temporal recession tend to accelerate the visual effect of thinning.
        </li>
        <li>
          Identify your hair type (from lecture): straight, wavy, curly, or
          coily, and the A/B/C subcategory. Write one sentence about what this
          implies for texture and volume in the finished cut.
        </li>
        <li>
          Answer honestly: how much time are you willing to spend on styling
          each morning? Zero, two minutes, or five-plus minutes? Note it. A cut
          that requires a blow-dryer and clay every day will revert to something
          else by week three.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-reference-photos">
        Part 3: Select two reference photos with intention
      </AnchorHeading>
      <p>
        A reference photo does two things: it shows a cut on a face that resembles
        yours, and it gives your barber a shared target. Bring two photos: a
        primary choice and an alternative that differs in at least one dimension
        (length, texture, or silhouette). This gives the barber room to advise
        based on your actual hair texture and growth pattern.
      </p>
      <ol>
        <li>
          Choose photos of men whose face shape matches yours. A cut that looks
          clean on a square face may look long and flat on an oblong one. The
          photo should also show the same hair type as yours.
        </li>
        <li>
          For each photo, write: (a) what face shape it is on, (b) what cut
          goal it achieves (adds length, adds width, reduces volume at the
          sides), and (c) what styling it appears to require.
        </li>
        <li>
          Check your primary photo against your growth-pattern notes from Part 2.
          Does the cut require a natural part where you have a cowlick? Does it
          show a temple area where you have early recession? If there is a
          mismatch, either choose a different photo or prepare to discuss it with
          your barber.
        </li>
        <li>
          Label your photos: save them to your phone under a name you can find
          in the barber chair without fumbling.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-barber-brief">
        Part 4: Write your barber brief
      </AnchorHeading>
      <p>
        A good brief is four sentences or fewer. It covers the face-shape goal,
        the length at the top and sides, the transition (fade, taper, or scissor
        trim), and the styling plan. Practice saying it out loud before you go.
      </p>
      <ol>
        <li>
          Sentence 1 (goal): &ldquo;I am trying to [add length / reduce width /
          balance my forehead] because my face is [shape].&rdquo;
        </li>
        <li>
          Sentence 2 (lengths): &ldquo;I want to keep [X inches] on top and
          take the sides to [a low fade / a taper / a two-guard trim].&rdquo;
        </li>
        <li>
          Sentence 3 (reference): &ldquo;This photo is my primary reference. The
          texture and length on top are what I am going for.&rdquo;
        </li>
        <li>
          Sentence 4 (constraints): &ldquo;My hair grows [in which direction /
          has a cowlick at X / is beginning to recede at the temples], so I
          know that may change what is possible.&rdquo; If there are no
          constraints, skip this sentence.
        </li>
        <li>
          Share your brief with one other person in section. Ask them whether
          the brief is specific enough to produce a consistent result from any
          competent barber, or whether it still leaves room for a very different
          outcome.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">
        What to ship
      </AnchorHeading>
      <ul>
        <li>
          Your face shape, written as a single word or a two-word pair, with a
          one-sentence cut goal.
        </li>
        <li>
          Two reference photos (saved to your phone, labelled) with written
          notes on face shape, cut goal, and styling requirement for each.
        </li>
        <li>
          A four-sentence (or fewer) barber brief, written out and rehearsed.
        </li>
        <li>
          One sentence from your growth-pattern audit naming the main constraint
          (or confirming there is none) that affects which cuts are sustainable
          for you.
        </li>
      </ul>
    </div>
  );
}

export const wk04SectionSearchBody =
  "section reference photo barber brief face shape oval round square heart diamond oblong cut goal add length add width reduce bulk growth pattern hairline recession hair type wash frequency styling constraint barber vocabulary Week 4 worksheet";
