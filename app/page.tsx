"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const weeks = [
  {
    no: "01",
    title: "AIoT Mindset",
    body: "Understand how Artificial Intelligence changes IoT from passive monitoring into intelligent decision systems.",
    result: "AIoT opportunity map"
  },
  {
    no: "02",
    title: "IoT Architecture",
    body: "Study sensors, devices, gateways, networking requirements, data flow, cloud IoT platforms, and AI-ready architectures.",
    result: "AI-ready IoT blueprint"
  },
  {
    no: "03",
    title: "Virtual IoT Lab",
    body: "Create a virtual IoT device and generate realistic sensor streams such as temperature, humidity, vibration, and energy.",
    result: "Virtual sensor simulator"
  },
  {
    no: "04",
    title: "MQTT Communication",
    body: "Build publisher and subscriber flows to understand device-to-cloud messaging in real AIoT systems.",
    result: "MQTT pipeline"
  },
  {
    no: "05",
    title: "Cloud Data Layer",
    body: "Store IoT data in MongoDB and structure sensor readings for analytics, dashboards, and AI workflows.",
    result: "MongoDB IoT storage"
  },
  {
    no: "06",
    title: "Sensor Data Engineering",
    body: "Clean noisy streams, handle missing values, normalize readings, and engineer features for machine learning.",
    result: "AI-ready dataset"
  },
  {
    no: "07",
    title: "Machine Learning for IoT",
    body: "Apply regression, classification, anomaly detection, forecasting, and predictive maintenance to sensor data.",
    result: "ML model suite"
  },
  {
    no: "08",
    title: "Real-Time AI Inference",
    body: "Connect models with live IoT pipelines and generate predictions, alerts, and operational intelligence.",
    result: "Live inference workflow"
  },
  {
    no: "09",
    title: "Deep Learning for AIoT",
    body: "Explore CNNs for image/video IoT, LSTMs for time-series, and autoencoders for anomaly detection.",
    result: "Deep sensing lab"
  },
  {
    no: "10",
    title: "Edge AI",
    body: "Understand cloud vs edge inference, latency, privacy, bandwidth, and edge hardware ecosystems.",
    result: "Edge deployment map"
  },
  {
    no: "11",
    title: "TinyML Readiness",
    body: "Learn how optimized models can run on resource-constrained devices and microcontrollers.",
    result: "TinyML checklist"
  },
  {
    no: "12",
    title: "Capstone System",
    body: "Build and present an AI-powered smart monitoring system with dashboard, alerts, models, and documentation.",
    result: "Portfolio capstone"
  }
];

const content = {
  en: {
    nav: ["Method", "Curriculum", "Projects", "Mentor"],
    lang: "🇻🇳 VN",
    cohort: "12-week premium AIoT cohort",
    title: "AIoT for Intelligent Infrastructure.",
    subtitle:
      "A professional program for learners who want to build AI-powered IoT systems, automate sensor intelligence workflows, understand Edge AI, and graduate with portfolio-ready smart systems.",
    body:
      "Learn how connected devices become intelligent: from sensors, MQTT, cloud storage, and data engineering to machine learning, deep learning, Edge AI, TinyML, dashboards, and real-time decision systems.",
    primary: "Start AIoT Mission",
    secondary: "View 12-Week Path",
    dossierTitle: "AIoT Builder Track",
    dossierBadge: "Flagship",
    dossierStats: [
      ["12", "guided weeks"],
      ["15+", "practical builds"],
      ["1", "capstone project"],
      ["0", "random tutorials"]
    ],
    bullets: [
      "AI-ready IoT architecture and system design",
      "Python, MQTT, MongoDB, dashboards, and sensor data pipelines",
      "Predictive maintenance, anomaly detection, and smart alerting",
      "Machine learning and deep learning for real IoT-style data",
      "Edge AI and TinyML thinking for constrained devices"
    ],
    methodKicker: "Method",
    methodTitle: "A premium learning system, not a collection of tutorials.",
    methodText:
      "The course follows the lifecycle of a real AIoT product: sense physical signals, move data reliably, engineer it for models, learn from behavior, and close the loop with dashboards, alerts, and edge-ready decisions.",
    method: [
      ["Sense", "Understand sensors, devices, physical signals, gateways, networking, and IoT architecture."],
      ["Stream", "Build MQTT communication, cloud storage, data ingestion, and real-time data movement."],
      ["Learn", "Apply machine learning and deep learning for prediction, classification, anomaly detection, and maintenance."],
      ["Act", "Create alerts, dashboards, actuator simulations, and Edge AI/TinyML deployment strategies."]
    ],
    outcomeKicker: "Outcomes",
    outcomeTitle: "Students finish with proof, not only concepts.",
    outcomeText:
      "Every major section produces something visible: architecture briefs, pipelines, notebooks, models, dashboards, deployment plans, and a capstone system.",
    deliverables: [
      "AIoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT publisher/subscriber pipeline",
      "MongoDB sensor data store",
      "Data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML readiness plan",
      "Final smart monitoring system"
    ],
    curriculumKicker: "Curriculum",
    curriculumTitle: "From IoT foundations to AI-powered smart systems.",
    curriculumText:
      "The program is structured as a professional builder path. Each week has a technical focus, practical output, and a clear role in the full AIoT stack.",
    projectsKicker: "Projects",
    projectsTitle: "Portfolio projects that look like real capability.",
    projectsText:
      "Learners build projects that demonstrate system thinking, AI workflow design, data engineering ability, and practical intelligent infrastructure knowledge.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureKicker: "Architecture",
    architectureTitle: "Built like a real AIoT workflow.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video signals, and machine-health data."],
      ["Pipeline", "Data ingestion, cloud storage, cleaning, normalization, feature engineering, and dashboard integration."],
      ["Reasoning", "Prediction, anomaly detection, forecasting, classification, model evaluation, and decision logic."],
      ["Output", "Smart alerts, dashboards, actuator simulation, deployment plans, documentation, and capstone demo."]
    ],
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "This program teaches AIoT as a complete capability: not only IoT, not only AI, but the disciplined integration of connected devices, data engineering, machine learning, and edge intelligence.",
    mentorQuote:
      "Do not just connect devices. Make them observable. Make them intelligent. Then make that intelligence useful, explainable, and deployable.",
    faqKicker: "FAQ",
    faqTitle: "Clear answers before students join.",
    faq: [
      ["Is this only theory?", "No. The course includes practical labs, data pipelines, models, dashboards, and a final capstone system."],
      ["Do learners need AI experience?", "No. AI, ML, Edge AI, and TinyML are introduced step by step using IoT examples."],
      ["What makes this premium?", "The structure is outcome-driven: every section produces a portfolio artifact, not just notes."],
      ["Can this support research projects?", "Yes. It supports smart cities, industrial IoT, healthcare monitoring, energy systems, and intelligent infrastructure research."]
    ],
    finalTitle: "Not an IoT tutorial. An AIoT capability program.",
    finalText:
      "Designed for learners who want to move beyond scattered tutorials and build intelligent connected systems with professional clarity."
  },
  vi: {
    nav: ["Phương pháp", "Lộ trình", "Dự án", "Mentor"],
    lang: "EN",
    cohort: "12-week premium AIoT cohort",
    title: "AIoT cho hạ tầng thông minh.",
    subtitle:
      "Chương trình chuyên nghiệp cho người học muốn xây hệ thống IoT dùng AI, tự động hóa sensor intelligence workflow, hiểu Edge AI và hoàn thành smart system có thể đưa vào portfolio.",
    body:
      "Học cách thiết bị kết nối trở nên thông minh: từ sensor, MQTT, cloud storage và data engineering đến machine learning, deep learning, Edge AI, TinyML, dashboard và real-time decision systems.",
    primary: "Bắt đầu AIoT Mission",
    secondary: "Xem lộ trình 12 tuần",
    dossierTitle: "AIoT Builder Track",
    dossierBadge: "Flagship",
    dossierStats: [
      ["12", "tuần hướng dẫn"],
      ["15+", "bài build thực hành"],
      ["1", "capstone project"],
      ["0", "tutorial rời rạc"]
    ],
    bullets: [
      "AI-ready IoT architecture và system design",
      "Python, MQTT, MongoDB, dashboard và sensor data pipeline",
      "Predictive maintenance, anomaly detection và smart alerting",
      "Machine learning và deep learning cho dữ liệu IoT thực tế",
      "Edge AI và TinyML cho thiết bị tài nguyên thấp"
    ],
    methodKicker: "Phương pháp",
    methodTitle: "Một hệ thống học premium, không phải tập hợp tutorial.",
    methodText:
      "Khóa học đi theo lifecycle thật của AIoT product: cảm nhận tín hiệu vật lý, truyền dữ liệu ổn định, engineering dữ liệu cho model, học từ behavior và đóng vòng lặp bằng dashboard, alert và edge-ready decisions.",
    method: [
      ["Sense", "Hiểu sensor, device, signal vật lý, gateway, networking và IoT architecture."],
      ["Stream", "Xây MQTT communication, cloud storage, data ingestion và real-time data movement."],
      ["Learn", "Áp dụng ML/DL cho prediction, classification, anomaly detection và maintenance."],
      ["Act", "Tạo alert, dashboard, actuator simulation và Edge AI/TinyML deployment strategy."]
    ],
    outcomeKicker: "Kết quả",
    outcomeTitle: "Học viên kết thúc bằng sản phẩm, không chỉ concept.",
    outcomeText:
      "Mỗi phần tạo ra thứ có thể trình bày: architecture brief, pipeline, notebook, model, dashboard, deployment plan và capstone system.",
    deliverables: [
      "AIoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT publisher/subscriber pipeline",
      "MongoDB sensor data store",
      "Data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML readiness plan",
      "Final smart monitoring system"
    ],
    curriculumKicker: "Lộ trình",
    curriculumTitle: "Từ nền tảng IoT đến AI-powered smart systems.",
    curriculumText:
      "Chương trình được xây như builder path chuyên nghiệp. Mỗi tuần có focus kỹ thuật, output thực hành và vai trò rõ trong AIoT stack.",
    projectsKicker: "Dự án",
    projectsTitle: "Portfolio projects nhìn giống năng lực thật.",
    projectsText:
      "Người học xây dự án thể hiện system thinking, AI workflow design, data engineering và hiểu biết về intelligent infrastructure.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureKicker: "Architecture",
    architectureTitle: "Được xây như AIoT workflow thật.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video signals và machine-health data."],
      ["Pipeline", "Data ingestion, cloud storage, cleaning, normalization, feature engineering và dashboard integration."],
      ["Reasoning", "Prediction, anomaly detection, forecasting, classification, model evaluation và decision logic."],
      ["Output", "Smart alerts, dashboards, actuator simulation, deployment plans, documentation và capstone demo."]
    ],
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "Chương trình dạy AIoT như một capability hoàn chỉnh: không chỉ IoT, không chỉ AI, mà là sự tích hợp có kỷ luật giữa connected devices, data engineering, machine learning và edge intelligence.",
    mentorQuote:
      "Đừng chỉ kết nối thiết bị. Hãy làm chúng observable, intelligent, useful, explainable và deployable.",
    faqKicker: "FAQ",
    faqTitle: "Câu trả lời rõ ràng trước khi tham gia.",
    faq: [
      ["Đây chỉ là lý thuyết?", "Không. Khóa học có lab, pipeline, model, dashboard và final capstone system."],
      ["Có cần biết AI trước không?", "Không. AI, ML, Edge AI và TinyML được giới thiệu từng bước qua ví dụ IoT."],
      ["Điều gì làm khóa học premium?", "Cấu trúc tập trung vào outcome: mỗi phần tạo portfolio artifact, không chỉ ghi chú."],
      ["Có hỗ trợ research project không?", "Có. Phù hợp smart cities, industrial IoT, healthcare monitoring, energy systems và intelligent infrastructure research."]
    ],
    finalTitle: "Không phải IoT tutorial. Đây là AIoT capability program.",
    finalText:
      "Dành cho người học muốn vượt qua tutorial rời rạc và xây hệ thống kết nối thông minh với tư duy chuyên nghiệp."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="page">
      <div className="background-grid" />
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand-area">
            <a href="#top" className="brand">
              <img src="/quanverse-aiot-logo.svg" alt="QuanVerse AIoT Mastery" />
            </a>

            <div className="community-pill">
              <span>A Community by</span>
              <b>QuanSkill</b>
            </div>
          </div>

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
          <p className="kicker">{t.cohort}</p>
          <h1>{t.title}</h1>
          <p className="hero-lead">{t.subtitle}</p>
          <p className="hero-body">{t.body}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#curriculum">{t.primary}</a>
            <a className="secondary-button" href="#projects">{t.secondary}</a>
          </div>
        </div>

        <aside className="dossier-card">
          <div className="dossier-top">
            <span>Program dossier</span>
            <b>{t.dossierBadge}</b>
          </div>

          <h2>{t.dossierTitle}</h2>

          <div className="dossier-stats">
            {t.dossierStats.map(([value, label]) => (
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

        <div className="method-grid">
          {t.method.map(([title, body], index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t.outcomeKicker}</span>
          <h2>{t.outcomeTitle}</h2>
          <p>{t.outcomeText}</p>
        </div>

        <div className="deliverables">
          {t.deliverables.map((item) => (
            <div key={item}>
              <span>Deliverable</span>
              <b>{item}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="curriculum">
        <div className="section-head wide">
          <span>{t.curriculumKicker}</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumText}</p>
        </div>

        <div className="week-list">
          {weeks.map((week) => (
            <article className="week-card" key={week.no}>
              <div className="week-no">{week.no}</div>
              <div>
                <h3>{week.title}</h3>
                <p>{week.body}</p>
                <div className="week-result">
                  <span>Lab outcome</span>
                  <b>{week.result}</b>
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

        <div className="project-grid">
          {t.projects.map((project, index) => (
            <article key={project}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{project}</h3>
              <p>Designed for GitHub documentation, demo explanation, portfolio presentation, and technical storytelling.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture">
        <div className="section-head">
          <span>{t.architectureKicker}</span>
          <h2>{t.architectureTitle}</h2>
        </div>

        <div className="architecture-grid">
          {t.architecture.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mentor" id="mentor">
        <div className="mentor-card">
          <div>
            <span>{t.mentorKicker}</span>
            <h2>{t.mentorTitle}</h2>
            <p>{t.mentorText}</p>
          </div>
          <blockquote>{t.mentorQuote}</blockquote>
        </div>
      </section>

      <section className="section faq">
        <div className="section-head">
          <span>{t.faqKicker}</span>
          <h2>{t.faqTitle}</h2>
        </div>

        <div className="faq-list">
          {t.faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-section">
        <span>Final position</span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </section>

      <footer>
        <span>© 2026 QuanVerse AIoT Mastery</span>
        <span>Smart systems. Edge intelligence. Real portfolio work.</span>
      </footer>
    </main>
  );
}
