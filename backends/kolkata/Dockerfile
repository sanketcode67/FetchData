FROM python:3.10-slim

WORKDIR /app

COPY . /app/kolkata

RUN pip install --no-cache-dir -r /app/kolkata/requirements.txt

EXPOSE 8000

CMD ["python", "kolkata/manage.py", "runserver", "0.0.0.0:8002"]
