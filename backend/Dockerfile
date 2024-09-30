FROM python:3.10-bullseye
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && apt-get install -y g++
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "disease_prediction.app:app"]