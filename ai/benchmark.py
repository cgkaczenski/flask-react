import pickle
from sklearn.dummy import DummyClassifier

X_train, train_labels = pickle.load(open('train_data.p', mode='rb'))
X_test, test_labels = pickle.load(open('test_data.p', mode='rb'))

y_train = []
for label in train_labels:
	ls = [i for i, e in enumerate(label) if e != 0]
	y_train.append(ls[0])

y_test = []
for label in test_labels:
	ls = [i for i, e in enumerate(label) if e != 0]
	y_test.append(ls[0])

size = len(X_train)
X_train =  X_train.reshape(size,-1)
size = len(X_test)
X_test =  X_test.reshape(size,-1)

clf = DummyClassifier(random_state=100)

clf.fit(X_train, y_train)

result = clf.score(X_test, y_test) 
print("Dummy classifier accuracy: {:.2%}".format(result))
