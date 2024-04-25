from flask import Flask, request, Blueprint
from static.Backend import main

app = Flask(__name__)
app.register_blueprint(main.main, url_prefix='/static')

@app.route('/')
def home():
    return  'Hola, mundo!'


if __name__ == '__main__':
    app.run(debug = True)