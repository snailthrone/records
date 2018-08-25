import pandas as pd

df = pd.read_json('./public/data/data-vinyls.json')

print(list(df))
print(df)