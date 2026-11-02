# 01 — Adapter le template à un artisan

À coller dans un agent IA ouvert à la racine du dépôt.

```
Tu travailles dans ce dépôt : un template de site vitrine d'artisan en HTML/CSS pur,
sans build, sans framework. Lis AGENTS.md EN ENTIER avant toute modification et applique
ses six règles — en particulier : ne rien inventer, aucun faux avis, aucun chiffre que je
ne t'aie pas donné.

Adapte le template pour : [MÉTIER] à [VILLE].

INFORMATIONS FOURNIES PAR L'ARTISAN
- Nom de l'entreprise : [...]
- Forme juridique : [...]            - Année de création : [...]
- Téléphone affiché : [...]          - WhatsApp sur ce numéro : [oui / non]
- E-mail qui reçoit les demandes : [...]
- Adresse : [...]                    - SIRET : [...]
- Horaires : [...]                   - Délai de réponse promis : [...]
- Prestations, par ordre d'importance : [1...] [2...] [3...]
- Ce qu'il refuse de faire : [...]
- Communes desservies : [...]
- Assurance décennale : [assureur], contrat n° [...]
- Qualifications réelles : [...]
- Deux ou trois phrases sur son parcours, avec ses mots : [...]
- Couleur d'accent souhaitée : [code hex, ou « propose-m'en une adaptée au métier »]
- Domaine final : [https://...]

TRAVAIL À FAIRE, DANS CET ORDRE
1. Les remplacements globaux du §3.0 d'AGENTS.md, sur les six fichiers HTML — y compris
   la suppression de la bannière <p class="demo-banner">.
2. La réécriture du contenu de chaque page (§3.1 à §3.4) : phrases courtes, concrètes,
   orientées appel ou devis. Pas de « savoir-faire », « passion », « à votre écoute ».
3. La couleur d'accent (§4.1) : les trois variables --accent, --accent-dark, --accent-soft.
   Jamais de fond beige.
4. Les balises SEO de chaque page et le JSON-LD de index.html, avec le @type précis (§8.3).
   Pas d'aggregateRating.
5. Le domaine final dans canonical, og:url, og:image, sitemap.xml et robots.txt.

CONTRAINTES
- Aucune dépendance nouvelle, aucune étape de build. Le site doit toujours s'ouvrir
  en double-cliquant sur index.html.
- Les emplacements d'avis restent VIDES. Si je ne t'ai pas donné d'avis réels, n'en écris pas.
- Toute information que je n'ai pas fournie reste entre crochets dans le code.

À LA FIN
- Donne-moi la liste exacte des informations encore manquantes, fichier par fichier.
- Passe la checklist du §9 d'AGENTS.md et dis précisément ce qui n'est pas encore coché.
```
