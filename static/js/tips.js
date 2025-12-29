
// SECTION 2

  /* MASTER TIMELINE – TRIGGERS ONLY WHEN SECTION 2 IS VISIBLE */
  const section2TL = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });

  /* HERO BADGE */
  section2TL.from(".section2 .badge", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  /* HERO HEADING */
  section2TL.from(".section2 h1", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.3");

  /* HERO DESCRIPTION */
  section2TL.from(".section2 p.fs-5", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  }, "-=0.4");

  /* STEP CARDS (STAGGERED) */
  section2TL.from(".section2 .row.g-4 > div", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.3");

  /* WIDE TRUST CARD */
  section2TL.from(".section2 .border-start", {
    x: -40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  }, "-=0.5");

  /* FINAL INSIGHT CARD */
  section2TL.from(".section2 .text-white", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4");

  /* FOOTNOTE */
  section2TL.from(".section2 .small.text-secondary", {
    opacity: 0,
    duration: 0.6
  }, "-=0.3");

//   ------------- SECTION 3

  gsap.registerPlugin(ScrollTrigger);

  const financeHubTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".container-fluid[style*='eef4ff']",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });

  /* HEADER */
  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] h2",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }
  );

  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] p.text-muted",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    },
    "-=0.4"
  );

  /* DID YOU KNOW STRIP */
  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] .alert",
    {
      scale: 0.95,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    },
    "-=0.3"
  );

  /* FINANCIAL JOURNEY */
  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] h5",
    {
      y: 20,
      opacity: 0,
      duration: 0.6
    },
    "-=0.3"
  );

  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] .progress",
    {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.9,
      ease: "power3.out"
    }
  );

  /* FILTER BUTTONS */
  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] .btn-group button",
    {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    },
    "-=0.4"
  );

  /* SCROLLABLE CARDS */
  financeHubTL.from(
    ".container-fluid[style*='eef4ff'] .card",
    {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    },
    "-=0.2"
  );

