from flask import Blueprint, request, jsonify
from static.Backend.optimizador import optimizador
import pandas as pd
import json

main = Blueprint('main', __name__)

@main.route('/obtener_datos', methods = ['GET'])
def obtenerDatos():
    query = request.args.get('query')
    print(query)
    ex = 'Hola mundo'
    datos = optimizador(query)
    print(type(datos))
    
    datos['fecha'] = datos.index.month
    
    df2 = datos.reset_index(drop = True)
    
    data_dict = df2.to_dict(orient = 'records')
    
    json_object = json.dumps(data_dict, indent = 4)
    print(json_object)
    
    return jsonify(json_object)  