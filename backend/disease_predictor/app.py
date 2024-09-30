from flask import Flask, request
import pickle
import pandas as pd
from flask_cors import CORS

model_path = './model.pkl'
with open(model_path, 'rb') as file:
    model = pickle.load(file)

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
CORS(app)

bacteria_names = {
    0: "vibrio",
    1: "Yersinia Ruckeri",
    2: "V.Salmoninarum",
    3: "Aeromonas spp.",
    4: "Flavobacter psychrophilum",
    5: "L.garvieae",
    6: "Pseudomonas spp."
}

def preprocess_input(input_data):
    mappings = {
        'test1': {'+': [0], '-': [1]},
        'test2': {'+': [0], '-': [1]},
        'test3': {'+': [0], '-': [1]},
        'test4': {'+': [0], '-': [1]},
        'test5': {'+/+': [0], '-/-': [1]},
        'test6': {'0': [1,0], '1': [0,0], '2': [0,1]},
        'test7': {
            '0': [0,0,0,0,0,0,0], '1': [1,0,0,0,0,0,0],
            '2': [0,1,0,0,0,0,0],
            '4': [0,0,1,0,0,0,0], '5': [0,0,0,1,0,0,0],
            '6': [0,0,0,0,1,0,0], '7': [0,0,0,0,0,1,0],
            '3': [0,0,0,0,0,0,1]
        },
        'test8': {
            '1': [0,0,0,0],
            '0': [1,0,0,0],
            '3': [0,1,0,0],
            '2': [0,0,1,0],
            '4': [0,0,0,1]
        },
        'test9': {'+': [], '-': []},
        'test10': {
            '1': [0,0,0,0,0,0,0],
            '5': [1,0,0,0,0,0,0],
            '4': [0,1,0,0,0,0,0],
            '3': [0,0,1,0,0,0,0],
            '0': [0,0,0,1,0,0,0],
            '6': [0,0,0,0,1,0,0],
            '2': [0,0,0,0,0,1,0],
            '7': [0,0,0,0,0,0,1]
        },
        'test11': {'0': [1], '1': [0]},
        'test12': {'1': [0,0],
                    '2': [1,0],
                    '0': [0,1]},
        'test13': {True: 1, False:0}
    }

    processed_data = []
    for key, value in input_data.items():
        if key in mappings:
            mapped_value = mappings[key][value]
            if isinstance(mapped_value, list):
                processed_data.extend(mapped_value)
            else:
                processed_data.append(mapped_value)

    return pd.DataFrame([processed_data])


@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    if input_data.get('test13', 0):
        bacteria_name = "Flavobacter psychrophilum"
        return {"prediction": bacteria_name}
        
    else:
        processed_data = {k: v for k, v in input_data.items() if k != 'test13'}
        processed_data = preprocess_input(processed_data)
        processed_data = processed_data.values

        numerical_prediction = model.predict(processed_data)
        bacteria_name = bacteria_names.get(numerical_prediction[0])

        return {"prediction": bacteria_name}
            
if __name__ == '__main__':
    app.run(port=8000)