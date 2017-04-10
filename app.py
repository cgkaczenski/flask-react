from flask import Flask, jsonify, render_template, request
import tensorflow as tf
import json
import numpy as np
import PIL.Image as Image
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
	input = resize(input['data'])

	#pickle.dump(input, open('data.p', 'wb'))
	return jsonify(result=str(input))

def resize(image_list):
	image = np.array(image_list).reshape(448,-1)
	max_val = max(image_list)
	image = ((max_val - image) / float(max_val))
	im = Image.fromarray(image)
	im = im.resize((28, 28), Image.ANTIALIAS)
	return np.array(im)

@app.route('/tensorflow')
def get():
	return jsonify(result=str(text()))

if __name__ == '__main__':
    app.run()
