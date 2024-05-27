FROM python:3.10-bullseye
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y g++
RUN pip install -r requirements.txt
EXPOSE 8000
ENTRYPOINT [ "python", "manage.py", "runserver"]
CMD [ "0.0.0.0:8000" ]