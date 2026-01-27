from flask import Flask, render_template, redirect, request
from datetime import datetime

app = Flask(__name__)

students = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        date = request.form["date"]
        subject = request.form["subject"]
        email = request.form["email"]
        grade = float(request.form["grade"])
        status = "Passed" if grade >= 75 else "Failed"

        students.append({
            "name": name,
            "date": date,
            "subject": subject,
            "email": email,
            "grade": grade,
            "status": status
        })
        return redirect("/")
    
    return render_template("index.html", students=students)

@app.route("/test")
def test():
    return render_template("index.html", students=[
        {"name": "Test Student", "date": "2024-01-15", "subject": "Introduction to programming", 
         "email": "test@example.com", "grade": 80, "status": "Passed"},
        {"name": "Another Student", "date": "2024-01-16", "subject": "Web fundamentals", 
         "email": "another@example.com", "grade": 60, "status": "Failed"}
    ])

if __name__ == "__main__":
    app.run(debug=True)