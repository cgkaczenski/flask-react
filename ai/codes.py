import os
import numpy as np
import pickle
import tensorflow as tf
import vgg16
import utils

import skimage.transform
import skimage.color

def batch_features(features, batch_size):
    """
    Split features and labels into batches
    """
    for start in range(0, len(features), batch_size):
        end = min(start + batch_size, len(features))
        yield features[start:end]


# Set the batch size higher if you can fit in in your GPU memory
batch_size = 10
codes_list = []
labels = []
batch = []

codes = None

with tf.Session() as sess:
    
	# Build the vgg network
	vgg = vgg16.Vgg16()
	input_ = tf.placeholder(tf.float32, [None, 224, 224, 3])
	with tf.name_scope("content_vgg"):
		vgg.build(input_)

	features, labels = pickle.load(open('train_data.p', mode='rb'))
	num_processed = 0

	for batch_features in batch_features(features, batch_size):
		num_processed += batch_size
		for i in batch_features:
			img = skimage.transform.resize(i, (224, 224), mode='constant')
			img = img.reshape(1,224,224)
			img = skimage.color.grey2rgb(img)
			batch.append(img)

		# Image batch to pass to VGG network
		images = np.concatenate(batch)

		# Get the values from the relu6 layer of the VGG network
		feed_dict = {input_: images}
		codes_batch = sess.run(vgg.relu6, feed_dict=feed_dict)

		# Here I'm building an array of the codes
		if codes is None:
			codes = codes_batch
		else:
			codes = np.concatenate((codes, codes_batch))

		batch = []
		print('{} images processed'.format(num_processed))

	print(codes.shape)

	# write codes to file
	with open('codes', 'w') as f:
		codes.tofile(f)