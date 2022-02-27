# Adel SANAA
` Test technique EEnov`

Bonjour et bienvenue dans mon environnement de travail ! :)

Je vous propose de découvrir la première version de ce que j'ai pu produire pour ce test technique. Je reste évidemment disponible pour toute demande d'information à mon adresse e-mail ou par téléphone (cf: en bas!).

## 💻 Mise en place du projet
###1. Installation
Tout d'abord, il vous faut installer le projet sur votre machine. Ouvrez votre terminal et tapez dans l'ordre :
- `mkdir adelsanaa-test`
- `cd adelsanaa-test`
- `git clone https://github.com/kodypistol/adel-technical-test.git`

### 2. Démarrer le projet
Il vous suffit d'utiliser la commande suivante :
- `npm start`

Ensuite, **rendez-vous dans le dossier DB** où deux fichiers différents ont été créés : 
- Le fichier `users.json` contient des informations sur chacun des clients, leur nombre de points total et les ids des cartes de fidélité qu'ils possèdent.


- Le fichier `brands.json` contient des informations sur chacune des enseignes : leur nombre de points cumulés, leur id et leur nom.

##ℹ️ Quelques informations sur la structure du projet
Le projet a été réalisé sans lib/package (mis à part 'fs').

J'ai organisé le projet à la manière dont j'ai appris à organiser mes projets il y a peu de temps. 
J'ai tout d'abord un fichier `app.js` qui s'occupe, pour l'instant, simplement d'initialiser le router (mais s'occupera plus tard de créer les commandes et de fournir les paramètres nécessaires à la future personnalisation des données). 
Ce router s'occupe d'initialiser les managers `usersManager.js` et `brandsManager.js`.

Chacun d'entre eux s'occupent respectivement des datas des clients et des enseignes. Grâce aux données entrées dans le fichier `inputs/input.json`, ces managers vont distribuer correctement les données et les entrer dans un nouveau fichier qui seront présents dans le dossier `/db`.

## ✅ Ce que j'ai réussi à faire
- Créer un algorithme qui calcule le _nombre de points de fidélité total d'un utilisateur dans toutes les enseignes cumulées_ et qui l'assigne à un objet.
- Créer un algorithme qui calcule le _nombre de points de fidélité total des différentes enseignes_ et qui l'assigne à un objet.
- Répartir les données dans deux fichier .json distincts.

## ❌ Ce que je n'ai pas (encore) réussi à faire
- Créer une commande permettant de choisir le nombre d'utilisateurs et quelles données nous voulons afficher en console.
- Trouver une alternative plus propre et automatisée aux switchs et respectant le "DRY" (Don't Repeat Yourself)
- Le programme dépend encore du nombre d'utilisateurs que je lui passe en paramètre dans le `userManager.js` et de ce que je traite dans le `switch`.

## Ce que j'ai appris
J'ai appris à mieux traiter les données d'un JSON et cet exercice m'a permis de m'exercer dans le traitement de données. Je pensais l'exercice plutôt complexe et j'ai mis plusieurs heures avant de trouver une façon de faire. 
Mais en travaillant étape par étape, j'ai pu réussir à aboutir à une première version dont je suis content car fonctionnel.

Il ne manque plus qu'à traiter les problèmes que j'ai pu évoquer juste au-dessus.

En attendant votre retour, 
bonne fin de journée/soirée.

Adel SANAA
- `contactpro@adelsanaa.com`
- `07 71 18 84 40`
