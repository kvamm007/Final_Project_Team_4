# World Shark Attacks

### Link to the website:
https://kvamm007.github.io/Final_Project_Team_4/index.html 

## Overview
For this project we looked at world shark attacks, and used that information to create visualizations to view factors that may contribute to the liklihood of being attacked by a shark.  We were also interested in whether there are factors that contribute to the liklihood of the attack being fatal.

The dataset we used was the Global Shark Attack file that is maintained by the Shark Research Institute.  There are subsets of this dataset also published in Kaggle, but in order to get the most up-to-date logged incidents, we chose to use this one.
https://www.sharkattackfile.net/incidentlog.htm

This project utilizes the following:
- HTML/Bootstrap
- Tableau
- Python (Jupyter Notebook using pandas)
- Machine Learning: Logistic Regression and Neural Networks


## Analysis
### Visualizations
Our Visualizations were created using Tableau, and consist of the following:
- The World Shark Attack Map shows where shark attacks have occurred, and whether they are fatal, not fatal, or unknown.  You can click on an individual marker and get more information on that attack, as well as bring up a link to the documented report.
- A heatmap showing shark attacks as fatal, not fatal, or unknown by type of activity
- A heatmap showing shark attacks by month and time of day
- A graph showing shark attacks by year in relation to world population
- A bar graph looking closer at the year 1960 and what might be possibly contributing to a spike in attacks.


### Machine Learning Models

- Logistic Regression: 

The logistic regression machine learning model is used to find the probability of a certain class or event existing. In our particular model we were looking for a Fatal or Non Fatal event existing within our Shark Attcak dataset. The input data included the year of the attack; type of attack; country, area and location of the attack; activity that was occuring when the attack happened; and gender and age of the victim. The data about the fatality of the attack was separated out so that a model could be created to predict if the attack would be fatal or not and then could be compared with the actual fatality data as shown in the image to the right.

The model was very successful at predicting a Fatal or Non Fatal attack as the model had an accuracy score of 1.0. We selected the logistic regression model because of its ability to predict one of two outcomes.

- Neural Networks:

Neural networks are a class of machine learning algorithms used to model complex patterns in datasets using multiple hidden layers and non-linear activation functions. In our model, we used three layers to train the data.

This model had a loss of 0.29 and an accuracy of 0.87. We selected the neural networks model because of the ability to analyze large datasets and to make a single prediction. In our model, the input data included the year of the attack; type of attack; country, area and location of the attack; activity that was occuring when the attack happened; and gender and age of the victim while also trying to predict if a shark attack would be Fatal or Non Fatal.


## Summary

https://kvamm007.github.io/Final_Project_Team_4/index.html 
