from flask import Flask, render_template, request,jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '78264326'
app.config['MYSQL_DB'] = 'showroom'  

mysql = MySQL(app)

app.secret_key = 'the random string'

CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config["CORS HEADERS"] = "Content-Type"

@app.route('/')
@cross_origin()
def home():
  return render_template('index.html')

@app.route('/api/getAll', methods = ['GET'])
@cross_origin()
def showroom():
  try:
    cursor=mysql.connection.cursor()
    sql_str="SELECT id_Oto, name, image, price, id_Color FROM oto"
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3], 'color':item[4]}
      cars.append(car)
    return jsonify({'cars':cars})
  except Exception as ex:
    return jsonify({'message':'Error!'})

@app.route('/api/search', methods = ['POST'])
@cross_origin()
def search():
  try:
    cursor=mysql.connection.cursor()
    user_input = {
    "company": request.json["company"],
    "type":request.json["type"],
    "price":request.json["price"],
  }
    sql_str="SELECT * FROM oto WHERE id_Company = '"+user_input["company"]+"' and id_Type = '"+user_input["type"]+"' and id_Price = '"+user_input["price"]+"' "
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3],'color':item[4]}
      cars.append(car)
    return jsonify({'cars':cars})
  except Exception as ex:
    return jsonify({'message':'Error!'})

@app.route('/api/tuvan', methods = ['POST'])
@cross_origin()
def tuvan():
  try:
    cursor=mysql.connection.cursor()
    user_input = {
    "gioitinh": request.json["gioitinh"],
    "nghenghiep": request.json["nghenghiep"],
    "sothich":request.json["sothich"],
    "quocgia":request.json["quocgia"],
  }
    sql_str="SELECT * FROM oto WHERE id_Color= '"+user_input["gioitinh"]+"' and id_Price = '"+user_input["nghenghiep"]+"' and id_Type = '"+user_input["sothich"]+"' and id_Company = '"+user_input["quocgia"]+"'  "
    cursor.execute(sql_str)
    data=cursor.fetchone()
    if data != None:
      car={'id':data[0],'name':data[1],'image':data[2], 'price':data[3],'color':data[4]}
    else :
      return jsonify({'car':'Not found!'})
    return jsonify({'car':car})
  except Exception as ex:
    return jsonify({'car':'Error!'})

@app.route('/api/getOne/<id>', methods = ['GET'])
@cross_origin()
def getOne(id):
  try:
    cursor=mysql.connection.cursor()
    sql_str="SELECT name, image, price, id_Color FROM oto WHERE id_Oto = '{0}'".format(id)
    cursor.execute(sql_str)
    data=cursor.fetchone()
    if data != None:
      car={'name':data[0],'image':data[1], 'price':data[2], 'color':data[3]}
      return jsonify({'car':car})
    else:
      return jsonify({'message':'Not found!'})
  except Exception as ex:
    return jsonify({'message':'Error!'})



if __name__ == "__main__":
  app.run(debug=True)