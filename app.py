from flask import Flask, render_template, request,jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '123456'
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
    sql_str="SELECT id_Oto, name, image, price, id_Color, id_Type FROM oto"
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    print('data', data)
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3], 'color':item[4],'type':item[5]}
      cars.append(car)
    return jsonify({'cars':cars})
  except Exception as ex:
    return jsonify({'message':'Error!'})

@app.route('/api/search-type', methods = ['POST'])
@cross_origin()
def searchType():
  try:
    cursor=mysql.connection.cursor()
    user_input = {
    "type":request.json["type"],
  }
    sql_str="SELECT * FROM oto  WHERE id_Type = '"+user_input["type"]+"' "
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3],'color':item[4],'type':item[5]}
      cars.append(car)
    return jsonify({'cars':cars})
  except Exception as ex:
    return jsonify({'message':'Error!'})

@app.route('/api/search-price', methods = ['POST'])
@cross_origin()
def searchPrice():
  try:
    cursor=mysql.connection.cursor()
    user_input = {
    "price":request.json["price"],
  }
    sql_str="SELECT * FROM oto WHERE id_Price = '"+user_input["price"]+"' "
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3],'color':item[4],'type':item[5]}
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
    "gioitinh_color": request.json["gioitinh_color"],
    "gioitinh_type": request.json["gioitinh_type"],
    "sothich_type":request.json["sothich_type"],
    "sothich_price":request.json["sothich_price"],
    "nghenghiep": request.json["nghenghiep"],
  }
    sql_str="SELECT * FROM oto WHERE (id_Color= '"+user_input["gioitinh_color"]+"' or id_Type= '"+user_input["gioitinh_type"]+"') and (id_Type = '"+user_input["sothich_type"]+"' or id_Price = '"+user_input["sothich_price"]+"') and id_Price = '"+user_input["nghenghiep"]+"'  "
    cursor.execute(sql_str)
    data=cursor.fetchall()
    cars=[]
    for item in data:
      car={'id':item[0],'name':item[1],'image':item[2], 'price':item[3],'color':item[4],'type':item[5]}
      cars.append(car)
    return jsonify({'cars':cars})
  except Exception as ex:
    return jsonify({'car':'Error!'})

@app.route('/api/getOne/<id>', methods = ['GET'])
@cross_origin()
def getOne(id):
  try:
    cursor=mysql.connection.cursor()
    sql_str="SELECT name, image, price, id_Color, id_Type FROM oto WHERE id_Oto = '{0}'".format(id)
    cursor.execute(sql_str)
    data=cursor.fetchone()
    if data != None:
      car={'name':data[0],'image':data[1], 'price':data[2], 'color':data[3],'type':data[4]},
      return jsonify({'car':car})
    else:
      return jsonify({'message':'Not found!'})
  except Exception as ex:
    return jsonify({'message':'Error!'})



if __name__ == "__main__":
  app.run(debug=True)