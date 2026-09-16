# timsouris.github.io — Site vitrine IT & Cybersécurité (Timothée Souris)

Site vitrine personnel et professionnel de Tim (Timothée Souris) présentant ses activités IT, cybersécurité (SOC/SIEM, incident response, pentest web) et projets. Hébergé sur GitHub Pages via le dépôt `TimSouris/timsouris.github.io`. Projet strictement isolé de la toolchain offensive présente dans `/home/tim`.

## Statut du projet

- **Phase actuelle** : Cadrage, réflexion sur l'architecture du contenu et la charte graphique.
- **Règle absolue** : **Ne pas entamer le build ni générer le code du site tout de suite.** Valider d'abord la structure, les contenus clés et les choix techniques avec Tim.

## Identité visuelle & Design

- **Palette chromatique** :
  - Fonds & structures : Bleus profonds et bleu marine (dark mode élégant et sobre).
  - Accents & contrastes : Touches de bleu électrique (CTA, highlights, bordures subtiles).
- **Typographie** :
  - Sans-serif moderne, aérée et légère (poids légers/moyens, bonne lisibilité).
  - Éviter le rendu "cliché IA" / templates vus et revus.
  - Pistes typographiques : *Plus Jakarta Sans*, *Geist*, *Inter* (avec tracking aéré), ou sans-serif légère type *Calibri Light* / *Sora*.

## Layout du dépôt

- `AGENTS.md` — Directives pour les agents travaillant sur ce projet.
- `STRUCTURE_DRAFT.md` — Propositions de structure de contenu et d'arborescence (en cours de réflexion).
- `src/` ou `public/` — (À initialiser une fois la stack validée).

## Environnement & Déploiement

- **Hébergement** : GitHub Pages (`https://timsouris.github.io`).
- **Remote git** : `git@github.com:TimSouris/timsouris.github.io.git` (authentification active via `gh` sous le compte `TimSouris`).
- **Branche principale** : `main`.
- **Exécution** : Toutes les commandes de ce projet s'exécutent avec l'utilisateur `tim` (`sudo -u tim ...`).

## Pitfalls & Garde-fous

- **Isolation pentest** : Ne jamais mélanger ce dépôt avec les dossiers d'engagement (`~/.pentest/`, `~/tools/`, SecLists). Ce projet est purement orienté web vitrine.
- **Droits de fichiers** : Tous les fichiers doivent appartenir à `tim:tim`. Ne pas créer d'artefacts sous l'utilisateur root.
- **Pas de build prématuré** : Ne pas installer de frameworks lourds ou générer de templates HTML/CSS tant que la structure n'est pas validée avec Tim.
