"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const modules = [
  {
    no: "01",
    title: "AIoT Foundations",
    text: "Understand how AI transforms IoT from connected monitoring into intelligent decision-making infrastructure.",
    output: "AIoT system map"
  },
  {
    no: "02",
    title: "IoT Architecture",
    text: "Design sensors, devices, gateways, protocols, edge layers, and cloud platforms for AI-ready IoT systems.",
    output: "Architecture blueprint"
  },
  {
    no: "03",
    title: "Virtual Sensor Lab",
    text: "Generate realistic temperature, humidity, vibration, energy, and machine-health data using virtual IoT devices.",
    output: "Sensor simulator"
  },
  {
    no: "04",
    title: "MQTT Data Flow",
    text: "Build publisher-subscriber pipelines and learn how live device messages move through connected systems.",
    output: "MQTT stream pipeline"
  },
  {
    no: "05",
    title: "Cloud Data Layer",
    text: "Store and structure IoT readings in MongoDB for analytics, dashboards, and AI model workflows.",
    output: "MongoDB data store"
  },
  {
    no: "06",
    title: "Sensor Data Engineering",
    text: "Clean noisy streams, handle missing values, normalize readings, and engineer features for AI models.",
    output: "Model-ready dataset"
  },
  {
    no: "07",
    title: "Machine Learning for AIoT",
    text: "Apply regression, classification, anomaly detection, forecasting, and predictive maintenance to IoT data.",
    output: "ML model suite"
  },
  {
    no: "08",
    title: "Deep Learning for Sensing",
    text: "Explore CNNs for image/video IoT, LSTMs for time-series signals, and autoencoders for anomaly detection.",
    output: "Deep sensing lab"
  },
  {
    no: "09",
    title: "Edge AI & TinyML",
    text: "Understand low-latency inference, optimization, constrained hardware, and TinyML deployment readiness.",
    output: "Edge AI plan"
  },
  {
    no: "10",
    title: "Capstone System",
    text: "Build a smart monitoring system with data pipeline, model inference, dashboard, alerts, and documentation.",
    output: "Portfolio capstone"
  }
];

const copy = {
  en: {
    nav: ["Studio", "System", "Curriculum", "Projects"],
    lang: "VN",
    kicker: "AIoT Professional Studio",
    heroTitle: "Build smart systems that understand the physical world.",
    heroSub:
      "A premium AIoT program for learning IoT architecture, sensor data engineering, machine learning, Edge AI, TinyML, and real-time intelligent infrastructure.",
    heroNote:
      "Instead of random IoT tutorials, this program teaches the full intelligence loop: sense, stream, engineer, learn, deploy, and act.",
    primary: "Explore Curriculum",
    secondary: "View Projects",
    stackTitle: "AIoT Intelligence Stack",
    stackSub: "A complete course path from device signal to real-world decision.",
    stack: [
      ["Sense", "Sensors, devices, signals"],
      ["Stream", "MQTT, gateways, cloud"],
      ["Engineer", "Clean, normalize, feature"],
      ["Learn", "ML, DL, anomaly detection"],
      ["Deploy", "Edge AI, TinyML, alerts"]
    ],
    stats: [
      ["10", "core modules"],
      ["15+", "guided builds"],
      ["1", "capstone system"],
      ["0", "random clutter"]
    ],
    methodTitle: "A premium studio approach to AIoT learning.",
    methodText:
      "The learning experience is designed like a professional build studio. Every section creates something visible: an architecture brief, a pipeline, a dataset, a model, a dashboard, or a deployment plan.",
    method: [
      ["Architecture-first", "Learners understand the complete system before writing isolated code."],
      ["Data-first intelligence", "Raw sensor data becomes clean, structured, model-ready information."],
      ["Practical AI workflows", "Machine learning is connected to real IoT problems like forecasting and anomaly detection."],
      ["Deployment thinking", "Edge AI, TinyML, latency, privacy, and hardware constraints are treated seriously."]
    ],
    curriculumTitle: "From connected devices to intelligent infrastructure.",
    curriculumText:
      "Each module is short, focused, and outcome-driven. The full path builds toward a final AI-powered smart monitoring system.",
    projectsTitle: "Portfolio projects with real product value.",
    projectsText:
      "The projects are selected to demonstrate AIoT capability clearly: data pipelines, intelligent monitoring, prediction, alerting, dashboards, and deployment thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    finalTitle: "Not just connected devices. Intelligent systems.",
    finalText:
      "A clean, professional AIoT learning experience for students, engineers, researchers, and builders of smart infrastructure."
  },
  vi: {
    nav: ["Studio", "Hệ thống", "Lộ trình", "Dự án"],
    lang: "EN",
    kicker: "AIoT Professional Studio",
    heroTitle: "Xây hệ thống thông minh hiểu được thế giới vật lý.",
    heroSub:
      "Chương trình AIoT premium giúp học IoT architecture, sensor data engineering, machine learning, Edge AI, TinyML và intelligent infrastructure thời gian thực.",
    heroNote:
      "Thay vì tutorial IoT rời rạc, chương trình dạy toàn bộ intelligence loop: sense, stream, engineer, learn, deploy và act.",
    primary: "Xem lộ trình",
    secondary: "Xem dự án",
    stackTitle: "AIoT Intelligence Stack",
    stackSub: "Lộ trình hoàn chỉnh từ tín hiệu thiết bị đến quyết định thực tế.",
    stack: [
      ["Sense", "Sensor, device, signal"],
      ["Stream", "MQTT, gateway, cloud"],
      ["Engineer", "Clean, normalize, feature"],
      ["Learn", "ML, DL, anomaly detection"],
      ["Deploy", "Edge AI, TinyML, alert"]
    ],
    stats: [
      ["10", "module chính"],
      ["15+", "bài build hướng dẫn"],
      ["1", "capstone system"],
      ["0", "giao diện rối"]
    ],
    methodTitle: "Cách học AIoT như một professional build studio.",
    methodText:
      "Trải nghiệm học được thiết kế như một studio xây sản phẩm. Mỗi phần tạo ra output rõ ràng: architecture brief, pipeline, dataset, model, dashboard hoặc deployment plan.",
    method: [
      ["Architecture-first", "Người học hiểu toàn bộ hệ thống trước khi viết code rời rạc."],
      ["Data-first intelligence", "Sensor data thô được biến thành dữ liệu sạch, có cấu trúc, sẵn sàng cho model."],
      ["Practical AI workflows", "Machine learning được gắn với bài toán IoT thật như forecasting và anomaly detection."],
      ["Deployment thinking", "Edge AI, TinyML, latency, privacy và giới hạn hardware được xử lý nghiêm túc."]
    ],
    curriculumTitle: "Từ thiết bị kết nối đến hạ tầng thông minh.",
    curriculumText:
      "Mỗi module ngắn, tập trung và có outcome rõ ràng. Toàn bộ lộ trình hướng đến final AI-powered smart monitoring system.",
    projectsTitle: "Portfolio project có giá trị như sản phẩm thật.",
    projectsText:
      "Các dự án chứng minh năng lực AIoT rõ ràng: data pipeline, intelligent monitoring, prediction, alerting, dashboard và deployment thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    finalTitle: "Không chỉ là thiết bị kết nối. Đây là hệ thống thông minh.",
    finalText:
      "Một trải nghiệm học AIoT sạch, chuyên nghiệp cho students, engineers, researchers và builders của smart infrastructure."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <main className="page">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <img src="/quanverse-aiot-clean.svg" alt="QuanVerse AIoT Mastery" />
          </a>

          <nav className="nav-links">
            <a href="#studio">{t.nav[0]}</a>
            <a href="#system">{t.nav[1]}</a>
            <a href="#curriculum">{t.nav[2]}</a>
            <a href="#projects">{t.nav[3]}</a>
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")}>{t.lang}</button>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.kicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSub}</p>
          <p className="hero-note">{t.heroNote}</p>

          <div className="hero-actions">
            <a href="#curriculum" className="primary-button">{t.primary}</a>
            <a href="#projects" className="secondary-button">{t.secondary}</a>
          </div>

          <div className="hero-stats">
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="stack-card" id="system">
          <div className="stack-card-top">
            <span>System blueprint</span>
            <b>AIOT OS</b>
          </div>

          <h2>{t.stackTitle}</h2>
          <p>{t.stackSub}</p>

          <div className="stack-flow">
            {t.stack.map(([title, text], index) => (
              <article key={title}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section studio" id="studio">
        <div className="section-head">
          <span>Studio Method</span>
          <h2>{t.methodTitle}</h2>
          <p>{t.methodText}</p>
        </div>

        <div className="method-grid">
          {t.method.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section curriculum" id="curriculum">
        <div className="section-head wide">
          <span>Curriculum</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumText}</p>
        </div>

        <div className="module-list">
          {modules.map((item) => (
            <article className="module-row" key={item.no}>
              <div className="module-no">{item.no}</div>
              <div>
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

      <section className="section projects" id="projects">
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
              <p>Built for GitHub documentation, demo explanation, technical storytelling, and portfolio presentation.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-section">
        <span>Final Position</span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </section>

      <footer>
        <span>© 2026 QuanVerse AIoT Mastery</span>
        <span>AIoT • Edge AI • TinyML • Smart Systems</span>
      </footer>
    </main>
  );
}
