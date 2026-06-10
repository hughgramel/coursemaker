import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk09Reading() {
  return (
    <ReadingPage
      id="wk09"
      title="Week 9: marketing assets and license literacy"
      kicker="Design for Builders: Ship Beautiful Products as a Founder &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers two things you need before you can ship a launch
          package. First, how to produce the marketing surface: App Store
          screenshots, OG images, favicon sets, and social-share cards, each
          with its own size requirements and design constraints. Second, how to
          verify that every font, icon, photo, and illustration in your product
          is licensed for the use you have in mind. By the end, you will know
          exactly what files to export, where to get assets legally and without
          cost, and how to read a license text without guessing.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Component library and screen
          flow from Week 7; wordmark and brand sheet from Week 8; spacing scale
          from Week 5; color ramp from Week 4. This reading assumes you have a
          brand mark, a wordmark, and a color palette in place. If any of those
          are missing, complete the Week 8 work first.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-marketing-surface">
        1. What the marketing surface is
      </AnchorHeading>
      <p>
        Before a user opens your app, they see a different product entirely: the
        marketing surface. This is the set of designed assets that appear on the
        App Store listing, in link previews, in browser tabs, and in social
        feeds. The marketing surface makes the first impression. A weak marketing
        surface sends users away before they ever interact with the product you
        spent months building.
      </p>
      <p>
        The marketing surface has four components. <strong>App Store
        screenshots</strong> (or web marketing mockups for non-mobile products)
        are the primary selling surface on the App Store or Play Store listing.
        <strong>OG images</strong> appear when someone shares a link to your
        product on Slack, X, LinkedIn, or iMessage. <strong>Favicons</strong>
        identify your product in browser tabs, bookmarks, and PWA home-screen
        icons. <strong>Social-share cards</strong> are a variant of the OG image
        tuned for specific platforms that impose different crop ratios.
      </p>
      <p>
        Each component has fixed technical constraints (pixel dimensions, file
        formats, safe zones) and design constraints (legibility at thumbnail
        size, message hierarchy). This reading covers both.
      </p>

      <AnchorHeading as="h2" id="2-app-store-screenshots">
        2. App Store screenshots
      </AnchorHeading>
      <p>
        App Store screenshots are the single most important marketing asset for
        a mobile product. Apple requires at least three screenshots per device
        class. Users see the first screenshot before they decide whether to
        scroll through the rest. The App Launchpad (2026) describes the first
        screenshot as &ldquo;the headline of your listing&rdquo;: it carries the
        primary feature claim, and the remaining screenshots support it.
      </p>
      <p>
        Apple&rsquo;s required dimensions for iPhone as of 2026 are:
      </p>
      <pre>{`6.7"  iPhone (required primary): 1290 × 2796 px
6.5"  iPhone (still accepted):    1242 × 2688 px
5.5"  iPhone (older devices):     1242 × 2208 px`}</pre>
      <p>
        You only need to produce the 6.7&ldquo; size. Apple generates the others
        during review, or accepts the larger size for all slots. For iPad, the
        primary required size is 2048&times;2732px (12.9&ldquo;). If your app
        targets both iPhone and iPad, you need separate screenshot sets.
      </p>
      <p>
        Every screenshot has three layers. The <strong>background</strong> is a
        solid fill or gradient in your brand color, providing the framing. The
        <strong>device frame</strong> is a transparent PNG of the phone outline
        with the app screen inside it, providing credibility evidence that the
        product is real. The <strong>text overlay</strong> is the feature
        message in large, bold type, providing the reason to download. The App
        Launchpad&rsquo;s practical rule: remove the device frame, and the text
        overlay should still communicate the value. If it does not, the text
        overlay is doing insufficient work.
      </p>
      <p>
        <strong>Thumbnail legibility</strong> is the constraint that eliminates
        most bad screenshots. The App Store displays screenshots at roughly
        320px wide in the search results list. At that size, the device frame
        is a small rectangle and any text smaller than 28px in the layout is
        unreadable. The feature message should be set at 48-72px or larger and
        use the boldest weight of your brand typeface. Richardson (2023) frames
        this precisely: a screenshot that cannot communicate its message without
        being zoomed in has failed its primary job.
      </p>

      <AnchorHeading as="h2" id="3-og-images">
        3. OG images and social-share cards
      </AnchorHeading>
      <p>
        An OG image is the preview image that appears when someone pastes a URL
        into a messaging app, social platform, or email client. The name comes
        from the Open Graph protocol (<code>og:image</code>), which Facebook
        introduced and every major platform now reads. Setting it requires two
        things: a designed image at the correct dimensions, and a
        <code>&lt;meta&gt;</code> tag in your page&rsquo;s <code>&lt;head&gt;</code>.
      </p>
      <pre>{`<!-- In your page <head> -->
<meta property="og:image" content="https://yourapp.com/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yourapp.com/og.png" />`}</pre>
      <p>
        The canonical OG image size is 1200&times;630px (approximately 1.91:1
        ratio). This is the safe target because LinkedIn, Slack, and Discord all
        read this size without cropping. X (Twitter) uses the same dimensions
        for its <code>summary_large_image</code> card. iMessage shows a square
        crop of the image, roughly centered. Richardson&rsquo;s practical rule:
        keep all critical content (logo, product name, key message) within an
        80px margin on every side, and keep the most important element in the
        center 60% of the frame. That region survives every crop.
      </p>
      <p>
        OG images follow a small set of recurring patterns. The most common for
        product launches are:
      </p>
      <ul>
        <li>
          <strong>Brand + tagline.</strong> Logo centered or top-left, tagline
          in large type, solid or gradient brand background. Works for any
          product. Low information density, high legibility.
        </li>
        <li>
          <strong>Screenshot preview.</strong> Product screenshot on the right,
          logo and tagline on the left. Works well when the UI is clean and
          distinctive. Fails when the screenshot is too small to read.
        </li>
        <li>
          <strong>Social proof.</strong> A quote from a press mention or user
          review in large type, with the logo small in a corner. Works for
          products with early press coverage.
        </li>
      </ul>
      <p>
        A social-share card is an OG image tuned for a specific platform. For X,
        use <code>summary_large_image</code> at 1200&times;630px. For LinkedIn,
        the recommended size is the same 1200&times;627px. For Open Graph in
        general, 1200&times;630px covers both. The only time you need a
        platform-specific asset is when you want different messaging per
        platform, which is rarely worth the production overhead for a launch.
      </p>

      <AnchorHeading as="h2" id="4-favicons">
        4. Favicons across platforms
      </AnchorHeading>
      <p>
        A favicon is the small image that identifies your product in the browser
        tab. Modern products need more than one size because different platforms
        use the favicon in different contexts: browser tabs, bookmarks, Android
        home screens, iOS home screens, and PWA splash screens all pull from the
        same family of files but at different sizes.
      </p>
      <p>
        The minimum set for a 2026 web product:
      </p>
      <pre>{`favicon.ico      16 × 16 px   Browser tab (legacy browsers)
favicon-32.png   32 × 32 px   High-DPI browser tabs, Windows tiles
apple-touch-icon.png  180 × 180 px  iOS add-to-homescreen
icon-512.png     512 × 512 px  PWA manifest, Play Store icon
favicon.svg      Scalable      Modern browsers (Chrome 80+, Firefox 41+)`}</pre>
      <p>
        The SVG favicon is the most important one for modern browsers: it
        renders crisp at any size and supports a <code>prefers-color-scheme</code>
        media query, so your favicon can automatically switch between a
        light-background and dark-background version. Start by designing the
        SVG, then rasterize it for the PNG and ICO files.
      </p>
      <p>
        The 16px favicon is the hardest design problem on this list. At 16px,
        fine lines disappear, serifs collapse into blurs, and details that look
        beautiful at 512px become noise. The solution is not to shrink your
        brand mark: it is to create a simplified version of the mark that reads
        as a distinct silhouette at that size. One bold letter, one simple
        geometric shape, or a two-color icon with no gradients all survive 16px.
        Gradients, shadows, and thin strokes do not.
      </p>

      <Callout title="The 16px test">
        <p>
          Place your brand mark in a 16&times;16px Figma frame and zoom out
          until the frame appears at its actual screen size (roughly 0.5cm). If
          you cannot tell it apart from a gray square, the mark needs to be
          simplified for this size. The 16px version is not a scaled-down logo.
          It is a separate, simpler artifact that reads as the same brand.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-asset-sources">
        5. Where to find fonts, icons, photos, and illustrations
      </AnchorHeading>
      <p>
        The practical asset stack for a founder-built product in 2026 is almost
        entirely free, but &ldquo;free&rdquo; carries different legal meanings
        at different sources. This section covers the recommended sources and
        what their licenses actually say.
      </p>
      <p>
        <strong>Fonts.</strong> Google Fonts hosts over 1,500 typefaces, almost
        all under the SIL Open Font License. Fontsource packages those same
        fonts as npm modules for self-hosting, which avoids a third-party DNS
        dependency in production. Both are governed by the OFL. The OFL permits
        use in logos, products, and apps; embedding in software; and
        redistribution as part of a larger work. The OFL prohibits selling the
        font file alone and using the &ldquo;Reserved Font Name&rdquo; on a
        modified version. For a product builder, the OFL is effectively
        unrestricted: you can ship any Google Font in your product without
        attribution (SIL International, 2022).
      </p>
      <p>
        <strong>Icons.</strong> Three icon sets cover most needs:
      </p>
      <ul>
        <li>
          <strong>Lucide.</strong> ISC license (a simplified BSD). Commercially
          free, no attribution required in production, license file must be
          present in the project (satisfied automatically via npm install). Some
          Lucide icons are derived from Feather Icons (MIT), which has the same
          practical terms. License: lucide.dev/license.
        </li>
        <li>
          <strong>Phosphor Icons.</strong> MIT license. Commercially free, no
          attribution required in production, license file in the project.
          Phosphor has more weight variants (thin, light, regular, bold, fill,
          duotone) than Lucide, making it more flexible for display sizes.
          License: phosphoricons.com.
        </li>
        <li>
          <strong>Iconify.</strong> Aggregator that hosts hundreds of icon sets
          under their original licenses. Each set has its own terms. Lucide and
          Phosphor are both available through Iconify. If you use a set you
          found through Iconify, follow the link to the original license for
          that specific set, not Iconify&rsquo;s general page.
        </li>
      </ul>
      <p>
        <strong>Photos.</strong> Unsplash and Pexels are the two most commonly
        used free photo sources. Both permit commercial use and modification
        without attribution. Neither permits reselling the raw files. The
        distinction matters: you can use an Unsplash photo in a product
        marketing screenshot, but you cannot sell a pack of Unsplash photos as
        stock imagery. For product photos (app screenshots, device mockups,
        lifestyle imagery), Unsplash and Pexels are sufficient for nearly every
        launch use case.
      </p>
      <p>
        <strong>Illustrations.</strong> Open Peeps by Pablo Stanley is a
        hand-drawn illustration system of human figures released under CC0
        (public domain). CC0 means no attribution, no restrictions, no
        conditions. You can use Open Peeps in a commercial product, modify the
        figures, combine them with your own designs, and ship them to the App
        Store. The Figma Community file allows you to mix and match poses,
        expressions, and outfits directly in your design files.
      </p>

      <AnchorHeading as="h2" id="6-license-literacy">
        6. Reading a license without crying
      </AnchorHeading>
      <p>
        License texts are written for lawyers, but the parts that matter to a
        product builder are usually in the first three paragraphs. This section
        describes the vocabulary you need to read any open license quickly.
      </p>
      <p>
        <strong>Attribution required.</strong> Some licenses (Creative Commons
        BY variants, some stock photo licenses) require you to credit the
        original creator when you use the asset. For a web product, this
        typically means a small credit in your footer or a licensing page. For
        an App Store screenshot or OG image, it means a visible credit on the
        asset itself. Unsplash and Pexels do not require attribution. Open Peeps
        (CC0) does not require attribution. SIL OFL does not require attribution
        for use (only for distributions of the font file itself under a modified
        name).
      </p>
      <p>
        <strong>No derivatives.</strong> Creative Commons ND (NoDerivatives)
        licenses prohibit modification of the asset. If an illustration is
        licensed CC BY-ND, you can use it as-is with attribution, but you cannot
        resize, recolor, or combine it with other elements. For product design,
        an ND license is nearly unusable: you will always need to adjust colors
        and sizes. Avoid ND assets in production work.
      </p>
      <p>
        <strong>Non-commercial.</strong> Creative Commons NC licenses permit use
        only for non-commercial purposes. A product with any revenue model is a
        commercial use. Apps with in-app purchases, subscriptions, or ads are
        commercial uses. If an asset is CC NC, you cannot use it in a product
        you intend to monetize.
      </p>
      <p>
        <strong>Reserved Font Name.</strong> The SIL OFL includes an optional
        restriction called Reserved Font Name. If a font&rsquo;s OFL text lists
        an RFN (you find this in the license file distributed with the font),
        any modified version you distribute must be released under a different
        name. You cannot call your modified version by the original name. This
        restriction only applies if you modify and redistribute the font file.
        Using the font in a product without modifying it is unaffected by the
        RFN clause. The SIL guidance (SIL International, 2022) is explicit on
        this point: &ldquo;The RFN restriction applies only to font software that
        has been modified and is being distributed.&rdquo;
      </p>
      <p>
        <strong>Permissive licenses (MIT, ISC, Apache 2.0).</strong> These
        licenses say: you can use this for anything, including commercial
        products, but you must include the original license text with the
        software. For an icon set installed via npm, the license text lives in
        <code>node_modules/lucide-react/LICENSE</code> or equivalent. It is
        included automatically. It does not need to appear in your app&rsquo;s
        UI. You are compliant the moment you run <code>npm install</code>.
      </p>

      <AnchorHeading as="h2" id="7-when-to-pay">
        7. When to pay for assets
      </AnchorHeading>
      <p>
        Free assets cover most of what a founder-built product needs at launch.
        But there are three cases where a paid license is the right call.
      </p>
      <p>
        <strong>When you need editorial or news photography.</strong> Unsplash
        and Pexels are oriented toward lifestyle and generic subject matter. If
        your product needs a photo of a specific identifiable person, a specific
        branded product, or an image with editorial news value, you need a stock
        agency license (Getty, Shutterstock, Adobe Stock). These licenses are
        expensive for a reason: they cover model releases, property releases, and
        editorial rights that free photo sites cannot provide.
      </p>
      <p>
        <strong>When you need a complete, professional icon system.</strong>
        Lucide and Phosphor are excellent free options, but they have gaps in
        coverage for specialized domains. Tabler Icons Pro, Streamline, and
        Nucleo offer larger, more consistent sets with more styles and better
        coverage of domain-specific icons (medical, financial, logistics). If
        your product uses 300 icons and you are finding workarounds for 20 of
        them, a $49-99 one-time license for a pro set is a good investment in
        visual consistency.
      </p>
      <p>
        <strong>When you need a typeface with a voice free fonts cannot
        match.</strong> Every Google Font is available to every product. If your
        brand voice requires a typeface that reads as genuinely distinctive (not
        &ldquo;I recognize that from fifty other SaaS products&rdquo;), a
        licensed commercial typeface from a type foundry is worth considering.
        Licenses range from $30 for a single desktop license to $300+ for a web
        license with high monthly page views. Read the license carefully: most
        commercial fonts require a separate desktop license (for use in Figma)
        and a web font license (for use in production).
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. A worked example: assembling the asset log
      </AnchorHeading>
      <p>
        Here is an example asset log for a hypothetical productivity app called
        Taskline. The log covers every asset in the production file before
        export.
      </p>
      <pre>{`ASSET LOG, TASKLINE (LAUNCH)

Asset               Source URL                              License      Commercial  Attribution
------------------  --------------------------------------  -----------  ----------  -----------
Inter (typeface)    fonts.google.com/specimen/Inter        SIL OFL 1.1  Yes         No
Lucide icons        lucide.dev/license                     ISC          Yes         No
  (used: 22 icons)
Hero photo          unsplash.com/photos/abc123             Unsplash     Yes         No
Open Peeps figure   openpeeps.com                          CC0          Yes         No
App icon (custom)   Original work                          N/A          Yes         N/A
OG image (custom)   Original work                          N/A          Yes         N/A
Screenshots         Original work + Lucide + Inter above   See above    Yes         No`}</pre>
      <p>
        Each row requires a direct link to the license page, not to the asset
        itself. If the link goes to a search results page or a landing page with
        no visible license text, the row is incomplete. The log is a record of
        decisions made before shipping, not a post-hoc justification of assets
        already in use.
      </p>
      <p>
        The worked example reveals a common oversight: when multiple licensed
        assets appear in one designed output (the screenshots use Inter, Lucide
        icons, and a photo), each contributing asset needs its own row. The
        screenshot row references the upstream assets rather than duplicating
        them.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Open the SIL Open Font License text for any Google Font
          (fonts.google.com &rarr; the font page &rarr; &ldquo;License&rdquo; tab).
          Find the &ldquo;PERMISSION &amp; CONDITIONS&rdquo; section. Write two
          sentences: one describing what you are permitted to do, one describing
          what you are prohibited from doing. Then check whether the font has a
          Reserved Font Name restriction. Where in the license text would that
          restriction appear?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Go to lucide.dev/license and read the ISC license text directly. The
          license includes a notice requirement. In a production web app that
          uses Lucide via npm (<code>npm install lucide-react</code>), where
          does the license notice live after install? Does it appear in your
          app&rsquo;s user interface? Is the requirement satisfied by the npm
          install alone, or does it require additional action?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Create a 1200&times;630px frame in Figma for an OG image for your own
          product. Place an 80px margin guide on all four sides. Your product
          wordmark, a tagline of ten words or fewer, and one supporting visual
          must all sit inside the margin. Export the frame at 1x. Then crop a
          copy to 240&times;240px, centered. Does the product name remain
          legible in the crop? If not, describe one change to the layout that
          would make it legible without altering the full-size version.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          In Figma, create four frames for your favicon set: 16&times;16px,
          32&times;32px, 180&times;180px, and 512&times;512px. Place your brand
          mark in each frame. At 16px, list every element of the mark that
          becomes illegible. Build a simplified version for the 16px frame that
          retains the mark&rsquo;s identity with fewer elements. Name the
          specific simplifications you made (e.g. &ldquo;removed the dot above
          the i,&rdquo; &ldquo;increased stroke weight from 1px to 2px,&rdquo;
          &ldquo;removed drop shadow&rdquo;).
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Build the asset log table described in section 8 for your own product.
          Include every font, icon set, photo, and illustration you plan to use
          at launch. For each row, the source URL must go directly to the license
          page. After completing the log, identify the one asset whose license
          you are least confident about, and write two sentences explaining what
          you would need to verify before shipping.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Asset studio. You arrive with your
          brand sheet from HW 4 and build your complete asset set in one session:
          favicon set, OG image, two App Store screenshot frames, and a completed
          asset license log. Bring the log to section for peer review.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the design constraints
          for each component of the marketing surface: App Store screenshot
          anatomy, OG image patterns, favicon sizes, and social-share card
          crops. Review the follow-up questions before section.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers asset sourcing and
          license literacy in depth: the SIL OFL, Lucide&rsquo;s ISC license,
          Unsplash&rsquo;s custom license, and when to pay for a commercial asset.
        </li>
        <li>
          <strong>Week 10.</strong> Capstone demo day. Every asset from this
          week feeds directly into the launch package you present.
        </li>
      </ul>

      <Takeaways>
        <li>
          The marketing surface (App Store screenshots, OG images, favicons,
          social-share cards) is the first version of your product most users
          see. Design it with the same care as the product screens.
        </li>
        <li>
          App Store screenshots fail or succeed at thumbnail size (320px wide).
          The text overlay is the primary message; the device frame is supporting
          evidence. A screenshot that cannot communicate without being zoomed in
          has failed.
        </li>
        <li>
          The OG image safe zone is 80px from every edge. Content outside that
          margin will be cropped by at least one platform. Keep the product name
          and tagline inside the margin.
        </li>
        <li>
          Every Google Font is under SIL OFL: commercially free, no attribution
          required, no restrictions on logo or app use. Lucide (ISC) and
          Phosphor (MIT) are permissive icon sets with the same practical terms.
          Unsplash and Pexels permit commercial use without attribution. Open
          Peeps is CC0.
        </li>
        <li>
          An asset log with a direct link to each license page is the minimum
          standard for shipping legally. &ldquo;Free for commercial use&rdquo;
          without a named license is not a log entry. Look up the license text
          and name it specifically.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          The App Launchpad. &ldquo;How to Create App Store Screenshots in
          Figma.&rdquo; 2026.{" "}
          <a href="https://theapplaunchpad.com/blog/how-to-create-app-store-screenshots-in-figma/">
            theapplaunchpad.com/blog/how-to-create-app-store-screenshots-in-figma/
          </a>
          . Practical walkthrough of App Store screenshot dimensions, device
          frame placement, text overlay anatomy, and thumbnail legibility. The
          source for the &ldquo;text overlay is the primary message&rdquo; framing.
        </p>
        <p>
          Lucide Contributors. &ldquo;Lucide Icons: License (ISC).&rdquo; 2024.{" "}
          <a href="https://lucide.dev/license">
            lucide.dev/license
          </a>
          . The authoritative license page for Lucide icons. Covers ISC terms,
          attribution requirements, and the relationship to Feather Icons (MIT).
        </p>
        <p>
          Richardson, Seth. &ldquo;App Store Screenshots, OG Images &amp;
          Favicons.&rdquo; 2023.{" "}
          <a href="https://www.sethrichardsondesign.com/ultimate-app-store-icon-and-screenshot-generator">
            sethrichardsondesign.com/ultimate-app-store-icon-and-screenshot-generator
          </a>
          . Guide to creating a complete App Store marketing asset set in Figma,
          including pixel density, safe zones, and OG image design constraints.
        </p>
        <p>
          SIL International. &ldquo;Using OFL Fonts.&rdquo; 2022.{" "}
          <a href="https://openfontlicense.org/how-to-use-ofl-fonts/">
            openfontlicense.org/how-to-use-ofl-fonts/
          </a>
          . Official SIL guidance on what the Open Font License permits and
          prohibits for font users. Primary source for the OFL permissions
          summary and the Reserved Font Name explanation.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk09ReadingSearchBody =
  "marketing surface App Store screenshots OG images favicons social-share cards 1200x630 open graph SIL OFL Lucide ISC Phosphor MIT Unsplash Pexels Open Peeps CC0 license literacy attribution no derivatives non-commercial Reserved Font Name permissive license asset log thumbnail legibility favicon 16px safe zone Week 9 reading design for builders founders engineers";
