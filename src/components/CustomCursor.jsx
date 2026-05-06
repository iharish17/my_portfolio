import React, { useEffect, useRef, useState } from "react";

const LERP = 0.4;
const TRAIL_GAP_MS = 16;
const MAX_TRAIL_POINTS = 14;
const IDLE_DELAY_MS = 3000;

const SMILEY_MATRIX = [
  [0, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 0],
];

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [trailPoints, setTrailPoints] = useState([]);

  const rafRef = useRef(null);
  const clickTimerRef = useRef(null);
  const idleTimerRef = useRef(null);
  const lastTrailTimeRef = useRef(0);

  const dotRef = useRef(null);
  const auraRef = useRef(null);
  const ringRef = useRef(null);
  const isVisibleRef = useRef(false);

  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  const resetIdleTimer = () => {
    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = window.setTimeout(() => {
      setIsIdle(true);
    }, IDLE_DELAY_MS);
  };

  useEffect(() => {
    const canUseCursor =
      typeof window !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canUseCursor);

    if (!canUseCursor) {
      return undefined;
    }

    resetIdleTimer();

    document.body.classList.add("custom-cursor-enabled");

    const onMouseMove = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setIsIdle(false);
      resetIdleTimer();

      if (!isVisibleRef.current) {
        currentPosRef.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
        isVisibleRef.current = true;
      }

      const interactiveTarget = target?.closest(
        "a, button, [role='button'], .cursor-hover"
      );
      setIsHovering(Boolean(interactiveTarget));

      const formTarget = target?.closest(
        "input, textarea, select, [contenteditable='true'], [contenteditable='']"
      );

      if (formTarget) {
        setIsVisible(false);
        isVisibleRef.current = false;
      } else if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);
      if (clickTimerRef.current) {
        window.clearTimeout(clickTimerRef.current);
      }
      clickTimerRef.current = window.setTimeout(() => {
        setIsClicking(false);
      }, 240);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      isVisibleRef.current = true;
      setIsIdle(false);
      resetIdleTimer();
    };

    const animate = () => {
      const current = currentPosRef.current;
      const target = targetPosRef.current;

      current.x += (target.x - current.x) * LERP;
      current.y += (target.y - current.y) * LERP;
      const now = Date.now();
      const shouldEmitTrail = now - lastTrailTimeRef.current >= TRAIL_GAP_MS;

      setTrailPoints((prev) => {
        const aged = prev
          .map((point) => ({
            ...point,
            age: (point.age ?? 0) + 1,
          }))
          .filter((point) => (point.age ?? 0) < 36);

        if (shouldEmitTrail) {
          lastTrailTimeRef.current = now;
          aged.push({
            id: `${now}-${Math.random()}`,
            x: current.x,
            y: current.y,
            age: 0,
          });
        }

        return aged.slice(-MAX_TRAIL_POINTS);
      });

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      if (clickTimerRef.current) {
        window.clearTimeout(clickTimerRef.current);
      }

      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {isIdle ? (
        <div
          className={`tech-cursor-smiley ${isVisible ? "is-visible" : ""}`}
          style={{
            left: currentPosRef.current.x,
            top: currentPosRef.current.y,
          }}
        >
          {SMILEY_MATRIX.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <span
                key={`${rowIndex}-${cellIndex}`}
                className={`tech-cursor-smiley-pixel ${cell ? "is-on" : ""}`}
              />
            ))
          )}
        </div>
      ) : (
        <>
          <div
            ref={auraRef}
            className={`tech-cursor-aura ${isHovering ? "is-hover" : ""} ${
              isVisible ? "is-visible" : ""
            } ${isClicking ? "is-click" : ""}`}
          />
          <div
            ref={ringRef}
            className={`tech-cursor-ring ${isHovering ? "is-hover" : ""} ${
              isVisible ? "is-visible" : ""
            } ${isClicking ? "is-click" : ""}`}
          >
            <span className="tech-cursor-cross tech-cursor-cross-x" />
            <span className="tech-cursor-cross tech-cursor-cross-y" />
          </div>
          <div
            ref={dotRef}
            className={`tech-cursor-dot ${isHovering ? "is-hover" : ""} ${
              isVisible ? "is-visible" : ""
            } ${isClicking ? "is-click" : ""}`}
          />

          {trailPoints.map((particle, index) => (
            <span
              key={particle.id}
              className="tech-cursor-particle"
              style={{
                left: particle.x,
                top: particle.y,
                opacity: Math.max(0.12, 1 - index / MAX_TRAIL_POINTS),
                transform: `translate(-50%, -50%) scale(${Math.max(
                  0.4,
                  1 - index * 0.05
                )})`,
              }}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CustomCursor;
