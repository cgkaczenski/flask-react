from flask import Flask, jsonify, render_template, request
import tensorflow as tf
import json

app = Flask(__name__)

hello = tf.constant('Hello, Tensorflow API!')
sess = tf.Session()

def text():
	return sess.run(hello)

@app.route("/")
def home():
	return render_template("home.html")

@app.route('/tensorflow')
def get():
	return jsonify(result=str(text()))

if __name__ == '__main__':
    app.run()
