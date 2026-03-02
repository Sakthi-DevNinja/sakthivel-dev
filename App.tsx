import React, { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { SocialMedia } from "./components/SocialMedia";
import OriginalPortfolio from "./OriginalPortfolio";
import { PERSON_NAME } from "./constants";

const PROFILE_IMAGE = "./owner/sakthi.webp";

const App: React.FC = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [showTransition, setShowTransition] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const confettiPlayed = useRef(false);

  /* =============================
     🔥 SET YOUR LAUNCH DATE HERE
     ============================= */

  function getLaunchDate() {
    // 👉 For testing:
    return new Date("2026-03-03T00:43:00");

    // 👉 For real launch:
    // return new Date("2026-03-04T18:00:00");
  }

  /* ============================= */

  function getTimeRemaining() {
    const difference = getLaunchDate().getTime() - new Date().getTime();
    if (difference <= 0) return null;

    const totalHours = Math.floor(difference / (1000 * 60 * 60));

    return {
      days: Math.floor(totalHours / 24),
      hours: totalHours % 24,
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const launchTime = getLaunchDate().getTime();
      const now = new Date().getTime();
      const difference = launchTime - now;

      if (difference <= 0 && !confettiPlayed.current) {
        confettiPlayed.current = true;

        // Start fade out
        setShowTransition(true);

        // 🎉 10 second premium confetti
        const duration = 8000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({
            particleCount: 4,
            spread: 60,
            startVelocity: 25,
            gravity: 0.8,
            origin: { x: Math.random(), y: 0 },
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };

        frame();

        // After 10 seconds → load portfolio + show modal
        setTimeout(() => {
          setIsLaunched(true);
          setShowWelcome(true);
        }, 2000);
      } else {
        setTimeLeft(getTimeRemaining());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {isLaunched ? (
        <>
          <OriginalPortfolio />

          {/* Welcome Modal */}
          {showWelcome && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
  
              <div className="
                  w-full max-w-4xl
                  bg-neutral-900 border border-white/10
                  p-8 sm:p-12 md:p-16
                  rounded-2xl md:rounded-3xl
                  text-center
                  animate-fadeIn
                ">

                <h2 className="
                    text-3xl sm:text-4xl md:text-5xl
                    font-bold mb-6 tracking-wide
                  ">
                  Welcome.
                </h2>

                <p className="
                    text-base sm:text-lg md:text-xl
                    text-neutral-400
                    leading-relaxed mb-4
                  ">
                  I’m really glad you’re here.
                </p>

                <p className="
                    text-base sm:text-lg md:text-xl
                    text-neutral-400
                    leading-relaxed mb-8
                  ">
                  Feel free to take your time, look around,
                  and explore at your own pace.
                </p>

                <button
                  onClick={() => setShowWelcome(false)}
                  className="
                    w-full sm:w-auto
                    px-8 py-3
                    bg-white text-black
                    rounded-full font-semibold
                    hover:scale-105 transition
                  "
                >
                  EXPLORE
                </button>

              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className={`relative min-h-screen flex flex-col bg-black text-white overflow-hidden transition-opacity duration-1000 ${
            showTransition ? "opacity-0" : "opacity-100"
          }`}
        >
          <main className="flex-grow flex items-center justify-center relative px-6">
            {/* Glow */}
            <div className="absolute w-[34rem] h-[34rem] bg-blue-800/20 blur-[140px] rounded-full"></div>

            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={PROFILE_IMAGE}
                alt="Sakthivel Portrait"
                className="max-h-[90vh] object-contain pointer-events-none select-none"
                style={{
                  maskImage: "linear-gradient(black 50%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center mt-[28rem]">
              <h2 className="text-blue-500 tracking-[0.4em] text-xs md:text-lg font-bold mb-4">
                FULL STACK WEB DEVELOPER
              </h2>

              <h1 className="text-5xl md:text-8xl font-bold tracking-widest uppercase mb-6">
                {PERSON_NAME}
              </h1>

              <p className="text-neutral-400 text-sm md:text-lg mb-10">
                Portfolio Launching Soon
              </p>

              {timeLeft ? (
                <div className="flex justify-center gap-6 text-center text-xl md:text-3xl font-bold tracking-widest">
                  {timeLeft.days > 0 && (
                    <div>
                      <p>{String(timeLeft.days).padStart(2, "0")}</p>
                      <span className="text-xs text-neutral-500">Days</span>
                    </div>
                  )}
                  <div>
                    <p>{String(timeLeft.hours).padStart(2, "0")}</p>
                    <span className="text-xs text-neutral-500">Hours</span>
                  </div>
                  <div>
                    <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
                    <span className="text-xs text-neutral-500">Minutes</span>
                  </div>
                  <div>
                    <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
                    <span className="text-xs text-neutral-500">Seconds</span>
                  </div>
                </div>
              ) : (
                <p className="text-green-500 text-xl font-semibold">
                Going Live...
                </p>
              )}

              <SocialMedia className="justify-center mt-10" />
            </div>
          </main>

          <footer className="py-10 text-center text-neutral-700 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Sakthivel S
          </footer>
        </div>
      )}
    </>
  );
};

export default App;