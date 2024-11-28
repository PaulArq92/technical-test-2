# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 

## ANSWERS

## Gestions des bugs

1) Erreur lors de la connexion avec Sign In 
-> Le nom d'utilisateur était trimé et donc les valeurs étaient différentes
2) Lors de la création d'un nouvel User, son nom n'était pas affiché dans les détails 
-> Dans le Formik, s'assurer d'avoir les bonnes initiales values et ensuite modifier l'input userName en user
pour avoir le bon champ de formulaire
3) Nom d'utilisateur non modifiable
-> Enlever le disabled dans l'input correspondant 
4) Aucune action après le clic sur le bouton Update d'un User
-> Modifier le onChange par onClick
5) Après la création d'un projet, ce dernier ne s'affiche pas dans la liste des projets 
-> les données ne sont pas mises à jours après la création d'un nouveau projet, mise en place d'un nouvel appel API 
à la suite de la création d'un projet
6) Ouverture des détails d'un projet : l'appli crash
-> lié au project.name.toString car le project.name peut être nul ou undefined
7) Lorsqu'on souhaite editer un projet, le loader tourne en boucle
-> Modifier find par findOne car find renvoie un tableau d'objet alors que findOne renvoie l'objet directement
8) Dans activité, lorsqu'on choisit un projet, puis qu'on reselectionne 'All Projects', cela fait crash l'appli
-> Gérer le cas où f est undefined dans selectProject.

Autres bugs trouvés : 
L'état Available ne s'update pas sur la vu lorsqu'on change son état dans le selecteur en haut à droite
Même chose pour le sélecteur de projet dans la page activities

## Features développées

L'objectif était de présenter la meilleure version possible du projet à un client dans un délai restreint.
J'ai commencé par résoudre les bugs bloquants qui peuvent ruiner une présentation.
Ensuite, pour une présentation, il est essentiel d'impressionner le client avec soit un élément visuel marquant, soit 
une expérience de navigation fluide qui évite toute frustration.
J'ai opté pour la seconde option en ajoutant un composant réutilisable BackButton, permettant de revenir facilement 
en arrière.
J'ai pu améliorer les pages de mise à jour des utilisateurs et des projets, où 
l'absence de cette fonctionnalité pouvait être bloquante.
De plus, j'ai ajouté à la page Activities la possibilité d'ouvrir et de fermer les détails d'un projet.
et j'ai modifié le curseur de la souris pour indiquer visuellement que la zone est cliquable, renforçant 
ainsi l'intuitivité de la navigation.

## Feedbacks

J'ai trouvé le code assez organisé au niveau de l'architecture, avec des dossiers, des sous-dossiers etc...
Néanmoins, j'ai trouvé certains fichiers trop long qui aurait pu être largement découpés en plusieurs fichiers/composants.
Par exemple user.list.js, user.view.js, project.list.js, project.view.js, afin de rendre plus lisible et intuitif le code
et d'essayer de respecter au mieux les conventions du clean code. 
Le wording peut être également stocké dans un ficher Json plutôt qu'être en brut directement dans les composants,
utile pour la clarté du code ainsi que si on souhaite faire une version dans une autre langue. 
J'ai eu également des warnings de Eslint et du codes dupliqués, que je n'ai pas eu vraiment le temps de gérer, ce qui
renforme mon premier point. 
Je suis également tombé sur des imports inutilisés et des console.log, ce qui est également à éviter selon moi. 