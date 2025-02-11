import { initSlackAnimations } from "./animations/slack.js";
import { animatePulse } from "./animations/pulse.js";
import gsap from "gsap";

// Webflow-specific initialization
globalThis.Webflow ||= [];
globalThis.Webflow.push(() => {
  const rotationDelay =
    document.querySelector(".conversation_wrap").dataset.delay;
  const initialDelay = document.querySelector(".conversation_wrap").dataset.init;
  initSlackAnimations(initialDelay, rotationDelay);
  const pulesTimeline = gsap.timeline({
    repeat: -1, // Repeat indefinitely
  });

  const linearAnimation = gsap.timeline();
  animatePulse(
    linearAnimation,
    "#linear-circle",
    ["#linear-stop1", "#linear-stop2", "#linear-stop3", "#linear-stop4"],
    ["-90%", "-50%", "-20%", "0%"],
    ["120%", "170%", "180%", "200%"],
  );
  const githubAnimation = gsap.timeline();
  animatePulse(
    githubAnimation,
    "#github-circle",
    ["#github-stop1", "#github-stop2", "#github-stop3", "#github-stop4"],
    ["-100%", "-60%", "-40%", "0%"],
    ["110%", "150%", "180%", "200%"],
  );

  const jiraAnimation = gsap.timeline();
  animatePulse(
    jiraAnimation,
    "#jira-circle",
    ["#jira-stop1", "#jira-stop2", "#jira-stop3", "#jira-stop4"],
    ["-100%", "-60%", "-40%", "0%"],
    ["110%", "150%", "180%", "200%"],
  );

  const gcalAnimation = gsap.timeline();
  animatePulse(
    gcalAnimation,
    "#gcal-circle",
    ["#gcal-stop1", "#gcal-stop2", "#gcal-stop3", "#gcal-stop4"],
    ["-100%", "-60%", "-40%", "0%"],
    ["110%", "150%", "180%", "200%"],
  );

  pulesTimeline.add(linearAnimation, 0);
  pulesTimeline.add(githubAnimation, "-=1");
  pulesTimeline.add(jiraAnimation, "-=1");
  pulesTimeline.add(gcalAnimation, "-=1");
});
