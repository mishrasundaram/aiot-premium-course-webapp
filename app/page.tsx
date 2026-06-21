"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const chapters = [
  {
    week: "01",
    title: "AIoT Mindset",
    copy:
      "How artificial intelligence is reshaping connected devices, intelligent infrastructure, sensor-driven systems, and the future of smart automation.",
    lab: "AIoT technology map and intelligent systems checklist"
  },
  {
    week: "02",
    title: "IoT Architecture",
    copy:
      "Design an AI-ready IoT architecture with sensors, devices, gateways, networking requirements, protocol choices, cloud layers, and edge concepts.",
    lab: "Professional AI-ready IoT architecture blueprint"
  },
  {
    week: "03",
    title: "Virtual Device Lab",
    copy:
      "Create virtual IoT devices that generate realistic temperature, humidity, vibration, energy, and machine-health data streams.",
    lab: "Virtual IoT sensor simulator"
  },
  {
    week: "04",
    title: "MQTT Communication",
    copy:
      "Build publisher and subscriber workflows to understand live device-to-cloud communication and real-time message movement.",
    lab: "MQTT publisher-subscriber pipeline"
  },
  {
    week: "05",
    title: "Cloud Data Storage",
    copy:
      "Store IoT sensor readings in MongoDB, design clean database records, and prepare cloud data for analytics and AI workflows.",
    lab: "MongoDB IoT data storage layer"
  },
  {
    week: "06",
    title: "Sensor Data Engineering",
    copy:
      "Clean noisy IoT streams, handle missing data, normalize readings, engineer features, and prepare reliable model-ready datasets.",
    lab: "AIoT data engineering notebook"
  },
  {
    week: "07",
    title: "Machine Learning for AIoT",
    copy:
      "Apply regression, classification, unsupervised learning, anomaly detection, forecasting, and predictive maintenance to IoT data.",
    lab: "Predictive maintenance and anomaly detection models"
  },
  {
    week: "08",
    title: "Real-Time AI Inference",
    copy:
      "Connect trained machine learning models with live sensor data pipelines to generate predictions, alerts, and operational intelligence.",
    lab: "Real-time AI inference workflow"
  },
  {
    week: "09",
    title: "Deep Learning for AIoT",
    copy:
      "Study neural networks, CNNs for image and video IoT, LSTMs for sensor time-series, and autoencoders for anomaly detection.",
    lab: "Deep learning concept lab for intelligent sensing"
  },
  {
    week: "10",
    title: "Edge AI",
    copy:
      "Understand cloud versus edge inference, latency, privacy, bandwidth, device constraints, optimization, and edge hardware ecosystems.",
    lab: "Edge AI deployment decision framework"
  },
  {
    week: "11",
    title: "TinyML Readiness",
    copy:
      "Explore how optimized models can run on microcontrollers and resource-constrained devices for low-power intelligence.",
    lab: "TinyML readiness and model optimization checklist"
  },
  {
    week: "12",
    title: "Capstone Lab",
    copy:
      "Build a portfolio-ready AI-powered smart monitoring system with architecture, data pipeline, model, dashboard, alerts, and final documentation.",
    lab: "Final AIoT smart monitoring capstone"
  }
];

const content = {
  en: {
    nav: ["Method", "Curriculum", "Projects", "Instructor"],
    lang: "🇻🇳 VN",
    brandSubtitle: "AIoT Mastery",
    eyebrow: "12-week premium cohort",
    heroTitle: "AIoT for Intelligent Infrastructure.",
    heroSubtitle:
      "A professional program for learners who want to build AI-powered IoT systems, automate sensor intelligence workflows, understand Edge AI, and graduate with portfolio-ready smart systems.",
    heroNote:
      "Designed as a serious training pathway for IoT architecture, sensor data engineering, MQTT pipelines, machine learning, deep learning, predictive maintenance, anomaly detection, Edge AI, TinyML, and real-time smart monitoring.",
    primary: "View Curriculum",
    secondary: "Explore Projects",
    dossierTitle: "AIoT Builder Track",
    dossierStats: [
      ["12", "guided weeks"],
      ["15+", "practical builds"],
      ["1", "capstone project"],
      ["0", "random tutorials"]
    ],
    dossierList: [
      "AI-ready IoT architecture and intelligent system design",
      "Python, MQTT, MongoDB, dashboards, and sensor data pipelines",
      "Predictive maintenance, anomaly detection, and smart alerting",
      "Machine learning and deep learning for real IoT-style data",
      "Edge AI, TinyML, optimization, and deployment readiness"
    ],
    strip: ["IoT Architecture", "Sensor Data", "Machine Learning", "Edge Intelligence"],
    methodTitle: "A clean learning system for serious AIoT builders.",
    methodSubtitle:
      "The course follows a professional progression: understand the physical system, stream sensor data, engineer it for AI, train models, and close the loop with dashboards, alerts, and edge-ready decisions.",
    pillars: [
      ["Think", "Understand physical signals, intelligent infrastructure, AIoT architecture, and the limitations of connected systems."],
      ["Stream", "Move IoT data through MQTT, gateways, cloud storage, and clean ingestion pipelines."],
      ["Model", "Use machine learning and deep learning to predict, classify, detect anomalies, and forecast future behavior."],
      ["Deploy", "Design dashboards, alerts, actuator logic, Edge AI strategies, and TinyML-ready deployment plans."]
    ],
    outcomesTitle: "Smaller promises. Stronger proof.",
    outcomesSubtitle:
      "Students do not only finish with knowledge. They finish with visible work: simulators, pipelines, notebooks, models, dashboards, documentation, and a capstone system that can be shown professionally.",
    deliverables: [
      "AI-ready IoT architecture brief",
      "Virtual IoT sensor simulator",
      "MQTT publisher-subscriber pipeline",
      "MongoDB sensor data storage layer",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "Real-time AI inference system",
      "AIoT monitoring dashboard",
      "Edge AI and TinyML deployment plan",
      "Final smart monitoring capstone"
    ],
    curriculumTitle: "From IoT foundations to AI-powered smart systems.",
    curriculumSubtitle:
      "Each chapter has a compact title, a deeper professional subtitle, and a clear project outcome. The structure is intentionally built around practical AIoT workflows.",
    projectsTitle: "A portfolio that looks like real capability.",
    projectsSubtitle:
      "The projects are designed to feel practical, explainable, and professional. They help learners demonstrate AIoT understanding, data engineering ability, AI workflow design, and system-level thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureTitle: "Built like a professional AIoT workflow.",
    architectureSubtitle:
      "The course is structured to feel like how real smart-system teams think: physical inputs, data movement, AI reasoning, automation, and polished outputs.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video signals, and machine-health data."],
      ["Pipeline", "Data ingestion, MongoDB storage, cleaning, normalization, feature engineering, dashboard hooks, and real-time inference."],
      ["Reasoning", "Prediction, anomaly detection, forecasting, classification, model evaluation, and decision logic."],
      ["Output", "Smart alerts, dashboards, actuator simulation, deployment plans, GitHub documentation, and capstone demo."]
    ],
    instructorTitle: "QuanVerse AIoT Mastery",
    instructorText:
      "This program teaches AIoT as a complete capability: not only IoT, not only AI, but the disciplined integration of connected devices, data engineering, machine learning, and edge intelligence.",
    quote:
      "Do not just connect devices. Make them observable, intelligent, useful, explainable, and deployable.",
    faqTitle: "Clear, practical, and professional.",
    faqSubtitle:
      "The program is positioned for serious learners who want practical skill, not scattered tutorials.",
    faq: [
      ["Is this only an IoT theory course?", "No. It is a practical AIoT program focused on labs, pipelines, data engineering, machine learning models, dashboards, and a final capstone system."],
      ["Do learners need prior AI experience?", "No. AI, ML, Edge AI, and TinyML concepts are introduced step by step using IoT examples."],
      ["What makes this premium?", "The program is structured around portfolio outcomes, guided labs, architecture thinking, dashboard design, and real AIoT product logic."],
      ["Is it useful for project or research work?", "Yes. It supports smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance, and intelligent infrastructure research."]
    ],
    finalTitle: "Not an IoT tutorial. An AIoT capability program.",
    finalText:
      "Designed for learners who want to move beyond scattered tutorials and build practical, intelligent, AI-powered connected systems."
  },
  vi: {
    nav: ["Phương pháp", "Lộ trình", "Dự án", "Mentor"],
    lang: "EN",
    brandSubtitle: "AIoT Mastery",
    eyebrow: "12-week premium cohort",
    heroTitle: "AIoT cho hạ tầng thông minh.",
    heroSubtitle:
      "Chương trình chuyên nghiệp cho người học muốn xây hệ thống IoT dùng AI, tự động hóa sensor intelligence workflow, hiểu Edge AI, và hoàn thành smart system có thể đưa vào portfolio.",
    heroNote:
      "Được thiết kế như một lộ trình nghiêm túc về IoT architecture, sensor data engineering, MQTT pipeline, machine learning, deep learning, predictive maintenance, anomaly detection, Edge AI, TinyML và smart monitoring thời gian thực.",
    primary: "Xem lộ trình",
    secondary: "Xem dự án",
    dossierTitle: "AIoT Builder Track",
    dossierStats: [
      ["12", "tuần hướng dẫn"],
      ["15+", "bài build thực hành"],
      ["1", "capstone project"],
      ["0", "tutorial rời rạc"]
    ],
    dossierList: [
      "AI-ready IoT architecture và intelligent system design",
      "Python, MQTT, MongoDB, dashboard và sensor data pipeline",
      "Predictive maintenance, anomaly detection và smart alerting",
      "Machine learning và deep learning cho dữ liệu IoT thực tế",
      "Edge AI, TinyML, optimization và deployment readiness"
    ],
    strip: ["IoT Architecture", "Sensor Data", "Machine Learning", "Edge Intelligence"],
    methodTitle: "Một hệ thống học sạch cho AIoT builders nghiêm túc.",
    methodSubtitle:
      "Khóa học đi theo tiến trình chuyên nghiệp: hiểu hệ thống vật lý, truyền sensor data, engineering dữ liệu cho AI, huấn luyện model, và đóng vòng lặp bằng dashboard, alert và edge-ready decisions.",
    pillars: [
      ["Think", "Hiểu physical signals, intelligent infrastructure, AIoT architecture và giới hạn của connected systems."],
      ["Stream", "Di chuyển IoT data qua MQTT, gateway, cloud storage và ingestion pipeline sạch."],
      ["Model", "Dùng ML/DL để predict, classify, detect anomalies và forecast future behavior."],
      ["Deploy", "Thiết kế dashboard, alert, actuator logic, Edge AI strategy và TinyML-ready deployment plan."]
    ],
    outcomesTitle: "Cam kết nhỏ hơn. Bằng chứng mạnh hơn.",
    outcomesSubtitle:
      "Người học không chỉ kết thúc với kiến thức. Họ có simulator, pipeline, notebook, model, dashboard, documentation và capstone system có thể trình bày chuyên nghiệp.",
    deliverables: [
      "AI-ready IoT architecture brief",
      "Virtual IoT sensor simulator",
      "MQTT publisher-subscriber pipeline",
      "MongoDB sensor data storage layer",
      "Sensor data engineering notebook",
      "Predictive maintenance model",
      "Anomaly detection workflow",
      "Real-time AI inference system",
      "AIoT monitoring dashboard",
      "Edge AI and TinyML deployment plan",
      "Final smart monitoring capstone"
    ],
    curriculumTitle: "Từ nền tảng IoT đến AI-powered smart systems.",
    curriculumSubtitle:
      "Mỗi chương có title gọn, subtitle chuyên nghiệp và project outcome rõ ràng. Cấu trúc được xây quanh AIoT workflow thực tế.",
    projectsTitle: "Portfolio nhìn giống năng lực thật.",
    projectsSubtitle:
      "Các project được thiết kế thực tế, dễ giải thích và chuyên nghiệp. Chúng giúp người học chứng minh AIoT understanding, data engineering, AI workflow design và system-level thinking.",
    projects: [
      "AIoT Sensor Health Monitor",
      "Predictive Maintenance Engine",
      "Industrial Anomaly Detection System",
      "Smart Energy Forecasting Dashboard",
      "AI-Based Smart Alert Console",
      "Edge AI Deployment Readiness Report"
    ],
    architectureTitle: "Được xây như AIoT workflow chuyên nghiệp.",
    architectureSubtitle:
      "Khóa học mô phỏng cách team smart-system thật tư duy: physical inputs, data movement, AI reasoning, automation và polished outputs.",
    architecture: [
      ["Input", "Sensor readings, device states, MQTT streams, time-series data, image/video signals và machine-health data."],
      ["Pipeline", "Data ingestion, MongoDB storage, cleaning, normalization, feature engineering, dashboard hooks và real-time inference."],
      ["Reasoning", "Prediction, anomaly detection, forecasting, classification, model evaluation và decision logic."],
      ["Output", "Smart alerts, dashboards, actuator simulation, deployment plans, GitHub documentation và capstone demo."]
    ],
    instructorTitle: "QuanVerse AIoT Mastery",
    instructorText:
      "Chương trình dạy AIoT như một capability hoàn chỉnh: không chỉ IoT, không chỉ AI, mà là sự tích hợp có kỷ luật giữa connected devices, data engineering, machine learning và edge intelligence.",
    quote:
      "Đừng chỉ kết nối thiết bị. Hãy làm chúng observable, intelligent, useful, explainable và deployable.",
    faqTitle: "Rõ ràng, thực tế và chuyên nghiệp.",
    faqSubtitle:
      "Chương trình dành cho người học nghiêm túc muốn kỹ năng thực tế, không phải tutorial rời rạc.",
    faq: [
      ["Đây chỉ là khóa lý thuyết IoT?", "Không. Đây là chương trình AIoT thực hành với lab, pipeline, data engineering, ML model, dashboard và final capstone system."],
      ["Có cần biết AI trước không?", "Không. AI, ML, Edge AI và TinyML được giới thiệu từng bước qua ví dụ IoT."],
      ["Điều gì làm khóa học premium?", "Chương trình tập trung vào portfolio outcome, guided lab, architecture thinking, dashboard design và real AIoT product logic."],
      ["Có hữu ích cho project hoặc research không?", "Có. Phù hợp cho smart cities, industrial IoT, healthcare monitoring, energy systems, predictive maintenance và intelligent infrastructure research."]
    ],
    finalTitle: "Không phải IoT tutorial. Đây là AIoT capability program.",
    finalText:
      "Dành cho người học muốn vượt qua tutorial rời rạc và xây hệ thống kết nối thông minh dùng AI."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main>
      <header className="page-shell site-header">
        <a href="#" className="qv-brand" aria-label="QuanVerse AIoT Mastery">
          <span className="qv-main">
            <span className="qv-mark" aria-hidden="true">
              <span className="qv-mark-blue" />
              <span className="qv-mark-gold" />
            </span>
            <span>
              <span className="qv-title">QuanVerse</span>
              <span className="qv-subtitle">{t.brandSubtitle}</span>
            </span>
          </span>

          <span className="qv-community">
            <span>A Community by</span>
            <span className="qv-mini-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <strong>QuanSkill</strong>
          </span>
        </a>

        <div className="header-actions">
          <nav className="nav">
            <a href="#method">{t.nav[0]}</a>
            <a href="#curriculum">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#mentor">{t.nav[3]}</a>
          </nav>
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLang(lang === "en" ? "vi" : "en")}
          >
            {t.lang}
          </button>
        </div>
      </header>

      <section className="page-shell hero">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="display hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <p className="hero-note">{t.heroNote}</p>

          <div className="hero-actions">
            <a href="#curriculum" className="button primary">
              {t.primary}
            </a>
            <a href="#projects" className="button secondary">
              {t.secondary}
            </a>
          </div>

          <div className="hero-proof-row">
            <span>Sensor Streams</span>
            <span>MQTT Pipeline</span>
            <span>AI Inference</span>
            <span>Edge Ready</span>
          </div>
        </div>

        <aside className="program-dossier">
          <div className="dossier-top">
            <div>
              <p className="dossier-label">Program dossier</p>
              <h2 className="display dossier-title">{t.dossierTitle}</h2>
            </div>
            <span className="dossier-badge">Flagship</span>
          </div>

          <div className="dossier-grid">
            {t.dossierStats.map(([number, label]) => (
              <div className="dossier-stat" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <ul className="dossier-list">
            {t.dossierList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="dossier-flow" aria-label="AIoT learning flow">
            <div>
              <small>AIoT System Loop</small>
              <strong>Sense → Stream → Engineer → Learn → Act</strong>
            </div>
            <div className="flow-dots">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </aside>
      </section>

      <section className="strip">
        <div className="page-shell strip-inner">
          {t.strip.map((item) => (
            <div className="strip-item" key={item}>
              <small>Focus</small>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Program method</p>
            <h2 className="display section-title">{t.methodTitle}</h2>
          </div>
          <p className="section-subtitle">{t.methodSubtitle}</p>
        </div>

        <div className="pillars">
          {t.pillars.map(([title, text], index) => (
            <article className="pillar" key={title}>
              <span className="pillar-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="light-section">
        <div className="page-shell section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Student outcomes</p>
              <h2 className="display section-title">{t.outcomesTitle}</h2>
            </div>
            <p className="section-subtitle">{t.outcomesSubtitle}</p>
          </div>

          <div className="outcome-grid">
            {t.deliverables.map((item) => (
              <article className="outcome-card" key={item}>
                <small>Deliverable</small>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">12-week curriculum</p>
            <h2 className="display section-title">{t.curriculumTitle}</h2>
          </div>
          <p className="section-subtitle">{t.curriculumSubtitle}</p>
        </div>

        <div className="curriculum-list">
          {chapters.map((chapter) => (
            <article className="chapter-row" key={chapter.week}>
              <div className="chapter-week">{chapter.week}</div>
              <h3 className="chapter-title">{chapter.title}</h3>
              <p className="chapter-copy">{chapter.copy}</p>
              <p className="chapter-lab">
                <span>Lab outcome</span>
                {chapter.lab}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="page-shell section">
        <div className="projects-layout">
          <div>
            <p className="eyebrow">Portfolio projects</p>
            <h2 className="display section-title">{t.projectsTitle}</h2>
            <p className="hero-note">{t.projectsSubtitle}</p>
          </div>

          <div className="project-grid">
            {t.projects.map((project, index) => (
              <article className="project-card" key={project}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{project}</h3>
                <p>
                  A guided build designed for GitHub documentation, project explanation,
                  portfolio presentation, and technical storytelling.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Course architecture</p>
            <h2 className="display section-title">{t.architectureTitle}</h2>
          </div>
          <p className="section-subtitle">{t.architectureSubtitle}</p>
        </div>

        <div className="architecture">
          {t.architecture.map(([key, value]) => (
            <div className="arch-row" key={key}>
              <div className="arch-key">{key}</div>
              <div className="arch-value">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="mentor" className="light-section">
        <div className="page-shell section">
          <div className="instructor-card">
            <div>
              <p className="eyebrow">Instructor</p>
              <h2 className="display section-title">{t.instructorTitle}</h2>
              <p>{t.instructorText}</p>
            </div>
            <div className="quote-box">
              <p className="display">“{t.quote}”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <div className="section-header">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="display section-title">{t.faqTitle}</h2>
          </div>
          <p className="section-subtitle">{t.faqSubtitle}</p>
        </div>

        <div className="faq-list">
          {t.faq.map(([question, answer]) => (
            <article className="faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-panel">
        <div className="page-shell">
          <p className="eyebrow">Final position</p>
          <h2 className="display">{t.finalTitle}</h2>
          <p>{t.finalText}</p>
        </div>
      </section>

      <footer className="page-shell footer">
        <p>© 2026 AIoT Professional Program. All rights reserved.</p>
        <p>Smart systems. Responsible AI. Real portfolio work.</p>
      </footer>
    </main>
  );
}
