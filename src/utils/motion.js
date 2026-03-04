export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = (delay = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export const hoverLift = {
  rest: { y: 0, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  hover: { y: -4, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
};