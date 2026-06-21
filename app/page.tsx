"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const curriculum = [
  {
    no: "01",
    title: "AIoT Mindset",
    text: "Understand how Artificial Intelligence transforms traditional IoT from passive monitoring into intelligent connected systems.",
    result: "AIoT opportunity map"
  },
  {
    no: "02",
    title: "IoT Foundations",
    text: "Study sensors, devices, gateways, networking layers, cloud platforms, and AI-ready IoT architecture.",
    result: "AI-ready IoT blueprint"
  },
  {
    no: "03",
    title: "Virtual Device & MQTT",
    text: "Build a virtual IoT device and create MQTT publisher-subscriber communication for live data movement.",
    result: "Working MQTT lab pipeline"
  },
  {
    no: "04",
    title: "Cloud Data Layer",
    text: "Store sensor data in MongoDB and prepare a reliable data layer for dashboards, analytics, and AI workflows.",
    result: "MongoDB IoT storage pipeline"
  },
  {
    no: "05",
    title: "Sensor Data Engineering",
    text: "Clean, normalize, transform, and structure noisy sensor streams into model-ready intelligence assets.",
    result: "Feature-engineered AI dataset"
  },
  {
    no: "06",
    title: "Machine Learning for IoT",
    text: "Apply regression, classification, anomaly detection, forecasting, and predictive maintenance techniques.",
    result: "ML model suite for IoT data"
  },
  {
    no: "07",
    title: "Real-Time Inference",
    text: "Connect trained models to live data pipelines and produce predictions, alerts, and operational signals.",
    result: "Live inference workflow"
  },
  {
    no: "08",
    title: "Deep Learning for AIoT",
    text: "Use CNNs for image/video IoT, LSTMs for time-series sensing, and autoencoders for anomalies.",
    result: "Deep sensing lab"
  },
  {
    no: "09",
    title: "Edge AI & TinyML",
    text: "Understand edge deployment, inference tradeoffs, optimization, and TinyML thinking for constrained devices.",
    result: "Edge deployment strategy"
  },
  {
    no: "10",
    title: "Dashboard & Capstone",
    text: "Build a portfolio-ready smart monitoring system with dashboards, alerts, reports, and project documentation.",
    result: "Final AIoT capstone system"
  }
];

const projects = [
  "AIoT Sensor Health Monitor",
  "Predictive Maintenance Engine",
  "Industrial Anomaly Detection System",
  "Smart Energy Forecasting Dashboard",
  "AI-Based Smart Alert Console",
  "Edge AI Deployment Readiness Report"
];

const faqEn = [
  ["Is this course practical or theoretical?", "It is practical-first. Learners build labs, pipelines, models, dashboards, and a capstone system."],
  ["Do I need prior AI knowledge?", "No. AI, machine learning, Edge AI, and TinyML are introduced step by step in the context of IoT."],
  ["What makes this course premium?", "The structure is outcome-driven: every section produces an artifact, not just theory notes."],
  ["Can this support project and research work?", "Yes. It supports smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance, and intelligent infrastructure."],
];

const faqVi = [
  ["Khóa học này thực hành hay lý thuyết?", "Khóa học thiên về thực hành. Người học sẽ build lab, pipeline, model, dashboard và capstone system."],
  ["Có cần biết AI từ trước không?", "Không. AI, machine learning, Edge AI và TinyML được giới thiệu từng bước trong bối cảnh IoT."],
  ["Điều gì làm khóa học này premium?", "Cấu trúc tập trung vào outcome: mỗi phần đều tạo ra artifact thực tế chứ không chỉ là ghi chú lý thuyết."],
  ["Khóa học có hỗ trợ project và research không?", "Có. Phù hợp cho smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance và intelligent infrastructure."],
];

const copy = {
  en: {
    nav: ["Method", "Curriculum", "Projects", "Mentor"],
    lang: "VN",
    kicker: "Premium AIoT cohort",
    title: "AIoT for Intelligent Infrastructure.",
    lead:
      "A professional program for learners who want to build AI-powered IoT systems, understand sensor intelligence, and graduate with portfolio-ready smart-system projects.",
    body:
      "Learn how connected devices become intelligent — from sensors, MQTT, cloud storage, and data engineering to machine learning, deep learning, Edge AI, TinyML, dashboards, and real-time decision systems.",
    cta1: "Explore Curriculum",
    cta2: "View Projects",
    dossierLabel: "Program dossier",
    dossierBadge: "Flagship",
    dossierTitle: "AIoT Builder Track",
    stats: [
      ["10", "guided modules"],
      ["15+", "practical builds"],
      ["1", "capstone system"],
      ["0", "random clutter"]
    ],
    bullets: [
      "AI-ready IoT architecture and system design",
      "Python, MQTT, MongoDB, and sensor data pipelines",
      "Predictive maintenance, anomaly detection, and smart alerting",
      "Machine learning and deep learning for real IoT-style data",
      "Edge AI and TinyML thinking for constrained devices"
    ],
    methodKicker: "Method",
    methodTitle: "A clean and disciplined learning system.",
    methodText:
      "The course follows the real lifecycle of an AIoT system: sense physical signals, move data reliably, engineer it for AI, learn from behavior, and close the loop with dashboards, alerts, and intelligent actions.",
    method: [
      ["Sense", "Understand sensors, devices, gateways, networking, and physical data generation."],
      ["Stream", "Build MQTT communication, cloud storage, ingestion workflows, and live data movement."],
      ["Learn", "Apply machine learning and deep learning for prediction, classification, anomaly detection, and maintenance."],
      ["Act", "Create dashboards, smart alerts, and edge-oriented deployment strategies."]
    ],
    outcomesKicker: "Outcomes",
    outcomesTitle: "Students finish with visible proof.",
    outcomesText:
      "Every core section produces an output: architecture briefs, labs, notebooks, models, dashboards, deployment plans, and a final capstone system.",
    deliverables: [
      "AIoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT communication pipeline",
      "MongoDB sensor data store",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML plan",
      "Final capstone system"
    ],
    curriculumKicker: "Curriculum",
    curriculumTitle: "From connected devices to intelligent systems.",
    curriculumText:
      "Each module has a technical focus, a practical outcome, and a clear role in the AIoT stack.",
    projectsKicker: "Projects",
    projectsTitle: "Portfolio projects that feel real.",
    projectsText:
      "These projects are designed to demonstrate system thinking, AI workflow design, data engineering ability, and practical AIoT capability.",
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "This program teaches AIoT as a complete capability: not only IoT, not only AI, but the disciplined integration of connected devices, data engineering, machine learning, and edge intelligence.",
    mentorQuote:
      "Do not just connect devices. Make them observable. Make them intelligent. Then make that intelligence useful, explainable, and deployable.",
    faqKicker: "FAQ",
    faqTitle: "Clear answers before joining.",
    finalKicker: "Final position",
    finalTitle: "Not an IoT tutorial. An AIoT capability program.",
    finalText:
      "Designed for learners who want to move beyond scattered tutorials and build intelligent connected systems with professional clarity."
  },
  vi: {
    nav: ["Phương pháp", "Lộ trình", "Dự án", "Mentor"],
    lang: "EN",
    kicker: "Premium AIoT cohort",
    title: "AIoT cho hạ tầng thông minh.",
    lead:
      "Chương trình chuyên nghiệp cho người học muốn xây dựng hệ thống IoT dùng AI, hiểu sensor intelligence, và hoàn thành smart-system project có thể đưa vào portfolio.",
    body:
      "Học cách thiết bị kết nối trở nên thông minh — từ sensor, MQTT, cloud storage và data engineering đến machine learning, deep learning, Edge AI, TinyML, dashboard và real-time decision system.",
    cta1: "Xem lộ trình",
    cta2: "Xem dự án",
    dossierLabel: "Program dossier",
    dossierBadge: "Flagship",
    dossierTitle: "AIoT Builder Track",
    stats: [
      ["10", "module hướng dẫn"],
      ["15+", "bài build thực hành"],
      ["1", "capstone system"],
      ["0", "giao diện rối"]
    ],
    bullets: [
      "AI-ready IoT architecture và system design",
      "Python, MQTT, MongoDB và sensor data pipeline",
      "Predictive maintenance, anomaly detection và smart alerting",
      "Machine learning và deep learning cho dữ liệu IoT thực tế",
      "Edge AI và TinyML cho thiết bị tài nguyên thấp"
    ],
    methodKicker: "Phương pháp",
    methodTitle: "Một hệ thống học tập sạch và có cấu trúc.",
    methodText:
      "Khóa học đi theo vòng đời thật của hệ thống AIoT: cảm nhận tín hiệu vật lý, truyền dữ liệu ổn định, engineering dữ liệu cho AI, học từ hành vi, và đóng vòng lặp bằng dashboard, alert và intelligent action.",
    method: [
      ["Sense", "Hiểu sensor, device, gateway, networking và quá trình tạo dữ liệu vật lý."],
      ["Stream", "Xây MQTT communication, cloud storage, ingestion workflow và live data movement."],
      ["Learn", "Áp dụng machine learning và deep learning cho prediction, classification, anomaly detection và maintenance."],
      ["Act", "Tạo dashboard, smart alert và chiến lược triển khai hướng Edge AI."]
    ],
    outcomesKicker: "Kết quả",
    outcomesTitle: "Học viên hoàn thành với bằng chứng rõ ràng.",
    outcomesText:
      "Mỗi phần trọng tâm đều tạo ra output: architecture brief, lab, notebook, model, dashboard, deployment plan và capstone system.",
    deliverables: [
      "AIoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT communication pipeline",
      "MongoDB sensor data store",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML plan",
      "Final capstone system"
    ],
    curriculumKicker: "Lộ trình",
    curriculumTitle: "Từ thiết bị kết nối đến hệ thống thông minh.",
    curriculumText:
      "Mỗi module có focus kỹ thuật, practical outcome và vai trò rõ ràng trong AIoT stack.",
    projectsKicker: "Dự án",
    projectsTitle: "Portfolio project nhìn như năng lực thật.",
    projectsText:
      "Các project được thiết kế để thể hiện system thinking, AI workflow design, data engineering và practical AIoT capability.",
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "Chương trình dạy AIoT như một capability hoàn chỉnh: không chỉ IoT, không chỉ AI, mà là sự tích hợp có kỷ luật giữa connected devices, data engineering, machine learning và edge intelligence.",
    mentorQuote:
      "Đừng chỉ kết nối thiết bị. Hãy làm chúng observable, intelligent, useful, explainable và deployable.",
    faqKicker: "FAQ",
    faqTitle: "Câu trả lời rõ ràng trước khi tham gia.",
    finalKicker: "Final position",
    finalTitle: "Không phải IoT tutorial. Đây là AIoT capability program.",
    finalText:
      "Dành cho người học muốn vượt qua tutorial rời rạc và xây hệ thống kết nối thông minh với tư duy chuyên nghiệp."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const faq = lang === "en" ? faqEn : faqVi;

  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <img src="/quanverse-brand.svg" alt="QuanVerse A Community by QuanSkill" />
          </a>

          <div className="nav-links">
            <a href="#method">{t.nav[0]}</a>
            <a href="#curriculum">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#mentor">{t.nav[3]}</a>
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")}>{t.lang}</button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p className="hero-lead">{t.lead}</p>
          <p className="hero-body">{t.body}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#curriculum">{t.cta1}</a>
            <a className="secondary-button" href="#projects">{t.cta2}</a>
          </div>
        </div>

        <aside className="dossier-card">
          <div className="dossier-top">
            <span>{t.dossierLabel}</span>
            <b>{t.dossierBadge}</b>
          </div>

          <h2>{t.dossierTitle}</h2>

          <div className="dossier-stats">
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <ul className="dossier-list">
            {t.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section" id="method">
        <div className="section-head">
          <span>{t.methodKicker}</span>
          <h2>{t.methodTitle}</h2>
          <p>{t.methodText}</p>
        </div>

        <div className="clean-grid four">
          {t.method.map(([title, text], index) => (
            <article className="card" key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t.outcomesKicker}</span>
          <h2>{t.outcomesTitle}</h2>
          <p>{t.outcomesText}</p>
        </div>

        <div className="deliverables">
          {t.deliverables.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section" id="curriculum">
        <div className="section-head wide">
          <span>{t.curriculumKicker}</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumText}</p>
        </div>

        <div className="timeline">
          {curriculum.map((item) => (
            <article className="timeline-item" key={item.no}>
              <div className="timeline-no">{item.no}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="timeline-result">
                  <span>Outcome</span>
                  <b>{item.result}</b>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <span>{t.projectsKicker}</span>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsText}</p>
        </div>

        <div className="clean-grid three">
          {projects.map((project, index) => (
            <article className="card" key={project}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{project}</h3>
              <p>Designed for clear documentation, demo explanation, portfolio presentation, and technical storytelling.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="mentor">
        <div className="mentor-card">
          <div>
            <span>{t.mentorKicker}</span>
            <h2>{t.mentorTitle}</h2>
            <p>{t.mentorText}</p>
          </div>
          <blockquote>{t.mentorQuote}</blockquote>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t.faqKicker}</span>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faq-list">
          {faq.map(([q, a]) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-section">
        <span>{t.finalKicker}</span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </section>

      <footer>
        <span>© 2026 QuanVerse AIoT Mastery</span>
        <span>Clean design. Real capability. Serious AIoT learning.</span>
      </footer>
    </main>
  );
}
