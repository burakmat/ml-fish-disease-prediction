import pandas as pd
import pickle

class ModelHelper:
    def __init__(self):
        self.model = self._load_model()
        self.bacteria_names = {
            0: "vibrio",
            1: "Yersinia Ruckeri",
            2: "V.Salmoninarum",
            3: "Aeromonas spp.",
            4: "Flavobacter psychrophilum",
            5: "L.garvieae",
            6: "Pseudomonas spp."
        }

    def _load_model(self):
        model_path = './ml_model/ml/model.pkl'
        with open(model_path, 'rb') as file:
            model = pickle.load(file)
        return model

    def preprocess_input(self, input_data):
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

    def make_prediction(self, input_data):
        if input_data.get('test13', 0):
          bacteria_name = "Flavobacter psychrophilum"
          return "Predicted Bacteria: {}".format(bacteria_name)
          
        else:
          processed_data = {k: v for k, v in input_data.items() if k != 'test13'}
          processed_data = self.preprocess_input(processed_data)
          processed_data = processed_data.values

          numerical_prediction = self.model.predict(processed_data)
          bacteria_name = self.bacteria_names.get(numerical_prediction[0])

          return "Predicted Bacteria: {}".format(bacteria_name)
            
