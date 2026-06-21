"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const curriculum = [
  {
    label: "Chapter 01",
    title: "Course Introduction & AIoT Overview",
    time: "7 lessons • 58 min",
    description:
      "A refined opening chapter that explains how connected systems evolved from simple monitoring tools into intelligent, decision-making AIoT ecosystems.",
    topics: [
      "Welcome to the AIoT journey",
      "How to get maximum value from the course",
      "Evolution of connected and intelligent systems",
      "AIoT overview and industry relevance",
      "AIoT vs Traditional IoT vs Pure AI",
      "Key components and technology enablers",
      "AIoT use cases across industries"
    ]
  },
  {
    label: "Chapter 02",
    title: "IoT Foundation for AIoT",
    time: "11 lessons • 2 hr 11 min",
    description:
      "A practical foundation in sensors, devices, gateways, protocols, data flow, cloud platforms, and the architecture needed before AI can be added.",
    topics: [
      "IoT: what and why",
      "Core IoT building blocks",
      "Multilayered IoT architecture",
      "Sensors, devices and data generation",
      "IoT networking requirements",
      "Protocol landscape",
      "Gateways and edge concepts",
      "Cloud IoT platform overview",
      "AI readiness in IoT architectures"
    ]
  },
  {
    label: "Chapter 03",
    title: "IoT Foundation Hands-on Lab",
    time: "7 labs • 49 min",
    description:
      "Learners build a working IoT flow using a virtual device, MQTT communication, cloud storage, data visualization, and simulated actuation.",
    topics: [
      "Environment setup",
      "Virtual IoT device",
      "MQTT publisher",
      "MQTT subscriber",
      "MongoDB cloud storage",
      "Application-layer visualization",
      "Physical action simulation",
      "Full integration"
    ]
  },
  {
    label: "Chapter 04",
    title: "Data Engineering for AIoT",
    time: "9 lessons • 2 hr 7 min",
    description:
      "A deep look at the real currency of AIoT: sensor data. Learners understand how raw streaming data becomes AI-ready intelligence.",
    topics: [
      "Nature of IoT data",
      "Time-series and streaming data",
      "Data ingestion",
      "IoT data storage models",
      "Cleaning and normalization",
      "Feature engineering for sensor data",
      "Missing and anomalous data",
      "Preparing data for ML models",
      "End-to-end AIoT data pipeline"
    ]
  },
  {
    label: "Chapter 05",
    title: "Data Engineering Hands-on Labs",
    time: "9 labs • 1 hr 35 min",
    description:
      "A practical pipeline chapter where learners simulate sensor data, stream it, store it, engineer features, run inference, and build a dashboard.",
    topics: [
      "Simulating IoT sensor data",
      "MQTT streaming pipeline",
      "Store data in MongoDB",
      "Data engineering pipeline",
      "AI/ML for AIoT",
      "Real-time AI inference",
      "AIoT dashboard",
      "Mini challenge assignment"
    ]
  },
  {
    label: "Chapter 06",
    title: "AI & Machine Learning for AIoT",
    time: "12 lessons • 2 hr 22 min",
    description:
      "The intelligence layer of the course. Learners apply supervised and unsupervised learning to real IoT-style problems.",
    topics: [
      "AI/ML foundations for AIoT",
      "ML workflow in AIoT",
      "Supervised learning for IoT data",
      "Regression for sensor prediction",
      "Classification for device states",
      "Unsupervised learning",
      "Anomaly detection techniques",
      "Predictive maintenance models",
      "Model evaluation for real-world IoT",
      "Choosing the right ML model"
    ]
  },
  {
    label: "Chapter 07",
    title: "AI & ML Hands-on Lab",
    time: "7 labs • 1 hr 13 min",
    description:
      "Learners move from model theory to real applied intelligence: prediction, forecasting, alerts, classification, and computer vision for AIoT.",
    topics: [
      "Predictive maintenance using supervised ML",
      "Predictive maintenance model improvement",
      "Anomaly detection using unsupervised ML",
      "Energy consumption forecasting",
      "AI-based smart alerting system",
      "Failure classification using ML",
      "AIoT computer vision lab"
    ]
  },
  {
    label: "Chapter 08",
    title: "Deep Learning for AIoT",
    time: "8 lessons • 1 hr 28 min",
    description:
      "A guided introduction to neural networks, CNNs, RNNs, LSTMs, autoencoders, and model constraints inside intelligent connected environments.",
    topics: [
      "Why deep learning for AIoT",
      "Neural networks in IoT context",
      "CNNs for image and video IoT",
      "RNNs and LSTMs for sensor time-series",
      "Autoencoders for fault detection",
      "Deep learning vs machine learning",
      "Resource constraints and optimization",
      "Introduction to TinyML"
    ]
  },
  {
    label: "Chapter 09",
    title: "Edge AI & TinyML",
    time: "6 lessons • 1 hr 20 min",
    description:
      "The course closes with the future of intelligent devices: moving AI from cloud-only systems to edge devices and microcontrollers.",
    topics: [
      "Introduction to Edge AI",
      "Introduction to TinyML",
      "Edge vs cloud inference",
      "Edge AI and TinyML hardware ecosystems",
      "Model optimization techniques",
      "Latency, bandwidth and privacy tradeoffs"
    ]
  }
];

const translations = {
  en: {
    nav: ["Experience", "Curriculum", "Labs", "Capstone"],
    lang: "VI",
    heroLabel: "AIoT Executive Learning Program",
    heroTitle: "Artificial Intelligence of Things",
    heroLine:
      "A premium course experience for building intelligent connected systems that sense, stream, learn, predict and act in real time.",
    heroSub:
      "This is not another basic IoT course. This is a structured AIoT pathway that connects IoT architecture, sensor data engineering, machine learning, deep learning, Edge AI and TinyML into one complete smart-systems journey.",
    primary: "Explore Curriculum",
    secondary: "View Capstone",
    trusted: "Designed for engineers, developers, researchers and future builders of intelligent infrastructure.",
    metrics: [
      ["9", "Chapters"],
      ["50+", "Lessons"],
      ["15+", "Labs"],
      ["1", "Capstone"]
    ],
    manifestoTitle: "The next generation of IoT will not just connect. It will understand.",
    manifestoBody:
      "Traditional IoT systems collect data. AIoT systems interpret it. They detect abnormal behavior, forecast failures, classify device states, optimize resources and make fast decisions close to where data is produced.",
    cards: [
      ["Sense", "Sensors and devices generate time-series, streaming, event and visual data."],
      ["Stream", "MQTT, gateways and cloud platforms move data through the system."],
      ["Engineer", "Raw data is cleaned, normalized and converted into ML-ready features."],
      ["Learn", "ML and deep learning models discover patterns, anomalies and predictions."],
      ["Act", "Smart alerts, dashboards and simulated actuators convert intelligence into response."],
      ["Deploy", "Edge AI and TinyML bring intelligence closer to the physical world."]
    ],
    section1Kicker: "Course position",
    section1Title: "Built for serious learners who want the complete AIoT stack.",
    section1Body:
      "The course begins with IoT foundations and gradually moves into data pipelines, AI workflows, predictive maintenance, anomaly detection, deep learning, Edge AI and TinyML. Each topic is connected to real AIoT use cases such as smart cities, industrial monitoring, healthcare sensing, energy systems and intelligent infrastructure.",
    highlights: [
      "AI-ready IoT architecture",
      "Sensor data engineering",
      "MQTT communication",
      "MongoDB cloud storage",
      "Predictive maintenance",
      "Anomaly detection",
      "Smart alerting systems",
      "Energy forecasting",
      "Computer vision for AIoT",
      "TinyML and edge deployment"
    ],
    curriculumKicker: "Full curriculum",
    curriculumTitle: "A course blueprint that feels like a product, not a playlist.",
    curriculumBody:
      "Every chapter has a clear role. Foundation, implementation, intelligence, optimization and final deployment thinking are arranged as one premium learning path.",
    labKicker: "Signature lab journey",
    labTitle: "From virtual sensor to real-time intelligence.",
    labBody:
      "The hands-on track is designed to make the learner feel the system end-to-end: generate data, move it, store it, clean it, model it, infer from it and visualize it.",
    labs: [
      ["01", "Virtual Device Studio", "Create virtual IoT devices that generate temperature, humidity, vibration, energy or machine-health data."],
      ["02", "MQTT Intelligence Pipeline", "Build publisher-subscriber communication and understand how real IoT data moves across systems."],
      ["03", "Cloud Data Vault", "Store and structure IoT data in MongoDB so it becomes usable for dashboards and AI workflows."],
      ["04", "AIoT Data Refinery", "Clean, normalize and transform noisy sensor streams into model-ready features."],
      ["05", "Predictive Maintenance Engine", "Train ML models that predict machine risk, device state and possible failure."],
      ["06", "Smart Alerting Layer", "Create AI-powered alerts that turn predictions into useful operational actions."],
      ["07", "Executive Dashboard", "Visualize live system behavior, device health, anomaly status and prediction insights."],
      ["08", "Edge Readiness Review", "Understand how trained models can be optimized for edge devices and TinyML environments."]
    ],
    capstoneKicker: "Final capstone",
    capstoneTitle: "AI-Powered Smart Monitoring System",
    capstoneBody:
      "The final project brings the entire course together. Learners design an end-to-end AIoT solution that can monitor a system, analyze sensor behavior, detect abnormal conditions, predict risk and present intelligence through a clean dashboard.",
    capstoneItems: [
      "Virtual IoT sensor data generation",
      "MQTT data communication",
      "MongoDB cloud storage",
      "Data cleaning and feature engineering",
      "ML model training",
      "Real-time inference",
      "Smart alert generation",
      "Dashboard visualization",
      "Edge AI and TinyML deployment discussion"
    ],
    audienceKicker: "Who it is for",
    audienceTitle: "Made for builders of intelligent connected systems.",
    audience: [
      ["IoT Developers", "Move beyond device connectivity and learn how to add intelligence to connected systems."],
      ["Software Engineers", "Understand how AI models interact with device data, streaming pipelines and cloud systems."],
      ["Data Engineers", "Work with time-series, streaming, missing, noisy and anomalous sensor data."],
      ["AI Learners", "Apply machine learning to real-world IoT problems instead of only static textbook datasets."],
      ["Embedded Learners", "Understand the role of Edge AI, optimization and TinyML in resource-constrained devices."],
      ["Researchers", "Build a structured foundation for smart systems, industrial AIoT and intelligent infrastructure research."]
    ],
    finalTitle: "Turn connected devices into intelligent decision-making systems.",
    finalBody:
      "A polished AIoT learning experience for modern builders who want to design the next generation of smart infrastructure.",
    footer: "AIoT Premium Course • Edge AI • TinyML • Smart Systems"
  },
  vi: {
    nav: ["Trải nghiệm", "Lộ trình", "Lab", "Capstone"],
    lang: "EN",
    heroLabel: "Chương trình học AIoT cao cấp",
    heroTitle: "Trí tuệ nhân tạo của vạn vật",
    heroLine:
      "Một trải nghiệm học cao cấp giúp xây dựng hệ thống kết nối thông minh có khả năng cảm nhận, truyền dữ liệu, học, dự đoán và hành động theo thời gian thực.",
    heroSub:
      "Đây không phải là khóa IoT cơ bản. Đây là lộ trình AIoT hoàn chỉnh kết nối kiến trúc IoT, data engineering cho sensor data, machine learning, deep learning, Edge AI và TinyML trong một hành trình smart systems.",
    primary: "Xem lộ trình",
    secondary: "Xem capstone",
    trusted: "Thiết kế cho kỹ sư, developer, researcher và những người xây dựng hạ tầng thông minh tương lai.",
    metrics: [
      ["9", "Chương"],
      ["50+", "Bài học"],
      ["15+", "Lab"],
      ["1", "Capstone"]
    ],
    manifestoTitle: "Thế hệ IoT tiếp theo sẽ không chỉ kết nối. Nó sẽ hiểu.",
    manifestoBody:
      "IoT truyền thống thu thập dữ liệu. AIoT diễn giải dữ liệu. Nó phát hiện bất thường, dự đoán lỗi, phân loại trạng thái thiết bị, tối ưu tài nguyên và ra quyết định nhanh gần nơi dữ liệu được tạo ra.",
    cards: [
      ["Sense", "Cảm biến và thiết bị tạo dữ liệu time-series, streaming, event và visual."],
      ["Stream", "MQTT, gateway và cloud platform đưa dữ liệu đi qua hệ thống."],
      ["Engineer", "Dữ liệu thô được làm sạch, chuẩn hóa và chuyển thành feature cho ML."],
      ["Learn", "ML và deep learning tìm pattern, anomaly và prediction."],
      ["Act", "Alert, dashboard và actuator mô phỏng chuyển intelligence thành hành động."],
      ["Deploy", "Edge AI và TinyML đưa intelligence đến gần thế giới vật lý hơn."]
    ],
    section1Kicker: "Định vị khóa học",
    section1Title: "Dành cho người học nghiêm túc muốn nắm toàn bộ AIoT stack.",
    section1Body:
      "Khóa học bắt đầu từ nền tảng IoT rồi đi vào data pipeline, AI workflow, predictive maintenance, anomaly detection, deep learning, Edge AI và TinyML. Mỗi phần đều gắn với use case thật như smart city, industrial monitoring, healthcare sensing, energy systems và intelligent infrastructure.",
    highlights: [
      "Kiến trúc IoT sẵn sàng cho AI",
      "Sensor data engineering",
      "MQTT communication",
      "MongoDB cloud storage",
      "Predictive maintenance",
      "Anomaly detection",
      "Smart alerting systems",
      "Energy forecasting",
      "Computer vision cho AIoT",
      "TinyML và edge deployment"
    ],
    curriculumKicker: "Lộ trình đầy đủ",
    curriculumTitle: "Course blueprint giống một sản phẩm cao cấp, không phải playlist rời rạc.",
    curriculumBody:
      "Mỗi chương có vai trò rõ ràng. Foundation, implementation, intelligence, optimization và deployment thinking được sắp xếp thành một learning path premium.",
    labKicker: "Lab journey đặc trưng",
    labTitle: "Từ sensor ảo đến real-time intelligence.",
    labBody:
      "Track thực hành giúp người học cảm nhận toàn bộ hệ thống: tạo dữ liệu, truyền dữ liệu, lưu trữ, làm sạch, huấn luyện model, inference và visualization.",
    labs: [
      ["01", "Virtual Device Studio", "Tạo thiết bị IoT ảo sinh dữ liệu nhiệt độ, độ ẩm, rung động, năng lượng hoặc machine health."],
      ["02", "MQTT Intelligence Pipeline", "Xây publisher-subscriber communication và hiểu cách dữ liệu IoT di chuyển trong hệ thống."],
      ["03", "Cloud Data Vault", "Lưu và cấu trúc dữ liệu IoT trong MongoDB để dùng cho dashboard và AI workflow."],
      ["04", "AIoT Data Refinery", "Làm sạch, chuẩn hóa và chuyển sensor stream nhiễu thành feature sẵn sàng cho model."],
      ["05", "Predictive Maintenance Engine", "Huấn luyện ML model dự đoán risk, device state và failure có thể xảy ra."],
      ["06", "Smart Alerting Layer", "Tạo alert dùng AI để biến prediction thành hành động vận hành hữu ích."],
      ["07", "Executive Dashboard", "Trực quan hóa behavior, device health, anomaly status và prediction insight."],
      ["08", "Edge Readiness Review", "Hiểu cách tối ưu model cho edge device và môi trường TinyML."]
    ],
    capstoneKicker: "Capstone cuối khóa",
    capstoneTitle: "Hệ thống giám sát thông minh dùng AI",
    capstoneBody:
      "Dự án cuối khóa kết hợp toàn bộ nội dung. Người học thiết kế giải pháp AIoT end-to-end để giám sát hệ thống, phân tích sensor behavior, phát hiện bất thường, dự đoán risk và trình bày intelligence qua dashboard.",
    capstoneItems: [
      "Tạo dữ liệu cảm biến IoT ảo",
      "MQTT data communication",
      "MongoDB cloud storage",
      "Data cleaning và feature engineering",
      "Huấn luyện ML model",
      "Real-time inference",
      "Tạo smart alert",
      "Dashboard visualization",
      "Thảo luận Edge AI và TinyML deployment"
    ],
    audienceKicker: "Đối tượng",
    audienceTitle: "Dành cho người xây dựng hệ thống kết nối thông minh.",
    audience: [
      ["IoT Developers", "Vượt khỏi mức connectivity và học cách thêm intelligence vào connected systems."],
      ["Software Engineers", "Hiểu cách AI model tương tác với device data, streaming pipeline và cloud system."],
      ["Data Engineers", "Làm việc với time-series, streaming, missing, noisy và anomalous sensor data."],
      ["AI Learners", "Áp dụng ML vào bài toán IoT thực tế thay vì chỉ dùng static textbook dataset."],
      ["Embedded Learners", "Hiểu vai trò của Edge AI, optimization và TinyML trên thiết bị tài nguyên thấp."],
      ["Researchers", "Xây nền tảng cho smart systems, industrial AIoT và intelligent infrastructure research."]
    ],
    finalTitle: "Biến thiết bị kết nối thành hệ thống ra quyết định thông minh.",
    finalBody:
      "Một trải nghiệm học AIoT chỉn chu cho những builder hiện đại muốn thiết kế thế hệ smart infrastructure tiếp theo.",
    footer: "AIoT Premium Course • Edge AI • TinyML • Smart Systems"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <main className="site-shell">
      <div className="luxury-noise" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="logo-frame">
              <img src="/logo.png" alt="Course logo" />
            </span>
            <span className="brand-copy">
              <strong>AIoT Mastery</strong>
              <small>Edge AI • TinyML • Smart Systems</small>
            </span>
          </a>

          <div className="nav-links">
            {t.nav.map((item) => (
              <a key={item} href={`#${item === t.nav[0] ? "experience" : item === t.nav[1] ? "curriculum" : item === t.nav[2] ? "labs" : "capstone"}`}>
                {item}
              </a>
            ))}
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")} className="lang-switch">
              {t.lang}
            </button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              {t.heroLabel}
            </div>

            <h1>{t.heroTitle}</h1>

            <p className="hero-line">{t.heroLine}</p>
            <p className="hero-sub">{t.heroSub}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#curriculum">{t.primary}</a>
              <a className="btn btn-secondary" href="#capstone">{t.secondary}</a>
            </div>

            <p className="trusted-line">{t.trusted}</p>

            <div className="metric-row">
              {t.metrics.map(([number, label]) => (
                <div className="metric" key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-art" aria-label="AIoT system architecture visual">
            <div className="art-card art-card-a">
              <small>01</small>
              <b>Device Signal</b>
              <span>Temperature • Vibration • Energy • Vision</span>
            </div>
            <div className="art-card art-card-b">
              <small>02</small>
              <b>Data Pipeline</b>
              <span>MQTT • Cloud • Storage • Feature Layer</span>
            </div>
            <div className="art-card art-card-c">
              <small>03</small>
              <b>AI Decision</b>
              <span>Prediction • Anomaly • Maintenance • Alerts</span>
            </div>

            <div className="ai-core">
              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />
              <div className="core-ring ring-three" />
              <div className="core-center">
                <strong>AIoT</strong>
                <span>Sense → Learn → Act</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="experience">
        <div className="manifesto-inner">
          <div>
            <h2>{t.manifestoTitle}</h2>
            <p>{t.manifestoBody}</p>
          </div>

          <div className="system-grid">
            {t.cards.map(([title, body]) => (
              <article key={title} className="system-card">
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="section-heading">
          <span>{t.section1Kicker}</span>
          <h2>{t.section1Title}</h2>
          <p>{t.section1Body}</p>
        </div>

        <div className="highlight-marquee">
          {t.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="premium-section curriculum-section" id="curriculum">
        <div className="section-heading wide">
          <span>{t.curriculumKicker}</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumBody}</p>
        </div>

        <div className="curriculum-list">
          {curriculum.map((item, index) => (
            <details key={item.title} className="curriculum-card" open={index < 2}>
              <summary>
                <div className="chapter-label">{item.label}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="time-pill">{item.time}</span>
              </summary>

              <div className="topic-wrap">
                {item.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="premium-section" id="labs">
        <div className="section-heading wide">
          <span>{t.labKicker}</span>
          <h2>{t.labTitle}</h2>
          <p>{t.labBody}</p>
        </div>

        <div className="lab-grid">
          {t.labs.map(([number, title, body]) => (
            <article key={title} className="lab-card">
              <div>{number}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="premium-section capstone-section" id="capstone">
        <div className="capstone-panel">
          <div>
            <span className="section-kicker">{t.capstoneKicker}</span>
            <h2>{t.capstoneTitle}</h2>
            <p>{t.capstoneBody}</p>
          </div>

          <div className="capstone-list">
            {t.capstoneItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section audience-section">
        <div className="section-heading wide">
          <span>{t.audienceKicker}</span>
          <h2>{t.audienceTitle}</h2>
        </div>

        <div className="audience-grid">
          {t.audience.map(([title, body]) => (
            <article key={title} className="audience-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <h2>{t.finalTitle}</h2>
          <p>{t.finalBody}</p>
          <a className="btn btn-primary" href="#top">Back to top</a>
        </div>
      </section>

      <footer className="footer">
        <span>{t.footer}</span>
        <span>© 2026 AIoT Mastery</span>
      </footer>
    </main>
  );
}
