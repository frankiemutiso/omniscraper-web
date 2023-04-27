# Omniscraper web


## It works on my machine

Running locally requires a Postgres instance, so make an installation and set the following environment variables.

 - DB_HOST - IP or fully qualified domain name to the instance. If local this could be localhost or 127.0.0.1. 
 - DB_NAME - This is the database name
 - DB_USER - The username with access to the database
 - DB_PASS - The database password
 - DB_PORT - The port will most likely be the default one; 5432, but in the event it is not, then update to the the one.

This guide is based on a linux environment. The installation of `pycopg2` library has the prerequisites defined in the link below. Follow the before settting up the Python environment.

https://www.psycopg.org/docs/install.html#build-prerequisites

## Requirements
 - pipenv
 - python 3.9

Prepare the Python environment as follows:-

```
pipenv install 
```

Run locally with this command

```
pipenv run python manage.py runserver
```


# Contribution

1. Fork your own repository
2. Clone the forked repository
3. To merge the latest changes from the main branch into your forked repository fetch all changes using the following git commands

```
git pull https://github.com/frankiemutiso/omniscraper-web main 
```

Be sure to change `main` to whatever your current branch name is.
