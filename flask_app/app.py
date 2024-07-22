from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/mbti', methods=['POST'])
def mbti_test():
    data = request.json
    answers = data.get('answers', {})
    
    result = calculate_mbti(answers)
    
    return jsonify({"result": result})

def calculate_mbti(answers):
    result = (
        f"{'E' if answers.get('E', 0) > answers.get('I', 0) else 'I'}"
        f"{'S' if answers.get('S', 0) > answers.get('N', 0) else 'N'}"
        f"{'T' if answers.get('T', 0) > answers.get('F', 0) else 'F'}"
        f"{'J' if answers.get('J', 0) > answers.get('P', 0) else 'P'}"
    )
    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
