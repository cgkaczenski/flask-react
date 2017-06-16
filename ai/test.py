import model
import numpy as np
import pickle
import tensorflow as tf

def predict(input):
    return sess.run([logits], feed_dict={x: input, keep_prob: 1.0})[0]

save_model_path = './notMNIST_saved_model'
loaded_graph = tf.Graph()

x = tf.placeholder(tf.float32, shape=(None, 28, 28, 1))
sess = tf.Session()

with tf.variable_scope("convolutional"):
    keep_prob = tf.placeholder(tf.float32)
    logits, variables = model.conv_net(x, keep_prob)

saver = tf.train.Saver(variables)
saver.restore(sess, save_model_path)

data, labels = pickle.load(open('./test_data.p', mode='rb'))

image = np.array(data)
image = image.reshape(10000,28,28,1)
logits = predict(image)

# Accuracy
correct_pred = np.equal(np.argmax(logits, 1), np.argmax(labels, 1))
print("Accuracy on testing set: " + str(np.mean(correct_pred)*100.0) + '%')