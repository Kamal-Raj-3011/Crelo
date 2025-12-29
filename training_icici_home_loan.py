import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from joblib import dump

# Load dataset
df = pd.read_csv('static/dataset/icici bank/home loan/icici_home_loan.csv')

# Separate features and target
X = pd.get_dummies(df.drop('Approval_Status', axis=1))
y = df['Approval_Status']

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define models
models = {
    "knn": KNeighborsClassifier(),
    "logistic": LogisticRegression(),
    "random_forest": RandomForestClassifier(),
    "decision_tree": DecisionTreeClassifier(),
    "svm": SVC(probability=True)
}

# Train each model
for name in models:
    models[name].fit(X_train, y_train)

# Save all models into one .pkl file
dump(models, "models/icici_home_models.pkl")

print("✅ All ICICI Home Loan models trained and saved in a single file.")
