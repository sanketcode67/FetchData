FROM python:3.10-slim

WORKDIR /app

COPY . /app/banglore

RUN pip install --no-cache-dir -r /app/banglore/requirements.txt

EXPOSE 8000

CMD ["python", "banglore/manage.py", "runserver", "0.0.0.0:8000"]
