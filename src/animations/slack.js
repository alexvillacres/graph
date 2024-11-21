import gsap from "gsap";
import { getMessageHeight } from "./utils.js";

export function initSlackAnimations(initialDelay = 3, rotationDelay = 3) {
  const track = document.querySelector(".conversation_track");
  const messageContainer = track.querySelector(".conversation_messages");
  const messages = Array.from(
    messageContainer.querySelectorAll(".conversation_message"),
  );
  const pause = document.querySelector(".conversation_pause");
  let currentIndex = 0;
  let rotationTimeout;
  let isAnimating = false;
  let isPaused = false;

  function rotateMessages() {
    if (isAnimating) return;

    isAnimating = true;
    const firstVisible = messages[currentIndex];
    const firstHeight = getMessageHeight(firstVisible);

    gsap.to(messageContainer, {
      y: `-=${firstHeight}`,
      duration: 0.2,
      ease: "ease-in-out",
      onComplete: () => {
        currentIndex = (currentIndex + 1) % messages.length;
        isAnimating = false;

        if (currentIndex === 0) {
          gsap.set(messageContainer, { y: 0 });
        }

        if (currentIndex === messages.length - 1) {
          gsap.to(messageContainer, {
            opacity: 0,
            duration: 1,
            delay: 7,
            onComplete: () => {
              setTimeout(() => {
                gsap.set(messageContainer, { opacity: 1 });
                currentIndex = 0;
                gsap.set(messageContainer, { y: 0 });
                startRotation(initialDelay);
              }, 2000);
            },
          });
        } else {
          if (!isPaused) {
            startRotation(rotationDelay);
          }
        }
      },
    });
  }

  function startRotation(delay) {
    if (rotationTimeout) clearTimeout(rotationTimeout);
    if (!isPaused) {
      rotationTimeout = setTimeout(() => {
        rotateMessages();
      }, delay * 1000);
    }
  }

  track.addEventListener("mouseenter", () => {
    isPaused = true;
    pause.classList.add("active");
    if (rotationTimeout) clearTimeout(rotationTimeout);
  });

  track.addEventListener("mouseleave", () => {
    isPaused = false;
    pause.classList.remove("active");
    if (!isAnimating) {
      startRotation(initialDelay);
    }
  });

  startRotation(initialDelay);
}
