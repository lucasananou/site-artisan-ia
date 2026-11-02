# 05 — Vérifier avant la mise en ligne

```
Vérifie ce site avant mise en ligne, en suivant la checklist du §9 d'AGENTS.md.

MÉTHODE
- Pour chaque point : OK ou KO, et la PREUVE — la commande lancée et sa sortie, ou le
  fichier et le numéro de ligne en cause. Ne coche rien sans vérification réelle.
- Ne corrige rien tant que je n'ai pas validé la liste.

À VÉRIFIER EN PRIORITÉ
1. Restes du template :
   grep -rn "Atelier Vasseur\|exemple\.fr\|01 99 00 00 00\|\[Ville\]\|demo-banner" *.html
2. Crochets oubliés :
   grep -rno "\[[^]]*\]" *.html
3. Liens internes : chaque href relatif pointe vers un fichier qui existe.
4. Images : chaque <img> a un alt descriptif, aucune image ne dépasse 200 Ko.
5. Rendu : ouvre les 6 pages à 360, 390, 768, 1024 et 1440 px de large.
   Zéro débordement horizontal, zéro erreur de console, menu mobile fonctionnel.
   Regarde les captures toi-même avant de conclure.
6. Validation HTML : https://validator.w3.org/nu/
7. Cohérence SEO : title et description uniques, canonical et og:url sur le bon domaine,
   JSON-LD sans aggregateRating fictif, sitemap.xml et robots.txt sur le bon domaine.
8. Formulaire : la clé est-elle renseignée dans assets/js/site.js ? (l'envoi réel se teste
   à la main, en ligne — dis-le-moi plutôt que de le supposer)

Rends-moi la liste triée : bloquant / à corriger / cosmétique.
```
