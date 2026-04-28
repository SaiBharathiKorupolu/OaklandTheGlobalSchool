import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BaGA4n3z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const logo = "/assets/oakland-logo-DAJxLqK_.jpeg";
const links = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#why", label: "Why Oakland" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" }
];
function GlassNav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `glass mx-auto max-w-6xl rounded-full transition-all duration-500 ${scrolled ? "shadow-elegant py-2" : "py-3"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pl-3 pr-2 sm:pl-5 sm:pr-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "Oakland The Global School logo",
                  width: 44,
                  height: 44,
                  className: "relative h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white/70"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-primary tracking-wide", children: "OAKLAND" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.22em] text-secondary font-semibold", children: "The Global School" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary rounded-full hover:bg-white/60 transition-all",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://oakland-admission-form.netlify.app/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-glow transition-transform hover:scale-105",
              style: { background: "var(--gradient-gold)" },
              children: [
                "Admission Form",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#enroll",
                className: "hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-glow transition-transform hover:scale-105",
                style: { background: "var(--gradient-gold)" },
                children: [
                  "Enroll Now",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((o) => !o),
                className: "lg:hidden h-10 w-10 grid place-items-center rounded-full bg-white/70 text-primary",
                "aria-label": "Toggle menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: open ? "✕" : "☰" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden px-4 pt-3 pb-4 mt-2 border-t border-white/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              onClick: () => setOpen(false),
              href: l.href,
              className: "block px-4 py-2.5 text-sm font-medium text-primary rounded-xl hover:bg-white/70",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://oakland-admission-form.netlify.app/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "block text-center mt-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary",
              style: { background: "var(--gradient-gold)" },
              children: "Admission Form"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#enroll",
              onClick: () => setOpen(false),
              className: "block text-center mt-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary",
              style: { background: "var(--gradient-gold)" },
              children: "Enroll Now"
            }
          ) })
        ] }) })
      ]
    }
  ) });
}
class EmailJSResponseStatus {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
}
const createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};
const store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};
const buildOptions = (options) => {
  if (!options)
    return {};
  if (typeof options === "string") {
    return {
      publicKey: options
    };
  }
  if (options.toString() === "[object Object]") {
    return options;
  }
  return {};
};
const init = (options, origin = "https://api.emailjs.com") => {
  if (!options)
    return;
  const opts = buildOptions(options);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};
const sendPost = async (url, data, headers = {}) => {
  const response = await fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = await response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
};
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};
const validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};
const isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};
const headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};
const validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};
const isBlockListDisabled = (options) => {
  return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options))
    return false;
  validateBlockListParams(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== "string")
    return false;
  return options.list.includes(value);
};
const blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};
const validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};
const getLeftTime = async (id, throttle, storage) => {
  const lastTime = Number(await storage.get(id) || 0);
  return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
  if (!options.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options.throttle, options.id);
  const id = options.id || defaultID;
  const leftTime = await getLeftTime(id, options.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  await storage.set(id, Date.now().toString());
  return false;
};
const limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};
const send = async (serviceID, templateID, templateParams, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};
const validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};
const findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
};
const emailjs = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};
const oakHero = "/assets/oak-hero-DRpIWrIl.jpg";
const classroom = "/assets/classroom-v7-ldtVL.jpg";
const play = "/assets/play-a_K3I5hu.jpg";
const waterPlay = "/assets/water-play-ClpxmQI-.jpg";
const programs = [{
  name: "Play Care",
  age: "1.5 – 3 yrs",
  icon: "🧸",
  desc: "A gentle home-away-from-home — sensory play, naps, songs and warm caregivers easing your little one into routine."
}, {
  name: "Nursery",
  age: "3 – 4 yrs",
  icon: "🎨",
  desc: "First friendships and free expression through art, rhymes and guided play that build language and confidence."
}, {
  name: "Jr. KG",
  age: "4 – 5 yrs",
  icon: "📚",
  desc: "Phonics, numbers and curiosity-led discovery — readiness for school through hands-on, theme-based learning."
}, {
  name: "Sr. KG",
  age: "5 – 6 yrs",
  icon: "✏️",
  desc: "Reading, writing and early math come alive with projects that sharpen focus, creativity and independent thinking."
}, {
  name: "Grade 1",
  age: "6 – 7 yrs",
  icon: "🌱",
  desc: "A confident leap into formal learning — structured English, Math and EVS paired with collaborative activities."
}, {
  name: "Grade 2",
  age: "7 – 8 yrs",
  icon: "🌟",
  desc: "Critical thinking, communication and leadership skills bloom through enquiry-based lessons and life-skill workshops."
}];
const reasons = [{
  title: "Conscious Learning",
  desc: "A mindful approach where children learn at their own pace through observation, exploration and gentle guidance.",
  icon: "🧠"
}, {
  title: "Safe Environment",
  desc: "CCTV monitoring, secure entry/exit, child-safe infrastructure and trained staff ensure complete peace of mind.",
  icon: "🛡️"
}, {
  title: "Trained Educators",
  desc: "Teachers carefully selected and trained in early childhood education and conscious teaching methods.",
  icon: "👩‍🏫"
}, {
  title: "Thoughtful Campus",
  desc: "Warm wood tones, indoor plants, natural light and child-friendly furniture in every corner.",
  icon: "🌿"
}, {
  title: "Joyful Routines",
  desc: "Structured yet flexible rhythms that balance learning, play, rest and social-emotional growth.",
  icon: "🎶"
}, {
  title: "Activity-Based Learning",
  desc: "Hands-on, Montessori-inspired curriculum that makes every lesson feel like discovery.",
  icon: "🎯"
}];
function Index() {
  const [successMessage, setSuccessMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    const form = e.target;
    const formData = new FormData(e.target);
    const data = {
      parent_name: formData.get("parentName"),
      phone: formData.get("phone"),
      parent_email: formData.get("parentEmail"),
      child_name: formData.get("childName"),
      program: formData.get("program"),
      message: formData.get("message")
    };
    try {
      await emailjs.send(
        "service_f9igvq9",
        // Replace with your EmailJS service ID
        "template_ih94jez",
        // Replace with your EmailJS template ID
        data,
        "LHgzMw1aFYzjcov0P"
        // Replace with your EmailJS public key
      );
      setSuccessMessage("Thank you! Your reservation request has been sent. Our admissions team will reach out shortly.");
      form.reset();
      setLoading(false);
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send email. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlassNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { id: "home", className: "relative min-h-[100svh] flex items-center justify-center pt-28 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: oakHero, alt: "Beautiful oak tree landscape at golden hour representing growth and nature at Oakland The Global School", className: "h-full w-full object-cover", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "radial-gradient(ellipse at center, oklch(0.22 0.06 260 / 0.25) 0%, oklch(0.22 0.06 260 / 0.7) 70%, oklch(0.22 0.06 260 / 0.85) 100%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "var(--gradient-hero)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-32 left-8 text-3xl animate-float opacity-70", "aria-hidden": true, children: "🍃" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-40 right-10 text-4xl animate-float opacity-60", style: {
        animationDelay: "1.5s"
      }, "aria-hidden": true, children: "🍂" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-32 left-16 text-3xl animate-float opacity-60", style: {
        animationDelay: "3s"
      }, "aria-hidden": true, children: "🌿" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full blur-3xl opacity-60", style: {
            background: "var(--gradient-gold)"
          }, "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-2 rounded-full ring-1 ring-gold/40 animate-[spin_30s_linear_infinite]", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Oakland The Global School — official crest and logo", width: 192, height: 192, className: "relative h-full w-full rounded-full object-cover ring-4 ring-white/80 shadow-elegant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-white/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse" }),
          "Admissions Open"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] leading-[1.05]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase", children: "Oakland" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-3 w-fit mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-white/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-lg sm:text-xl md:text-2xl mx-2", children: "The Global School" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-white/60" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg uppercase tracking-[0.35em] text-yellow-500 font-medium", children: "Nurturing young minds with care and excellence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed", children: [
          "A progressive learning space for children from",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-medium", children: [
            " ",
            "Day Care to Grade 2"
          ] }),
          " ",
          "— blending play-based discovery with a strong academic foundation in a safe, joyful and inspiring environment."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#enroll", className: "rounded-full px-8 py-4 text-base font-semibold text-primary shadow-elegant hover:scale-105 transition-transform", style: {
            background: "var(--gradient-gold)"
          }, children: "🎓 Enroll Now — Limited Seats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#programs", className: "glass rounded-full px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition", children: "Explore Programs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-3 max-w-md mx-auto", children: [{
          k: "1 : 10",
          v: "Teacher Ratio"
        }, {
          k: "100%",
          v: "Safe Campus"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl py-4 px-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl text-gradient-gold font-bold", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs uppercase tracking-wider text-white/75 mt-1", children: s.v })
        ] }, s.v)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programs", className: "relative py-24 px-6", "aria-labelledby": "programs-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3", children: "Programs Offered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "programs-heading", className: "text-4xl sm:text-5xl font-bold text-primary", children: "A path for every little learner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: "From first steps in Play Group to confident readers in Grade 2 — a curriculum that grows with your child." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", role: "list", children: programs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative bg-card rounded-3xl p-7 border border-border hover:border-secondary/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-elegant", role: "listitem", itemScope: true, itemType: "https://schema.org/EducationalOccupationalProgram", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "provider", content: "Oakland The Global School" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "educationalCredentialAwarded", content: `${p.name} Certificate` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "occupationalCategory", content: "Early Childhood Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "programType", content: "Preschool Program" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-5 left-7 h-12 w-12 rounded-2xl grid place-items-center text-2xl shadow-glow", style: {
          background: "var(--gradient-green)"
        }, "aria-hidden": true, children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-secondary tracking-wider", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-2xl font-bold text-primary", itemProp: "name", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", itemProp: "description", children: [
            "Ages: ",
            p.age
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-px bg-gradient-to-r from-secondary/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-foreground/70", children: p.desc })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "relative py-24 px-6 bg-muted/40", "aria-labelledby": "why-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/20 to-gold/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: classroom, alt: "Oakland The Global School classroom with teacher and happy preschool children engaged in learning activities", loading: "lazy", width: 1024, height: 1024, className: "relative rounded-[2rem] shadow-elegant w-full object-cover aspect-square" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-elegant hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-secondary", children: "A+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Parent rated" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3", children: "Why Oakland" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "why-heading", className: "text-4xl sm:text-5xl font-bold text-primary leading-tight", children: [
            "An ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-secondary", children: "elegant" }),
            " ",
            "beginning your child deserves"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every detail — from teacher training to classroom air quality — is shaped to make children feel seen, safe and curious." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-4", role: "list", children: reasons.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative glass rounded-2xl p-5 hover:bg-white/85 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300 cursor-default overflow-hidden", style: {
          animationDelay: `${i * 80}ms`
        }, role: "listitem", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500", style: {
            background: "var(--gradient-gold)"
          }, "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2 inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6", children: r.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary text-lg group-hover:text-secondary transition-colors", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 leading-relaxed", children: r.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-0 group-hover:w-full bg-gradient-to-r from-secondary to-gold transition-all duration-500" })
          ] })
        ] }, r.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "facilities", className: "relative py-24 px-6", "aria-labelledby": "facilities-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3", children: "Facilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "facilities-heading", className: "text-4xl sm:text-5xl font-bold text-primary", children: "Built for play, designed for growth" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-[2rem] overflow-hidden min-h-[340px] group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: play, alt: "Oakland The Global School sand pit area where children engage in sensory play and build fine motor skills", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "relative p-8 h-full flex flex-col justify-end text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2", children: "🪣" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold", children: "Sand Pit Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/85 max-w-md", children: "Sensory play that builds creativity, fine motor skills and friendships." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-[2rem] overflow-hidden min-h-[340px] group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: waterPlay, alt: "Oakland The Global School supervised water play zone for safe science exploration and fun", loading: "lazy", width: 1024, height: 768, className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "relative p-8 h-full flex flex-col justify-end text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2", children: "💦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold", children: "Water Play Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/90 max-w-md", children: "Safe, supervised splash play that introduces science through fun." })
          ] })
        ] }),
        [{
          t: "Smart A/C Classrooms",
          d: "Interactive learning, climate-controlled comfort.",
          e: "🖥️"
        }, {
          t: "Library Corner",
          d: "Picture books, story circles and reading nooks.",
          e: "📖"
        }, {
          t: "Music & Movement",
          d: "Rhythm, dance and confidence-building stage time.",
          e: "🎵"
        }, {
          t: "Activity & Art Studio",
          d: "Clay, craft and colour — where little imaginations take shape.",
          e: "🎨"
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-elegant transition md:col-span-1", itemScope: true, itemType: "https://schema.org/Place", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: `${f.t} at Oakland The Global School` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "description", content: f.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-3", children: f.e }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-primary", children: f.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: f.d })
        ] }, f.t))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden", "aria-labelledby": "contact-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: oakHero, alt: "", className: "h-full w-full object-cover opacity-30", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "enroll", className: "w-full max-w-5xl mx-auto glass rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-14 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3", children: "Limited Seats Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "contact-heading", className: "text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight", children: [
              "Begin your child's",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-secondary", children: "Oakland" }),
              " journey today."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Schedule a campus visit or speak with our admissions team. We'd love to meet your family." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "mt-8 space-y-4 not-italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-12 shrink-0 grid place-items-center rounded-2xl text-white text-xl", style: {
                background: "var(--gradient-gold)"
              }, "aria-hidden": true, children: "📞" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-1.5", children: "Call us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-xl font-medium text-primary tabular-nums break-words", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918143151503", className: "whitespace-nowrap hover:underline hover:text-primary transition", children: "+91 8143151503" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-secondary/50", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919849225344", className: "break-words hover:underline hover:text-primary transition", children: "+91 9849225344" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-12 grid place-items-center rounded-2xl text-white text-xl", style: {
                background: "var(--gradient-gold)"
              }, "aria-hidden": true, children: "📍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-wider text-muted-foreground", children: "Visit campus" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-primary", children: "HIG-74, B Zone, Near Community Hall, Sujatha Nagar, Visakhapatnam" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: sendEmail, className: "bg-card/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border shadow-elegant space-y-3 sm:space-y-4", "aria-labelledby": "form-heading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "form-heading", className: "font-display text-xl sm:text-2xl font-bold text-primary", children: "Request a callback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "parentName", className: "sr-only", children: "Parent's Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "parentName", required: true, name: "parentName", placeholder: "Parent's Name", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "sr-only", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", required: true, name: "phone", type: "tel", placeholder: "Phone Number", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "parentEmail", className: "sr-only", children: "Parent Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "parentEmail", name: "parentEmail", type: "email", placeholder: "Parent Email", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "childName", className: "sr-only", children: "Child's Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "childName", required: true, name: "childName", placeholder: "Child's Name", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "program", className: "sr-only", children: "Select Program" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "program", name: "program", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select Program" }),
              programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: p.name }, p.name))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "sr-only", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 3, placeholder: "Message (optional)", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-full py-3.5 text-sm font-semibold text-primary shadow-glow hover:scale-[1.02] transition-transform", type: "submit", disabled: loading, style: {
              background: "var(--gradient-gold)"
            }, children: loading ? "Submitting..." : "Reserve a Seat" }),
            successMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              marginTop: "12px",
              color: "#0a7a3d",
              textAlign: "center",
              fontWeight: "500"
            }, role: "status", "aria-live": "polite", children: successMessage })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Want to complete full admission registration?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://oakland-admission-form.netlify.app/", target: "_blank", rel: "noopener noreferrer", className: "font-medium text-secondary hover:underline", children: "Open Full Registration Form →" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-primary text-primary-foreground py-12 px-6", role: "contentinfo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Oakland The Global School logo", width: 44, height: 44, className: "h-11 w-11 rounded-full ring-2 ring-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: "OAKLAND" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-white/60", children: "The Global School" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/70", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Oakland The Global School. Nurturing young minds."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-1", children: "Visakhapatnam, Andhra Pradesh, India" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
