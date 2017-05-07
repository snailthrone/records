# records
## Description:
I used to update my record collection first to RateYourMusic.com and then to Discogs, but updating massive amounts of records to them was eventually boring. In addition I have used to collect all interesting records of the year to a spreadsheets file which is a systematic way but irritating to browse with a mobile device while shopping new records. 

As I backup all the albums I buy to a hard drive, the most recent 'version' of my collection is found there. So why not do a script that logs the content and an interface for that data which is also easy to use with mobile device?

### React:
#### Modules: (Axiom)
Data is stored in three different JSON files(data_collection, data_upcoming and data_wantlist) what are called with Axiom and rendered in Content component (Content.jsx). The App component's selectors change the data on click. 

### Python:
#### Modules: os, csv, json, operator
The script is just a script that iterates all folders and their subfolders in the working directory and saves the names of the folders to CSV and JSON file. The script assumes that the album's release date is stored in the beginning of the folder name and saves it. The script is executed with Python 3. I have organized my own music library with foobar2000.
