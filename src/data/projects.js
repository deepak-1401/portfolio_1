export const projects = [
  {
    title: "Customer Churn Prediction System",
    featured: true,
    description:
      "A machine learning pipeline built during my internship at Active Galaxy (AG Group of Companies) that identifies telecom customers at high risk of churning. It covers preprocessing, SMOTE for class imbalance, GridSearchCV tuning across four classifiers, and feature importance analysis that shows contract type and tenure drive churn.",
    stack: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "SMOTE"],
    metrics: [
      { label: "Accuracy", value: "84.0%" },
      { label: "ROC-AUC", value: "0.863" },
      { label: "F1-Score", value: "63.4%" },
      { label: "Recall", value: "58.0%" },
    ],
    github:
      "https://github.com/deepak-1401/Customer-Churn-Prediction-System-.git",
    demo: "https://leave-or-stay.streamlit.app/",
    accent: "from-neon-purple to-neon-cyan",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "A Flutter + Firebase mobile app that logs daily spending, categorizes transactions in real time, and syncs across devices via Firestore.",
    stack: ["Flutter", "Firebase", "Firestore", "Dart"],
    github: "https://github.com/deepak-1401/Expense_tracker.git",
    demo: "#",
    accent: "from-neon-blue to-neon-cyan",
  },
];
