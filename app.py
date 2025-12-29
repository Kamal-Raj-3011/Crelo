from flask import Flask, render_template, request, redirect, url_for, session
import pandas as pd
from joblib import load

app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Needed for session

# Each .pkl is a dict: { "knn": ..., "logistic": ..., "random_forest": ..., ... }
models = {
    ("ICICI", "home"):     load("models/icici_home_models.pkl"),
    ("ICICI", "business"): load("models/icici_business_models.pkl"),
    ("Axis",  "home"):     load("models/axis_home_models.pkl"),
    ("Axis",  "business"): load("models/axis_business_models.pkl")
}

@app.route("/", methods=["GET", "POST"])
def loan_approval():
    if request.method == "POST":
        bank      = request.form["bank"]
        loan_type = request.form["loan_type"]

        # Build the feature dict from form inputs
        if loan_type == "home":
            data = {
                "Applicant_Type":      request.form["applicant_type_home"],
                "Age":                 int(request.form["age"] or 0),
                "Monthly_Income":      int(request.form["monthly_income"] or 0),
                "Credit_Score":        int(request.form["credit_score_home"] or 0),
                "Loan_Amount":         int(request.form["loan_amount_home"] or 0),
                "Employment_Stability":request.form["employment_stability"],
                "Property_Value":      int(request.form["property_value"] or 0)
            }
        else:  # business
            data = {
                "Applicant_Type":      request.form["applicant_type_business"],
                "Business_Vintage":    int(request.form["business_vintage"] or 0),
                "Annual_Turnover":     int(request.form["annual_turnover"] or 0),
                "Profit_After_Tax":    int(request.form["profit_after_tax"] or 0),
                "Credit_Score":        int(request.form["credit_score_business"] or 0),
                "Collateral_Required": request.form["collateral_required"]
            }

        # Create DataFrame, one‐hot encode, then align to RF’s expected features
        df = pd.DataFrame([data])
        df = pd.get_dummies(df)

        # Select the container and pull the random forest estimator
        container = models[(bank, loan_type)]
        model     = container["random_forest"]

        # Add missing dummy columns
        for col in model.feature_names_in_:
            if col not in df.columns:
                df[col] = 0
        df = df[model.feature_names_in_]

        # Predict and compute probabilities
        p = model.predict_proba(df)[0]
        result = "Approved" if p[1] > p[0] else "Rejected"
        probs  = {"Rejected": round(p[0]*100, 1), "Approved": round(p[1]*100, 1)}

        # Store result in session for PRG
        session['result'] = result
        session['probs']  = probs

        # Redirect to GET route to prevent form resubmission
        return redirect(url_for('loan_approval'))

    # GET request: fetch result from session if exists
    result = session.pop('result', None)
    probs  = session.pop('probs', None)

    return render_template("loanapproval.html", result=result, probs=probs)

if __name__ == "__main__":
    app.run(debug=True)
