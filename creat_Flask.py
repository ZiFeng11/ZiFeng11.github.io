from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/login_files', static_folder='/Users/william/Desktop/钓鱼/login_files')

@app.route('/')
def hello():
    return send_from_directory('/Users/william/Desktop/钓鱼/', 'login.html')


if __name__ == '__main__':
    app.run(debug=True, port=80)
