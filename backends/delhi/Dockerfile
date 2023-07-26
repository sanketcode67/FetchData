FROM python:3.10-slim

WORKDIR /app

COPY . /app/delhi

RUN pip install --no-cache-dir -r /app/delhi/requirements.txt

EXPOSE 8000

CMD ["python", "delhi/manage.py", "runserver", "0.0.0.0:8001"]
