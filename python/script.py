#!/usr/bin/ python3
# -*- coding: utf-8 -*-
import os
import csv
import re
import json
import operator

#TO DO:

collection = []

output_file = open('data.csv', 'w', encoding='utf-8')
output_writer = csv.writer(output_file, delimiter=',', quotechar='"')
output_writer.writerow(['artist','album','date'])

def get_data():
	print ('Working!')
	print ('Total albums: ' + str(len(collection)))
	for name in os.listdir('.'):
		if os.path.isdir(name):
			path = os.path.abspath(name) + '/'
			artist = name
			albums = os.listdir(path)
			write_data(artist, albums, path)
	save_and_shutdown(output_file)

def write_data(artist, albums, path):
	for album in albums:
		#In case the album folder is named '(YYYY) ALBUM NAME'
		date = album[1:5]
		album_name = album[7:]
		full_path = path + album
		if os.path.isdir(full_path):
			output_writer.writerow([artist,album_name,date])
			collection.append({'artist': artist, 'album': album_name, 'date': date})

def order_by_artist(element):
	return element.sort(key=operator.itemgetter('artist'))

def save_and_shutdown(target_file):
	order_by_artist(collection)
	print ('Total albums: ' + str(len(collection)))
	with open ('data_collection.json', 'w', encoding='utf-8') as json_output:
		json.dump(collection, json_output, ensure_ascii=False)
	target_file.close()
	print('Ready!')

get_data()