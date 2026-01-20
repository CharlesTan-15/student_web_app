from flask import flask, render_template, redirect, request

app = flask(__name__)

students = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        grade = float(request.form["grade"])
        status = "Passed" if grade >= 75 else "Failed"

        status.append({
            "name": name,
            "grade": grade,
            "status": status,        
})
        return redirect("/")
    
    return render_template("index.html", students=students)

if __name__ == "_main_":
    app.run(debug=True)