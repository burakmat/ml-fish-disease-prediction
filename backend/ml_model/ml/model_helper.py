class ModelHelper():
    def __init__(self):
        self.model = None
        pass

    def make_prediction(self, data: dict) -> dict:
        return self.model.predict(data)