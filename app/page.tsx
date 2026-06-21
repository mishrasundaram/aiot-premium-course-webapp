"use client";

import { useState } from "react";

type Lang = "en" | "vi";

const chapters = [
  {
    number: "01",
    title: "Course Introduction & AIoT Overview",
    duration: "7 lessons • 58 min",
    essence:
      "Understand the evolution from connected systems to intelligent systems, and why AIoT is the next serious layer of digital infrastructure.",
    topics: [
      "Welcome to the AIoT course",
      "How to get the best from this course",
      "Evolution of connected and intelligent systems",
      "AIoT overview",
      "AIoT vs Traditional IoT vs Pure AI",
      "Key components and technology enablers",
      "AIoT use cases across industries"
    ]
  },
  {
    number: "02",
    title: "IoT Foundation for AIoT",
    duration: "11 lessons • 2 hr 11 min",
    essence:
      "Build the technical base: sensors, gateways, protocols, cloud platforms, data flow and the AI-readiness of IoT architectures.",
    topics: [
      "IoT: what and why",
      "IoT building blocks",
      "Multilayered IoT architecture",
      "Sensors, devices and data generation",
      "IoT networking requirements",
      "Protocol landscape",
      "Gateways and edge concepts",
      "Data flow in IoT systems",
      "Cloud IoT platforms",
      "AI readiness in IoT architectures"
    ]
  },
  {
    number: "03",
    title: "IoT Foundation Hands-on Lab",
    duration: "7 labs • 49 min",
    essence:
      "Create the first working AIoT spine: virtual device, MQTT communication, MongoDB storage, dashboard view and simulated actuation.",
    topics: [
      "Environment setup",
      "Virtual IoT device",
      "MQTT publisher",
      "MQTT subscriber",
      "Store data in MongoDB",
      "Data visualization",
      "Simulate actuator",
      "Full integration"
    ]
  },
  {
    number: "04",
    title: "Data Engineering for AIoT",
    duration: "9 lessons • 2 hr 7 min",
    essence:
      "Turn noisy streaming sensor values into reliable, structured, AI-ready data assets for prediction and automation.",
    topics: [
      "Nature of IoT data",
      "Time-series and streaming data",
      "Data ingestion",
      "IoT data storage models",
      "Cleaning and normalization",
      "Feature engineering for sensor data",
      "Handling missing and anomalous data",
      "Preparing data for ML models",
      "End-to-end AIoT data pipeline"
    ]
  },
  {
    number: "05",
    title: "Data Engineering Hands-on Labs",
    duration: "9 labs • 1 hr 35 min",
    essence:
      "Build the operational data layer: simulate sensor streams, process them, store them, infer from them and visualize system behavior.",
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
    number: "06",
    title: "AI & Machine Learning for AIoT",
    duration: "12 lessons • 2 hr 22 min",
    essence:
      "Apply practical ML to IoT problems: prediction, classification, anomaly detection, predictive maintenance and model evaluation.",
    topics: [
      "AI/ML foundations for AIoT",
      "ML workflow in AIoT",
      "Supervised learning for IoT data",
      "Regression models for sensor prediction",
      "Classification for device states",
      "Unsupervised learning in AIoT",
      "Anomaly detection techniques",
      "Predictive maintenance models",
      "Model evaluation for real-world IoT",
      "Choosing the right ML model"
    ]
  },
  {
    number: "07",
    title: "AI & ML Hands-on Lab",
    duration: "7 labs • 1 hr 13 min",
    essence:
      "Move from theory to intelligence: build predictive maintenance, anomaly detection, forecasting, alerting and computer vision workflows.",
    topics: [
      "Predictive maintenance using supervised ML",
      "Anomaly detection using unsupervised ML",
      "Energy consumption forecasting",
      "AI-based smart alerting system",
      "Failure classification using ML",
      "AIoT computer vision lab"
    ]
  },
  {
    number: "08",
    title: "Deep Learning for AIoT",
    duration: "8 lessons • 1 hr 28 min",
    essence:
      "Understand when neural networks are worth using in AIoT, from CNNs for visual sensing to LSTMs and autoencoders for sensor intelligence.",
    topics: [
      "Why deep learning for AIoT",
      "Neural networks in IoT context",
      "CNNs for image and video-based IoT",
      "RNNs and LSTMs for sensor time-series",
      "Autoencoders for fault and anomaly detection",
      "Deep learning vs ML in AIoT",
      "Resource constraints and optimization",
      "Introduction to TinyML"
    ]
  },
  {
    number: "09",
    title: "Edge AI & TinyML",
    duration: "6 lessons • 1 hr 20 min",
    essence:
      "Bring intelligence closer to the physical world using edge inference, optimized models and TinyML thinking for constrained devices.",
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

const copy = {
  en: {
    nav: ["Experience", "Intelligence Loop", "Curriculum", "Labs", "Capstone"],
    lang: "VI",
    heroBadge: "Executive AIoT Learning Experience",
    heroTitleTop: "Build Intelligence",
    heroTitleBottom: "for the Physical World",
    heroLead:
      "A premium Artificial Intelligence of Things program for designing smart systems that sense, stream, learn, predict and act in real time.",
    heroBody:
      "This course connects IoT architecture, sensor data engineering, machine learning, deep learning, Edge AI and TinyML into one complete AIoT systems journey. Learners do not just study connected devices; they learn how to turn device data into operational intelligence.",
    primary: "Explore the Program",
    secondary: "View Capstone",
    signal: "From raw signal to autonomous decision.",
    stats: [
      ["9", "Strategic chapters"],
      ["50+", "Focused lessons"],
      ["15+", "Applied labs"],
      ["1", "Portfolio capstone"]
    ],
    experienceKicker: "Course positioning",
    experienceTitle: "Not a basic IoT course. A complete intelligence stack.",
    experienceBody:
      "Traditional IoT observes. AIoT interprets. It learns from streams, detects anomalies, forecasts risk, triggers alerts and moves decisions closer to devices. This program is designed as a premium path for engineers, developers, students, researchers and technology professionals who want to understand how modern intelligent infrastructure is built.",
    principles: [
      ["Architecture", "Design AI-ready IoT systems with sensors, gateways, protocols, cloud layers and edge concepts."],
      ["Data", "Prepare streaming and time-series IoT data through ingestion, storage, cleaning, normalization and feature engineering."],
      ["Intelligence", "Apply ML and deep learning to predictive maintenance, anomaly detection, forecasting and device-state classification."],
      ["Deployment", "Understand Edge AI, TinyML, optimization and the tradeoffs of latency, privacy, bandwidth and device constraints."]
    ],
    loopKicker: "The AIoT intelligence loop",
    loopTitle: "A system does not become smart by collecting data. It becomes smart by closing the loop.",
    loop: [
      ["Sense", "Sensors and devices generate temperature, vibration, humidity, energy, event, image and machine-health signals."],
      ["Stream", "MQTT pipelines, gateways and networking protocols move live data into the system."],
      ["Store", "Cloud databases such as MongoDB organize data so it can become searchable, useful and model-ready."],
      ["Engineer", "Cleaning, normalization and feature engineering convert noisy streams into meaningful machine learning inputs."],
      ["Learn", "Regression, classification, anomaly detection, forecasting, CNNs, LSTMs and autoencoders create intelligence."],
      ["Act", "Dashboards, alerts, actuator logic, edge inference and TinyML bring decisions back into the physical system."]
    ],
    curriculumKicker: "Curriculum architecture",
    curriculumTitle: "A course map built like a serious product roadmap.",
    curriculumBody:
      "Each chapter has a clear purpose: foundation, lab implementation, data engineering, machine learning, deep learning and edge deployment. The structure follows the real path of an AIoT system from sensor signal to intelligent action.",
    labKicker: "Signature practical track",
    labTitle: "The labs turn the course into a working AIoT build room.",
    labs: [
      ["01", "Virtual Sensor Studio", "Simulate real IoT signals such as temperature, humidity, vibration, energy and device health."],
      ["02", "MQTT Communication Core", "Build publisher and subscriber flows to understand how device messages travel."],
      ["03", "Cloud Data Vault", "Store sensor readings in MongoDB and structure the data for AI workflows."],
      ["04", "Data Refinery", "Clean, normalize and transform sensor streams into usable ML features."],
      ["05", "Predictive Maintenance Engine", "Train models that estimate device risk and possible machine failure."],
      ["06", "Anomaly Detection Lab", "Detect unusual device behavior using unsupervised learning."],
      ["07", "Smart Alerting Console", "Turn model outputs into intelligent warnings and operational signals."],
      ["08", "AIoT Dashboard", "Visualize system behavior, live readings, predictions and alerts in a clean interface."]
    ],
    capstoneKicker: "Final capstone",
    capstoneTitle: "AI-Powered Smart Monitoring System",
    capstoneBody:
      "The capstone combines the full AIoT stack into one portfolio-ready system: device simulation, MQTT streaming, MongoDB storage, data engineering, ML inference, smart alerts, dashboard visualization and Edge AI/TinyML deployment discussion.",
    capstoneItems: [
      "Virtual IoT sensor data generation",
      "MQTT communication pipeline",
      "MongoDB cloud storage",
      "Data cleaning and feature engineering",
      "Machine learning model training",
      "Real-time AI inference",
      "Smart alert generation",
      "Dashboard visualization",
      "Edge AI and TinyML readiness"
    ],
    audienceKicker: "Designed for",
    audienceTitle: "Builders who want to move from connected devices to intelligent systems.",
    audience: [
      ["IoT developers", "Add AI capability to sensor-driven and connected-device systems."],
      ["Software engineers", "Understand how cloud, data pipelines, dashboards and ML models work together."],
      ["Data engineers", "Work with streaming, time-series, missing, noisy and anomalous sensor data."],
      ["AI learners", "Apply ML to real infrastructure problems instead of static classroom datasets."],
      ["Embedded learners", "Explore Edge AI, TinyML and model optimization for low-power devices."],
      ["Researchers", "Use the course as a base for smart cities, industrial AIoT, healthcare sensing and intelligent infrastructure research."]
    ],
    finalTitle: "Teach the machine to understand the world around it.",
    finalBody:
      "A polished AIoT course page for a premium learning program in Edge AI, TinyML, smart systems and intelligent connected infrastructure.",
    footer: "AIoT Mastery • Artificial Intelligence of Things • Edge AI • TinyML • Smart Systems"
  },
  vi: {
    nav: ["Trải nghiệm", "Vòng lặp AIoT", "Lộ trình", "Lab", "Capstone"],
    lang: "EN",
    heroBadge: "Trải nghiệm học AIoT cao cấp",
    heroTitleTop: "Xây trí tuệ",
    heroTitleBottom: "cho thế giới vật lý",
    heroLead:
      "Chương trình Artificial Intelligence of Things cao cấp giúp thiết kế hệ thống thông minh có khả năng cảm nhận, truyền dữ liệu, học, dự đoán và hành động theo thời gian thực.",
    heroBody:
      "Khóa học kết nối kiến trúc IoT, sensor data engineering, machine learning, deep learning, Edge AI và TinyML thành một hành trình AIoT hoàn chỉnh. Người học không chỉ học thiết bị kết nối, mà học cách biến dữ liệu thiết bị thành operational intelligence.",
    primary: "Xem chương trình",
    secondary: "Xem capstone",
    signal: "Từ tín hiệu thô đến quyết định tự động.",
    stats: [
      ["9", "Chương chiến lược"],
      ["50+", "Bài học trọng tâm"],
      ["15+", "Lab ứng dụng"],
      ["1", "Capstone portfolio"]
    ],
    experienceKicker: "Định vị khóa học",
    experienceTitle: "Không phải khóa IoT cơ bản. Đây là một intelligence stack hoàn chỉnh.",
    experienceBody:
      "IoT truyền thống quan sát. AIoT diễn giải. Nó học từ dữ liệu stream, phát hiện bất thường, dự đoán rủi ro, tạo cảnh báo và đưa quyết định đến gần thiết bị hơn. Chương trình này dành cho kỹ sư, developer, sinh viên, researcher và chuyên gia công nghệ muốn hiểu cách hạ tầng thông minh hiện đại được xây dựng.",
    principles: [
      ["Architecture", "Thiết kế hệ thống IoT sẵn sàng cho AI với sensor, gateway, protocol, cloud layer và edge concept."],
      ["Data", "Chuẩn bị dữ liệu IoT streaming và time-series qua ingestion, storage, cleaning, normalization và feature engineering."],
      ["Intelligence", "Áp dụng ML và deep learning cho predictive maintenance, anomaly detection, forecasting và device-state classification."],
      ["Deployment", "Hiểu Edge AI, TinyML, optimization và tradeoff về latency, privacy, bandwidth và giới hạn thiết bị."]
    ],
    loopKicker: "Vòng lặp trí tuệ AIoT",
    loopTitle: "Một hệ thống không thông minh chỉ vì thu thập dữ liệu. Nó thông minh khi khép kín vòng lặp.",
    loop: [
      ["Sense", "Cảm biến và thiết bị tạo tín hiệu nhiệt độ, rung động, độ ẩm, năng lượng, event, hình ảnh và machine-health."],
      ["Stream", "MQTT pipeline, gateway và networking protocol đưa dữ liệu live vào hệ thống."],
      ["Store", "Cloud database như MongoDB tổ chức dữ liệu để có thể tìm kiếm, sử dụng và chuẩn bị cho model."],
      ["Engineer", "Cleaning, normalization và feature engineering biến stream nhiễu thành input có ý nghĩa cho ML."],
      ["Learn", "Regression, classification, anomaly detection, forecasting, CNN, LSTM và autoencoder tạo intelligence."],
      ["Act", "Dashboard, alert, actuator logic, edge inference và TinyML đưa quyết định quay lại hệ thống vật lý."]
    ],
    curriculumKicker: "Kiến trúc curriculum",
    curriculumTitle: "Một course map giống product roadmap nghiêm túc.",
    curriculumBody:
      "Mỗi chương có mục tiêu rõ ràng: foundation, lab implementation, data engineering, machine learning, deep learning và edge deployment. Cấu trúc đi theo hành trình thật của AIoT từ sensor signal đến intelligent action.",
    labKicker: "Track thực hành đặc trưng",
    labTitle: "Các lab biến khóa học thành một AIoT build room thực tế.",
    labs: [
      ["01", "Virtual Sensor Studio", "Mô phỏng tín hiệu IoT như nhiệt độ, độ ẩm, rung động, năng lượng và device health."],
      ["02", "MQTT Communication Core", "Xây publisher và subscriber flow để hiểu cách message thiết bị di chuyển."],
      ["03", "Cloud Data Vault", "Lưu sensor readings vào MongoDB và cấu trúc dữ liệu cho AI workflow."],
      ["04", "Data Refinery", "Làm sạch, chuẩn hóa và chuyển đổi sensor stream thành ML feature."],
      ["05", "Predictive Maintenance Engine", "Huấn luyện model ước lượng risk thiết bị và failure có thể xảy ra."],
      ["06", "Anomaly Detection Lab", "Phát hiện hành vi thiết bị bất thường bằng unsupervised learning."],
      ["07", "Smart Alerting Console", "Biến model output thành warning thông minh và operational signal."],
      ["08", "AIoT Dashboard", "Trực quan hóa system behavior, live readings, predictions và alerts."]
    ],
    capstoneKicker: "Capstone cuối khóa",
    capstoneTitle: "Hệ thống giám sát thông minh dùng AI",
    capstoneBody:
      "Capstone kết hợp toàn bộ AIoT stack trong một hệ thống portfolio-ready: device simulation, MQTT streaming, MongoDB storage, data engineering, ML inference, smart alerts, dashboard visualization và thảo luận Edge AI/TinyML deployment.",
    capstoneItems: [
      "Tạo dữ liệu cảm biến IoT ảo",
      "MQTT communication pipeline",
      "MongoDB cloud storage",
      "Data cleaning và feature engineering",
      "Huấn luyện ML model",
      "Real-time AI inference",
      "Smart alert generation",
      "Dashboard visualization",
      "Edge AI và TinyML readiness"
    ],
    audienceKicker: "Dành cho",
    audienceTitle: "Những builder muốn đi từ connected devices đến intelligent systems.",
    audience: [
      ["IoT developers", "Thêm năng lực AI vào hệ thống connected-device và sensor-driven."],
      ["Software engineers", "Hiểu cloud, data pipeline, dashboard và ML model hoạt động cùng nhau."],
      ["Data engineers", "Làm việc với streaming, time-series, missing, noisy và anomalous sensor data."],
      ["AI learners", "Áp dụng ML vào bài toán infrastructure thật thay vì dataset lớp học tĩnh."],
      ["Embedded learners", "Khám phá Edge AI, TinyML và model optimization cho thiết bị low-power."],
      ["Researchers", "Dùng khóa học làm nền cho smart cities, industrial AIoT, healthcare sensing và intelligent infrastructure research."]
    ],
    finalTitle: "Dạy máy hiểu thế giới xung quanh nó.",
    finalBody:
      "Một course page AIoT chỉn chu cho chương trình học premium về Edge AI, TinyML, smart systems và intelligent connected infrastructure.",
    footer: "AIoT Mastery • Artificial Intelligence of Things • Edge AI • TinyML • Smart Systems"
  }
};

function BrandLogo() {
  return (
    <span className="brand-logo">
      <img
        src="/logo.png"
        alt="AIoT course logo"
        onError={(event) => {
          const img = event.currentTarget;
          if (!img.dataset.fallback) {
            img.dataset.fallback = "true";
            img.src = "/aiot-logo.svg";
          } else {
            img.style.display = "none";
          }
        }}
      />
    </span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <main className="page">
      <div className="grain" />
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <nav className="nav">
        <div className="navInner">
          <a className="brand" href="#top">
            <BrandLogo />
            <span>
              <strong>AIoT Mastery</strong>
              <small>Edge AI • TinyML • Smart Systems</small>
            </span>
          </a>

          <div className="navLinks">
            <a href="#experience">{t.nav[0]}</a>
            <a href="#loop">{t.nav[1]}</a>
            <a href="#curriculum">{t.nav[2]}</a>
            <a href="#labs">{t.nav[3]}</a>
            <a href="#capstone">{t.nav[4]}</a>
            <button onClick={() => setLang(lang === "en" ? "vi" : "en")}>{t.lang}</button>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="badge">
            <span />
            {t.heroBadge}
          </div>

          <h1>
            <span>{t.heroTitleTop}</span>
            <span>{t.heroTitleBottom}</span>
          </h1>

          <p className="heroLead">{t.heroLead}</p>
          <p className="heroBody">{t.heroBody}</p>

          <div className="actions">
            <a href="#curriculum" className="primaryBtn">{t.primary}</a>
            <a href="#capstone" className="ghostBtn">{t.secondary}</a>
          </div>

          <p className="signalLine">{t.signal}</p>

          <div className="stats">
            {t.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="missionControl" aria-label="AIoT mission control interface">
          <div className="controlTop">
            <div>
              <small>AIoT Mission Control</small>
              <strong>Live Intelligence Stack</strong>
            </div>
            <span className="liveDot">ONLINE</span>
          </div>

          <div className="radar">
            <div className="ring ringA" />
            <div className="ring ringB" />
            <div className="ring ringC" />
            <div className="core">
              <strong>AIoT</strong>
              <span>Sense → Learn → Act</span>
            </div>

            <div className="node nodeA">
              <b>Sensor Fabric</b>
              <span>Vibration • Energy • Temperature</span>
            </div>
            <div className="node nodeB">
              <b>MQTT Stream</b>
              <span>Gateway • Broker • Subscriber</span>
            </div>
            <div className="node nodeC">
              <b>ML Decision</b>
              <span>Anomaly • Forecast • Alert</span>
            </div>
          </div>

          <div className="telemetry">
            <div>
              <span>Latency target</span>
              <strong>Edge-ready</strong>
            </div>
            <div>
              <span>Data type</span>
              <strong>Time-series</strong>
            </div>
            <div>
              <span>Final output</span>
              <strong>Smart action</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="sectionIntro">
          <span>{t.experienceKicker}</span>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceBody}</p>
        </div>

        <div className="principles">
          {t.principles.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="loopSection" id="loop">
        <div className="sectionIntro wide">
          <span>{t.loopKicker}</span>
          <h2>{t.loopTitle}</h2>
        </div>

        <div className="loopGrid">
          {t.loop.map(([title, body], index) => (
            <article key={title} className="loopCard">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="curriculum" id="curriculum">
        <div className="sectionIntro wide">
          <span>{t.curriculumKicker}</span>
          <h2>{t.curriculumTitle}</h2>
          <p>{t.curriculumBody}</p>
        </div>

        <div className="chapterList">
          {chapters.map((chapter, index) => (
            <details key={chapter.title} open={index < 2} className="chapter">
              <summary>
                <div className="chapterNumber">{chapter.number}</div>
                <div className="chapterTitle">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.essence}</p>
                </div>
                <div className="duration">{chapter.duration}</div>
              </summary>

              <div className="topicCloud">
                {chapter.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="labs" id="labs">
        <div className="sectionIntro wide">
          <span>{t.labKicker}</span>
          <h2>{t.labTitle}</h2>
        </div>

        <div className="labGrid">
          {t.labs.map(([number, title, body]) => (
            <article key={title} className="lab">
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capstone" id="capstone">
        <div className="capstonePanel">
          <div>
            <span>{t.capstoneKicker}</span>
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
        <div className="sectionIntro wide">
          <span>{t.audienceKicker}</span>
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
        <a href="#top" className="primaryBtn">Back to top</a>
      </section>

      <footer>
        <span>{t.footer}</span>
        <span>© 2026 AIoT Mastery</span>
      </footer>
    </main>
  );
}
