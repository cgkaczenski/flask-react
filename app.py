from flask import Flask, jsonify, render_template, request
import tensorflow as tf
import json
import numpy as np
#import pickle

app = Flask(__name__)

hello = tf.constant('Hello, Tensorflow API!')
sess = tf.Session()

def text():
	return sess.run(hello)

@app.route("/")
def home():
	return render_template("home.html")

@app.route('/canvas', methods=['POST'])
def canvas():
	input = request.json
	input = np.array(input['data'])
	input = ((255 - input) / 255.0)
	#pickle.dump(input, open('data.p', 'wb'))
	print(input.shape)
	
	return jsonify(result=str(input))

@app.route('/tensorflow')
def get():
	return jsonify(result=str(text()))

if __name__ == '__main__':
    app.run()
