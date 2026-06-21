"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const modules = [
  {
    no: "01",
    title: "AIoT Foundations",
    text: "Understand how Artificial Intelligence transforms traditional IoT into intelligent connected systems that can reason, detect patterns, and support real-time decisions.",
    output: "AIoT concept map"
  },
  {
    no: "02",
    title: "IoT Architecture",
    text: "Study sensors, devices, gateways, protocols, cloud platforms, and the complete AI-ready architecture of modern IoT systems.",
    output: "Architecture blueprint"
  },
  {
    no: "03",
    title: "Virtual Sensor Lab",
    text: "Create virtual IoT devices and simulate temperature, vibration, energy, and machine-health sensor streams.",
    output: "Virtual sensor simulator"
  },
  {
    no: "04",
    title: "MQTT Communication",
    text: "Build publisher-subscriber data flows and learn how devices communicate in practical IoT environments.",
    output: "MQTT messaging pipeline"
  },
  {
    no: "05",
    title: "Cloud Data Layer",
    text: "Store and structure sensor data using MongoDB to support analytics, dashboards, and machine learning workflows.",
    output: "MongoDB IoT storage"
  },
  {
    no: "06",
    title: "Sensor Data Engineering",
    text: "Clean noisy data, handle missing values, normalize readings, and engineer useful features for AI models.",
    output: "AI-ready dataset"
  },
  {
    no: "07",
    title: "Machine Learning for AIoT",
    text: "Apply prediction, classification, anomaly detection, forecasting, and predictive maintenance methods to sensor data.",
    output: "ML model suite"
  },
  {
    no: "08",
    title: "Deep Learning for Sensing",
    text: "Explore CNNs, LSTMs, and autoencoders for image, video, and time-series AIoT use cases.",
    output: "Deep sensing lab"
  },
  {
    no: "09",
    title: "Edge AI & TinyML",
    text: "Understand efficient inference, hardware limits, optimization, and deploying intelligence closer to devices.",
    output: "Edge deployment plan"
  },
  {
    no: "10",
    title: "Capstone Project",
    text: "Build a smart monitoring system with a data pipeline, AI model, dashboard, alerts, and final project documentation.",
    output: "Portfolio-ready capstone"
  }
];

const copy = {
  en: {
    nav: ["Overview", "Curriculum", "Projects", "FAQ"],
    lang: "VN",
    eyebrow: "Premium AIoT learning experience",
    title: "AIoT for the next generation of intelligent systems.",
    subtitle:
      "A premium program for learners who want to combine IoT, sensor data, machine learning, Edge AI, and TinyML into real smart-system capability.",
    note:
      "This is not another scattered tutorial collection. It is a structured, design-conscious, practical learning experience built for serious AIoT understanding and project development.",
    cta1: "View Curriculum",
    cta2: "See Project Scope",
    panelTitle: "Program Overview",
    panelText:
      "The course moves from architecture and sensor communication to data engineering, machine learning, real-time AI inference, Edge AI, and a final capstone system.",
    highlights: [
      "IoT architecture and intelligent system design",
      "MQTT, MongoDB, dashboards, and cloud data flow",
      "Machine learning and deep learning for sensor data",
      "Predictive maintenance and anomaly detection",
      "Edge AI and TinyML deployment thinking"
    ],
    stats: [
      ["10", "core modules"],
      ["15+", "guided labs"],
      ["1", "capstone build"],
      ["100%", "portfolio focused"]
    ],
    studioTitle: "A premium learning studio, not a cluttered course page.",
    studioText:
      "The entire experience is built around clarity, practical outputs, and strong visual hierarchy. Every section is designed to communicate value quickly while still feeling premium and professional.",
    studioItems: [
      ["System Thinking", "Students learn how the complete AIoT stack works together instead of memorizing isolated tools."],
      ["Project Outputs", "Each technical stage produces visible results: notebooks, pipelines, dashboards, models, or design artifacts."],
      ["Industry Context", "The learning path connects AIoT concepts to industrial monitoring, intelligent infrastructure, energy, and smart devices."],
      ["Deployment Awareness", "Learners also understand how intelligence moves from cloud workflows toward Edge AI and TinyML."]
    ],
    curriculumTitle: "A structured path from connected devices to intelligent infrastructure.",
    curriculumText:
      "The modules are short, progressive, and outcome-driven. Each one adds a practical capability that leads toward the final smart monitoring system.",
    projectsTitle: "Project directions with real value.",
    projectsText:
      "The curriculum supports practical AIoT-style portfolio projects that demonstrate architecture thinking, data engineering, AI workflows, and deployment awareness.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection Console",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alerting System",
      "Edge AI Readiness Report"
    ],
    faqTitle: "Clear questions. Serious answers.",
    faq: [
      ["Is this beginner friendly?", "Yes. The path starts from AIoT and IoT foundations and gradually moves into machine learning, Edge AI, and TinyML."],
      ["Is it practical?", "Yes. The structure includes labs, sensor simulation, MQTT, MongoDB storage, AI workflows, dashboards, and a capstone project."],
      ["Who is it for?", "It is ideal for IoT learners, developers, AI practitioners exploring sensor data, and anyone interested in intelligent connected systems."],
      ["What makes it premium?", "Clear information architecture, refined design, strong project orientation, and content that feels structured instead of noisy."]
    ],
    finalTitle: "From connected devices to intelligent decisions.",
    finalText:
      "QuanVerse AIoT Mastery is designed for students, engineers, and builders who want a serious, premium, and practical pathway into intelligent connected systems."
  },
  vi: {
    nav: ["Tổng quan", "Lộ trình", "Dự án", "FAQ"],
    lang: "EN",
    eyebrow: "Premium AIoT learning experience",
    title: "AIoT cho thế hệ tiếp theo của các hệ thống thông minh.",
    subtitle:
      "Một chương trình premium dành cho người học muốn kết hợp IoT, sensor data, machine learning, Edge AI và TinyML thành năng lực smart-system thực tế.",
    note:
      "Đây không phải bộ tutorial rời rạc. Đây là một trải nghiệm học có cấu trúc, thực tế và được thiết kế chỉn chu cho việc hiểu và xây dựng AIoT.",
    cta1: "Xem lộ trình",
    cta2: "Xem phạm vi dự án",
    panelTitle: "Tổng quan chương trình",
    panelText:
      "Khóa học đi từ architecture và sensor communication đến data engineering, machine learning, real-time inference, Edge AI và final capstone system.",
    highlights: [
      "IoT architecture và intelligent system design",
      "MQTT, MongoDB, dashboard và cloud data flow",
      "Machine learning và deep learning cho sensor data",
      "Predictive maintenance và anomaly detection",
      "Edge AI và TinyML deployment thinking"
    ],
    stats: [
      ["10", "module chính"],
      ["15+", "lab hướng dẫn"],
      ["1", "capstone build"],
      ["100%", "hướng portfolio"]
    ],
    studioTitle: "Một learning studio premium, không phải trang khóa học lộn xộn.",
    studioText:
      "Toàn bộ trải nghiệm được xây quanh sự rõ ràng, output thực tế và visual hierarchy mạnh. Mỗi section đều được thiết kế để truyền tải giá trị nhanh nhưng vẫn premium và chuyên nghiệp.",
    studioItems: [
      ["System Thinking", "Người học hiểu toàn bộ AIoT stack hoạt động cùng nhau thay vì nhớ công cụ rời rạc."],
      ["Project Outputs", "Mỗi giai đoạn kỹ thuật tạo ra output nhìn thấy được: notebook, pipeline, dashboard, model hoặc design artifact."],
      ["Industry Context", "Lộ trình gắn AIoT với industrial monitoring, intelligent infrastructure, energy và smart devices."],
      ["Deployment Awareness", "Người học cũng hiểu cách intelligence dịch chuyển từ cloud workflow sang Edge AI và TinyML."]
    ],
    curriculumTitle: "Lộ trình có cấu trúc từ connected devices đến intelligent infrastructure.",
    curriculumText:
      "Các module ngắn, tuần tự và có outcome rõ ràng. Mỗi module bổ sung một capability thực tế hướng tới final smart monitoring system.",
    projectsTitle: "Hướng dự án có giá trị thực tế.",
    projectsText:
      "Lộ trình hỗ trợ các project AIoT thực tế để thể hiện architecture thinking, data engineering, AI workflow và deployment awareness.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection Console",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alerting System",
      "Edge AI Readiness Report"
    ],
    faqTitle: "Câu hỏi rõ ràng. Câu trả lời nghiêm túc.",
    faq: [
      ["Khóa học có phù hợp cho người mới không?", "Có. Lộ trình bắt đầu từ AIoT và IoT foundations rồi dần tiến tới machine learning, Edge AI và TinyML."],
      ["Có thực hành không?", "Có. Cấu trúc gồm lab, sensor simulation, MQTT, MongoDB storage, AI workflow, dashboard và capstone project."],
      ["Dành cho ai?", "Phù hợp cho người học IoT, developer, AI practitioner muốn khám phá sensor data và bất kỳ ai quan tâm đến intelligent connected systems."],
      ["Điều gì làm nó premium?", "Information architecture rõ ràng, thiết kế tinh chỉnh, định hướng project mạnh và nội dung có cấu trúc thay vì ồn ào."]
    ],
    finalTitle: "Từ connected devices đến intelligent decisions.",
    finalText:
      "QuanVerse AIoT Mastery được thiết kế cho students, engineers và builders muốn một lộ trình nghiêm túc, premium và thực tế về intelligent connected systems."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <main className="page">
      <div className="luxury-background" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>

      <header className="site-header">
        <div className="container nav-shell">
          <div className="brand-zone logo-image-zone">
            <a href="#top" className="brand brand-image" aria-label="QuanVerse - A Community by QuanSkill">
              <img src="/quanskill.jpeg" alt="QuanVerse - A Community by QuanSkill" />
            </a>
          </div>

          <nav className="nav-links">
            <a href="#overview">{t.nav[0]}</a>
            <a href="#curriculum">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#faq">{t.nav[3]}</a>
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")}>{t.lang}</button>
          </nav>
        </div>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <p className="hero-note">{t.note}</p>

          <div className="hero-actions">
            <a href="#curriculum" className="primary-button">{t.cta1}</a>
            <a href="#projects" className="secondary-button">{t.cta2}</a>
          </div>
        </div>

        <aside className="hero-panel" id="overview">
          <div className="panel-label">AIoT Dossier</div>
          <h2>{t.panelTitle}</h2>
          <p>{t.panelText}</p>

          <div className="panel-stats">
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <ul className="highlight-list">
            {t.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="signal-flow" aria-label="AIoT intelligence flow">
            <div>
              <span>Sense</span>
              <b>Sensor data</b>
            </div>
            <div>
              <span>Learn</span>
              <b>AI models</b>
            </div>
            <div>
              <span>Act</span>
              <b>Smart response</b>
            </div>
          </div>
        </aside>
      </section>

      <section className="section container studio-section">
        <div className="section-head">
          <span>Learning Studio</span>
          <h2>{t.studioTitle}</h2>
          <p>{t.studioText}</p>
        </div>

        <div className="studio-grid">
          {t.studioItems.map(([title, text], index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="curriculum">
        <div className="section-head wide">
          <span>Curriculum</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumText}</p>
        </div>

        <div className="module-list">
          {modules.map((item) => (
            <article className="module-row" key={item.no}>
              <div className="module-no">{item.no}</div>
              <div className="module-main">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="module-output">
                <span>Output</span>
                <b>{item.output}</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-head">
          <span>Projects</span>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsText}</p>
        </div>

        <div className="project-grid">
          {t.projects.map((project, index) => (
            <article key={project}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{project}</h3>
              <p>Designed for documentation, demonstration, technical storytelling, and strong portfolio presentation.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="faq">
        <div className="section-head">
          <span>FAQ</span>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faq-grid">
          {t.faq.map(([q, a]) => (
            <article key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-section container">
        <span>Final Position</span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </section>

      <footer className="container footer">
        <span>© 2026 QuanVerse AIoT Mastery</span>
        <span>AIoT • Edge AI • TinyML • Smart Infrastructure</span>
      </footer>
    </main>
  );
}
