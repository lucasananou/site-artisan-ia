# Prompt : reproduire une maquette (Dribbble, Figma…) au pixel près

À coller dans Claude Code, à la racine du projet, après avoir mis la ou les captures de la maquette dans un dossier `maquette/` (ex. `maquette/accueil-desktop.png`).

> ⚠️ Une maquette Dribbble appartient à son designer. Pour un vrai client, demande son accord au designer ou achète le design ; sinon, sers-t'en comme inspiration et change au moins les couleurs, les textes et les images.

---

```
Tu es un intégrateur front-end senior, obsédé par le détail. Ton objectif : que la page index.html soit une copie fidèle AU PIXEL PRÈS de la maquette maquette/accueil-desktop.png, en gardant la structure et les fichiers de ce template (HTML + CSS purs, voir AGENTS.md).

ÉTAPE 1 — Analyse, avant d'écrire une ligne de code
Ouvre la maquette et décris-la précisément :
- la largeur de référence de la maquette (souvent 1440 px) et la grille (nombre de colonnes, largeur du contenu, gouttières, marges) ;
- chaque section de haut en bas, avec sa hauteur approximative et son fond ;
- les couleurs exactes (relève les codes hex), les dégradés, les ombres (décalage, flou, opacité), les rayons d'arrondi ;
- la typographie : police (trouve la plus proche sur Google Fonts si elle n'est pas nommée), tailles, graisses, interlignage, espacement des lettres, pour chaque niveau de titre et de texte ;
- tous les espacements : entre sections, entre titre et texte, à l'intérieur des boutons et des cartes ;
- les icônes et les images (taille, recadrage, position).
Mets tout ça dans des variables CSS en haut de assets/css/styles.css (couleurs, polices, tailles, espacements, ombres, rayons). Montre-moi ce tableau avant de coder.

ÉTAPE 2 — Intégration
Reconstruis la page section par section avec ces variables. Pas de valeurs « au jugé » : chaque taille vient de ton relevé. Garde le HTML sémantique et accessible (titres dans l'ordre, alt sur les images, contrastes AA, focus visible).
Les textes et les photos sont ceux de mon client (ou des emplacements [à remplacer]) : ne recopie ni les textes, ni les images, ni le logo de la maquette.

ÉTAPE 3 — Comparaison, puis correction, en boucle
Installe Playwright si besoin (npx playwright install chromium), puis :
1. fais une capture de ma page à la même largeur que la maquette (pleine page) ;
2. mets-la à côté de la maquette et superpose-les (différence d'images) ;
3. liste tous les écarts visibles : décalages de plus de 2 px, tailles de texte, couleurs, espacements, alignements ;
4. corrige, recapture, recompare.
Recommence jusqu'à ce qu'il ne reste plus d'écart visible. Montre-moi la capture finale à côté de la maquette.

ÉTAPE 4 — Téléphone et tablette
La maquette ne montre que l'ordinateur : adapte proprement en 390 px et 768 px (une colonne, menu téléphone, textes lisibles, boutons faciles à toucher, aucune image déformée, rien qui dépasse). Vérifie avec des captures à 360, 390, 768, 1024 et 1440 px : 0 débordement horizontal, 0 erreur dans la console.

RÈGLES
- Ne passe à l'étape suivante que quand la précédente est finie et vérifiée.
- Si un détail de la maquette est illisible ou ambigu, demande-moi au lieu d'inventer.
- À la fin, résume ce que tu as fait et les écarts qui restent, s'il y en a.
```
