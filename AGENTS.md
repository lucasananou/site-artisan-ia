# AGENTS.md — transformer ce template en vrai site d'artisan

Ce fichier s'adresse **à un agent IA** (Claude Code, Codex, Cursor, Copilot…) **et à l'humain**
qui l'accompagne. Il décrit, dans l'ordre, tout ce qu'il faut faire pour passer du template
d'exemple à un site livrable pour un artisan réel.

Lis-le en entier avant de modifier un seul fichier.

---

## 0. Les six règles non négociables

1. **Ne rien inventer.** Aucun chiffre, aucune date, aucun numéro, aucune qualification, aucun
   délai qui ne vienne pas de l'artisan. Si une information manque, elle reste entre crochets
   `[comme ceci]` et tu la listes dans tes questions. Un site avec trois trous honnêtes vaut mieux
   qu'un site plein d'inventions.
2. **Aucun faux avis, jamais.** Les blocs d'avis de la page d'accueil sont volontairement vides.
   On n'y met que des avis réels, recopiés mot pour mot depuis la fiche Google Business, un
   courriel ou un SMS, avec l'accord de leur auteur. Inventer un avis est une pratique commerciale
   trompeuse (article L.121-2 du code de la consommation).
3. **Photos réelles.** Les photos du template sont des photos d'exemple sous licence Unsplash.
   Elles doivent être remplacées par celles de l'artisan : son atelier, ses chantiers, lui.
   Si l'artisan n'a pas encore de photos, garde les emplacements `[Photo à ajouter]` visibles —
   c'est plus honnête qu'une image de banque d'images qui ment sur son travail.
4. **Textes courts, orientés appel ou devis.** Un visiteur de site d'artisan veut trois choses :
   savoir si c'est le bon métier, savoir si c'est sa zone, et pouvoir appeler. Phrases courtes,
   pas de « nous mettons notre savoir-faire au service de votre projet ». Chaque section finit
   par un chemin vers le téléphone ou le devis.
5. **Pas d'étape de build.** HTML, CSS et un seul fichier JS. Pas de npm, pas de React, pas de
   Tailwind, pas de générateur. Le site doit continuer à s'ouvrir en double-cliquant sur
   `index.html`. N'introduis aucune dépendance.
6. **Vérifier avant d'affirmer.** Avant de dire « c'est en ligne », ouvre l'URL. Avant de dire
   « le formulaire marche », envoie un message de test et regarde la boîte mail.

---

## 1. Les informations à demander à l'artisan

Pose ces questions **avant** de commencer. Copie la liste telle quelle, elle est faite pour être
envoyée par message ou lue au téléphone.

### Identité de l'entreprise
- Nom commercial exact, tel qu'il doit apparaître sur le site
- Forme juridique (entreprise individuelle, EURL, SARL, SASU…) et capital social s'il y en a un
- Adresse du siège, SIRET, numéro RCS ou Répertoire des métiers, code APE
- Numéro de TVA intracommunautaire — ou franchise en base (article 293 B du CGI)
- Nom du dirigeant, qui sera directeur de la publication
- Année de création de l'entreprise

### Contact
- Numéro de téléphone affiché sur le site (fixe ou mobile ?)
- Ce numéro reçoit-il WhatsApp ?
- Adresse e-mail qui recevra les demandes du formulaire
- Horaires d'ouverture réels, et les règles du samedi
- Délai de réponse qu'il s'engage à tenir (24 h ouvrées ? 48 h ?)

### Métier
- Métier principal, en un mot (menuisier, plombier, électricien, couvreur…)
- Les 3 à 5 prestations qu'il veut vraiment vendre, par ordre d'importance
- Ce qu'il refuse de faire (utile : ça évite les demandes hors sujet)
- Ville de référence + liste des communes réellement desservies, ou rayon en km
- Matériaux / marques / techniques dont il veut qu'on parle

### Preuves et garanties
- Assureur, numéro du contrat de responsabilité civile professionnelle et décennale, zone couverte
- Qualifications réelles : RGE, Qualibat, Compagnon du Devoir, label… avec numéro et validité
- Médiateur de la consommation auquel il adhère (obligatoire s'il vend à des particuliers)
- Formation / parcours, en deux ou trois phrases, avec ses mots

### Contenu
- 6 à 12 photos de chantiers, en haute définition, avec pour chacune : ce qui a été fait,
  dans quelle commune, en combien de temps
- Un portrait de lui, de préférence dans son atelier ou sur un chantier
- Son logo en SVG ou PNG transparent, s'il en a un
- Des avis clients réels : capture de la fiche Google Business, courriels, SMS
- Affiche-t-il des prix ? Si oui, lesquels, et sous quelle forme (à partir de, au m², forfait) ?

### Mise en ligne
- Possède-t-il déjà un nom de domaine ? Lequel, et chez quel registrar ?
- A-t-il déjà une fiche Google Business ? Est-elle revendiquée ?
- A-t-il déjà un site ? Si oui, quelles pages faut-il rediriger ?

> **Si l'artisan ne répond pas à tout :** construis quand même le site, laisse les crochets
> en place, et livre-lui la liste des trous. Ne comble jamais un trou par une supposition.

---

## 2. Carte du dépôt

```
site-artisan-ia/
├── index.html                        Accueil
├── a-propos.html                     L'artisan, ses garanties
├── services.html                     Les prestations en détail
├── contact.html                      Formulaire + téléphone + WhatsApp
├── mentions-legales.html             MODÈLE à remplir
├── politique-de-confidentialite.html MODÈLE à remplir
├── robots.txt                        Indexation + adresse du sitemap
├── sitemap.xml                       Liste des pages pour Google
├── assets/
│   ├── css/
│   │   ├── fonts.css                 Les 2 polices, intégrées en base64. Ne pas toucher.
│   │   └── styles.css                TOUT le design. Les variables sont en haut.
│   ├── js/
│   │   └── site.js                   Menu mobile, année, envoi du formulaire. CONFIG en haut.
│   ├── fonts/                        Les .woff2 d'origine (facultatifs, voir fonts.css)
│   └── img/                          Photos d'exemple, favicon, image de partage
├── prompts/                          Prompts prêts à copier dans un agent IA
├── AGENTS.md                         Ce fichier
├── CLAUDE.md                         Renvoie ici
├── README.md                         Présentation courte
└── LICENSE                           MIT
```

**Les quatre fichiers où se concentre 90 % du travail :**

| Je veux changer… | J'ouvre… | Je cherche… |
|---|---|---|
| la couleur du site | `assets/css/styles.css` | `--accent` (ligne ~16) |
| le nom, le téléphone, les textes | les 6 fichiers `.html` | le nom `Atelier Vasseur`, le numéro `01 99 00 00 00` |
| la destination du formulaire | `assets/js/site.js` | `web3formsKey` |
| les photos | `assets/img/` | remplacer les fichiers `exemple-*.jpg` |

---

## 3. Remplacer le contenu, page par page

### 3.0 Les remplacements globaux, à faire en premier

À faire dans **les six fichiers HTML** en une passe :

| Chercher | Remplacer par |
|---|---|
| `Atelier Vasseur` | le nom commercial réel |
| `Menuiserie &amp; agencement` | le sous-titre réel du métier |
| `01 99 00 00 00` | le numéro affiché, format français espacé |
| `+33199000000` | le même numéro au format international, sans espace (attribut `tel:`) |
| `33199000000` | le même numéro sans le `+` (liens `wa.me`) |
| `contact@exemple.fr` | l'adresse e-mail réelle |
| `https://www.exemple.fr` | l'adresse finale du site, **sans barre oblique à la fin** |
| `[Ville]` | la ville de référence |
| `[N° et rue]`, `[Code postal]` | l'adresse réelle |
| `SIRET [à compléter]` | `SIRET` + les 14 chiffres |

Puis **supprime la bannière de démonstration** dans les six pages : le bloc
`<p class="demo-banner">…</p>` juste après `<body>`. C'est l'oubli le plus fréquent.

> Le numéro `01 99 00 00 00` est un numéro réservé à la fiction par l'ARCEP : il n'appartient à
> personne. S'il reste dans le site livré, ce n'est pas grave juridiquement, mais c'est
> impardonnable commercialement.

### 3.1 `index.html` — l'accueil

| Section | Ce qu'il faut y mettre |
|---|---|
| Titre `<h1>` | Une promesse concrète en 5 à 8 mots. Le mot en `<em>` s'affiche en couleur d'accent : choisis-le bien. |
| Sous-titre | Les prestations principales + ce qui rassure, en une phrase. |
| 3 repères (`hero-points`) | Trois faits vérifiables : délai de devis, zone, assurance. Pas de superlatif. |
| Bandeau `strip` | Zone, délai de réponse, statut, horaires. Quatre faits, pas plus. |
| 3 cartes services | Les 3 prestations les plus rentables, pas les 3 plus faciles à décrire. |
| Déroulé en 3 étapes | Ce qui se passe concrètement. Adapte au métier (un plombier n'a pas de « métré »). |
| Aperçu « L'atelier » | Deux paragraphes + 4 faits. Renvoie vers `a-propos.html`. |
| Réalisations | 3 à 6 photos réelles, légendées « prestation, commune, durée ». |
| Avis | **Reste vide tant qu'il n'y a pas d'avis réels.** Supprime la section plutôt que d'inventer. |
| Zone d'intervention | La liste réelle des communes. C'est la section qui fait remonter le site localement. |

Le bloc `<script type="application/ld+json">` en haut du fichier : voir §7.

### 3.2 `services.html`

Trois blocs `split`, un par prestation. Pour chacun : un paragraphe de description, puis quatre
lignes de faits (`Compris`, `Matériaux`, `Délai`, `Budget`). Si l'artisan a cinq prestations,
duplique un bloc `<section>` entier et alterne `split` / `split split--reverse` pour garder
l'image une fois à gauche, une fois à droite.

La section « Tarifs » : soit tu la remplis avec des prix confirmés par l'artisan, soit tu
**supprimes la section entière**. Un prix affiché engage l'entreprise.

### 3.3 `a-propos.html`

La page qui fait la différence. Trois choses :
- un portrait réel de l'artisan (pas une photo de banque d'images) ;
- son parcours, écrit avec ses mots, relu par lui ;
- ses garanties avec les vrais numéros : SIRET, assurance décennale, qualifications.

La section « trois choses sur lesquelles l'atelier ne transige pas » : remplace par des
engagements concrets qu'il tient réellement. « Un appel la veille pour confirmer l'heure »
convainc plus que « rigueur et professionnalisme ».

### 3.4 `contact.html`

- Adapte les options du `<select name="prestation">` aux prestations réelles.
- Le lien WhatsApp contient un message pré-rempli (`?text=`) : adapte-le ou retire-le.
- Si l'artisan n'utilise pas WhatsApp : supprime les liens `wa.me` **des six pages**,
  y compris dans le bloc `quick-actions` en bas de chaque fichier.
- La carte : voir les instructions dans la page elle-même (OpenStreetMap, pas Google Maps,
  pour éviter d'avoir à poser un bandeau de cookies).

---

## 4. Personnaliser le design

### 4.1 La couleur d'accent — 1 ligne

Dans `assets/css/styles.css`, tout en haut :

```css
--accent: #c8502d;        /* la couleur */
--accent-dark: #a63e1e;   /* la même, ~15 % plus sombre, pour le survol */
--accent-soft: #fbeeea;   /* la même, très diluée dans du blanc */
```

Combinaisons déjà vérifiées (contraste suffisant pour du texte blanc dessus) :

| Métier / ambiance | `--accent` | `--accent-dark` | `--accent-soft` |
|---|---|---|---|
| Terre cuite (par défaut) | `#c8502d` | `#a63e1e` | `#fbeeea` |
| Bleu profond — plomberie, électricité | `#1f4e79` | `#163a5b` | `#eaf0f6` |
| Vert forêt — paysagiste, charpente | `#1d5c4a` | `#154437` | `#e9f3f0` |
| Bleu ardoise — couverture, zinguerie | `#2f5d7c` | `#23475e` | `#ecf2f6` |
| Prune — métiers d'art, décoration | `#6b2d5c` | `#512246` | `#f5ecf3` |

**Interdit :** les fonds beiges, sable, crème ou « lin ». C'est la signature des templates
d'artisan génériques. Les neutres du template sont volontairement des gris froids
(`--paper-2: #f5f6f7`) : n'y touche pas.

Vérifie le contraste de toute nouvelle couleur sur https://webaim.org/resources/contrastchecker/ —
il faut au moins 4,5:1 pour du texte blanc sur l'accent.

### 4.2 Les polices

Fraunces (titres) et Instrument Sans (texte), sous licence SIL Open Font 1.1, **intégrées en
base64 dans `assets/css/fonts.css`**. Rien n'est chargé depuis Google : pas d'appel à un serveur
tiers, donc rien à déclarer côté RGPD, et le site s'affiche pareil hors connexion.

Pour changer de police : télécharge le `.woff2` latin, convertis-le en base64, remplace le bloc
correspondant dans `fonts.css`, puis change `--font-display` ou `--font-sans` dans `styles.css`.
Si tu préfères des fichiers séparés, les `.woff2` d'origine sont dans `assets/fonts/` — mais le
site ne s'affichera alors plus correctement en double-cliquant sur `index.html` (blocage CORS
du protocole `file://`).

### 4.3 Le logo

Le logo est un SVG inline répété dans l'en-tête des six pages, et dans `assets/img/favicon.svg`.
- Si l'artisan a un logo : remplace le `<svg class="brand-mark">…</svg>` par
  `<img class="brand-mark" src="assets/img/logo.svg" alt="">` dans les six fichiers, et remplace
  `favicon.svg`.
- S'il n'en a pas : garde la marque géométrique et change juste la couleur `#c8502d` du `<path>`
  pour qu'elle suive ton accent.

### 4.4 Ce qu'il ne faut pas faire

- Ne pas arrondir tous les angles (`--radius: 4px` est volontaire).
- Ne pas ajouter d'ombres partout : il n'y en a que sur l'image du héros et au survol des cartes.
- Ne pas centrer tout le texte. La mise en page est éditoriale, alignée à gauche.
- Ne pas ajouter de dégradés multicolores, d'icônes emoji dans les titres, ni de compteurs animés.

---

## 5. Les images

| Fichier | Rôle | Format conseillé |
|---|---|---|
| `exemple-artisan-atelier.jpg` | héros, portrait | 900 × 1200 px, vertical |
| `exemple-chantier.jpg` | bloc « L'atelier » | 1200 × 800 px |
| `exemple-outils.jpg` | réalisations / services | 1200 × 700 px |
| `favicon.svg` | onglet du navigateur | SVG carré |
| `og-image.svg` | aperçu au partage | 1200 × 630 px |

Procédure pour chaque photo fournie par l'artisan :
1. recadrer au format du tableau ci-dessus ;
2. redimensionner : aucune image ne doit dépasser 1600 px de large ;
3. compresser à moins de 200 Ko (`cwebp -q 78`, `jpegoptim --size=180k`, ou https://squoosh.app) ;
4. renommer en minuscules sans accent, avec des mots utiles :
   `pose-parquet-chene-nantes.jpg` plutôt que `IMG_4821.jpg` ;
5. **écrire un `alt` descriptif** : ce qu'on voit, pas « photo de chantier ».
   Un `alt` vide (`alt=""`) n'est acceptable que pour une image purement décorative.

Les emplacements vides se font avec :
```html
<div class="placeholder" style="aspect-ratio:3/2">[Photo à ajouter — 1200 × 800 px]</div>
```

L'image de partage `og-image.svg` doit être remplacée par un vrai JPG ou PNG de 1200 × 630 px :
certaines messageries n'affichent pas les SVG. Pense alors à changer l'extension dans les balises
`og:image` des quatre pages publiques.

**Crédits des photos d'exemple** (à retirer des mentions légales une fois remplacées) :
Minh Đức, Nicolas Hoizey et Barn Images sur Unsplash. Voir `README.md`.

---

## 6. Remplir les pages légales

Les deux pages légales sont des **modèles**. Chaque champ `[entre crochets]` est surligné en
couleur dans la page : visuellement, aucun oubli ne passe.

### `mentions-legales.html`
Obligatoire pour tout site professionnel (loi LCEN du 21 juin 2004, article 6-III). À remplir :
éditeur, forme juridique, SIRET, RCS ou Répertoire des métiers, TVA, directeur de la publication,
**hébergeur** (raison sociale, adresse postale, téléphone), **assurance professionnelle et
décennale** avec l'assureur, le numéro de contrat et la zone couverte, **médiateur de la
consommation**, crédits photo, date de mise à jour.

Les adresses postales des hébergeurs courants (Netlify, Vercel, GitHub Pages) sont pré-écrites
dans un encadré de la page : vérifie-les le jour de la mise en ligne, elles changent.

### `politique-de-confidentialite.html`
Le modèle correspond au cas simple : un formulaire de contact, aucun cookie, aucune mesure
d'audience. Dans ce cas, **pas besoin de bandeau de cookies**.

Dès que tu ajoutes l'un de ces outils, le texte devient faux et il faut un bandeau de consentement
conforme (refuser aussi simple qu'accepter) :
Google Analytics, Google Tag Manager, une carte Google Maps, un pixel Meta ou TikTok, une vidéo
YouTube intégrée, un chat en ligne.
Alternatives qui évitent le bandeau : carte OpenStreetMap, vidéo hébergée en local,
Matomo correctement configuré ou Plausible pour l'audience.

### Dans les deux cas
Le haut de page porte un encadré « Modèle à compléter, puis à faire relire ». **Ne le supprime
qu'après relecture réelle** par l'expert-comptable, le centre de gestion ou un avocat de
l'artisan. Dis-le explicitement à l'artisan quand tu lui livres le site : tu lui fournis un
modèle, pas un conseil juridique.

---

## 7. Brancher le formulaire de contact

Le formulaire fonctionne **sans serveur**, via Web3Forms. Gratuit, 250 messages par mois,
sans création de compte.

1. Aller sur https://web3forms.com
2. Saisir l'adresse e-mail de l'artisan → une clé d'accès arrive par mail en quelques secondes.
3. Ouvrir `assets/js/site.js`, tout en haut :
   ```js
   const CONFIG = {
     web3formsKey: "REMPLACER-PAR-VOTRE-CLE",   // ← coller la clé ici
     sujetEmail: "Nouvelle demande depuis le site",
   ```
4. Enregistrer, recharger la page `contact.html`, envoyer un message de test.
5. **Vérifier la réception dans la boîte mail de l'artisan**, y compris dans les indésirables.
   Tant que ce test n'est pas passé, le site n'est pas livrable.
6. Demander à l'artisan d'ajouter l'expéditeur de Web3Forms à ses contacts, pour que les
   demandes ne partent plus en indésirables.

Cette clé **n'est pas un secret** : elle ne permet que d'envoyer un message vers l'adresse qui
l'a créée. Elle peut rester dans un dépôt public. En revanche, ne mets jamais dans ce fichier
un mot de passe, une clé d'API payante ou un jeton d'accès.

Si la page est ouverte en double-cliquant (`file://`), l'envoi peut être bloqué par le navigateur.
C'est normal : teste toujours le formulaire sur le site mis en ligne, en HTTPS.

**Alternative Formspree** (si Web3Forms ne convient pas) : créer un formulaire sur
https://formspree.io, récupérer l'URL `https://formspree.io/f/XXXX`, puis dans `site.js`
remplacer `https://api.web3forms.com/submit` par cette URL et supprimer la ligne
`donnees.access_key = …`. Le reste du code fonctionne tel quel.

**Protection anti-spam** : le champ caché `botcheck` est un piège à robots, déjà en place.
N'ajoute pas de captcha tant qu'il n'y a pas de spam réel.

---

## 8. SEO local

### 8.1 Les balises, page par page

Dans chaque `<head>`, à réécrire :

| Balise | Règle | Exemple |
|---|---|---|
| `<title>` | 50 à 60 caractères. **Métier + ville** en premier, nom de l'entreprise ensuite. | `Menuisier à Angers — Atelier Vasseur \| Devis gratuit` |
| `<meta name="description">` | 140 à 155 caractères. Ce qu'on fait, où, et une raison d'appeler. | — |
| `<link rel="canonical">` | L'URL finale exacte de **cette** page. | `https://atelier-vasseur.fr/services.html` |
| `og:title`, `og:description`, `og:url` | Les mêmes valeurs que ci-dessus. | — |
| `og:image` | URL **absolue** vers une image 1200 × 630 px. | — |

Une seule balise `<h1>` par page. C'est déjà le cas : ne la duplique pas.

### 8.2 Les mots-clés : métier + ville

Un artisan ne se bat pas sur « menuiserie ». Il se bat sur « menuisier Angers »,
« pose parquet Angers », « dressing sur mesure Trélazé ». Donc :
- le couple **métier + ville** apparaît dans le `<title>`, dans le `<h1>` ou juste en dessous,
  et une à deux fois dans le texte de la page — pas davantage ;
- la section « Zone d'intervention » de l'accueil liste les communes réelles ;
- si l'artisan vise sérieusement plusieurs communes, crée une page par commune
  (`menuisier-angers.html`, `menuisier-trelaze.html`) avec un contenu **réellement différent** :
  chantiers faits là-bas, délais, particularités. Du copier-coller avec juste le nom changé est
  détecté et pénalisé.

### 8.3 Les données structurées `LocalBusiness`

Le bloc JSON-LD en haut de `index.html` donne à Google le nom, l'adresse, le téléphone, les
horaires et la zone. Remplis **tous** les champs entre crochets, et notamment :
- `"@type"` : remplace `LocalBusiness` par le type précis quand il existe —
  `Plumber`, `Electrician`, `RoofingContractor`, `HousePainter`, `Locksmith`, `HVACBusiness`,
  `GeneralContractor`. Pour un menuisier, `GeneralContractor` ou `HomeAndConstructionBusiness`.
- `geo` : latitude et longitude, lisibles dans l'URL de Google Maps ou d'OpenStreetMap.
- `sameAs` : lien de la fiche Google Business et des réseaux sociaux.
- **Ne mets jamais `aggregateRating` ou `review` sans avoir de vrais avis.** C'est une violation
  des règles Google et un motif de pénalité manuelle.

Vérifie le résultat sur https://search.google.com/test/rich-results avant la mise en ligne.

### 8.4 `sitemap.xml` et `robots.txt`

Les deux fichiers sont à la racine. Remplace `https://www.exemple.fr` par le domaine réel
**dans les deux**, et retire du sitemap les pages que tu as supprimées, ou ajoute celles que
tu as créées. Les pages légales portent `noindex` : ne les mets pas dans le sitemap.

### 8.5 La fiche Google Business — le vrai levier

Pour un artisan local, la fiche Google Business apporte plus de clients que le site lui-même.
À faire avec l'artisan, après la mise en ligne :
1. Créer ou revendiquer la fiche sur https://business.google.com (vérification par courrier ou
   par téléphone, compter quelques jours).
2. Renseigner la catégorie principale exacte, la zone desservie, les horaires, le téléphone,
   et **le lien vers le nouveau site**.
3. Publier 5 à 10 photos de chantiers réels — les mêmes que sur le site.
4. Mettre en place une routine pour demander un avis après chaque chantier terminé : un SMS avec
   le lien direct vers le formulaire d'avis suffit. C'est ce qui fait le classement local.
5. Répondre à tous les avis, y compris aux négatifs.
6. Vérifier que le **nom, l'adresse et le téléphone sont écrits exactement pareil** sur le site,
   la fiche Google, et les annuaires (PagesJaunes, Houzz…). Une incohérence coûte du classement.

Puis : déclarer le site dans la Google Search Console, y soumettre le `sitemap.xml`, et vérifier
quinze jours plus tard que les pages sont indexées.

---

## 9. Checklist avant mise en ligne

À passer en entier. Chaque ligne se coche après vérification réelle, pas de mémoire.

**Contenu**
- [ ] Plus aucune occurrence de `Atelier Vasseur`, `exemple.fr`, `01 99 00 00 00`, `[Ville]`
      (`grep -rn "Atelier Vasseur\|exemple\.fr\|01 99 00 00 00\|\[Ville\]" *.html`)
- [ ] La bannière `demo-banner` est supprimée des six pages
- [ ] Il ne reste aucun crochet `[...]` non voulu
      (`grep -rno "\[[^]]*\]" *.html`) — sauf ceux assumés comme « information manquante »
- [ ] Aucun avis inventé, aucun chiffre inventé, aucune qualification non vérifiée
- [ ] Toutes les photos sont celles de l'artisan, ou des emplacements clairement vides
- [ ] Chaque `<img>` a un `alt` qui décrit ce qu'on voit

**Technique**
- [ ] Les six pages s'ouvrent, en local et sur l'hébergement
- [ ] Tous les liens internes fonctionnent, y compris ceux du pied de page
- [ ] Le lien `tel:` déclenche bien l'appel depuis un téléphone
- [ ] Le lien WhatsApp ouvre la bonne conversation — ou a été supprimé partout
- [ ] Le formulaire envoie, et le message **arrive réellement** dans la boîte mail
- [ ] Console du navigateur : aucune erreur (F12 → Console)
- [ ] Aucun défilement horizontal entre 320 px et 1440 px de large
- [ ] Le menu du téléphone s'ouvre, se ferme au clic sur un lien et avec la touche Échap
- [ ] Navigation au clavier : la tabulation fait apparaître un contour visible sur chaque élément
- [ ] Le site s'affiche correctement sur un vrai téléphone, pas seulement en mode responsive

**Légal et SEO**
- [ ] Mentions légales complètes, relues par un professionnel
- [ ] Politique de confidentialité à jour par rapport aux outils réellement installés
- [ ] Bandeau de cookies posé **si et seulement si** un outil traceur a été ajouté
- [ ] `title` et `description` propres et différents sur chaque page
- [ ] `canonical`, `og:url` et `og:image` pointent vers le domaine final
- [ ] JSON-LD validé sur le testeur de résultats enrichis, sans `aggregateRating` fictif
- [ ] `sitemap.xml` et `robots.txt` contiennent le domaine final
- [ ] HTML valide : https://validator.w3.org/nu/
- [ ] Lighthouse (onglet Lighthouse de Chrome) : viser ≥ 90 en Performance et ≥ 95 en Accessibilité

**Livraison**
- [ ] L'artisan a relu tous les textes qui parlent de lui
- [ ] Il sait où sont les identifiants de l'hébergement et du domaine
- [ ] Il sait comment on lui fait parvenir une demande du formulaire
- [ ] Les factures et le périmètre de maintenance sont clairs

---

## 10. Mettre le site en ligne, gratuitement

Trois options sans frais. **Netlify** est le plus simple si tu ne veux pas toucher à Git.

### Option A — Netlify, par glisser-déposer (2 minutes)
1. Créer un compte sur https://app.netlify.com
2. Menu « Sites » → zone « Deploy manually »
3. Glisser **le dossier du site** (pas un zip, pas le dossier parent) dans la zone
4. Le site est en ligne sur une adresse en `xxx.netlify.app`
5. Pour mettre à jour : re-glisser le dossier

Avec Git, c'est encore mieux : « Add new site » → « Import an existing project » → choisir le
dépôt GitHub. Laisser « Build command » **vide** et « Publish directory » sur `.` (il n'y a pas
d'étape de build). Chaque `git push` redéploie tout seul.

### Option B — Vercel
1. https://vercel.com → « Add New » → « Project » → importer le dépôt GitHub
2. Framework Preset : **Other**. Build command : vide. Output directory : `.`
3. « Deploy ». Adresse en `xxx.vercel.app`, redéploiement à chaque push.

### Option C — GitHub Pages
1. Pousser le code sur un dépôt GitHub
2. Dépôt → Settings → Pages
3. « Source » : *Deploy from a branch*. Branche `main`, dossier `/ (root)`. Save.
4. Adresse en `https://<compte>.github.io/<depot>/` au bout d'une à deux minutes.

> Attention avec GitHub Pages : si le site est servi dans un sous-dossier, les chemins
> `assets/...` fonctionnent (ils sont relatifs), mais les URL absolues des balises `canonical`,
> `og:url` et du `sitemap.xml` doivent inclure le sous-dossier. Avec un nom de domaine propre,
> le problème disparaît.

### Le nom de domaine
Un `.fr` coûte 7 à 15 € par an chez OVH, Gandi, Infomaniak ou Namecheap. C'est la seule dépense
indispensable : une adresse en `.netlify.app` fait perdre en crédibilité.

- **Le choisir** : `prenom-nom-metier.fr` ou `nom-entreprise.fr`. Court, sans tiret superflu,
  sans chiffre, facile à dicter au téléphone. Vérifier qu'il n'est pas déjà une marque déposée
  (https://data.inpi.fr).
- **Le brancher sur Netlify** : Site settings → Domain management → Add domain → suivre les
  instructions DNS. Soit on change les serveurs de noms chez le registrar, soit on ajoute un
  enregistrement `A` vers `75.2.60.5` et un `CNAME` `www` vers `<site>.netlify.app`.
  Vercel et GitHub Pages donnent leurs propres valeurs dans l'interface.
- **HTTPS** : automatique et gratuit (Let's Encrypt) sur les trois hébergeurs. Attendre
  quelques minutes après la propagation DNS, puis vérifier que le cadenas apparaît.
- **Choisir une version principale** : soit `https://domaine.fr`, soit `https://www.domaine.fr`,
  et rediriger l'autre. Ce choix doit correspondre aux `canonical` et au `sitemap.xml`.
- Si l'artisan avait un ancien site, prévoir les redirections 301 des anciennes URL vers les
  nouvelles, sinon le référencement acquis est perdu.

---

## 11. Après la mise en ligne

1. Ouvrir le site sur un téléphone, en 4G, et chronométrer. Au-delà de 3 secondes, compresser
   les images.
2. Envoyer une demande de test depuis le formulaire. Vérifier la réception.
3. Déclarer le site dans la Google Search Console, soumettre le `sitemap.xml`.
4. Mettre le lien du site sur la fiche Google Business, sur les réseaux de l'artisan, sur ses
   devis et sa signature de mail.
5. Revenir dans quinze jours : les pages sont-elles indexées ? Le formulaire a-t-il apporté des
   demandes ? Quelle page est la plus consultée ?

---

## 12. Prompts prêts à copier

Des prompts complets sont dans le dossier [`prompts/`](prompts/). Les deux plus utiles :

**Adapter le template à un artisan**
```
Tu travailles dans ce dépôt (template de site d'artisan en HTML/CSS pur, sans build).
Lis AGENTS.md en entier avant toute modification, et applique ses six règles — en particulier :
ne rien inventer, aucun faux avis, aucun chiffre non fourni.

Adapte le template pour : [MÉTIER] à [VILLE].

Informations fournies par l'artisan :
- Nom de l'entreprise : …
- Téléphone : …          - WhatsApp : oui / non
- E-mail : …             - Adresse : …
- SIRET : …              - Année de création : …
- Prestations (3 à 5, par ordre d'importance) : …
- Communes desservies : …
- Assurance décennale : [assureur] n° […]
- Qualifications : …
- Ce qu'il refuse de faire : …
- Couleur souhaitée : … (ou : propose-moi une couleur d'accent adaptée au métier)

Fais, dans l'ordre :
1. les remplacements globaux du §3.0 sur les six pages, bannière de démonstration comprise ;
2. la réécriture du contenu de chaque page (§3.1 à §3.4), textes courts orientés devis ;
3. la couleur d'accent (§4.1) ;
4. les balises SEO et le JSON-LD avec le bon @type (§8) ;
5. le domaine dans canonical, og:url, sitemap.xml et robots.txt.

Laisse entre crochets toute information que je ne t'ai pas donnée, puis liste-les-moi à la fin.
N'invente aucun avis client : laisse les emplacements vides.
Termine par la checklist du §9, en signalant précisément ce qui n'est pas encore coché.
```

**Vérifier le site avant livraison**
```
Vérifie ce site avant mise en ligne, en suivant la checklist du §9 d'AGENTS.md.
Pour chaque point : dis si c'est OK ou KO, et donne la preuve (la commande que tu as lancée,
sa sortie, ou le fichier et la ligne en cause). Ne coche rien sans vérification réelle.
Signale en priorité : textes d'exemple oubliés, crochets restants, bannière de démonstration
encore présente, liens cassés, images sans alt, erreurs de console, débordement horizontal
entre 320 et 1440 px. Ne corrige rien tant que je n'ai pas validé la liste.
```

Les autres prompts du dossier : rédiger les textes à partir d'un appel avec l'artisan,
remplir les pages légales, créer une page par commune, préparer la fiche Google Business.

---

## 13. En cas de doute

- Une information manque → elle reste entre crochets, et tu la demandes.
- Un outil ajouté touche aux données personnelles → mets à jour la politique de confidentialité.
- Une modification demande npm, un framework ou une étape de build → ce n'est pas le bon template.
- Un chiffre, un avis ou une qualification ne vient pas de l'artisan → il ne va pas sur le site.
