# DevOps-weberm16

This is a Recipes Application, which is build for the modul 'Technologietrends in der Informatik' of the ZHAW SML.
It is using the Path-Framework for the Front-End and Node.JS and PouchDB for the Backend. Furthermore it uses
Continous Delivery (CD) as it deploys automatically on Heroku whenever a change was made. And it uses CircleCI
for Continuous Integration (CI), which tries to build the application first and only if CircleCI builds the application
successfully it is deployed on Heroku.