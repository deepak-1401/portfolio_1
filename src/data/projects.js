export const projects = [
  {
    title: 'Customer Churn Prediction System',
    featured: true,
    description:
      'A machine learning pipeline built during my internship at Active Galaxy (AG Group of Companies) that identifies telecom customers at high risk of churning. It covers preprocessing, SMOTE for class imbalance, GridSearchCV tuning across four classifiers, and feature importance analysis that shows contract type and tenure drive churn.',
    stack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'SMOTE'],
    metrics: [
      { label: 'Accuracy', value: '84.0%' },
      { label: 'ROC-AUC', value: '0.863' },
      { label: 'F1-Score', value: '63.4%' },
      { label: 'Recall', value: '58.0%' },
      { label: 'Est. net benefit', value: '$135,100' },
    ],
    github: 'https://github.com/deepak-1401',
    demo: null,
    accent: 'from-neon-purple to-neon-cyan',
  },
  {
    title: 'Smart Expense Tracker',
    description:
      'A Flutter + Firebase mobile app that logs daily spending, categorizes transactions in real time, and syncs across devices via Firestore.',
    stack: ['Flutter', 'Firebase', 'Firestore', 'Dart'],
    github: 'https://github.com/deepak-1401',
    demo: '#',
    accent: 'from-neon-blue to-neon-cyan',
  },
  {
    title: 'Real-time CRUD Applications',
    description:
      'A collection of Firestore-backed CRUD systems demonstrating live data sync, offline persistence, and structured document modelling.',
    stack: ['Flutter', 'Firestore', 'Dart'],
    github: 'https://github.com/deepak-1401',
    demo: '#',
    accent: 'from-neon-purple to-neon-blue',
  },
  {
    title: 'Visual Expense Analytics Dashboard',
    description:
      'A data visualisation layer built on top of the expense tracker, turning raw transaction data into charts that surface spending patterns.',
    stack: ['Flutter', 'Firebase', 'Python'],
    github: 'https://github.com/deepak-1401',
    demo: '#',
    accent: 'from-neon-cyan to-neon-purple',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This site: a glassmorphism, dark-themed developer portfolio built with React, Tailwind CSS, and Framer Motion.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/deepak-1401',
    demo: '#',
    accent: 'from-neon-blue to-neon-purple',
  },
]
