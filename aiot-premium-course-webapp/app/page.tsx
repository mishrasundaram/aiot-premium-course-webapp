"use client";

import { useMemo, useState } from "react";

type Lang = "en" | "vi";

type Module = {
  title: string;
  meta: string;
  topics: string[];
  outcome: string;
};

const content = {
  en: {
    navSubtitle: "Edge AI • TinyML • Smart Systems",
    nav: ["Learn", "Curriculum", "Labs", "Capstone"],
    switchLabel: "VI",
    heroEyebrow: "Premium AIoT Learning Experience",
    heroTitle: "AIoT: Artificial Intelligence of Things",
    heroSubtitle:
      "Build intelligent connected systems that can sense, stream, analyze, predict, and act in real time using IoT, machine learning, Edge AI, and TinyML.",
    primaryCta: "View Curriculum",
    secondaryCta: "Explore Capstone",
    stats: [
      ["9", "Premium modules"],
      ["50+", "Focused lessons"],
      ["15+", "Hands-on labs"],
      ["1", "Portfolio capstone"]
    ],
    visualCards: [
      ["Sensor Layer", "Virtual and physical devices generate time-series, event, image, and machine data."],
      ["MQTT + Cloud", "Stream, store, clean, normalize, and prepare IoT data for AI workflows."],
      ["AI Intelligence", "Train ML and DL models for prediction, anomaly detection, and smart alerts."],
      ["Edge Action", "Move intelligence closer to devices using Edge AI, TinyML, and optimized models."]
    ],
    learnKicker: "What you will learn",
    learnTitle: "From connected devices to intelligent systems.",
    learnLead:
      "The page is designed like an expensive course landing page: premium visuals, clear outcomes, deep curriculum, and strong project positioning.",
    learn: [
      ["AIoT Architecture", "Understand how Artificial Intelligence integrates with IoT systems to create intelligent, data-driven architectures."],
      ["Real-Time Decisions", "Design AI-enabled IoT solutions capable of real-time decision making using modern AIoT principles."],
      ["Sensor Data Intelligence", "Analyze IoT sensor data and apply ML techniques to detect patterns, anomalies, trends, and predictive insights."],
      ["Edge AI + TinyML", "Understand how Edge AI and TinyML enable models to run on resource-constrained IoT devices."],
      ["Data Engineering", "Build AIoT data pipelines using simulation, MQTT, cloud storage, preprocessing, and dashboards."],
      ["Capstone Portfolio", "Create a professional AI-powered smart monitoring system that can become a portfolio project."]
    ],
    pillarsKicker: "Learning pathway",
    pillarsTitle: "A luxury-grade AIoT roadmap.",
    pillarsLead:
      "The structure moves learners from foundation to implementation, then into machine learning, deep learning, and edge deployment thinking.",
    pillars: [
      ["01", "Sense", "Understand sensors, devices, gateways, networks, IoT architecture, and data generation."],
      ["02", "Stream", "Move data through MQTT, cloud storage, databases, dashboards, and data pipelines."],
      ["03", "Learn", "Apply ML and deep learning for forecasting, classification, anomaly detection, and maintenance."],
      ["04", "Deploy", "Understand Edge AI, TinyML, optimization, latency, privacy, and embedded intelligence."]
    ],
    curriculumKicker: "Curriculum",
    curriculumTitle: "Premium course structure.",
    curriculumLead:
      "A complete AIoT curriculum that can be used for an online course page, workshop website, training program, or product landing page.",
    curriculumPanelTitle: "AIoT Course Blueprint",
    curriculumPanelBody:
      "This page is built for a serious audience: engineers, students, developers, researchers, and professionals who want to move from IoT basics to AI-powered smart systems.",
    meta: [["Level", "Beginner to Intermediate"], ["Format", "Lectures + Labs"], ["Mode", "Online / Hybrid"], ["Focus", "AIoT Implementation"]],
    labKicker: "Hands-on labs",
    labTitle: "A practical build journey.",
    labLead:
      "The lab flow makes the course feel real: learners do not only watch theory, they build the AIoT pipeline step by step.",
    labs: [
      ["Lab Path 01", "IoT Foundation", "Set up a virtual IoT device, stream data with MQTT, store it in MongoDB, visualize it, and simulate actuator actions."],
      ["Lab Path 02", "Data Engineering", "Simulate sensor data, clean missing values, normalize streams, engineer features, and prepare ML-ready datasets."],
      ["Lab Path 03", "AI/ML Models", "Build predictive maintenance, anomaly detection, energy forecasting, smart alerting, and failure classification models."],
      ["Lab Path 04", "Edge Thinking", "Explore optimization, lightweight inference, Edge AI tradeoffs, TinyML concepts, and deployment readiness."]
    ],
    capstoneKicker: "Capstone",
    capstoneTitle: "AI-Powered Smart Monitoring System",
    capstoneBody:
      "Learners design an end-to-end AIoT solution that generates sensor data, streams it, stores it, processes it, trains models, performs inference, triggers alerts, and presents intelligence through a dashboard.",
    capstoneItems: [
      "Virtual IoT sensor data generation",
      "MQTT communication pipeline",
      "MongoDB cloud storage",
      "Data cleaning and feature engineering",
      "Machine learning model training",
      "Real-time inference and smart alerts",
      "Dashboard visualization",
      "Edge AI/TinyML deployment discussion"
    ],
    stackTitle: "Tools and technologies",
    stackBody:
      "A practical stack that keeps the course realistic, affordable, and easy to reproduce on a normal learner machine.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "MQTT", "Mosquitto", "MongoDB Atlas", "Google Colab", "Jupyter", "TensorFlow", "Keras", "TensorFlow Lite", "Streamlit", "Edge AI", "TinyML"],
    outcomesKicker: "Outcomes",
    outcomesTitle: "Learners finish with real AIoT capability.",
    outcomesLead:
      "The outcome section is written for conversion: clear, practical, and aligned with what learners want to build.",
    outcomes: [
      ["Architecture", "Design AI-ready IoT architectures and explain the full AIoT technology stack."],
      ["Data Pipeline", "Use MQTT, databases, cleaning, normalization, and feature engineering for IoT data."],
      ["AI Models", "Apply ML/DL models for prediction, classification, anomaly detection, and smart alerting."],
      ["Edge AI", "Explain how edge inference improves latency, privacy, bandwidth efficiency, and real-time decisions."],
      ["Dashboard", "Build dashboards that turn raw sensor readings into useful operational intelligence."],
      ["Portfolio", "Complete a capstone project suitable for academic, professional, or startup presentation."]
    ],
    audienceKicker: "Audience",
    audienceTitle: "Who this course is for.",
    audienceLead:
      "The page positions the course for learners who want practical AIoT skills, not just scattered IoT or AI theory.",
    audience: [
      ["IoT Developers", "Engineers who want to build intelligent connected devices and smart infrastructure."],
      ["AI Learners", "Students and practitioners who want real-world sensor data projects beyond textbook datasets."],
      ["Data Engineers", "Builders working with streaming, time-series, industrial, and sensor-generated data."],
      ["Embedded Learners", "People interested in Edge AI, TinyML, microcontrollers, and optimized inference."],
      ["Researchers", "Academic learners exploring smart systems, automation, intelligent infrastructure, and AIoT."],
      ["Entrepreneurs", "Founders building AI-powered hardware, monitoring systems, or industrial automation products."]
    ],
    finalTitle: "Build systems that sense, analyze, learn, predict, and act.",
    finalBody:
      "This premium AIoT landing page is ready for a modern course website, workshop campaign, or training program launch.",
    footer: "AIoT Premium Course Web App • Built with Next.js"
  },
  vi: {
    navSubtitle: "Edge AI • TinyML • Hệ thống thông minh",
    nav: ["Nội dung", "Lộ trình", "Thực hành", "Dự án cuối"],
    switchLabel: "EN",
    heroEyebrow: "Trải nghiệm học AIoT cao cấp",
    heroTitle: "AIoT: Trí tuệ nhân tạo của vạn vật",
    heroSubtitle:
      "Xây dựng hệ thống kết nối thông minh có khả năng cảm nhận, truyền dữ liệu, phân tích, dự đoán và hành động theo thời gian thực bằng IoT, Machine Learning, Edge AI và TinyML.",
    primaryCta: "Xem lộ trình",
    secondaryCta: "Xem capstone",
    stats: [
      ["9", "Module cao cấp"],
      ["50+", "Bài học trọng tâm"],
      ["15+", "Lab thực hành"],
      ["1", "Dự án portfolio"]
    ],
    visualCards: [
      ["Lớp cảm biến", "Thiết bị ảo và thiết bị vật lý tạo dữ liệu time-series, event, hình ảnh và dữ liệu máy móc."],
      ["MQTT + Cloud", "Truyền, lưu trữ, làm sạch, chuẩn hóa và chuẩn bị dữ liệu IoT cho quy trình AI."],
      ["Trí tuệ AI", "Huấn luyện mô hình ML/DL cho dự đoán, phát hiện bất thường và cảnh báo thông minh."],
      ["Hành động tại Edge", "Đưa trí tuệ đến gần thiết bị hơn bằng Edge AI, TinyML và mô hình tối ưu." ]
    ],
    learnKicker: "Bạn sẽ học được gì",
    learnTitle: "Từ thiết bị kết nối đến hệ thống thông minh.",
    learnLead:
      "Trang này được thiết kế như landing page khóa học cao cấp: giao diện premium, outcome rõ ràng, curriculum sâu và định vị dự án mạnh.",
    learn: [
      ["Kiến trúc AIoT", "Hiểu cách AI tích hợp với IoT để tạo kiến trúc thông minh và dựa trên dữ liệu."],
      ["Ra quyết định thời gian thực", "Thiết kế giải pháp IoT có AI để ra quyết định nhanh theo nguyên lý AIoT hiện đại."],
      ["Trí tuệ dữ liệu cảm biến", "Phân tích dữ liệu cảm biến IoT và dùng ML để phát hiện mẫu, bất thường, xu hướng và insight dự đoán."],
      ["Edge AI + TinyML", "Hiểu cách Edge AI và TinyML giúp mô hình chạy trên thiết bị IoT tài nguyên thấp."],
      ["Data Engineering", "Xây pipeline AIoT với mô phỏng, MQTT, lưu trữ cloud, tiền xử lý và dashboard."],
      ["Portfolio Capstone", "Tạo hệ thống giám sát thông minh dùng AI có thể dùng làm dự án portfolio chuyên nghiệp."]
    ],
    pillarsKicker: "Lộ trình học",
    pillarsTitle: "Roadmap AIoT chuẩn cao cấp.",
    pillarsLead:
      "Cấu trúc đưa người học từ nền tảng đến triển khai, sau đó vào machine learning, deep learning và tư duy edge deployment.",
    pillars: [
      ["01", "Sense", "Hiểu cảm biến, thiết bị, gateway, mạng, kiến trúc IoT và sinh dữ liệu."],
      ["02", "Stream", "Truyền dữ liệu qua MQTT, cloud storage, database, dashboard và pipeline."],
      ["03", "Learn", "Áp dụng ML và deep learning cho forecasting, classification, anomaly detection và maintenance."],
      ["04", "Deploy", "Hiểu Edge AI, TinyML, tối ưu hóa, độ trễ, bảo mật dữ liệu và embedded intelligence."]
    ],
    curriculumKicker: "Curriculum",
    curriculumTitle: "Cấu trúc khóa học premium.",
    curriculumLead:
      "Một curriculum AIoT hoàn chỉnh có thể dùng cho website khóa học online, workshop, chương trình training hoặc landing page sản phẩm.",
    curriculumPanelTitle: "Blueprint khóa học AIoT",
    curriculumPanelBody:
      "Trang này hướng đến audience nghiêm túc: kỹ sư, sinh viên, developer, researcher và professional muốn đi từ IoT cơ bản đến smart system dùng AI.",
    meta: [["Trình độ", "Beginner đến Intermediate"], ["Định dạng", "Lecture + Lab"], ["Hình thức", "Online / Hybrid"], ["Trọng tâm", "Triển khai AIoT"]],
    labKicker: "Lab thực hành",
    labTitle: "Lộ trình build thực tế.",
    labLead:
      "Luồng lab giúp khóa học thật hơn: người học không chỉ xem lý thuyết mà xây pipeline AIoT từng bước.",
    labs: [
      ["Lab Path 01", "Nền tảng IoT", "Thiết lập thiết bị IoT ảo, truyền dữ liệu bằng MQTT, lưu MongoDB, trực quan hóa và mô phỏng actuator."],
      ["Lab Path 02", "Data Engineering", "Mô phỏng sensor data, xử lý missing values, chuẩn hóa stream, tạo feature và chuẩn bị dataset cho ML."],
      ["Lab Path 03", "AI/ML Models", "Xây predictive maintenance, anomaly detection, energy forecasting, smart alerting và failure classification."],
      ["Lab Path 04", "Edge Thinking", "Khám phá tối ưu hóa, inference nhẹ, tradeoff Edge AI, TinyML và readiness cho deployment."]
    ],
    capstoneKicker: "Capstone",
    capstoneTitle: "Hệ thống giám sát thông minh dùng AI",
    capstoneBody:
      "Người học thiết kế giải pháp AIoT end-to-end: tạo sensor data, stream dữ liệu, lưu trữ, xử lý, huấn luyện model, inference, cảnh báo và hiển thị intelligence qua dashboard.",
    capstoneItems: [
      "Tạo dữ liệu cảm biến IoT ảo",
      "Pipeline truyền dữ liệu MQTT",
      "Lưu trữ MongoDB cloud",
      "Làm sạch dữ liệu và feature engineering",
      "Huấn luyện mô hình machine learning",
      "Real-time inference và smart alerts",
      "Dashboard visualization",
      "Thảo luận deployment Edge AI/TinyML"
    ],
    stackTitle: "Công cụ và công nghệ",
    stackBody:
      "Một stack thực tế, tiết kiệm và dễ tái tạo trên máy tính thông thường của người học.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "MQTT", "Mosquitto", "MongoDB Atlas", "Google Colab", "Jupyter", "TensorFlow", "Keras", "TensorFlow Lite", "Streamlit", "Edge AI", "TinyML"],
    outcomesKicker: "Kết quả",
    outcomesTitle: "Người học kết thúc với năng lực AIoT thực tế.",
    outcomesLead:
      "Phần outcome được viết để tăng chuyển đổi: rõ ràng, thực tế và đúng thứ người học muốn build.",
    outcomes: [
      ["Architecture", "Thiết kế kiến trúc IoT sẵn sàng cho AI và giải thích toàn bộ stack AIoT."],
      ["Data Pipeline", "Dùng MQTT, database, cleaning, normalization và feature engineering cho IoT data."],
      ["AI Models", "Áp dụng ML/DL cho prediction, classification, anomaly detection và smart alerting."],
      ["Edge AI", "Giải thích edge inference cải thiện latency, privacy, bandwidth và quyết định real-time."],
      ["Dashboard", "Xây dashboard biến raw sensor data thành operational intelligence có ích."],
      ["Portfolio", "Hoàn thành capstone phù hợp để trình bày học thuật, nghề nghiệp hoặc startup." ]
    ],
    audienceKicker: "Đối tượng",
    audienceTitle: "Khóa học này dành cho ai.",
    audienceLead:
      "Trang định vị khóa học cho người muốn kỹ năng AIoT thực hành, không chỉ lý thuyết IoT hoặc AI rời rạc.",
    audience: [
      ["IoT Developers", "Kỹ sư muốn xây thiết bị kết nối thông minh và hạ tầng thông minh."],
      ["AI Learners", "Sinh viên và practitioner muốn dự án sensor data thực tế ngoài dataset sách vở."],
      ["Data Engineers", "Người xây hệ thống với streaming, time-series, industrial và sensor-generated data."],
      ["Embedded Learners", "Người quan tâm Edge AI, TinyML, microcontroller và optimized inference."],
      ["Researchers", "Người học nghiên cứu smart systems, automation, intelligent infrastructure và AIoT."],
      ["Entrepreneurs", "Founder xây AI hardware, monitoring system hoặc sản phẩm automation công nghiệp."]
    ],
    finalTitle: "Xây hệ thống biết cảm nhận, phân tích, học, dự đoán và hành động.",
    finalBody:
      "Landing page AIoT premium này sẵn sàng dùng cho website khóa học, chiến dịch workshop hoặc chương trình training.",
    footer: "AIoT Premium Course Web App • Built with Next.js"
  }
};

const modules: Record<Lang, Module[]> = {
  en: [
    {
      title: "Course Introduction and AIoT Overview",
      meta: "7 lectures • 58 min",
      topics: ["Welcome to the AIoT course", "How to get the best from this course", "Evolution of connected and intelligent systems", "AIoT overview", "AIoT vs Traditional IoT vs Pure AI", "Key components and technology enablers", "AIoT use cases across industries", "Quiz"],
      outcome: "Understand what AIoT is, why it matters, and how it transforms normal connected systems into intelligent systems."
    },
    {
      title: "IoT Foundation for AIoT",
      meta: "11 lectures • 2 hr 11 min",
      topics: ["IoT: what and why", "IoT building blocks", "Multilayered architecture", "Sensors, devices and data generation", "Networking requirements", "Protocol landscape", "Gateways and edge concepts", "Data flow in IoT systems", "Cloud IoT platforms", "AI readiness in IoT architectures", "Quiz"],
      outcome: "Learn the device, network, cloud, gateway and data layers required before AI can be added to IoT systems."
    },
    {
      title: "IoT Foundation Hands-on Lab",
      meta: "7 lectures • 49 min",
      topics: ["Environment setup", "Virtual IoT device", "MQTT publisher", "MQTT subscriber", "Store data in MongoDB", "Visualize IoT data", "Simulate actuator", "Full integration"],
      outcome: "Build a basic end-to-end IoT pipeline from virtual device to cloud storage, dashboard and simulated action."
    },
    {
      title: "Data Engineering for AIoT",
      meta: "9 lectures • 2 hr 7 min",
      topics: ["Data engineering introduction", "Nature of IoT data", "Time-series and streaming data", "Data ingestion", "IoT storage models", "Cleaning and normalization", "Feature engineering", "Missing and anomalous data", "Preparing data for ML", "End-to-end AIoT data pipeline"],
      outcome: "Convert raw, noisy sensor data into clean and useful datasets for AI and machine learning models."
    },
    {
      title: "Data Engineering Hands-on Labs",
      meta: "9 lectures • 1 hr 35 min",
      topics: ["Simulating IoT sensor data", "MQTT streaming pipeline", "Store data in MongoDB", "Data engineering pipeline", "AI/ML for AIoT", "Real-time AI inference", "AIoT dashboard", "Mini challenge assignment"],
      outcome: "Build a practical AIoT pipeline that takes sensor data from simulation to inference and visualization."
    },
    {
      title: "AI and Machine Learning for AIoT",
      meta: "12 lectures • 2 hr 22 min",
      topics: ["AI/ML foundations", "ML workflow in AIoT", "Supervised learning", "Regression for sensor prediction", "Classification for device states", "Unsupervised learning", "Anomaly detection", "Predictive maintenance", "Model evaluation", "Choosing the right ML model", "Quiz"],
      outcome: "Apply supervised and unsupervised ML to prediction, classification, anomaly detection and maintenance problems."
    },
    {
      title: "AI and ML Hands-on Lab",
      meta: "7 lectures • 1 hr 13 min",
      topics: ["Predictive maintenance", "Model improvement", "Unsupervised anomaly detection", "Energy consumption forecasting", "AI-based smart alerting", "Failure classification", "AIoT computer vision lab"],
      outcome: "Implement machine learning solutions for common AIoT use cases and understand how to evaluate results."
    },
    {
      title: "Deep Learning for AIoT",
      meta: "8 lectures • 1 hr 28 min",
      topics: ["Why deep learning for AIoT", "Neural networks in IoT context", "CNNs for image and video IoT", "RNNs and LSTMs for time-series", "Autoencoders for fault detection", "Deep learning vs ML", "Resource constraints", "Introduction to TinyML", "Quiz"],
      outcome: "Understand how neural networks process image, video and sensor time-series data in AIoT systems."
    },
    {
      title: "Edge AI and TinyML",
      meta: "6 lectures • 1 hr 20 min",
      topics: ["Introduction to Edge AI", "Introduction to TinyML", "Edge vs cloud inference", "Hardware ecosystems", "Model optimization techniques", "Latency, privacy and bandwidth", "Quiz"],
      outcome: "Learn how AI models can move from cloud to edge devices and why optimization matters for small hardware."
    }
  ],
  vi: [
    {
      title: "Giới thiệu khóa học và tổng quan AIoT",
      meta: "7 bài • 58 phút",
      topics: ["Chào mừng đến khóa AIoT", "Cách học hiệu quả", "Sự phát triển của hệ thống kết nối thông minh", "Tổng quan AIoT", "AIoT vs IoT truyền thống vs Pure AI", "Thành phần và công nghệ nền tảng", "Use case AIoT trong nhiều ngành", "Quiz"],
      outcome: "Hiểu AIoT là gì, vì sao quan trọng và cách nó biến hệ thống kết nối thành hệ thống thông minh."
    },
    {
      title: "Nền tảng IoT cho AIoT",
      meta: "11 bài • 2 giờ 11 phút",
      topics: ["IoT là gì và vì sao", "Building blocks của IoT", "Kiến trúc nhiều lớp", "Cảm biến, thiết bị và sinh dữ liệu", "Yêu cầu networking", "Protocol landscape", "Gateway và edge concepts", "Data flow trong IoT", "Cloud IoT platforms", "AI readiness trong kiến trúc IoT", "Quiz"],
      outcome: "Nắm lớp thiết bị, mạng, cloud, gateway và dữ liệu cần có trước khi thêm AI vào IoT."
    },
    {
      title: "Lab nền tảng IoT",
      meta: "7 bài • 49 phút",
      topics: ["Thiết lập môi trường", "Virtual IoT device", "MQTT publisher", "MQTT subscriber", "Lưu dữ liệu MongoDB", "Trực quan hóa dữ liệu IoT", "Mô phỏng actuator", "Tích hợp hoàn chỉnh"],
      outcome: "Xây pipeline IoT end-to-end từ thiết bị ảo đến cloud storage, dashboard và hành động mô phỏng."
    },
    {
      title: "Data Engineering cho AIoT",
      meta: "9 bài • 2 giờ 7 phút",
      topics: ["Giới thiệu data engineering", "Bản chất dữ liệu IoT", "Time-series và streaming data", "Data ingestion", "Storage models cho IoT", "Cleaning và normalization", "Feature engineering", "Missing và anomalous data", "Chuẩn bị dữ liệu cho ML", "Pipeline AIoT end-to-end"],
      outcome: "Biến dữ liệu cảm biến thô và nhiễu thành dataset sạch, hữu ích cho AI và ML."
    },
    {
      title: "Lab Data Engineering",
      meta: "9 bài • 1 giờ 35 phút",
      topics: ["Mô phỏng dữ liệu cảm biến", "MQTT streaming pipeline", "Lưu dữ liệu MongoDB", "Data engineering pipeline", "AI/ML cho AIoT", "Real-time AI inference", "AIoT dashboard", "Mini challenge"],
      outcome: "Xây pipeline AIoT thực hành đưa dữ liệu từ simulation đến inference và visualization."
    },
    {
      title: "AI và Machine Learning cho AIoT",
      meta: "12 bài • 2 giờ 22 phút",
      topics: ["Nền tảng AI/ML", "ML workflow trong AIoT", "Supervised learning", "Regression cho sensor prediction", "Classification cho device states", "Unsupervised learning", "Anomaly detection", "Predictive maintenance", "Model evaluation", "Chọn đúng ML model", "Quiz"],
      outcome: "Áp dụng supervised và unsupervised ML cho prediction, classification, anomaly detection và maintenance."
    },
    {
      title: "Lab AI và ML",
      meta: "7 bài • 1 giờ 13 phút",
      topics: ["Predictive maintenance", "Cải thiện model", "Unsupervised anomaly detection", "Energy consumption forecasting", "Smart alerting dùng AI", "Failure classification", "AIoT computer vision lab"],
      outcome: "Triển khai giải pháp ML cho các use case AIoT phổ biến và biết cách đánh giá kết quả."
    },
    {
      title: "Deep Learning cho AIoT",
      meta: "8 bài • 1 giờ 28 phút",
      topics: ["Vì sao cần deep learning cho AIoT", "Neural network trong ngữ cảnh IoT", "CNN cho image/video IoT", "RNN và LSTM cho time-series", "Autoencoder cho fault detection", "Deep learning vs ML", "Resource constraints", "Giới thiệu TinyML", "Quiz"],
      outcome: "Hiểu cách neural network xử lý image, video và sensor time-series trong hệ thống AIoT."
    },
    {
      title: "Edge AI và TinyML",
      meta: "6 bài • 1 giờ 20 phút",
      topics: ["Giới thiệu Edge AI", "Giới thiệu TinyML", "Edge vs cloud inference", "Hardware ecosystems", "Model optimization", "Latency, privacy và bandwidth", "Quiz"],
      outcome: "Hiểu cách đưa AI model từ cloud về edge device và vì sao tối ưu hóa quan trọng với phần cứng nhỏ."
    }
  ]
};

function SectionHeader({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return (
    <div className="sectionHeader">
      <div className="sectionKicker">{kicker}</div>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionLead">{lead}</p>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const currentModules = useMemo(() => modules[lang], [lang]);

  return (
    <main className="page">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />

      <nav className="navbar">
        <div className="navInner">
          <a className="brand" href="#top" aria-label="AIoT home">
            <div className="brandMark"><div className="brandNode" /></div>
            <div className="brandText">
              <strong>AIoT Mastery</strong>
              <span>{t.navSubtitle}</span>
            </div>
          </a>
          <div className="navLinks">
            <a href="#learn">{t.nav[0]}</a>
            <a href="#curriculum">{t.nav[1]}</a>
            <a href="#labs">{t.nav[2]}</a>
            <a href="#capstone">{t.nav[3]}</a>
            <button className="languageButton" onClick={() => setLang(lang === "en" ? "vi" : "en")}>
              {t.switchLabel}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero shell" id="top">
        <div className="heroGrid">
          <div>
            <div className="eyebrow"><span className="eyebrowDot" /> {t.heroEyebrow}</div>
            <h1><span className="gradientText">{t.heroTitle}</span></h1>
            <p className="heroSub">{t.heroSubtitle}</p>
            <div className="heroActions">
              <a href="#curriculum" className="primaryButton">{t.primaryCta} →</a>
              <a href="#capstone" className="secondaryButton">{t.secondaryCta}</a>
            </div>
            <div className="stats">
              {t.stats.map(([number, label]) => (
                <div className="statCard" key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="heroVisual" aria-label="AIoT pipeline visual">
            <div className="visualInner">
              <div className="pipelineOrb" />
              <div className="pulseLine lineOne" />
              <div className="pulseLine lineTwo" />
              <div className="pulseLine lineThree" />
              {t.visualCards.map(([title, body], index) => (
                <div className={`floatCard card${["One", "Two", "Three", "Four"][index]}`} key={title}>
                  <b>{title}</b>
                  <span>{body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="section shell" id="learn">
        <SectionHeader kicker={t.learnKicker} title={t.learnTitle} lead={t.learnLead} />
        <div className="learnGrid">
          {t.learn.map(([title, body], index) => (
            <div className="learnCard" key={title}>
              <div className="learnIcon">{index + 1}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionHeader kicker={t.pillarsKicker} title={t.pillarsTitle} lead={t.pillarsLead} />
        <div className="pillars">
          {t.pillars.map(([number, title, body]) => (
            <div className="pillarCard" key={title}>
              <div className="pillarNumber">{number}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="curriculum">
        <SectionHeader kicker={t.curriculumKicker} title={t.curriculumTitle} lead={t.curriculumLead} />
        <div className="curriculumTop">
          <aside className="stickyPanel">
            <h3>{t.curriculumPanelTitle}</h3>
            <p>{t.curriculumPanelBody}</p>
            <div className="courseMeta">
              {t.meta.map(([label, value]) => (
                <div className="metaBox" key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="modules">
            {currentModules.map((module, index) => (
              <details className="moduleCard" key={module.title} open={index < 2}>
                <summary className="moduleSummary">
                  <div className="moduleIndex">{String(index + 1).padStart(2, "0")}</div>
                  <div className="moduleTitle">
                    <h3>{module.title}</h3>
                    <span>{module.meta}</span>
                  </div>
                  <div className="chevron">⌄</div>
                </summary>
                <div className="moduleBody">
                  <ul className="topicList">
                    {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                  <div className="moduleOutcome"><b>Outcome:</b> {module.outcome}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="labs">
        <SectionHeader kicker={t.labKicker} title={t.labTitle} lead={t.labLead} />
        <div className="labJourney">
          {t.labs.map(([label, title, body]) => (
            <div className="labCard" key={title}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="capstone">
        <SectionHeader kicker={t.capstoneKicker} title={t.capstoneTitle} lead={t.capstoneBody} />
        <div className="capstone">
          <div className="capstoneCard">
            <h3>{t.capstoneTitle}</h3>
            <p>{t.capstoneBody}</p>
            <ul className="capstoneList">
              {t.capstoneItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="capstoneCard">
            <h3>{t.stackTitle}</h3>
            <p>{t.stackBody}</p>
            <div className="stackCloud">
              {t.stack.map((item) => <span className="stackTag" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeader kicker={t.outcomesKicker} title={t.outcomesTitle} lead={t.outcomesLead} />
        <div className="outcomeGrid">
          {t.outcomes.map(([title, body]) => (
            <div className="outcomeCard" key={title}><b>{title}:</b> {body}</div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionHeader kicker={t.audienceKicker} title={t.audienceTitle} lead={t.audienceLead} />
        <div className="audienceGrid">
          {t.audience.map(([title, body]) => (
            <div className="audienceCard" key={title}><b>{title}:</b> {body}</div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="ctaPanel">
          <h2><span className="gradientText">{t.finalTitle}</span></h2>
          <p>{t.finalBody}</p>
          <a href="#top" className="primaryButton">Back to top ↑</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner shell">
          <span>{t.footer}</span>
          <span>© 2026 AIoT Mastery</span>
        </div>
      </footer>
    </main>
  );
}
