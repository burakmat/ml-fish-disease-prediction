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
        model_path = '/model.pkl'
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
            'test6': {'< 25°C': [1,0], '25°C': [0,0], '> 25°C': [0,1]},
            'test7': {
                'Gassner Agar Plates': [0,0,0,0,0,0,0], 'BHIA and TSA': [1,0,0,0,0,0,0],
                'MacConkey': [0,1,0,0,0,0,0],
                'TCBS': [0,0,1,0,0,0,0], 'TSA': [0,0,0,1,0,0,0],
                'TSA and BA': [0,0,0,0,1,0,0], 'TYES': [0,0,0,0,0,1,0],
                'Marine Agar 2216': [0,0,0,0,0,0,1]
            },
            'test8': {
                '24-72 hours': [0,0,0,0],
                '5-7 hours': [1,0,0,0],
                '5 days': [0,1,0,0],
                '72-96 hours': [0,0,1,0],
                '7 days': [0,0,0,1]
            },
            'test9': {'+': [], '-': []},
            'test10': {
                'Trout': [0,0,0,0,0,0,0],
                'Oncorhynchus Mykiss': [1,0,0,0,0,0,0],
                'Penaeus Monodon': [0,1,0,0,0,0,0],
                'Rainbow Trout': [0,0,1,0,0,0,0],
                'Salmonid Fish': [0,0,0,1,0,0,0],
                'Salmonid and Non-Salmonid': [0,0,0,0,1,0,0],
                'Environment': [0,0,0,0,0,1,0],
                'Gilthead Sea Bream': [0,0,0,0,0,0,1]
            },
            'test11': {'3-21°C': [1], '21-35°C': [0]},
            'test12': {'Seawater': [0,0],
                       'Freshwater and Seawater': [1,0],
                       'Freshwater': [0,1]},
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
            
