# Architecture & Spécifications — timsouris.github.io

Document de référence fixant l'arborescence, les contenus clés, la stratégie de publication (Blog/Write-ups) et les principes visuels du site vitrine avant toute phase d'implémentation.

> **Règle projet** : Phase de conception uniquement. Aucun build ni génération de code tant que la structure et les maquettes ne sont pas validées par Tim.

---

## 1. Objectifs & Positionnement

- **Triple vocation** :
  1. **Attirer et convaincre les recruteurs & employeurs** : Mettre en avant un profil d'exception en cybersécurité et IT (double profil développement full-stack + expertise défensive/offensive opérationnelle).
  2. **Convertir des clients potentiels** : Présenter une offre de services claire, technique et crédible pour des missions d'audit, de sécurisation ou d'ingénierie IT.
  3. **Vitrine technique & autorité (Blog / Write-ups)** : Démontrer l'expertise sur le terrain via des write-ups TryHackMe réguliers, des analyses de CVE et des articles de veille défensive/offensive.
- **Tonalité** : Épurée, moderne, rigoureuse, hautement technique mais accessible et percutante.
- **Expérience utilisateur** : Dynamique, responsive (mobile/tablette/desktop), navigation fluide, temps de chargement instantané.

---

## 2. Arborescence Complète du Site

```text
/ (Page d'accueil — Grand CV interactif & vitrine)
├── /services/
│   ├── /services/creation-site-web/
│   ├── /services/pentest/
│   ├── /services/soc-detection/
│   ├── /services/consulting-cyber/
│   └── /services/automatisation-ia/
├── /blog/ (Index des articles & write-ups avec filtres/tags)
│   └── /blog/[slug]/ (Page article détaillée avec coloration syntaxique & sommaire)
└── /contact/ (Page de contact dédiée & coordonnées professionnelles)
```

---

## 3. Détail des Pages & Contenus

### 3.1 Page d'Accueil : Le "Grand CV" Dynamique

L'accueil synthétise tout le profil de Tim en un coup d'œil immersif :

1. **Hero Header (Impact immédiat)** :
   - Emplacement réservé pour les futures **photos professionnelles** de Tim (intégration soignée, cadre épuré avec liseré lumineux).
   - Accroche forte : Nom (*Timothée Souris*), rôle clé (*Ingénieur Cybersécurité & Développeur IT*).
   - Pitch de présentation (3-4 lignes) : Master en Informatique, apprentissage full-stack, expertise SOC/SIEM (Splunk), réponse à incidents, audit offensif web (TryHackMe Top 3%, YesWeHack) et démarche de gestion des risques EBIOS RM.
   - Boutons d'action (CTAs) : `Télécharger mon CV (PDF)`, `Me contacter`, `Découvrir mes services`.
   - Liens rapides : LinkedIn, GitHub, profil TryHackMe, email.

2. **Chiffres clés & Preuves de compétence (Bandeau de réassurance)** :
   - Master en Informatique (Bac+5).
   - Top 3% TryHackMe mondial & chercheur YesWeHack.
   - Certifications ANSSI EBIOS Risk Manager, CompTIA Security+, Google Cybersecurity.

3. **Carrousel / Grille des Services (Passerelle vers les pages dédiées)** :
   - Cartes dynamiques avec micro-animations au survol résumant les 5 pôles d'activité.

4. **Dernières Publications (Aperçu du Blog / Write-ups)** :
   - Mise en avant des 2 ou 3 derniers write-ups TryHackMe ou articles de recherche.
   - Badges de difficulté (Easy / Medium / Hard) et tags techniques (ex. *Web*, *PrivEsc*, *Splunk*, *Active Directory*).

5. **Parcours & Expériences (Timeline interactive)** :
   - Historique des expériences en entreprise (développement full-stack, projets sécurité, SIEM).
   - Formation supérieure & cursus universitaire.

6. **Compétences & Stack technique (Visualisation claire par piliers)** :
   - *Sécurité Défensive & Détection* : Splunk, SIEM, Threat Hunting, analyse d'incidents, EBIOS RM.
   - *Sécurité Offensive & Audit* : Burp Suite, méthodologies OWASP, reconnaissance avancée, exploitation web.
   - *Ingénierie Logicielle* : Python, Go, Bash, JavaScript/TypeScript, architectures web, API.
   - *Automatisation & Outils IA* : Agents autonomes, scripting d'orchestration, outillage sur-mesure.

7. **Call-to-Action final "Recruteur / Partenaire"** :
   - Encart incitatif avec phrase d'accroche pour déclencher la prise de contact immédiate.

---

### 3.2 Section Blog & Write-ups TryHackMe

Le blog est un pilier central pour asseoir la crédibilité technique auprès des recruteurs et pairs.

- **Index du Blog (`/blog/`)** :
  - Barre de recherche instantanée (côté client, ultra-rapide).
  - Filtres par catégories :
    - *Write-ups TryHackMe* (machines terminées, challenges CTF).
    - *Sécurité Web & Pentest* (analyses de vulnérabilités, bypass, méthodologies).
    - *SOC & Blue Team* (détection Splunk, threat intel, analyse forensique).
    - *Dev & Automatisation* (scripts, agents IA, tooling).
  - Cartes d'articles soignées avec date, temps de lecture estimé, tags et niveau de difficulté pour les boxes THM.
- **Page Article (`/blog/[slug]/`)** :
  - Mise en page aérée favorisant la lecture longue.
  - **Coloration syntaxique irréprochable** (Shiki / Prism) pour les commandes terminal, requêtes HTTP et code (Python, Go, Bash, JSON).
  - Sommaire automatique sticky (Table of Contents).
  - Boutons de partage et bouton "Copier le lien".

---

### 3.3 Architecture Technique du Blog : Faut-il un Back-end ?

> **Recommandation Cybersécurité & Performance** : **Pas de serveur back-end traditionnel.**

1. **Pourquoi éviter un serveur dynamique (Node.js/PHP/Python + Base de données SQL)** :
   - **Risque de sécurité (Surface d'attaque)** : Un back-end dynamique avec base de données expose à des risques d'exploitation (SQLi, failles d'authentification, vulnérabilités de packages). Pour un expert en cybersécurité, un site statique sans surface d'attaque en ligne renvoie un signal d'excellence technique et de cohérence totale.
   - **Complexité & Hébergement** : GitHub Pages n'héberge que des fichiers statiques (HTML/CSS/JS). Ajouter un back-end obligerait à payer ou maintenir un VPS/serveur séparé pour un simple blog.

2. **La solution moderne & élégante : Jamstack / SSG (Static Site Generator)** :
   - Vos articles et write-ups sont rédigés en **fichiers Markdown (`.md`) ou MDX (`.mdx`)** dans un dossier du projet (ex. `src/content/blog/`).
   - Chaque article a ses métadonnées en en-tête (titre, date, tags, difficulté THM, résumé).
   - **Workflow de publication simple comme bonjour** :
     - Vous rédigez votre write-up dans votre éditeur favori (ou via Obsidian).
     - Vous faites un `git push` sur la branche `main`.
     - GitHub Actions compile et déploie le site sur `timsouris.github.io` en moins de 30 secondes.
   - **Zéro coût, zéro maintenance, disponibilité 100%, vitesse de chargement instantanée (< 100ms)**.

3. **Option intermédiaire si Tim souhaite une interface d'écriture visuelle (CMS)** :
   - Possibilité de greffer un **CMS headless "Git-based"** (comme *Decap CMS* ou *Keystatic*).
   - Offre une interface web avec éditeur riche pour rédiger depuis n'importe quel navigateur, et committe automatiquement le Markdown sur GitHub à la publication, sans aucun serveur back-end à héberger.

---

### 3.4 Pages Services Détaillées

1. **/services/creation-site-web/** :
   - Sites vitrines modernes, légers, responsive, conçus dès le départ *Security by Design*.
2. **/services/pentest/** :
   - Audits applicatifs web et API (périmètre OWASP Top 10, logique métier, contrôles d'accès).
3. **/services/soc-detection/** :
   - Optimisation de règles SIEM Splunk, Threat Hunting, analyse de logs, réponse aux incidents.
4. **/services/consulting-cyber/** :
   - Analyse de risques EBIOS RM, gouvernance, posture globale de sécurité.
5. **/services/automatisation-ia/** :
   - Scripting d'orchestration (Python, Go, Bash), intégration d'outils et agents IA, gain de productivité.

---

### 3.5 Page Contact

- Formulaire épuré (Nom, Email, Société, Motif de contact, Message).
- Coordonnées professionnelles directes (LinkedIn, GitHub, Email pro, clé PGP).

---

## 4. Charte Graphique & Identité Visuelle

- **Atmosphère** : "Deep Blue Tech" — sobre, haut de gamme, inspirant confiance et précision technique.
- **Palette chromatique** :
  - *Fonds principaux* : Bleu nuit profond (`#070B14`, `#0A0F1D`).
  - *Cartes & conteneurs* : Bleu marine subtilement contrasté (`#0E172A`, `#131E36`).
  - *Accents & highlights* : Bleu électrique (`#0066FF`, `#00D2FF`, `#38BDF8`) pour le dynamisme, les liens actifs et les boutons d'action.
  - *Textes* : Blanc cassé (`#F8FAFC`) pour les titres, gris bleuté clair (`#94A3B8`) pour le corps de texte.
- **Typographie** :
  - Sans-serif contemporaine, aérée et fine (type *Plus Jakarta Sans*, *Geist*, ou *Inter* fine).

---

## 5. Prochaines Étapes Validées avec Tim

1. [x] Spécification de l'arborescence complète (Grand CV + 5 Services + Blog/Write-ups + Contact).
2. [x] Clarification technique de la gestion du blog (Markdown SSG vs back-end).
3. [ ] Réception et sélection des photos professionnelles de Tim.
4. [ ] Choix définitif de la typographie et des teintes hexadécimales exactes.
5. [ ] Validation des maquettes/wireframes avant tout début de build.
