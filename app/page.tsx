"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const modules = [
  {
    no: "01",
    label: "Orientation",
    title: "AIoT Overview & Intelligent Systems",
    time: "7 lessons • 58 min",
    copy:
      "Understand how IoT evolved from connected monitoring into AI-powered decision systems.",
    topics: [
      "Evolution of connected and intelligent systems",
      "AIoT overview",
      "AIoT vs Traditional IoT vs Pure AI",
      "Key components and technology enablers",
      "Use cases across industries"
    ]
  },
  {
    no: "02",
    label: "Foundation",
    title: "IoT Architecture for AIoT",
    time: "11 lessons • 2 hr 11 min",
    copy:
      "Build the foundation: sensors, gateways, data flow, protocols, cloud platforms and AI-ready architectures.",
    topics: [
      "IoT building blocks",
      "Multilayered architecture",
      "Sensors and data generation",
      "Networking requirements",
      "Gateways and edge concepts",
      "Cloud IoT platforms"
    ]
  },
  {
    no: "03",
    label: "Lab System",
    title: "IoT Foundation Hands-on Lab",
    time: "7 labs • 49 min",
    copy:
      "Create a working IoT pipeline using virtual devices, MQTT, MongoDB, visualization and simulated actuation.",
    topics: [
      "Virtual IoT device",
      "MQTT publisher",
      "MQTT subscriber",
      "MongoDB storage",
      "Application visualization",
      "Actuator simulation"
    ]
  },
  {
    no: "04",
    label: "Data Layer",
    title: "Data Engineering for AIoT",
    time: "9 lessons • 2 hr 7 min",
    copy:
      "Convert raw sensor streams into clean, structured, model-ready intelligence assets.",
    topics: [
      "Time-series and streaming data",
      "Data ingestion",
      "Storage models",
      "Cleaning and normalization",
      "Feature engineering",
      "Missing and anomalous data"
    ]
  },
  {
    no: "05",
    label: "Pipeline Lab",
    title: "Data Engineering Hands-on Labs",
    time: "9 labs • 1 hr 35 min",
    copy:
      "Simulate, stream, store, transform, infer and visualize IoT data through an end-to-end AIoT pipeline.",
    topics: [
      "Sensor simulation",
      "MQTT streaming",
      "MongoDB storage",
      "Data pipeline",
      "Real-time AI inference",
      "AIoT dashboard"
    ]
  },
  {
    no: "06",
    label: "AI Core",
    title: "Machine Learning for AIoT",
    time: "12 lessons • 2 hr 22 min",
    copy:
      "Apply supervised and unsupervised learning to prediction, classification, anomaly detection and maintenance problems.",
    topics: [
      "ML workflow",
      "Regression for sensor prediction",
      "Classification for device states",
      "Unsupervised learning",
      "Anomaly detection",
      "Predictive maintenance"
    ]
  },
  {
    no: "07",
    label: "Applied AI",
    title: "AI & ML Hands-on Lab",
    time: "7 labs • 1 hr 13 min",
    copy:
      "Build predictive maintenance, anomaly detection, energy forecasting, smart alerts and AIoT vision workflows.",
    topics: [
      "Predictive maintenance",
      "Anomaly detection",
      "Energy forecasting",
      "Smart alerting",
      "Failure classification",
      "Computer vision lab"
    ]
  },
  {
    no: "08",
    label: "Deep Models",
    title: "Deep Learning for AIoT",
    time: "8 lessons • 1 hr 28 min",
    copy:
      "Explore CNNs, RNNs, LSTMs and autoencoders for image, video and time-series intelligence.",
    topics: [
      "Neural networks for IoT",
      "CNNs for image and video IoT",
      "RNNs and LSTMs",
      "Autoencoders",
      "Deep learning vs ML",
      "TinyML introduction"
    ]
  },
  {
    no: "09",
    label: "Deployment",
    title: "Edge AI & TinyML",
    time: "6 lessons • 1 hr 20 min",
    copy:
      "Move intelligence closer to devices through edge inference, optimization and TinyML deployment thinking.",
    topics: [
      "Introduction to Edge AI",
      "Introduction to TinyML",
      "Edge vs cloud inference",
      "Hardware ecosystems",
      "Model optimization",
      "Latency and privacy"
    ]
  }
];

const content = {
  en: {
    nav: ["Manifesto", "System", "Curriculum", "Labs", "Capstone"],
    lang: "VI",
    eyebrow: "QuanVerse × QuanSkill • AIoT Executive Program",
    titleA: "Artificial",
    titleB: "Intelligence",
    titleC: "of Things",
    subtitle:
      "A premium AIoT course for building intelligent connected systems that sense, stream, learn, predict and act in real time.",
    body:
      "This program connects IoT architecture, sensor data engineering, machine learning, deep learning, Edge AI and TinyML into one complete smart-systems pathway. It is designed for learners who want to build the next generation of intelligent infrastructure, not just understand isolated tools.",
    primary: "Explore the curriculum",
    secondary: "See the capstone",
    metrics: [
      ["9", "Strategic modules"],
      ["50+", "Focused lessons"],
      ["15+", "Practical labs"],
      ["1", "Portfolio system"]
    ],
    console: {
      title: "Signal-to-Intelligence Console",
      status: "SYSTEM ONLINE",
      lines: [
        "sensor.stream/temperature → stable",
        "mqtt.broker/session → connected",
        "feature.pipeline/status → prepared",
        "ml.inference/anomaly → monitoring",
        "edge.deployment/readiness → active"
      ]
    },
    manifestoTitle: "IoT connects the world. AIoT teaches it to understand itself.",
    manifestoBody:
      "Traditional IoT systems collect readings. AIoT systems interpret behavior. They recognize patterns, detect anomalies, forecast risk, trigger smart alerts and make decisions closer to the physical environment where data is born.",
    manifestoPoints: [
      ["From Monitoring to Intelligence", "Move beyond dashboards into predictive, adaptive and autonomous connected systems."],
      ["From Cloud Dependency to Edge Decisions", "Understand when inference belongs in the cloud, at the edge, or on a constrained device."],
      ["From Raw Data to Operational Insight", "Transform streaming sensor data into clean features, models, alerts and real-time system actions."]
    ],
    systemTitle: "The AIoT intelligence loop",
    systemBody:
      "Every premium AIoT system follows a loop: sense, stream, store, engineer, learn and act. The course is structured around this real-world loop.",
    loop: [
      ["Sense", "Sensors produce temperature, vibration, humidity, energy, vision and machine-health signals."],
      ["Stream", "MQTT, gateways and networking protocols move live device data through the system."],
      ["Store", "MongoDB and cloud layers organize readings for analytics, dashboards and AI workflows."],
      ["Engineer", "Cleaning, normalization and feature engineering prepare sensor data for models."],
      ["Learn", "ML and deep learning detect anomalies, classify states and predict events."],
      ["Act", "Smart alerts, dashboards, actuator logic, Edge AI and TinyML turn intelligence into response."]
    ],
    curriculumTitle: "A curriculum that behaves like a product roadmap",
    curriculumBody:
      "Each module has a role in the full AIoT stack: architecture, data, intelligence, deployment and portfolio-ready implementation.",
    labTitle: "Signature build labs",
    labBody:
      "The practical track makes learners build the full AIoT journey step by step, from virtual sensors to real-time inference and dashboards.",
    labs: [
      ["Virtual Device Studio", "Simulate realistic sensor streams for temperature, humidity, vibration, energy and machine condition."],
      ["MQTT Communication Core", "Build publisher-subscriber flows and understand how device messages move through AIoT systems."],
      ["Cloud Data Vault", "Store, structure and query IoT readings using MongoDB for AI and dashboard workflows."],
      ["AIoT Data Refinery", "Clean noisy data, handle missing values and engineer predictive features."],
      ["Predictive Maintenance Engine", "Train models that estimate risk, detect warning signs and predict possible failures."],
      ["Smart Alerting Console", "Turn model outputs into useful alerts, operational actions and dashboard insights."]
    ],
    capstoneTitle: "AI-Powered Smart Monitoring System",
    capstoneBody:
      "The final project integrates virtual sensor data, MQTT streaming, MongoDB storage, data engineering, ML inference, smart alerts, dashboard visualization and Edge AI/TinyML readiness into one professional portfolio system.",
    capstoneItems: [
      "Virtual IoT sensor generation",
      "MQTT streaming pipeline",
      "MongoDB cloud storage",
      "Data cleaning and feature engineering",
      "Machine learning inference",
      "Smart alert generation",
      "Dashboard visualization",
      "Edge AI/TinyML deployment discussion"
    ],
    audienceTitle: "Designed for serious builders",
    audience: [
      ["IoT Developers", "Add intelligence to sensor-driven systems and connected-device architectures."],
      ["Software Engineers", "Understand how cloud, streaming, AI models and dashboards connect."],
      ["Data Engineers", "Work with time-series, streaming, missing and anomalous sensor data."],
      ["AI Learners", "Apply machine learning to real infrastructure and device intelligence problems."],
      ["Embedded Learners", "Understand Edge AI, TinyML and optimization for constrained hardware."],
      ["Researchers", "Use AIoT as a foundation for smart cities, healthcare sensing, industry and infrastructure research."]
    ],
    finalTitle: "Build systems that do not just collect data. Build systems that understand.",
    finalBody:
      "A premium learning experience for the next generation of AI-powered connected infrastructure.",
    footer: "QuanVerse AIoT Mastery • Edge AI • TinyML • Smart Systems"
  },
  vi: {
    nav: ["Tư duy", "Hệ thống", "Lộ trình", "Lab", "Capstone"],
    lang: "EN",
    eyebrow: "QuanVerse × QuanSkill • Chương trình AIoT cao cấp",
    titleA: "Trí tuệ",
    titleB: "Nhân tạo",
    titleC: "của vạn vật",
    subtitle:
      "Khóa học AIoT cao cấp giúp xây dựng hệ thống kết nối thông minh có khả năng cảm nhận, truyền dữ liệu, học, dự đoán và hành động theo thời gian thực.",
    body:
      "Chương trình kết nối kiến trúc IoT, sensor data engineering, machine learning, deep learning, Edge AI và TinyML thành một lộ trình smart-systems hoàn chỉnh.",
    primary: "Xem curriculum",
    secondary: "Xem capstone",
    metrics: [
      ["9", "Module chiến lược"],
      ["50+", "Bài học trọng tâm"],
      ["15+", "Lab thực hành"],
      ["1", "Portfolio system"]
    ],
    console: {
      title: "Signal-to-Intelligence Console",
      status: "SYSTEM ONLINE",
      lines: [
        "sensor.stream/temperature → stable",
        "mqtt.broker/session → connected",
        "feature.pipeline/status → prepared",
        "ml.inference/anomaly → monitoring",
        "edge.deployment/readiness → active"
      ]
    },
    manifestoTitle: "IoT kết nối thế giới. AIoT giúp thế giới đó tự hiểu chính nó.",
    manifestoBody:
      "IoT truyền thống thu thập dữ liệu. AIoT diễn giải hành vi. Nó nhận diện pattern, phát hiện bất thường, dự đoán risk, tạo smart alert và đưa quyết định đến gần môi trường vật lý.",
    manifestoPoints: [
      ["Từ monitoring đến intelligence", "Vượt qua dashboard để xây hệ thống connected có khả năng dự đoán và thích ứng."],
      ["Từ cloud dependency đến edge decisions", "Hiểu khi nào inference nên ở cloud, edge hoặc thiết bị tài nguyên thấp."],
      ["Từ raw data đến operational insight", "Biến sensor data thành feature, model, alert và real-time action."]
    ],
    systemTitle: "Vòng lặp intelligence của AIoT",
    systemBody:
      "Một hệ thống AIoT cao cấp đi theo vòng lặp: sense, stream, store, engineer, learn và act.",
    loop: [
      ["Sense", "Sensor tạo tín hiệu nhiệt độ, rung động, độ ẩm, năng lượng, vision và machine-health."],
      ["Stream", "MQTT, gateway và networking protocol đưa dữ liệu live qua hệ thống."],
      ["Store", "MongoDB và cloud layer tổ chức dữ liệu cho analytics, dashboard và AI workflow."],
      ["Engineer", "Cleaning, normalization và feature engineering chuẩn bị sensor data cho model."],
      ["Learn", "ML và deep learning phát hiện anomaly, phân loại trạng thái và dự đoán sự kiện."],
      ["Act", "Smart alert, dashboard, actuator logic, Edge AI và TinyML biến intelligence thành response."]
    ],
    curriculumTitle: "Curriculum giống một product roadmap nghiêm túc",
    curriculumBody:
      "Mỗi module có vai trò trong AIoT stack: architecture, data, intelligence, deployment và implementation cho portfolio.",
    labTitle: "Các lab build đặc trưng",
    labBody:
      "Track thực hành giúp người học build AIoT từng bước, từ virtual sensor đến real-time inference và dashboard.",
    labs: [
      ["Virtual Device Studio", "Mô phỏng sensor stream cho nhiệt độ, độ ẩm, rung động, năng lượng và machine condition."],
      ["MQTT Communication Core", "Xây publisher-subscriber flow và hiểu message thiết bị di chuyển như thế nào."],
      ["Cloud Data Vault", "Lưu, cấu trúc và query IoT readings bằng MongoDB cho AI và dashboard."],
      ["AIoT Data Refinery", "Làm sạch dữ liệu nhiễu, xử lý missing values và tạo predictive features."],
      ["Predictive Maintenance Engine", "Huấn luyện model ước lượng risk và dự đoán failure có thể xảy ra."],
      ["Smart Alerting Console", "Biến model output thành alert, operational action và dashboard insight."]
    ],
    capstoneTitle: "Hệ thống giám sát thông minh dùng AI",
    capstoneBody:
      "Dự án cuối khóa tích hợp virtual sensor data, MQTT streaming, MongoDB storage, data engineering, ML inference, smart alerts, dashboard visualization và Edge AI/TinyML readiness.",
    capstoneItems: [
      "Tạo dữ liệu cảm biến IoT ảo",
      "MQTT streaming pipeline",
      "MongoDB cloud storage",
      "Data cleaning và feature engineering",
      "Machine learning inference",
      "Smart alert generation",
      "Dashboard visualization",
      "Edge AI/TinyML deployment discussion"
    ],
    audienceTitle: "Dành cho builder nghiêm túc",
    audience: [
      ["IoT Developers", "Thêm intelligence vào sensor-driven systems và connected-device architectures."],
      ["Software Engineers", "Hiểu cloud, streaming, AI model và dashboard kết nối với nhau."],
      ["Data Engineers", "Làm việc với time-series, streaming, missing và anomalous sensor data."],
      ["AI Learners", "Áp dụng ML vào bài toán infrastructure và device intelligence thực tế."],
      ["Embedded Learners", "Hiểu Edge AI, TinyML và optimization cho hardware giới hạn."],
      ["Researchers", "Dùng AIoT làm nền cho smart cities, healthcare sensing, industry và infrastructure research."]
    ],
    finalTitle: "Đừng chỉ xây hệ thống thu thập dữ liệu. Hãy xây hệ thống biết hiểu dữ liệu.",
    finalBody:
      "Một trải nghiệm học cao cấp cho thế hệ hạ tầng kết nối thông minh dùng AI.",
    footer: "QuanVerse AIoT Mastery • Edge AI • TinyML • Smart Systems"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="page">
      <div className="grain" />
      <div className="aurora auroraOne" />
      <div className="aurora auroraTwo" />

      <nav className="nav">
        <div className="navInner">
          <a href="#top" className="brand">
            <img src="/quanverse-aiot-logo.svg" alt="QuanVerse AIoT Mastery" />
          </a>

          <div className="navLinks">
            <a href="#manifesto">{t.nav[0]}</a>
            <a href="#system">{t.nav[1]}</a>
            <a href="#curriculum">{t.nav[2]}</a>
            <a href="#labs">{t.nav[3]}</a>
            <a href="#capstone">{t.nav[4]}</a>
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")}>{t.lang}</button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroLeft">
          <div className="eyebrow">{t.eyebrow}</div>

          <h1>
            <span>{t.titleA}</span>
            <span>{t.titleB}</span>
            <span>{t.titleC}</span>
          </h1>

          <p className="heroSubtitle">{t.subtitle}</p>
          <p className="heroBody">{t.body}</p>

          <div className="heroActions">
            <a href="#curriculum" className="buttonPrimary">{t.primary}</a>
            <a href="#capstone" className="buttonSecondary">{t.secondary}</a>
          </div>

          <div className="metrics">
            {t.metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="console">
          <div className="consoleTop">
            <div>
              <span>AIOT://MISSION-CONTROL</span>
              <strong>{t.console.title}</strong>
            </div>
            <b>{t.console.status}</b>
          </div>

          <div className="consoleBody">
            {t.console.lines.map((line) => (
              <code key={line}>{line}</code>
            ))}
          </div>

          <div className="orbital">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="orbit orbitThree" />
            <div className="orbitalCore">
              <strong>AIoT</strong>
              <span>Sense → Learn → Act</span>
            </div>

            <div className="miniNode nodeOne">Sensor</div>
            <div className="miniNode nodeTwo">MQTT</div>
            <div className="miniNode nodeThree">ML</div>
            <div className="miniNode nodeFour">Edge</div>
          </div>
        </aside>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="sectionHeader">
          <span>01 / Manifesto</span>
          <h2>{t.manifestoTitle}</h2>
          <p>{t.manifestoBody}</p>
        </div>

        <div className="manifestoGrid">
          {t.manifestoPoints.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="system" id="system">
        <div className="sectionHeader wide">
          <span>02 / System Design</span>
          <h2>{t.systemTitle}</h2>
          <p>{t.systemBody}</p>
        </div>

        <div className="loop">
          {t.loop.map(([title, body], index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="curriculum" id="curriculum">
        <div className="sectionHeader wide">
          <span>03 / Curriculum Architecture</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumBody}</p>
        </div>

        <div className="moduleList">
          {modules.map((module, index) => (
            <details className="module" key={module.title} open={index < 2}>
              <summary>
                <div className="moduleNo">{module.no}</div>
                <div className="moduleMain">
                  <span>{module.label}</span>
                  <h3>{module.title}</h3>
                  <p>{module.copy}</p>
                </div>
                <div className="moduleTime">{module.time}</div>
              </summary>

              <div className="topicCloud">
                {module.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="labs" id="labs">
        <div className="sectionHeader wide">
          <span>04 / Practical Build Track</span>
          <h2>{t.labTitle}</h2>
          <p>{t.labBody}</p>
        </div>

        <div className="labGrid">
          {t.labs.map(([title, body], index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capstone" id="capstone">
        <div className="capstonePanel">
          <div>
            <span>05 / Portfolio Capstone</span>
            <h2>{t.capstoneTitle}</h2>
            <p>{t.capstoneBody}</p>
          </div>

          <div className="capstoneItems">
            {t.capstoneItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="audience">
        <div className="sectionHeader wide">
          <span>06 / Audience</span>
          <h2>{t.audienceTitle}</h2>
        </div>

        <div className="audienceGrid">
          {t.audience.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <h2>{t.finalTitle}</h2>
        <p>{t.finalBody}</p>
        <a href="#top" className="buttonPrimary">Back to top</a>
      </section>

      <footer>
        <span>{t.footer}</span>
        <span>© 2026 QuanVerse</span>
      </footer>
    </main>
  );
}
