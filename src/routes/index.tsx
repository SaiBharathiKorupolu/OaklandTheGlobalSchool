import { createFileRoute } from "@tanstack/react-router";
import { GlassNav } from "@/components/GlassNav";
import emailjs from "@emailjs/browser";
import oakHero from "@/assets/oak-hero.jpg";
import classroom from "@/assets/classroom.jpg";
import play from "@/assets/play.jpg";
import waterPlay from "@/assets/water-play.jpg";
import logo from "@/assets/oakland-logo.jpeg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Oakland The Global School: Premier preschool & daycare in SujathaNagar,Visakhapatnam. Play Group to Grade 2 with Montessori-inspired learning, safe campus, trained educators. Admissions open for 2026-27.",
      },
      {
        name: "keywords",
        content:
          "preschool SujathaNagar Visakhapatnam, daycare SujathaNagar Visakhapatnam, montessori school, early childhood education, play group, nursery school, kindergarten, grade 1, grade 2, best preschool sujatha nagar,visakhapatnam",
      },
      {
        property: "og:title",
        content:
          "Oakland The Global School | Premier Preschool & Daycare in SujathaNagar,Visakhapatnam",
      },
      {
        property: "og:description",
        content:
          "Nurturing young minds for a global future. Montessori-inspired learning, safe campus, trained educators. Admissions open for Play Group to Grade 2.",
      },
      {
        property: "og:image",
        content: "https://oakland.theglobalschool.workers.dev/oak-hero.jpg",
      },
      {
        name: "twitter:title",
        content:
          "Oakland The Global School | Premier Preschool & Daycare in Visakhapatnam",
      },
      {
        name: "twitter:description",
        content:
          "Nurturing young minds for a global future. Montessori-inspired learning, safe campus, trained educators. Admissions open for 2026-27.",
      },
    ],
  }),
});

const programs = [
  {
    name: "Play Care",
    age: "1.5 – 3 yrs",
    icon: "🧸",
    desc: "A gentle home-away-from-home — sensory play, naps, songs and warm caregivers easing your little one into routine.",
  },
  {
    name: "Nursery",
    age: "3 – 4 yrs",
    icon: "🎨",
    desc: "First friendships and free expression through art, rhymes and guided play that build language and confidence.",
  },
  {
    name: "Jr. KG",
    age: "4 – 5 yrs",
    icon: "📚",
    desc: "Phonics, numbers and curiosity-led discovery — readiness for school through hands-on, theme-based learning.",
  },
  {
    name: "Sr. KG",
    age: "5 – 6 yrs",
    icon: "✏️",
    desc: "Reading, writing and early math come alive with projects that sharpen focus, creativity and independent thinking.",
  },
  {
    name: "Grade 1",
    age: "6 – 7 yrs",
    icon: "🌱",
    desc: "A confident leap into formal learning — structured English, Math and EVS paired with collaborative activities.",
  },
  {
    name: "Grade 2",
    age: "7 – 8 yrs",
    icon: "🌟",
    desc: "Critical thinking, communication and leadership skills bloom through enquiry-based lessons and life-skill workshops.",
  },
];

const reasons = [
  {
    title: "Conscious Learning",
    desc: "A mindful approach where children learn at their own pace through observation, exploration and gentle guidance.",
    icon: "🧠",
  },
  {
    title: "Safe Environment",
    desc: "CCTV monitoring, secure entry/exit, child-safe infrastructure and trained staff ensure complete peace of mind.",
    icon: "🛡️",
  },
  {
    title: "Trained Educators",
    desc: "Teachers carefully selected and trained in early childhood education and conscious teaching methods.",
    icon: "👩‍🏫",
  },
  {
    title: "Thoughtful Campus",
    desc: "Warm wood tones, indoor plants, natural light and child-friendly furniture in every corner.",
    icon: "🌿",
  },
  {
    title: "Joyful Routines",
    desc: "Structured yet flexible rhythms that balance learning, play, rest and social-emotional growth.",
    icon: "🎶",
  },
  {
    title: "Activity-Based Learning",
    desc: "Hands-on, Montessori-inspired curriculum that makes every lesson feel like discovery.",
    icon: "🎯",
  },
];

function Index() {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    const form = e.target;
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      parent_name: formData.get("parentName"),
      phone: formData.get("phone"),
      parent_email: formData.get("parentEmail"),
      child_name: formData.get("childName"),
      program: formData.get("program"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        "service_f9igvq9", // Replace with your EmailJS service ID
        "template_ih94jez", // Replace with your EmailJS template ID
        data,
        "LHgzMw1aFYzjcov0P", // Replace with your EmailJS public key
      );
      setSuccessMessage(
        "Thank you! Your reservation request has been sent. Our admissions team will reach out shortly.",
      );
      form.reset();
      setLoading(false);
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send email. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <GlassNav />

      {/* HERO */}
      <header
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={oakHero}
            alt="Beautiful oak tree landscape at golden hour representing growth and nature at Oakland The Global School"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Subtle radial vignette so the foreground logo pops */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.22 0.06 260 / 0.25) 0%, oklch(0.22 0.06 260 / 0.7) 70%, oklch(0.22 0.06 260 / 0.85) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>

        {/* floating leaves */}
        <span
          className="absolute top-32 left-8 text-3xl animate-float opacity-70"
          aria-hidden
        >
          🍃
        </span>
        <span
          className="absolute top-40 right-10 text-4xl animate-float opacity-60"
          style={{ animationDelay: "1.5s" }}
          aria-hidden
        >
          🍂
        </span>
        <span
          className="absolute bottom-32 left-16 text-3xl animate-float opacity-60"
          style={{ animationDelay: "3s" }}
          aria-hidden
        >
          🌿
        </span>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Crisp, elegant logo */}
          <div className="relative mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48">
            <span
              className="absolute inset-0 rounded-full blur-3xl opacity-60"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden
            />
            <span
              className="absolute -inset-2 rounded-full ring-1 ring-gold/40 animate-[spin_30s_linear_infinite]"
              aria-hidden
            />
            <img
              src={logo}
              alt="Oakland The Global School — official crest and logo"
              width={192}
              height={192}
              className="relative h-full w-full rounded-full object-cover ring-4 ring-white/80 shadow-elegant"
            />
          </div>

          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Open
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] leading-[1.05]">
            <span className="uppercase">Oakland</span>
            <div className="flex items-center mt-3 w-fit mx-auto">
              <span className="h-px w-16 bg-white/60"></span>
              <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl mx-2">
                The Global School
              </span>
              <span className="h-px w-16 bg-white/60"></span>
            </div>
          </h1>
          <p className="mt-6 text-base sm:text-lg uppercase tracking-[0.35em] text-yellow-500 font-medium">
            Nurturing young minds with care and excellence.
          </p>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
            A progressive learning space for children from
            <span className="text-white font-medium">
              {" "}
              Day Care to Grade 2
            </span>{" "}
            — blending play-based discovery with a strong academic foundation in
            a safe, joyful and inspiring environment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enroll"
              className="rounded-full px-8 py-4 text-base font-semibold text-primary shadow-elegant hover:scale-105 transition-transform"
              style={{ background: "var(--gradient-gold)" }}
            >
              🎓 Enroll Now — Limited Seats
            </a>
            <a
              href="#programs"
              className="glass rounded-full px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition"
            >
              Explore Programs
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 max-w-md mx-auto">
            {[
              { k: "1 : 10", v: "Teacher Ratio" },
              { k: "100%", v: "Safe Campus" },
            ].map((s) => (
              <div key={s.v} className="glass-dark rounded-2xl py-4 px-3">
                <div className="font-display text-2xl sm:text-3xl text-gradient-gold font-bold">
                  {s.k}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/75 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="relative py-24 px-6"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Programs Offered
            </p>
            <h2
              id="programs-heading"
              className="text-4xl sm:text-5xl font-bold text-primary"
            >
              A path for every little learner
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From first steps in Play Group to confident readers in Grade 2 — a
              curriculum that grows with your child.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {programs.map((p, i) => (
              <article
                key={p.name}
                className="group relative bg-card rounded-3xl p-7 border border-border hover:border-secondary/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-elegant"
                role="listitem"
                itemScope
                itemType="https://schema.org/EducationalOccupationalProgram"
              >
                <meta itemProp="provider" content="Oakland The Global School" />
                <meta
                  itemProp="educationalCredentialAwarded"
                  content={`${p.name} Certificate`}
                />
                <meta
                  itemProp="occupationalCategory"
                  content="Early Childhood Education"
                />
                <meta itemProp="programType" content="Preschool Program" />
                <div
                  className="absolute -top-5 left-7 h-12 w-12 rounded-2xl grid place-items-center text-2xl shadow-glow"
                  style={{ background: "var(--gradient-green)" }}
                  aria-hidden
                >
                  {p.icon}
                </div>
                <div className="pt-5">
                  <span className="text-xs font-semibold text-secondary tracking-wider">
                    0{i + 1}
                  </span>
                  <h3
                    className="mt-1 text-2xl font-bold text-primary"
                    itemProp="name"
                  >
                    {p.name}
                  </h3>
                  <p
                    className="mt-2 text-sm text-muted-foreground"
                    itemProp="description"
                  >
                    Ages: {p.age}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-secondary/40 to-transparent" />
                  <p className="mt-4 text-sm text-foreground/70">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OAKLAND */}
      <section
        id="why"
        className="relative py-24 px-6 bg-muted/40"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <figure className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/20 to-gold/20 blur-2xl" />
            <img
              src={classroom}
              alt="Oakland The Global School classroom with teacher and happy preschool children engaged in learning activities"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-square"
            />
            <figcaption className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-elegant hidden sm:block">
              <div className="text-3xl font-display font-bold text-secondary">
                A+
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Parent rated
              </div>
            </figcaption>
          </figure>

          <div>
            <header>
              <p className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                Why Oakland
              </p>
              <h2
                id="why-heading"
                className="text-4xl sm:text-5xl font-bold text-primary leading-tight"
              >
                An <span className="italic text-secondary">elegant</span>{" "}
                beginning your child deserves
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every detail — from teacher training to classroom air quality —
                is shaped to make children feel seen, safe and curious.
              </p>
            </header>
            <div className="mt-8 grid sm:grid-cols-2 gap-4" role="list">
              {reasons.map((r, i) => (
                <article
                  key={r.title}
                  className="group relative glass rounded-2xl p-5 hover:bg-white/85 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300 cursor-default overflow-hidden"
                  style={{ animationDelay: `${i * 80}ms` }}
                  role="listitem"
                >
                  <span
                    className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: "var(--gradient-gold)" }}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="text-4xl mb-2 inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                      {r.icon}
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg group-hover:text-secondary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {r.desc}
                    </p>
                    <div className="mt-3 h-px w-0 group-hover:w-full bg-gradient-to-r from-secondary to-gold transition-all duration-500" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section
        id="facilities"
        className="relative py-24 px-6"
        aria-labelledby="facilities-heading"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Facilities
            </p>
            <h2
              id="facilities-heading"
              className="text-4xl sm:text-5xl font-bold text-primary"
            >
              Built for play, designed for growth
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <figure className="relative rounded-[2rem] overflow-hidden min-h-[340px] group">
              <img
                src={play}
                alt="Oakland The Global School sand pit area where children engage in sensory play and build fine motor skills"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <figcaption className="relative p-8 h-full flex flex-col justify-end text-white">
                <span className="text-3xl mb-2">🪣</span>
                <h3 className="font-display text-3xl font-bold">
                  Sand Pit Area
                </h3>
                <p className="mt-2 text-white/85 max-w-md">
                  Sensory play that builds creativity, fine motor skills and
                  friendships.
                </p>
              </figcaption>
            </figure>
            <figure className="relative rounded-[2rem] overflow-hidden min-h-[340px] group">
              <img
                src={waterPlay}
                alt="Oakland The Global School supervised water play zone for safe science exploration and fun"
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              <figcaption className="relative p-8 h-full flex flex-col justify-end text-white">
                <span className="text-3xl mb-2">💦</span>
                <h3 className="font-display text-3xl font-bold">
                  Water Play Zone
                </h3>
                <p className="mt-2 text-white/90 max-w-md">
                  Safe, supervised splash play that introduces science through
                  fun.
                </p>
              </figcaption>
            </figure>
            {[
              {
                t: "Smart A/C Classrooms",
                d: "Interactive learning, climate-controlled comfort.",
                e: "🖥️",
              },
              {
                t: "Library Corner",
                d: "Picture books, story circles and reading nooks.",
                e: "📖",
              },
              {
                t: "Music & Movement",
                d: "Rhythm, dance and confidence-building stage time.",
                e: "🎵",
              },
              {
                t: "Activity & Art Studio",
                d: "Clay, craft and colour — where little imaginations take shape.",
                e: "🎨",
              },
            ].map((f) => (
              <article
                key={f.t}
                className="bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-elegant transition md:col-span-1"
                itemScope
                itemType="https://schema.org/Place"
              >
                <meta
                  itemProp="name"
                  content={`${f.t} at Oakland The Global School`}
                />
                <meta itemProp="description" content={f.d} />
                <div className="text-2xl mb-3">{f.e}</div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {f.t}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / ENROLL */}
      <section
        id="contact"
        className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={oakHero}
            alt=""
            className="h-full w-full object-cover opacity-30"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div
          id="enroll"
          className="w-full max-w-5xl mx-auto glass rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-14 shadow-elegant"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div>
              <header>
                <p className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                  Limited Seats Available
                </p>
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight"
                >
                  Begin your child's{" "}
                  <span className="italic text-secondary">Oakland</span> journey
                  today.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Schedule a campus visit or speak with our admissions team.
                  We'd love to meet your family.
                </p>
              </header>

              <address className="mt-8 space-y-4 not-italic">
                <div className="flex items-start gap-4">
                  <span
                    className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl text-white text-xl"
                    style={{ background: "var(--gradient-gold)" }}
                    aria-hidden
                  >
                    📞
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Call us
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-xl font-medium text-primary tabular-nums break-words">
                      <a
                        href="tel:+918143151503"
                        className="whitespace-nowrap hover:underline hover:text-primary transition"
                      >
                        +91 8143151503
                      </a>
                      <span className="hidden sm:inline text-secondary/50">
                        ·
                      </span>
                      <a
                        href="tel:+919849225344"
                        className="break-words hover:underline hover:text-primary transition"
                      >
                        +91 9849225344
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="h-12 w-12 grid place-items-center rounded-2xl text-white text-xl"
                    style={{ background: "var(--gradient-gold)" }}
                    aria-hidden
                  >
                    📍
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Visit campus
                    </span>
                    <span className="block font-medium text-primary">
                      HIG-74, B Zone, Near Community Hall, Sujatha Nagar, Visakhapatnam
                    </span>
                  </span>
                </div>
              </address>
            </div>

            <form
              onSubmit={sendEmail}
              className="bg-card/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border shadow-elegant space-y-3 sm:space-y-4"
              aria-labelledby="form-heading"
            >
              <h3
                id="form-heading"
                className="font-display text-xl sm:text-2xl font-bold text-primary"
              >
                Request a callback
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="parentName" className="sr-only">
                    Parent's Name
                  </label>
                  <input
                    id="parentName"
                    required
                    name="parentName"
                    placeholder="Parent's Name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parentEmail" className="sr-only">
                  Parent Email
                </label>
                <input
                  id="parentEmail"
                  name="parentEmail"
                  type="email"
                  placeholder="Parent Email"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="childName" className="sr-only">
                  Child's Name
                </label>
                <input
                  id="childName"
                  required
                  name="childName"
                  placeholder="Child's Name"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="program" className="sr-only">
                  Select Program
                </label>
                <select
                  id="program"
                  name="program"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Select Program</option>
                  {programs.map((p) => (
                    <option key={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Message (optional)"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="col-12">
                <button
                  className="w-full rounded-full py-3.5 text-sm font-semibold text-primary shadow-glow hover:scale-[1.02] transition-transform"
                  type="submit"
                  disabled={loading}
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {loading ? "Submitting..." : "Reserve a Seat"}
                </button>

                {successMessage && (
                  <p
                    style={{
                      marginTop: "12px",
                      color: "#0a7a3d",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                    role="status"
                    aria-live="polite"
                  >
                    {successMessage}
                  </p>
                )}
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Want to complete full admission registration?
                </p>

                <a
                  href="https://oakland-admission-form.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-secondary hover:underline"
                >
                  Open Full Registration Form →
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="bg-primary text-primary-foreground py-12 px-6"
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Oakland The Global School logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full ring-2 ring-white/20"
            />
            <div>
              <div className="font-display text-lg font-bold">OAKLAND</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                The Global School
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Oakland The Global School. Nurturing
              young minds.
            </p>
            <p className="text-xs text-white/50 mt-1">
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
