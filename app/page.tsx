"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const weeks = [
  {
    no: "01",
    title: "AIoT Mindset",
    subtitle:
      "How Artificial Intelligence is transforming IoT from connected monitoring into intelligent decision systems.",
    outcome: "AIoT technology map and smart-systems opportunity brief"
  },
  {
    no: "02",
    title: "IoT Architecture",
    subtitle:
      "Understand sensors, devices, gateways, networking layers, data flow, cloud platforms, and AI-ready IoT architecture.",
    outcome: "AI-ready IoT architecture blueprint"
  },
  {
    no: "03",
    title: "MQTT Lab System",
    subtitle:
      "Build a virtual IoT device, publish sensor messages, subscribe to live streams, and understand device-to-cloud communication.",
    outcome: "Working MQTT publisher/subscriber lab"
  },
  {
    no: "04",
    title: "Cloud Data Layer",
    subtitle:
      "Store IoT readings in MongoDB, structure sensor records, and prepare a database layer for analytics and AI workflows.",
    outcome: "MongoDB IoT storage pipeline"
  },
  {
    no: "05",
    title: "Sensor Data Engineering",
    subtitle:
      "Clean noisy sensor streams, handle missing values, normalize data, engineer features, and prepare model-ready datasets.",
    outcome: "AIoT data engineering notebook"
  },
  {
    no: "06",
    title: "ML for IoT Data",
    subtitle:
      "Apply regression, classification, unsupervised learning, anomaly detection, forecasting, and predictive maintenance.",
    outcome: "Predictive maintenance and anomaly detection models"
  },
  {
    no: "07",
    title: "Real-Time AI Inference",
    subtitle:
      "Connect trained models with live sensor pipelines and generate real-time predictions, warnings, and operational signals.",
    outcome: "Real-time AI inference workflow"
  },
  {
    no: "08",
    title: "Deep Learning for AIoT",
    subtitle:
      "Use CNNs for image/video IoT, RNNs and LSTMs for time-series signals, and autoencoders for anomaly detection.",
    outcome: "Deep learning concept lab for intelligent sensing"
  },
  {
    no: "09",
    title: "Edge AI",
    subtitle:
      "Understand edge vs cloud inference, latency, privacy, bandwidth, device constraints, and hardware ecosystems.",
    outcome: "Edge AI deployment decision framework"
  },
  {
    no: "10",
    title: "TinyML",
    subtitle:
      "Explore how optimized models can run on resource-constrained devices and microcontrollers.",
    outcome: "TinyML readiness and model optimization checklist"
  },
  {
    no: "11",
    title: "AIoT Dashboard",
    subtitle:
      "Design a clean dashboard for live readings, system health, anomaly status, prediction results, and alert summaries.",
    outcome: "AIoT monitoring dashboard"
  },
  {
    no: "12",
    title: "Capstone System",
    subtitle:
      "Build and present a portfolio-ready AI-powered smart monitoring system with architecture, demo, report, and GitHub documentation.",
    outcome: "Final AIoT capstone project"
  }
];

const content = {
  en: {
    nav: ["Method", "Curriculum", "Projects", "Mentor"],
    lang: "VN",
    heroKicker: "12-week premium AIoT mission • Edge AI • TinyML • Smart Systems",
    heroTitle: "Build Intelligent IoT Systems in the Era of AI",
    heroText:
      "Start from IoT foundations. Build your own AIoT pipeline. Learn sensor data engineering, MQTT communication, cloud storage, machine learning, deep learning, Edge AI, TinyML, and smart-system design.",
    heroSub:
      "Designed as a serious training pathway for learners who want to create intelligent connected systems that sense, analyze, predict, and act in real time.",
    primary: "Start AIoT Mission",
    secondary: "View 12-Week Path",
    dossierTitle: "AIoT Builder Track",
    dossierBadge: "Flagship",
    dossierStats: [
      ["12", "guided weeks"],
      ["15+", "practical builds"],
      ["1", "capstone system"],
      ["0", "random tutorials"]
    ],
    dossierBullets: [
      "AI-ready IoT architecture and system design",
      "MQTT pipelines, MongoDB storage, and dashboard workflows",
      "Predictive maintenance, anomaly detection, and smart alerting",
      "Deep learning for sensor time-series, image, and video IoT",
      "Edge AI and TinyML thinking for resource-constrained devices"
    ],
    focus: ["AIoT Architecture", "Sensor Data", "Machine Learning", "Edge Intelligence"],
    methodKicker: "Program method",
    methodTitle: "A clean learning system for serious AIoT builders.",
    methodText:
      "The course follows the real lifecycle of intelligent connected systems: sense physical signals, move data through reliable pipelines, engineer it for AI, train models, and close the loop with dashboards, alerts, and edge-ready decisions.",
    method: [
      ["01", "Sense", "Understand devices, sensors, signals, gateways, networking, and the physical context behind IoT data."],
      ["02", "Stream", "Build MQTT communication, data ingestion, cloud storage, and live data movement workflows."],
      ["03", "Learn", "Apply machine learning and deep learning to detect patterns, anomalies, device states, and future risks."],
      ["04", "Act", "Create dashboards, alerts, actuator logic, and edge deployment strategies for real-time intelligence."]
    ],
    outcomesKicker: "Student outcomes",
    outcomesTitle: "Smaller promises. Stronger proof.",
    outcomesText:
      "Students do not only finish with theory. They finish with visible work: labs, models, dashboards, documentation, and a capstone system that can be shown professionally.",
    deliverables: [
      "AI-ready IoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT publisher/subscriber pipeline",
      "MongoDB sensor data store",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML deployment plan",
      "Final smart monitoring capstone"
    ],
    curriculumKicker: "12-week curriculum",
    curriculumTitle: "From IoT foundations to AI-powered smart systems.",
    curriculumText:
      "Each chapter has a compact title, a deeper professional subtitle, and a clear project outcome. The structure is intentionally original and built around practical AIoT workflows.",
    projectKicker: "Portfolio projects",
    projectTitle: "A portfolio that looks like real capability.",
    projectText:
      "The projects are designed to feel practical, explainable, and professional. They help learners demonstrate AIoT understanding, data engineering ability, ML workflow design, and system-level thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureKicker: "Course architecture",
    architectureTitle: "Built like a professional AIoT workflow.",
    architectureText:
      "The course is structured to feel like how real smart-system teams think: physical inputs, data pipelines, model reasoning, and polished operational outputs.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video inputs, and machine-health signals."],
      ["Pipeline", "Data ingestion, cloud storage, normalization, feature engineering, dashboards, and real-time inference hooks."],
      ["Reasoning", "AI-assisted prediction, anomaly detection, forecasting, classification, model evaluation, and decision logic."],
      ["Output", "Smart alerts, dashboards, actuator simulation, deployment plans, GitHub documentation, and capstone demo."]
    ],
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "This program teaches AIoT as a complete capability: not only IoT, not only AI, but the disciplined integration of connected devices, data engineering, machine learning, and edge intelligence.",
    mentorQuote:
      "Do not just connect devices. Make them useful. Make them observable. Make them intelligent. Then make the intelligence safe, explainable, and deployable.",
    faqKicker: "FAQ",
    faqTitle: "Clear, practical, and professional.",
    faq: [
      ["Is this only a theory course?", "No. The course includes practical labs, data pipelines, machine learning workflows, dashboards, and a final capstone system."],
      ["Do learners need AI experience?", "No. AI, ML, Edge AI, and TinyML concepts are introduced step by step using IoT examples."],
      ["What makes this premium?", "The program is structured around portfolio outcomes, professional architecture thinking, guided labs, and real AIoT system design."],
      ["Is it useful for projects and research?", "Yes. It can support smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance, and intelligent infrastructure work."]
    ],
    finalTitle: "Not an IoT tutorial. An AIoT capability program.",
    finalText:
      "Designed for learners who want to move beyond scattered tutorials and build practical, intelligent, AI-powered connected systems."
  },
  vi: {
    nav: ["Phương pháp", "Lộ trình", "Dự án", "Mentor"],
    lang: "EN",
    heroKicker: "12-week premium AIoT mission • Edge AI • TinyML • Smart Systems",
    heroTitle: "Xây dựng hệ thống IoT thông minh trong kỷ nguyên AI",
    heroText:
      "Bắt đầu từ nền tảng IoT. Xây pipeline AIoT của riêng bạn. Học sensor data engineering, MQTT, cloud storage, machine learning, deep learning, Edge AI, TinyML và smart-system design.",
    heroSub:
      "Được thiết kế như một lộ trình nghiêm túc cho người học muốn tạo hệ thống kết nối thông minh có khả năng cảm nhận, phân tích, dự đoán và hành động theo thời gian thực.",
    primary: "Bắt đầu AIoT Mission",
    secondary: "Xem lộ trình 12 tuần",
    dossierTitle: "AIoT Builder Track",
    dossierBadge: "Flagship",
    dossierStats: [
      ["12", "tuần hướng dẫn"],
      ["15+", "bài build thực hành"],
      ["1", "capstone system"],
      ["0", "tutorial rời rạc"]
    ],
    dossierBullets: [
      "Kiến trúc IoT sẵn sàng cho AI",
      "MQTT pipeline, MongoDB storage và dashboard workflow",
      "Predictive maintenance, anomaly detection và smart alerting",
      "Deep learning cho sensor time-series, image và video IoT",
      "Edge AI và TinyML cho thiết bị tài nguyên thấp"
    ],
    focus: ["AIoT Architecture", "Sensor Data", "Machine Learning", "Edge Intelligence"],
    methodKicker: "Phương pháp học",
    methodTitle: "Một hệ thống học sạch cho AIoT builders nghiêm túc.",
    methodText:
      "Khóa học đi theo lifecycle thật của hệ thống kết nối thông minh: cảm nhận tín hiệu vật lý, truyền dữ liệu, engineering dữ liệu cho AI, huấn luyện model và đóng vòng lặp bằng dashboard, alert và edge decision.",
    method: [
      ["01", "Sense", "Hiểu device, sensor, signal, gateway, networking và bối cảnh vật lý phía sau dữ liệu IoT."],
      ["02", "Stream", "Xây MQTT communication, data ingestion, cloud storage và live data workflow."],
      ["03", "Learn", "Áp dụng ML/DL để phát hiện pattern, anomaly, device state và future risk."],
      ["04", "Act", "Tạo dashboard, alert, actuator logic và edge deployment strategy cho real-time intelligence."]
    ],
    outcomesKicker: "Kết quả học viên",
    outcomesTitle: "Cam kết nhỏ hơn. Bằng chứng mạnh hơn.",
    outcomesText:
      "Người học không chỉ kết thúc với lý thuyết. Họ có lab, model, dashboard, documentation và capstone system có thể trình bày chuyên nghiệp.",
    deliverables: [
      "AI-ready IoT architecture brief",
      "Virtual IoT device simulator",
      "MQTT publisher/subscriber pipeline",
      "MongoDB sensor data store",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "AIoT dashboard",
      "Edge AI/TinyML deployment plan",
      "Final smart monitoring capstone"
    ],
    curriculumKicker: "Lộ trình 12 tuần",
    curriculumTitle: "Từ nền tảng IoT đến AI-powered smart systems.",
    curriculumText:
      "Mỗi chương có title gọn, subtitle chuyên nghiệp và project outcome rõ ràng. Cấu trúc được xây quanh AIoT workflow thực tế.",
    projectKicker: "Portfolio projects",
    projectTitle: "Portfolio nhìn giống năng lực thật.",
    projectText:
      "Các dự án được thiết kế thực tế, dễ giải thích và chuyên nghiệp, giúp người học chứng minh tư duy AIoT, data engineering, ML workflow và system thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureKicker: "Course architecture",
    architectureTitle: "Được xây như một AIoT workflow chuyên nghiệp.",
    architectureText:
      "Khóa học mô phỏng cách team smart-system thật tư duy: physical inputs, data pipelines, model reasoning và operational outputs.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video inputs và machine-health signals."],
      ["Pipeline", "Data ingestion, cloud storage, normalization, feature engineering, dashboard và real-time inference hooks."],
      ["Reasoning", "Prediction, anomaly detection, forecasting, classification, model evaluation và decision logic."],
      ["Output", "Smart alert, dashboard, actuator simulation, deployment plan, GitHub documentation và capstone demo."]
    ],
    mentorKicker: "Mentor",
    mentorTitle: "QuanVerse AIoT Mastery",
    mentorText:
      "Chương trình dạy AIoT như một capability hoàn chỉnh: không chỉ IoT, không chỉ AI, mà là sự tích hợp có kỷ luật giữa connected devices, data engineering, machine learning và edge intelligence.",
    mentorQuote:
      "Đừng chỉ kết nối thiết bị. Hãy làm chúng hữu ích, quan sát được, thông minh, an toàn, giải thích được và triển khai được.",
    faqKicker: "FAQ",
    faqTitle: "Rõ ràng, thực tế và chuyên nghiệp.",
    faq: [
      ["Đây chỉ là khóa lý thuyết?", "Không. Khóa học có lab, data pipeline, ML workflow, dashboard và final capstone system."],
      ["Có cần biết AI trước không?", "Không. AI, ML, Edge AI và TinyML được giới thiệu từng bước qua ví dụ IoT."],
      ["Điều gì làm khóa học premium?", "Chương trình tập trung vào portfolio outcomes, architecture thinking, guided labs và real AIoT system design."],
      ["Có hữu ích cho project/research không?", "Có. Phù hợp cho smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance và intelligent infrastructure."]
    ],
    finalTitle: "Không phải IoT tutorial. Đây là chương trình năng lực AIoT.",
    finalText:
      "Dành cho người học muốn vượt qua tutorial rời rạc và xây hệ thống connected thông minh dùng AI."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="page">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="QuanVerse AIoT Mastery">
            <img src="/quanverse-aiot-logo.svg" alt="QuanVerse AIoT Mastery" />
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
          <p className="kicker">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroText}</p>
          <p className="hero-sub">{t.heroSub}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#curriculum">{t.primary}</a>
            <a className="secondary-button" href="#projects">{t.secondary}</a>
          </div>
        </div>

        <aside className="dossier">
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

          <ul>
            {t.dossierBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="focus-grid">
            {t.focus.map((item) => (
              <span key={item}>Focus {item}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="method" id="method">
        <div className="section-head">
          <span>{t.methodKicker}</span>
          <h2>{t.methodTitle}</h2>
          <p>{t.methodText}</p>
        </div>

        <div className="method-grid">
          {t.method.map(([no, title, text]) => (
            <article key={title}>
              <small>{no}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="outcomes">
        <div className="section-head">
          <span>{t.outcomesKicker}</span>
          <h2>{t.outcomesTitle}</h2>
          <p>{t.outcomesText}</p>
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

      <section className="curriculum" id="curriculum">
        <div className="section-head wide">
          <span>{t.curriculumKicker}</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumText}</p>
        </div>

        <div className="week-list">
          {weeks.map((week) => (
            <article className="week" key={week.no}>
              <div className="week-no">{week.no}</div>
              <div className="week-main">
                <h3>{week.title}</h3>
                <p>{week.subtitle}</p>
                <div>
                  <span>Lab outcome</span>
                  <b>{week.outcome}</b>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-head">
          <span>{t.projectKicker}</span>
          <h2>{t.projectTitle}</h2>
          <p>{t.projectText}</p>
        </div>

        <div className="project-grid">
          {t.projects.map((project, index) => (
            <article key={project}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{project}</h3>
              <p>A guided build designed for GitHub documentation, project explanation, and professional presentation.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture">
        <div className="section-head">
          <span>{t.architectureKicker}</span>
          <h2>{t.architectureTitle}</h2>
          <p>{t.architectureText}</p>
        </div>

        <div className="architecture-grid">
          {t.architecture.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mentor" id="mentor">
        <div className="mentor-card">
          <div>
            <span>{t.mentorKicker}</span>
            <h2>{t.mentorTitle}</h2>
            <p>{t.mentorText}</p>
          </div>
          <blockquote>{t.mentorQuote}</blockquote>
        </div>
      </section>

      <section className="faq">
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

      <section className="final">
        <span>Final position</span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </section>

      <footer>
        <span>© 2026 AIoT Mastery Professional Program. All rights reserved.</span>
        <span>Smart systems. Responsible AI. Real portfolio work.</span>
      </footer>
    </main>
  );
}
