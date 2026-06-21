"use client";

import Image from "next/image";

import { useState } from "react";

type Lang = "en" | "vi";

const modulesByLang = {
  en: [
    {
      no: "01",
      title: "AIoT, Edge AI & Smart Systems",
      text: "Understand how Artificial Intelligence, Edge AI, on-device inference, and IoT transform connected devices into intelligent systems that can sense, analyze, predict, and respond in real time.",
      output: "AIoT + Edge AI opportunity map"
    },
    {
      no: "02",
      title: "Edge-Ready IoT Architecture",
      text: "Design sensors, gateways, edge nodes, cloud services, connectivity layers, and edge-to-cloud architecture for scalable AIoT products.",
      output: "Edge-ready AIoT architecture blueprint"
    },
    {
      no: "03",
      title: "Virtual Sensor & Edge Data Lab",
      text: "Create virtual IoT devices and simulate temperature, vibration, energy, machine-health, and operational sensor streams for edge analytics workflows.",
      output: "Virtual sensor + edge data simulator"
    },
    {
      no: "04",
      title: "MQTT, Streaming & Edge Gateways",
      text: "Build publisher-subscriber data flows and understand how MQTT, gateways, message brokers, and edge devices move live sensor intelligence.",
      output: "MQTT edge streaming pipeline"
    },
    {
      no: "05",
      title: "Cloud, Edge Storage & Data Layer",
      text: "Store and structure IoT readings using MongoDB and prepare clean data layers for dashboards, edge inference, cloud analytics, and AI workflows.",
      output: "MongoDB AIoT storage layer"
    },
    {
      no: "06",
      title: "Sensor Data Engineering for Edge AI",
      text: "Clean noisy sensor streams, handle missing values, normalize readings, create features, and prepare lightweight datasets for ML and Edge AI models.",
      output: "Model-ready Edge AI dataset"
    },
    {
      no: "07",
      title: "Machine Learning for AIoT",
      text: "Apply regression, classification, anomaly detection, forecasting, predictive maintenance, and intelligent alerting to real IoT-style sensor data.",
      output: "AIoT machine learning model suite"
    },
    {
      no: "08",
      title: "Deep Learning for Intelligent Sensing",
      text: "Explore CNNs, LSTMs, autoencoders, sensor fusion, image/video IoT, time-series intelligence, and fault detection for smart systems.",
      output: "Deep sensing and anomaly lab"
    },
    {
      no: "09",
      title: "Edge AI, TinyML & Model Optimization",
      text: "Learn on-device AI, low-latency inference, quantization, pruning, model compression, TinyML, microcontroller deployment, and edge hardware constraints.",
      output: "Edge AI + TinyML deployment plan"
    },
    {
      no: "10",
      title: "AIoT Capstone: Edge-to-Cloud System",
      text: "Build a smart monitoring system with sensor pipeline, AI inference, dashboard, alerts, edge deployment thinking, and portfolio-ready documentation.",
      output: "Portfolio-ready Edge AIoT capstone"
    }
  ],
  vi: [
    {
      no: "01",
      title: "AIoT, Edge AI & Smart Systems",
      text: "Hiểu cách Artificial Intelligence, Edge AI, on-device inference và IoT biến thiết bị kết nối thành hệ thống thông minh có khả năng sense, analyze, predict và respond theo thời gian thực.",
      output: "AIoT + Edge AI opportunity map"
    },
    {
      no: "02",
      title: "Edge-Ready IoT Architecture",
      text: "Thiết kế sensors, gateways, edge nodes, cloud services, connectivity layers và edge-to-cloud architecture cho các sản phẩm AIoT có khả năng mở rộng.",
      output: "Edge-ready AIoT architecture blueprint"
    },
    {
      no: "03",
      title: "Virtual Sensor & Edge Data Lab",
      text: "Tạo virtual IoT devices và mô phỏng temperature, vibration, energy, machine-health và operational sensor streams cho edge analytics workflows.",
      output: "Virtual sensor + edge data simulator"
    },
    {
      no: "04",
      title: "MQTT, Streaming & Edge Gateways",
      text: "Xây publisher-subscriber data flows và hiểu cách MQTT, gateways, message brokers và edge devices truyền live sensor intelligence.",
      output: "MQTT edge streaming pipeline"
    },
    {
      no: "05",
      title: "Cloud, Edge Storage & Data Layer",
      text: "Lưu trữ và cấu trúc IoT readings bằng MongoDB, chuẩn bị data layer sạch cho dashboards, edge inference, cloud analytics và AI workflows.",
      output: "MongoDB AIoT storage layer"
    },
    {
      no: "06",
      title: "Sensor Data Engineering for Edge AI",
      text: "Làm sạch sensor streams nhiễu, xử lý missing values, normalize readings, tạo features và chuẩn bị lightweight datasets cho ML và Edge AI models.",
      output: "Model-ready Edge AI dataset"
    },
    {
      no: "07",
      title: "Machine Learning for AIoT",
      text: "Áp dụng regression, classification, anomaly detection, forecasting, predictive maintenance và intelligent alerting cho dữ liệu sensor kiểu IoT thực tế.",
      output: "AIoT machine learning model suite"
    },
    {
      no: "08",
      title: "Deep Learning for Intelligent Sensing",
      text: "Khám phá CNNs, LSTMs, autoencoders, sensor fusion, image/video IoT, time-series intelligence và fault detection cho smart systems.",
      output: "Deep sensing and anomaly lab"
    },
    {
      no: "09",
      title: "Edge AI, TinyML & Model Optimization",
      text: "Học on-device AI, low-latency inference, quantization, pruning, model compression, TinyML, microcontroller deployment và giới hạn edge hardware.",
      output: "Edge AI + TinyML deployment plan"
    },
    {
      no: "10",
      title: "AIoT Capstone: Edge-to-Cloud System",
      text: "Xây smart monitoring system với sensor pipeline, AI inference, dashboard, alerts, edge deployment thinking và portfolio-ready documentation.",
      output: "Portfolio-ready Edge AIoT capstone"
    }
  ]
};

const copy = {
  en: {
    nav: ["Overview", "Curriculum", "Projects", "FAQ"],
    lang: "VN",
    eyebrow: "Premium AIoT + Edge AI learning experience",
    title: "Build Edge AI-powered intelligent systems with AIoT.",
    subtitle:
      "A premium AIoT and Edge AI program for learners who want to build sensor intelligence, on-device inference, TinyML workflows, edge-to-cloud pipelines, and real smart-system capability.",
    note:
      "This is not another scattered tutorial collection. It is a market-ready learning experience for Edge AI, AIoT product thinking, smart monitoring, predictive maintenance, anomaly detection, and intelligent infrastructure.",
    cta1: "View Curriculum",
    cta2: "See Project Scope",
    panelTitle: "Program Overview",
    panelText:
      "The course moves from IoT architecture and sensor communication to edge-to-cloud data engineering, machine learning, real-time AI inference, Edge AI deployment, TinyML readiness, and a final capstone system.",
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
    studioTitle: "A premium Edge AI learning studio, not a cluttered course page.",
    studioText:
      "The entire experience is built around clarity, practical outputs, and strong visual hierarchy. Every section is designed to communicate value quickly while still feeling premium and professional.",
    studioItems: [
      ["System Thinking", "Students learn how the complete AIoT stack works together instead of memorizing isolated tools."],
      ["Project Outputs", "Each technical stage produces visible results: notebooks, pipelines, dashboards, models, or design artifacts."],
      ["Industry Context", "The learning path connects AIoT concepts to industrial monitoring, intelligent infrastructure, energy, and smart devices."],
      ["Deployment Awareness", "Learners also understand how intelligence moves from cloud workflows toward Edge AI and TinyML."]
    ],
    curriculumTitle: "A structured path from connected devices to Edge AI-powered infrastructure.",
    curriculumText:
      "The modules are short, progressive, and outcome-driven. Each one adds a practical capability that leads toward the final smart monitoring system.",
    projectsTitle: "Edge AI project directions with real market value.",
    projectsText:
      "The curriculum supports practical AIoT and Edge AI portfolio projects that demonstrate architecture thinking, sensor data engineering, AI inference, TinyML awareness, intelligent alerting, and deployment readiness.",
    projectCards: [
      {
        title: "Edge AI Sensor Health Monitor",
        text: "Monitor live sensor data, detect device degradation, and design an edge-ready health intelligence workflow."
      },
      {
        title: "Predictive Maintenance Engine",
        text: "Use machine learning, anomaly detection, and forecasting to identify equipment risk before failure."
      },
      {
        title: "Industrial Edge Anomaly Console",
        text: "Build an intelligent alerting console for vibration, energy, temperature, and machine-health anomalies."
      },
      {
        title: "Smart Energy Forecasting Dashboard",
        text: "Create an energy analytics dashboard using time-series forecasting and edge-to-cloud data flow."
      },
      {
        title: "TinyML Smart Alerting System",
        text: "Design lightweight model logic for low-latency alerts on constrained devices and microcontroller-ready environments."
      },
      {
        title: "Edge AI Deployment Readiness Report",
        text: "Evaluate latency, privacy, bandwidth, model size, hardware limits, quantization, and deployment tradeoffs."
      }
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
    eyebrow: "Premium AIoT + Edge AI learning experience",
    title: "Xây hệ thống thông minh dùng Edge AI và AIoT.",
    subtitle:
      "Một chương trình premium về AIoT và Edge AI dành cho người học muốn xây sensor intelligence, on-device inference, TinyML workflows, edge-to-cloud pipelines và smart-system capability thực tế.",
    note:
      "Đây không phải bộ tutorial rời rạc. Đây là learning experience có tính marketing và thực tế cho Edge AI, AIoT product thinking, smart monitoring, predictive maintenance, anomaly detection và intelligent infrastructure.",
    cta1: "Xem lộ trình",
    cta2: "Xem phạm vi dự án",
    panelTitle: "Tổng quan chương trình",
    panelText:
      "Khóa học đi từ IoT architecture và sensor communication đến edge-to-cloud data engineering, machine learning, real-time AI inference, Edge AI deployment, TinyML readiness và final capstone system.",
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
    studioTitle: "Một Edge AI learning studio premium, không phải trang khóa học lộn xộn.",
    studioText:
      "Toàn bộ trải nghiệm được xây quanh sự rõ ràng, output thực tế và visual hierarchy mạnh. Mỗi section đều được thiết kế để truyền tải giá trị nhanh nhưng vẫn premium và chuyên nghiệp.",
    studioItems: [
      ["System Thinking", "Người học hiểu toàn bộ AIoT stack hoạt động cùng nhau thay vì nhớ công cụ rời rạc."],
      ["Project Outputs", "Mỗi giai đoạn kỹ thuật tạo ra output nhìn thấy được: notebook, pipeline, dashboard, model hoặc design artifact."],
      ["Industry Context", "Lộ trình gắn AIoT với industrial monitoring, intelligent infrastructure, energy và smart devices."],
      ["Deployment Awareness", "Người học cũng hiểu cách intelligence dịch chuyển từ cloud workflow sang Edge AI và TinyML."]
    ],
    curriculumTitle: "Lộ trình từ connected devices đến Edge AI-powered infrastructure.",
    curriculumText:
      "Các module ngắn, tuần tự và có outcome rõ ràng. Mỗi module bổ sung một capability thực tế hướng tới final smart monitoring system.",
    projectsTitle: "Hướng dự án Edge AI có giá trị thị trường thực tế.",
    projectsText:
      "Lộ trình hỗ trợ các project AIoT và Edge AI thực tế để thể hiện architecture thinking, sensor data engineering, AI inference, TinyML awareness, intelligent alerting và deployment readiness.",
    projectCards: [
      {
        title: "Edge AI Sensor Health Monitor",
        text: "Theo dõi live sensor data, phát hiện device degradation và thiết kế edge-ready health intelligence workflow."
      },
      {
        title: "Predictive Maintenance Engine",
        text: "Dùng machine learning, anomaly detection và forecasting để nhận diện rủi ro thiết bị trước khi lỗi xảy ra."
      },
      {
        title: "Industrial Edge Anomaly Console",
        text: "Xây intelligent alerting console cho vibration, energy, temperature và machine-health anomalies."
      },
      {
        title: "Smart Energy Forecasting Dashboard",
        text: "Tạo energy analytics dashboard bằng time-series forecasting và edge-to-cloud data flow."
      },
      {
        title: "TinyML Smart Alerting System",
        text: "Thiết kế lightweight model logic cho low-latency alerts trên constrained devices và microcontroller-ready environments."
      },
      {
        title: "Edge AI Deployment Readiness Report",
        text: "Đánh giá latency, privacy, bandwidth, model size, hardware limits, quantization và deployment tradeoffs."
      }
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
          <a href="#top" className="uploaded-logo-lockup" aria-label="QuanVerse - A Community by QuanSkill">
            <img src="/quan-header.png" alt="QuanVerse - A Community by QuanSkill" />
          </a>

          <nav className="nav-links">
            <a href="#overview">{t.nav[0]}</a>
            <a href="#curriculum">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#faq">{t.nav[3]}</a>
            <button
              className="lang-toggle-final"
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              aria-label="Toggle language"
            >
              <img
                className="lang-flag-img"
                src={lang === "en" ? "/flag-vn.svg" : "/flag-en.svg"}
                alt=""
                aria-hidden="true"
              />
              <span>{t.lang}</span>
            </button>
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
          {modulesByLang[lang].map((item) => (
            <article className="module-row" key={item.no}>
              <div className="module-no">{item.no}</div>
              <div className="module-main">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="module-output">
                <span>{lang === "en" ? "Output" : "Kết quả"}</span>
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
          {t.projectCards.map((project, index) => (
            <article key={project.title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
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
