export const timeline = [
  {
    type: 'education',
    title: 'MSc Computer Science',
    org: 'SRM University',
    period: '2025 — 2027',
    description:
      'Postgraduate study focused on software systems, mobile development, and applied database design.',
  },
  {
    type: 'work',
    title: 'Machine Learning Intern',
    org: 'Active Galaxy (AG Group of Companies)',
    period: 'May 2026 — Jun 2026',
    description:
      'Built a Customer Churn Prediction System that turns raw telecom subscription data into actionable retention strategies.',
    highlights: [
      'Built an end-to-end supervised ML pipeline, from data ingestion to model evaluation, following the CRISP-DM methodology.',
      'Designed a preprocessing pipeline handling mixed feature types and missing data, with one-hot encoding and StandardScaler normalization.',
      'Tackled severe class imbalance with SMOTE and balanced class weighting, prioritizing detection of the minority (churn) class.',
      'Trained and tuned Logistic Regression, Random Forest, XGBoost, and Gradient Boosting models using GridSearchCV.',
      'Best model (Logistic Regression) reached 84.0% accuracy and 0.863 ROC-AUC, optimized for F1 (63.4%) and Recall (58.0%) to reduce costly false negatives.',
      'Used feature importance to identify contract type and customer tenure as the main churn drivers, informing a retention strategy with an estimated net benefit of $135,100.',
    ],
    stack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Imbalanced-Learn (SMOTE)'],
  },
  {
    type: 'education',
    title: 'BCA — Bachelor of Computer Applications',
    org: 'AM Jain College',
    period: '2022 — 2025',
    description:
      'Undergraduate foundation in programming, data structures, databases, and software engineering principles.',
  },
]
