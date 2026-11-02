# Site artisan — template gratuit

Un template de site vitrine pour artisan, en **HTML et CSS purs**. Pas de framework, pas de
npm, pas d'étape de build : le site s'ouvre en double-cliquant sur `index.html`.

Il est pensé pour être **adapté par une IA** : le fichier [`AGENTS.md`](AGENTS.md) explique à un
agent (Claude Code, Codex, Cursor…) — et à vous — tout ce qu'il faut faire pour en sortir un
vrai site livrable à un artisan.

## Ce qu'il contient

- 4 pages publiques : accueil, services, à propos, contact
- 2 pages légales **en modèle à remplir** : mentions légales et politique de confidentialité,
  conformes aux obligations françaises (LCEN, RGPD, assurance décennale, médiation)
- Un formulaire de contact qui marche **sans serveur** (Web3Forms), plus un bouton d'appel
  et un lien WhatsApp
- SEO local prêt : `title`/`description` par page, Open Graph, JSON-LD `LocalBusiness`,
  `sitemap.xml`, `robots.txt`, favicon
- Responsive de 360 à 1440 px, accessible (contrastes, focus visibles, navigation au clavier)
- Polices auto-hébergées : **aucun appel à Google Fonts**, rien à déclarer côté RGPD
- [`prompts/`](prompts/) : huit prompts prêts à copier dans un agent IA

Le contenu livré est celui d'un artisan **fictif**, « Atelier Vasseur », signalé par un bandeau
en haut de chaque page. Tout est à remplacer.

## Démarrage en 3 étapes

1. **Récupérer le template**
   ```bash
   git clone https://github.com/lucasananou/site-artisan-ia.git
   cd site-artisan-ia
   ```
   (ou « Code → Download ZIP » depuis GitHub)

2. **Ouvrir `index.html`** dans un navigateur, en double-cliquant. Le site s'affiche tel quel.

3. **Lancer un agent IA à la racine du dossier** et lui coller le prompt
   [`prompts/01-adapter-le-template.md`](prompts/01-adapter-le-template.md), complété avec les
   informations de l'artisan. L'agent lit `AGENTS.md` et fait le reste.

Puis suivez la checklist du §9 d'`AGENTS.md` avant de mettre en ligne (Netlify, Vercel ou
GitHub Pages, gratuitement — pas à pas au §10).

## Les 4 fichiers qui comptent

| Je veux changer… | J'ouvre… |
|---|---|
| la couleur du site | `assets/css/styles.css` → variable `--accent`, tout en haut |
| les textes, le nom, le téléphone | les 6 fichiers `.html` |
| la destination du formulaire | `assets/js/site.js` → `web3formsKey` |
| les photos | `assets/img/` |

## Règles de base

Le template est construit autour de quatre interdits, détaillés dans `AGENTS.md` :
ne rien inventer, aucun faux avis, des photos réelles de l'artisan, aucune étape de build.

## Crédits

- Photographies d'exemple, sous [licence Unsplash](https://unsplash.com/license) :
  [Minh Đức](https://unsplash.com/@meanduck),
  [Nicolas Hoizey](https://unsplash.com/@nhoizey),
  [Barn Images](https://unsplash.com/@barnimages).
  Elles sont destinées à être remplacées par les photos de l'artisan.
- Polices : [Fraunces](https://fonts.google.com/specimen/Fraunces) et
  [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans),
  licence SIL Open Font 1.1.

## Licence

[MIT](LICENSE) — utilisation libre, y compris commerciale, pour vos clients.
Attribution appréciée mais pas exigée.

---

Fait par [Lucas Ananou](https://www.youtube.com/@lucasorylis).
