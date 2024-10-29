from flask import Flask, request
import pickle
import pandas as pd
from flask_cors import CORS

model_path = './model_bundle.pkl'
with open(model_path, 'rb') as file:
    bundle = pickle.load(file)

model = bundle["model"]
label_encoder = bundle["label_encoder"]
encoder = bundle["encoder"]

# create and configure the app
app = Flask(__name__, instance_relative_config=True)
CORS(app)

def preprocess_input(input_data):
    dict_data = {k: [v] for k, v in input_data.items()}
    df_data = pd.DataFrame(dict_data, columns=encoder.feature_names_in_)
    encoded_data = encoder.transform(df_data)
    return pd.DataFrame(encoded_data, columns=encoder.get_feature_names_out(df_data.columns))

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    if input_data.get('slippage', 0):
        bacteria_name = "Flavobacter psychrophilum"
        return {"prediction": bacteria_name}
        
    else:
        input_data.pop('slippage', None)
        processed_data = preprocess_input(input_data)
        numerical_prediction = model.predict(processed_data)
        bacteria_name = label_encoder.inverse_transform(numerical_prediction)

        return {"prediction": bacteria_name[0]}
            
if __name__ == '__main__':
    app.run(port=8000)