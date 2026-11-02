# 08 — Audit SEO, sécurité et vitesse avant la mise en production

À lancer une fois le site en ligne sur son adresse finale (ou sur l'adresse de démo), après le prompt 05. Remplace `https://www.exemple.fr` par la vraie adresse.

```
Fais un audit complet de mise en production du site https://www.exemple.fr (code dans ce dossier) sur 3 axes : SEO, sécurité, vitesse. Tu es un expert qui signe le passage en production : rien n'est « OK » sans preuve.

MÉTHODE
- Pour chaque point : OK / KO / non applicable, avec la PREUVE (commande lancée + extrait de sortie, ou fichier + ligne).
- Ne corrige rien pendant l'audit. À la fin, rends un tableau trié : BLOQUANT (on ne met pas en ligne) / À CORRIGER cette semaine / BONUS. Pour chaque KO : la correction exacte proposée.
- Si un test demande un accès que tu n'as pas (Search Console, hébergeur, DNS), dis-le au lieu de le supposer.

1. SEO
- Chaque page : <title> unique (50-60 caractères, métier + ville), meta description unique (140-160 caractères), un seul <h1>, titres dans l'ordre (h2, h3…), URL lisibles.
- Balise canonical et og:url sur le domaine final (pas la démo), Open Graph complet (titre, description, image 1200×630 qui existe).
- Données structurées JSON-LD LocalBusiness : nom, adresse, téléphone, horaires, zone desservie identiques au site et à la fiche Google ; aucune note ni aucun avis inventé. Valide-les (structure JSON correcte + champs requis).
- sitemap.xml : toutes les pages publiques, sur le bon domaine, chaque URL répond 200 (curl). robots.txt : n'interdit rien d'important et pointe vers le sitemap.
- Pages légales et 404 : non indexées si besoin (noindex), page 404 personnalisée qui renvoie bien un code 404.
- Images : alt descriptif partout, noms de fichiers parlants.
- Liens : aucun lien cassé, interne ou externe (vérifie chaque href avec curl), liens externes en rel="noopener".
- Rappelle-moi les étapes hors code : Search Console (propriété + envoi du sitemap), fiche Google Business Profile cohérente avec le site.

2. SÉCURITÉ
- HTTPS partout : http:// et la version sans/avec www redirigent en 301 vers une seule adresse https ; certificat valide (date d'expiration).
- En-têtes HTTP (curl -sI) : Strict-Transport-Security, Content-Security-Policy adaptée au site (polices, formulaire), X-Content-Type-Options: nosniff, Referrer-Policy, Permissions-Policy, protection contre l'affichage dans une iframe (frame-ancestors ou X-Frame-Options). Propose les en-têtes exacts pour l'hébergeur utilisé (fichier _headers pour Netlify, vercel.json pour Vercel, .htaccess pour Apache).
- Aucun secret dans le code ni dans l'historique git : cherche clés API, mots de passe, jetons (grep sur le dossier + git log -p). La clé du service de formulaire doit être une clé publique prévue pour le navigateur ; dis-le si ce n'est pas le cas.
- Aucun fichier sensible accessible en ligne : teste /.git/, /.env, /AGENTS.md si non voulu, sauvegardes .zip/.bak (curl → doit répondre 404 ou 403).
- Formulaire : protection anti-robots (champ piège ou captcha du service), aucun envoi en http, message de confirmation sans afficher de données personnelles.
- Ressources externes : chargées en https, sans script inutile ; liste ce qui est chargé depuis d'autres domaines.
- RGPD : bannière de cookies seulement si des traceurs sont posés (sinon, pas besoin) ; mentions légales et politique de confidentialité remplies, sans crochets restants.

3. VITESSE
- Lance Lighthouse en mode mobile ET ordinateur sur l'accueil et sur la page Contact :
  npx lighthouse https://www.exemple.fr --preset=desktop --output=json --quiet
  (et sans --preset pour le mobile). Donne les 4 scores et les Core Web Vitals (LCP, CLS, TBT).
- Objectifs : Performance ≥ 90 sur mobile, LCP < 2,5 s, CLS < 0,1.
- Images : format moderne (WebP/AVIF), dimensions adaptées à l'affichage, width/height renseignés, loading="lazy" sous la ligne de flottaison, image principale préchargée.
- Polices : hébergées sur le site ou préconnectées, font-display: swap, pas plus de 2 familles / 4 graisses.
- CSS/JS : poids total, rien de bloquant inutile, pas de bibliothèque chargée pour rien.
- Cache et compression : en-têtes Cache-Control sur les fichiers statiques, compression gzip ou brotli active (curl -sI -H "Accept-Encoding: br,gzip").
- Poids total de l'accueil (objectif < 1 Mo) et nombre de requêtes.

4. CONTRÔLE FINAL
- Captures de l'accueil à 390 et 1440 px pour vérifier que rien n'a bougé.
- Résumé en 5 lignes : peut-on mettre en production aujourd'hui ? Si non, qu'est-ce qui bloque ?
```
