# Display inline matplotlib plots with IPython
from IPython import get_ipython
get_ipython().run_line_magic('matplotlib', 'inline')

import matplotlib.patches as mpatches
import matplotlib.pyplot as plt
import pandas as pd
import os

def plot(csv1, csv2):
	train_data = pd.read_csv(os.path.join("logs", csv1))
	valid_data = pd.read_csv(os.path.join("logs", csv2))

	ax = plt.subplot()
	ax.set_title("Loss Plot")
	ax.set_ylabel("Loss")
	ax.set_ylim((0, 1.05))
	ax.set_xlabel("Step Number")

	average = train_data['loss'].rolling(window=10, center=False).mean()

	blue = mpatches.Patch(color='blue', label='Training Loss')
	red = mpatches.Patch(color='red', label='Validation Loss')
	plt.legend(handles=[blue,red])
	
	ax.plot(average, color='blue', label='training loss')
	ax.plot(valid_data['step'], valid_data['loss'],'ro', linestyle='--')
	plt.show()
	