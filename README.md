# Log Analysis

This project aims at detecting anomalies. It uses the following techniques -
1. Word2Vector using Gensim
2. Self Organizing Map
3. Local Outlier Factor Method
4. Principal Component Analysis

# Aim
To integrate the model with a frontend web applucation which could generate a log from a file and send it to the model. The model would analyze if it is an error log. If it is an error log then an SMS would be sent to the linked phone number.

# Limitations
1. Model requires structured data for now.
2. Pickled objects could be created for 2 trained models, but we faced problems with the final model(i.e. an infer() function).
3. Therefore, it was difficult for us to implement integration of the front-end web application with the model.
4. Only specific logs can be recognized.
5. Since the infer() function (i.e. a model) could not be pre-trained as a pickle, it takes more time to get trained.

# What We Achieved
1. We were able to create a front-end web application (in combination with flask) that can provide the following -
    i. An in-depth detailed explanation of the working of the model.
    ii. SMS to the linked phone number using Twilio API.
2. A NLP model that can detect for anomalies with a log as an input to the infer() function in the model.

# Contributors
1. [Arnab Kumar Roy](https://github.com/ArnabKumarRoy02)
2. [Bishal Chettri](https://github.com/bistimulus)
3. [Md. Monirul Islam](https://github.com/sleepy-coder-101)
4. [Rinchen Tempa Bhutia](https://github.com/rinchentb26)
5. [Shashwat Sarkar](https://github.com/shshwtsrkr)
