This project was bootstrapped with **Create React App**.

The main goal was to create a **React** application which shows **Films** from the Node based server.

Current functionality :
- Download film data from the server's API
- Show each film (_it could be anything with the name and pic, tho_) is a separate card with pic preview
- Add a new film with shiny modal window, allows to preview image
- Edit existing film full data, change pic, cast etc
- Delete film from the DB and automatically re-render view without refreshing the page
- Sort all films by name. Numbers gonna be first

Server Info:
Server side was made on combination of Node, Express and MongoDB with a few extensions.
Repo is [here](https://github.com/about0/film-db-server), had no experience with Node before.