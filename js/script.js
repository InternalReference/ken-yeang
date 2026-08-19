document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // ---------- Presentation-style slide navigation ----------
  const getSlides = () => Array.from(document.querySelectorAll(".slide"));

  const currentSlideIndex = (slides) => {
    let idx = 0;
    let minDist = Infinity;
    slides.forEach((el, i) => {
      const dist = Math.abs(el.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        idx = i;
      }
    });
    return idx;
  };

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  let isAnimating = false;
  let safetyRelease = null;

  const animateScrollTo = (targetY, duration = 800) => {
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (Math.abs(distance) < 1) {
      isAnimating = false;
      return;
    }

    isAnimating = true;
    clearTimeout(safetyRelease);
    // Guards against requestAnimationFrame stalling (e.g. a backgrounded tab),
    // which would otherwise leave the scroll lock stuck on permanently.
    safetyRelease = setTimeout(() => {
      isAnimating = false;
    }, duration + 400);

    const startTime = performance.now();

    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(t));
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        isAnimating = false;
        clearTimeout(safetyRelease);
      }
    };

    requestAnimationFrame(step);
  };

  const goToSlide = (index, slides) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const target = slides[clamped].getBoundingClientRect().top + window.scrollY;
    animateScrollTo(target);
  };

  // The slide currently filling the viewport (works for tall, scrollable slides too).
  const slideInView = () => {
    const slides = getSlides();
    const mid = window.innerHeight / 2;
    for (const s of slides) {
      const r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) return s;
    }
    return slides[currentSlideIndex(slides)];
  };

  const EDGE = 2;

  document.addEventListener("keydown", (e) => {
    const direction = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }[e.key];
    if (!direction || isAnimating) return;
    e.preventDefault();
    const slides = getSlides();
    const cur = slideInView();
    const r = cur.getBoundingClientRect();
    const vh = window.innerHeight;
    // Tall slide: page through it before advancing to the next slide.
    if (direction > 0 && r.bottom > vh + EDGE) { window.scrollBy({ top: vh * 0.85, behavior: "smooth" }); return; }
    if (direction < 0 && r.top < -EDGE) { window.scrollBy({ top: -vh * 0.85, behavior: "smooth" }); return; }
    goToSlide(slides.indexOf(cur) + direction, slides);
  });

  document.addEventListener(
    "wheel",
    (e) => {
      if (isAnimating) { e.preventDefault(); return; }
      if (Math.abs(e.deltaY) < 10) return;
      const slides = getSlides();
      const cur = slideInView();
      const r = cur.getBoundingClientRect();
      const vh = window.innerHeight;
      // Tall slide: let the page scroll freely until its edge, then hand off to the next slide.
      if (e.deltaY > 0) {
        if (r.bottom > vh + EDGE) return;      // more of this slide is below
        e.preventDefault();
        goToSlide(slides.indexOf(cur) + 1, slides);
      } else {
        if (r.top < -EDGE) return;             // more of this slide is above
        e.preventDefault();
        goToSlide(slides.indexOf(cur) - 1, slides);
      }
    },
    { passive: false }
  );

  document.querySelectorAll(".scroll-cue").forEach((cue) => {
    cue.addEventListener("click", (e) => {
      e.preventDefault();
      if (isAnimating) return;
      const slides = getSlides();
      goToSlide(currentSlideIndex(slides) + 1, slides);
    });
  });

  // ---------- Side dot navigation (subtle section rail) ----------
  (function () {
    const slides = getSlides();
    if (slides.length < 2) return;
    const nav = document.createElement("nav");
    nav.className = "dotnav";
    nav.setAttribute("aria-label", "Section navigation");
    const labelFor = (slide) => {
      if (slide.dataset.nav) return slide.dataset.nav;
      if (slide.classList.contains("vindex") || slide.classList.contains("menu")) return "Contents";
      if (slide.classList.contains("cover")) return "Cover";
      if (slide.classList.contains("closing")) return "Summary";
      if (slide.classList.contains("chapter-open")) {
        const h1 = slide.querySelector("h1");
        return h1 ? h1.textContent.trim() : "";
      }
      const eb = slide.querySelector(".eyebrow");
      if (eb) {
        const parts = eb.textContent.trim().split("·");
        return (parts.length > 1 ? parts[1] : parts[0]).trim();
      }
      const h = slide.querySelector("h2, h1");
      return h ? h.textContent.trim() : "";
    };
    const dots = slides.map((slide, i) => {
      const item = document.createElement("div");
      item.className = "dn-item";
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dn-dot";
      const label = labelFor(slide);
      dot.setAttribute("aria-label", label || ("Go to section " + (i + 1)));
      dot.addEventListener("click", () => { if (!isAnimating) goToSlide(i, getSlides()); });
      item.appendChild(dot);
      if (label) {
        const span = document.createElement("span");
        span.className = "dn-label";
        span.textContent = label;
        item.appendChild(span);
      }
      nav.appendChild(item);
      return dot;
    });
    document.body.appendChild(nav);

    let ticking = false;
    const refresh = () => {
      const idx = currentSlideIndex(getSlides());
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { refresh(); ticking = false; });
    }, { passive: true });
    refresh();
  })();

  // ---------- Design option dot navigation ----------
  document.querySelectorAll(".option-dots").forEach((nav) => {
    const dots = Array.from(nav.querySelectorAll(".dot"));
    const optionSlides = Array.from(document.querySelectorAll(".option-slide.slide"));

    dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        if (isAnimating) return;
        const slides = getSlides();
        const idx = slides.indexOf(optionSlides[i]);
        if (idx !== -1) goToSlide(idx, slides);
      });
    });

    const updateActiveDot = () => {
      const slides = getSlides();
      const currentEl = slides[currentSlideIndex(slides)];
      const activeIdx = optionSlides.indexOf(currentEl);
      dots.forEach((dot, i) => dot.classList.toggle("active", i === activeIdx));
    };

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          updateActiveDot();
          ticking = false;
        });
      },
      { passive: true }
    );

    updateActiveDot();
  });

  // ---------- Compare slider (crossfade between staged images with magnetic snap) ----------
  document.querySelectorAll(".compare-slider").forEach((slider) => {
    const stack = slider.closest(".option-slide").querySelector(".compare-stack");
    const images = Array.from(stack.querySelectorAll(".compare-img"));
    const segments = images.length - 1;
    const MAX = Number(slider.max);
    const stepSize = MAX / segments;
    const snapZone = stepSize * 0.12;

    const render = (value) => {
      const t = (value / MAX) * segments;
      const idx = Math.min(Math.floor(t), segments - 1);
      const localT = t - idx;
      images.forEach((img) => {
        img.style.opacity = 0;
      });
      images[idx].style.opacity = String(1 - localT);
      images[idx + 1].style.opacity = String(localT);
    };

    const applyMagnetism = (value) => {
      const nearest = Math.round(value / stepSize) * stepSize;
      return Math.abs(value - nearest) < snapZone ? nearest : value;
    };

    const nearestCheckpoint = (value) => Math.round(value / stepSize) * stepSize;

    let settleFrame = null;

    const settleToNearest = () => {
      const start = Number(slider.value);
      const target = nearestCheckpoint(start);
      const distance = target - start;
      if (Math.abs(distance) < 0.5) {
        slider.value = String(target);
        render(target);
        return;
      }
      const duration = 260;
      const startTime = performance.now();
      cancelAnimationFrame(settleFrame);
      const step = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const value = start + distance * easeInOutCubic(t);
        slider.value = String(value);
        render(value);
        if (t < 1) {
          settleFrame = requestAnimationFrame(step);
        }
      };
      settleFrame = requestAnimationFrame(step);
    };

    slider.addEventListener("input", () => {
      const magnetized = applyMagnetism(Number(slider.value));
      if (magnetized !== Number(slider.value)) {
        slider.value = String(magnetized);
      }
      render(Number(slider.value));
    });

    // Guarantees the image never rests on a mid-blend: whenever the user
    // releases the slider (mouse/touch/keyboard), it settles on whichever
    // staged image it was closest to.
    slider.addEventListener("change", settleToNearest);

    render(Number(slider.value));
  });
});
