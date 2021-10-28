from flask import Flask, render_template, request, session, url_for, redirect
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '78264326'
app.config['MYSQL_DB'] = 'showroom'  

mysql = MySQL(app)

app.secret_key = 'the random string'

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/add', methods = ['GET', 'POST'])
def add():
  if request.method == 'POST':
    name = request.form['name']
    imgURL = request.form['imgURL']
    price = request.form['price']
    company = request.form['company']
    types = request.form['types']

    cursor=mysql.connection.cursor()
    query = 'INSERT INTO products(name, imgURL, price, company, types) VALUES (%s, %s, %s, %s, %s)'
    fields = (name, imgURL, price, company, types)
    cursor.execute(query, fields)
    mysql.connection.commit()
    cursor.close()
    return render_template('add.html', msg='OK !')
  else:
    return render_template('add.html')

app.run(debug=True)