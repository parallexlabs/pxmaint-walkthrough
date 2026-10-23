# Visite de maintenance

[English](README.md)

Une visite entièrement dans le navigateur, avec des données fictives. Ouvrez le site à `/pxmaint-walkthrough/` et suivez 19 étapes, ou explorez les véritables écrans de l’application. Aucun compte, serveur applicatif ni base de données n’est nécessaire. La municipalité rurale, les personnes, actifs, NIV, photos et positions sont fictifs. Les images ont été dessinées localement.

Les saisies restent dans ce navigateur. Le stockage facultatif conserve les changements pour ce profil et cette origine. Si le stockage est bloqué ou plein, la visite courante utilise la mémoire. **Réinitialiser les données exemples** restaure la source. Ne saisissez aucune donnée personnelle ou opérationnelle dans un exemple public.

## Exécution locale

Servez ces fichiers avec n’importe quel serveur statique, montés à `/pxmaint-walkthrough/`. Utilisez HTTP sur l’interface locale ou HTTPS pour l’hébergement. L’ouverture directe du fichier index.html n’est pas prise en charge, car les modules du navigateur exigent HTTP. Aucune API applicative n’est servie. Placez ou liez ce dossier sous le chemin correspondant d’une racine statique vide, puis exécutez, par exemple :

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory /chemin/vers/racine-statique
```

Ouvrez `http://127.0.0.1:8000/pxmaint-walkthrough/`. Le fichier `/chemin/vers/racine-statique/pxmaint-walkthrough/index.html` doit correspondre à celui de ce dossier. Tout serveur offrant ces chemins et les types MIME JavaScript/CSS/JSON convient. Une version construite pour `/` peut être servie directement depuis son dossier.

## Construction

Construite depuis le commit pxmaint-fleet `904e613786e35975f890af8582470b7a1a19293c` le `2026-10-20T22:08:17.368Z`. [build-info.json](build-info.json) et le pied de page indiquent la version et les éventuels changements non validés. Dans le dépôt source, avec Node 22 et les dépendances déjà présentes :

```sh
nice -n 10 npm run export:walkthrough -- --base /pxmaint-walkthrough/
```

La construction séparée produit par défaut `dist/walkthrough`, relatif au dépôt; le dossier de publication est `dist/walkthrough-site`. `--out-dir` ou `WALKTHROUGH_OUT` et `--site-dir` ou `WALKTHROUGH_DIST` remplacent ces dossiers distincts. Les anciens résultats sont déplacés dans un dossier voisin `discarded/`. `WALKTHROUGH_CACHE` choisit le cache; `TMPDIR` choisit le stockage temporaire des tests. La construction enfant hérite de l’environnement. La construction de production reste inchangée. Pour un projet GitHub Pages, utilisez le chemin URL du dépôt comme `WALKTHROUGH_BASE` ou `--base`. Reconstruisez pour changer le préfixe. Le serveur doit servir les fichiers sans rediriger les ressources vers index.html. Publiez uniquement ce dossier généré; les rapports de session, les preuves sources et les documents opérationnels internes doivent rester hors de toute copie publique.

## Limites

Le moteur local réutilise les règles de validation, transitions, droits, coûts et reçus. Les rôles sont des exemples locaux partageant l’adresse d’attribution GitHub noreply de l’auteur; elle ne sert ni à la connexion ni à la livraison. La visite ne démontre pas l’authentification réelle, des utilisateurs concurrents, les courriels, les livraisons webhook, l’usage externe de jetons, les tâches planifiées, les sauvegardes ou l’exploitation. Les JPEG/PNG sont décodés et redessinés localement sans métadonnées de localisation. Le HEIC, la conservation de l’original et la conversion de documents ou feuilles de calcul exigent le système hébergé; les écrans le précisent. L’import CSV et les téléchargements locaux fonctionnent ici.

Le service worker et le manifeste web sont omis. La saisie hors ligne fonctionne dans une page déjà chargée, avec le commutateur ou une connexion coupée. Les relevés et inspections en attente s’appliquent localement au retour en ligne. Le rechargement hors ligne et l’installation ne sont pas garantis. Les commandes de stockage du navigateur peuvent effacer les changements.

## Hébergement et confidentialité

Publiez ce dossier comme fichiers statiques à `/pxmaint-walkthrough/`. N’ajoutez ni analyse d’audience, ni script injecté, ni ressource externe. Aucun proxy API, service de compte ou secret d’environnement n’est nécessaire. La CSP refuse les connexions, scripts, polices et images externes. Elle permet les fichiers du site, les images data/blob créées localement et les styles en ligne des écrans existants. La balise noindex décourage l’indexation. `robots.txt` interdit toute exploration; sa découverte se fait à la racine de l’origine, où le propriétaire doit définir la politique si nécessaire. Ces instructions aux robots ne contrôlent pas l’accès.

## Ouvert par conception

Apache-2.0, sans frais d’API. La [description OpenAPI 3.1 versionnée](openapi.json) du système hébergé est fournie pour lecture. Cette visite sert des fichiers et n’offre ni API HTTP ni identifiants utilisables. Le code et les exports portables peuvent être examinés et adaptés selon [LICENSE](LICENSE). [NOTICE](NOTICE) conserve les mentions du code source et des tiers réellement inclus, déterminés depuis les modules émis; [bundle-manifest.json](bundle-manifest.json) donne leurs versions installées. Les outils de test et les dépendances serveur ne sont pas inclus.

Vérifié par ses tests avant publication.
