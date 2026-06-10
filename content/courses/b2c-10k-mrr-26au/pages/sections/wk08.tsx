import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
} from "@/components/ReadingPage";

export function Wk08SectionPage() {
  return (
    <ReadingPage
      id="wk08-section"
      title="Week 8 section: Ship to the stores"
      kicker="B2C to $10k MRR · Autumn 2026 · Section"
    >
      <ReadingFraming>
        <p>
          By the end of this section you will have shipped one of three things:
          a TestFlight build live with at least one external tester, a Play
          internal-testing build live with at least one tester, or a PWA install
          prompt live on your production URL. Pick your path before the session
          starts. The milestone is non-negotiable: this is the week you leave
          the simulator and put your product in a real user’s hands via a
          store or a browser prompt.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have read the Week 8
          reading, attended both lectures, and have a working build of your
          product. If you have not yet created an Apple Developer account, a
          Google Play Console account, or confirmed your web app meets PWA
          installability criteria (HTTPS, valid manifest, registered service
          worker), do that before arriving.
        </p>
      </ReadingFraming>

      <Callout title="Pick one path, finish it">
        <p>
          Three paths are listed below. Pick exactly one. Starting two paths
          and finishing neither counts as zero. If you genuinely serve both
          iOS and Android users, pick the platform where you have the most
          active testers and finish the other next week.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="path-a-apple">Path A: TestFlight (Apple)</AnchorHeading>
      <p>
        TestFlight lets you distribute a build to up to 10,000 external testers
        before your app is on the App Store. Internal testers (your team) are
        available within minutes. External testers require a brief TestFlight
        review by Apple, which typically takes 24-48 hours. Here is the
        path for a one-person team.
      </p>
      <ol>
        <li>
          <strong>Enroll in Apple Developer Program ($99/year).</strong> You
          need an active membership before you can upload to App Store Connect.
          If you already have one, confirm it has not expired.
        </li>
        <li>
          <strong>Archive and upload in Xcode.</strong> Open your project. Set
          the scheme to “Any iOS Device” (not a simulator). Choose
          Product › Archive. When the archive completes, click
          “Distribute App” and choose “TestFlight & App
          Store.” Upload to App Store Connect.
        </li>
        <li>
          <strong>Add an internal tester.</strong> In App Store Connect, navigate
          to your app › TestFlight › Internal Testing. Add yourself
          or a teammate by Apple ID. The build should appear in the TestFlight
          app on their device within 30 minutes.
        </li>
        <li>
          <strong>Add an external tester group (optional this week).</strong> To
          reach testers outside your team, create a new External Testing group,
          add email addresses, and submit the build for TestFlight review. The
          Apple review guidelines section on TestFlight (under section 2,
          Performance) applies: your app must be functionally complete and must
          not use the “beta” label to avoid standard review.
        </li>
        <li>
          <strong>Send the TestFlight link.</strong> Copy the public link from
          App Store Connect and send it to your first external tester. Record
          the number of installs in your daily reflect slot.
        </li>
      </ol>
      <p>
        <strong>Common rejection point:</strong> Apple rejects TestFlight
        builds that use placeholder content, crash on launch, or are missing
        a complete set of required permissions disclosures. Test your archive
        build on a physical device before uploading.
      </p>

      <AnchorHeading as="h2" id="path-b-google">Path B: Play internal-testing (Google)</AnchorHeading>
      <p>
        Google Play’s internal testing track makes your build available
        to up to 100 testers within minutes, with no review required. This is
        the fastest path to a real device for Android-first products.
      </p>
      <ol>
        <li>
          <strong>Create a Google Play Console account ($25 one-time).</strong>{" "}
          Verify your identity. If your account was created after November 2023
          (personal, not organization), Google requires you to run a closed test
          with at least 12 opted-in testers for 14+ days before production
          access. Plan for this if you intend to go public later.
        </li>
        <li>
          <strong>Generate a signed release APK or AAB.</strong> In Android
          Studio, choose Build › Generate Signed Bundle / APK. Use a
          release keystore. An Android App Bundle (.aab) is preferred over APK
          for Play distribution.
        </li>
        <li>
          <strong>Create your app in Play Console.</strong> Follow the setup
          wizard. Fill in the main store listing (title, short description,
          screenshots). You need at least two screenshots to save the listing.
          You do not need production-quality copy yet.
        </li>
        <li>
          <strong>Upload to the internal testing track.</strong> In Play
          Console, go to Testing › Internal testing › Create new
          release. Upload your .aab. Add a release name and notes. Save and
          roll out.
        </li>
        <li>
          <strong>Invite testers by email or link.</strong> Under Internal
          testing › Testers, create a list and add email addresses
          linked to Google accounts. Or generate an opt-in URL and send it.
          Testers will see the build in the Play Store within minutes.
        </li>
        <li>
          <strong>Record your first install.</strong> Ask the first tester to
          confirm the build launches. Log the install count in your daily
          reflect slot.
        </li>
      </ol>
      <p>
        <strong>Common rejection point:</strong> Play Console will block your
        upload if your target API level is below the current Android requirement
        (check the Play Console dashboard for the current minimum). Update
        your <code>targetSdkVersion</code> in <code>build.gradle</code> before
        your first upload.
      </p>

      <AnchorHeading as="h2" id="path-c-pwa">Path C: PWA install prompt (web-first)</AnchorHeading>
      <p>
        A Progressive Web App install prompt lets users add your web app to
        their home screen without going through a store. This is the correct
        distribution path if your product is web-first, if you
        want to avoid the 30% store commission on subscriptions, or if your
        audience is primarily desktop users. The trade-off: discoverability via
        search is your responsibility, not the store’s.
      </p>
      <ol>
        <li>
          <strong>Confirm installability criteria.</strong> Your app must be
          served over HTTPS, have a valid web app manifest
          (<code>manifest.json</code>) with <code>name</code>,
          <code>icons</code> (at least 192×192 and 512×512 PNG),
          <code>start_url</code>, and <code>display: standalone</code> or
          <code>minimal-ui</code>. It must also have a registered service
          worker. Open Chrome DevTools › Application › Manifest
          to verify. Lighthouse will flag any missing criteria.
        </li>
        <li>
          <strong>Intercept the BeforeInstallPromptEvent.</strong> The browser
          fires this event when it decides the app is installable. Capture it
          before it fires the default prompt:
          <pre>{`let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton(); // make your custom button visible
});`}</pre>
        </li>
        <li>
          <strong>Show a contextual install button.</strong> Do not show the
          prompt immediately on page load. The MDN guide recommends triggering
          it after the user has demonstrated engagement (completed a task,
          returned for a second session, or explicitly asked). Place the
          install button where it makes sense in your flow.
        </li>
        <li>
          <strong>Call prompt() on user gesture.</strong> When the user clicks
          your install button:
          <pre>{`installButton.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') trackInstall();
  deferredPrompt = null;
});`}</pre>
        </li>
        <li>
          <strong>Track the outcome.</strong> Log <code>outcome === ’accepted’</code>{" "}
          as a conversion event. This is your install metric equivalent to
          TestFlight installs. Record it in your daily reflect slot.
        </li>
        <li>
          <strong>Test on Android Chrome and iOS Safari (add to home screen).</strong>{" "}
          The <code>BeforeInstallPromptEvent</code> API is Chrome-only. On iOS
          Safari, the user must use the share menu › “Add to Home
          Screen” manually. Add an iOS-specific prompt banner explaining
          this flow for Safari users.
        </li>
      </ol>
      <p>
        <strong>Common failure point:</strong> The service worker is registered
        but throws on first activation. Use Chrome DevTools ›
        Application › Service Workers to inspect status. A broken
        service worker prevents the browser from firing
        <code>BeforeInstallPromptEvent</code>.
      </p>

      <AnchorHeading as="h2" id="shared-work">After shipping: shared work (all paths)</AnchorHeading>
      <p>
        Once your build is live (on any path), do this before leaving section:
      </p>
      <ol>
        <li>
          <strong>Write one ASO change.</strong> Open your store listing (or
          PWA manifest). Rewrite the title using the AppFollow playbook:
          brand name + separator + primary keyword, under 30 characters.
          Write the old title and the new title side by side in your founder
          journal. Note the keyword you targeted and why.
        </li>
        <li>
          <strong>Replace or plan your first three screenshots.</strong> Apply
          the first-three rule: the first screenshot should convey the core
          promise of the app in one image and caption. Benefit language, not
          feature labels. If you cannot ship the new screenshots today, write
          the captions and have a classmate confirm they pass the
          “stranger in five seconds” test.
        </li>
        <li>
          <strong>Start your capstone scaffold.</strong> On paper or in a
          doc, draw your current AARRR funnel with real numbers. Thursday
          is the formal scaffold session, but sketching it today will make
          Thursday faster. The reading’s capstone section has the five
          prompts.
        </li>
      </ol>

      <AnchorHeading as="h2" id="deliverables">Deliverables</AnchorHeading>
      <ul>
        <li>
          Screenshot or link confirming your build is live (TestFlight link,
          Play Console internal-test link, or production URL with install
          prompt active).
        </li>
        <li>
          Old title vs. new title, with the keyword you targeted.
        </li>
        <li>
          Three screenshot captions (new versions, benefit-framed).
        </li>
      </ul>
    </ReadingPage>
  );
}

export const wk08SectionSearchBody =
  "ship to stores TestFlight Apple App Store Connect archive upload internal tester external tester Play internal testing Google Play Console AAB APK signed release PWA install prompt BeforeInstallPromptEvent service worker manifest HTTPS installability ASO title screenshots first-three rule capstone scaffold section Week 8";
