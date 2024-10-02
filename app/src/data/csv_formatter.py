filename = "country.csv"

import json

country_list = []
with open(filename) as file:
    file.readline()
    while line:=file.readline():
        country = line.split(',')[1]
        country = country.strip()
        country = country.strip('\"')
        country_list.append(country)
    
outfilename = 'countries.json'    

with open(outfilename, 'w') as outfile:
    json.dump(country_list, outfile)
