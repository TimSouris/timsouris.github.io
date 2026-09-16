# Architecture & Spécifications — timsouris.github.io

Document de référence fixant l'arborescence, les contenus clés et les principes visuels du site vitrine avant toute phase d'implémentation.

> **Règle projet** : Phase de conception uniquement. Aucun build ni génération de code tant que la structure et les maquettes ne sont pas validées par Tim.

---

## 1. Objectifs & Positionnement

- **Double vocation** :
  1. **Attirer et convaincre les employeurs/recruteurs** : Mettre en avant un profil d'exception en cybersécurité et IT (double profil développement full-stack + expertise défensive/offensive opérationnelle).
  2. **Convertir des clients potentiels** : Présenter une offre de services claire, technique et crédible pour des missions d'audit, de sécurisation ou d'ingénierie IT.
- **Tonalité** : Épurée, moderne, rigoureuse, hautement technique mais accessible et percutante.
- **Expérience utilisateur** : Dynamique, responsive (mobile/tablette/desktop), navigation fluide, temps de chargement instantané.

---

## 2. Arborescence du Site

```text
/ (Page d'accueil — Grand CV interactif & vitrine)
├── /services/
│   ├── /services/creation-site-web/
│   ├── /services/pentest/
│   ├── /services/soc-detection/
│   ├── /services/consulting-cyber/
│   └── /services/automatisation-ia/
└── /contact/ (Page de contact dédiée & coordonnées professionnelles)
```

---

## 3. Détail des Pages & Contenus

### 3.1 Page d'Accueil : Le "Grand CV" Dynamique

L'accueil est pensé comme un CV vivant et immersif qui synthétise tout le profil de Tim en un coup d'œil :

1. **Hero Header (Impact immédiat)** :
   - Emplacement réservé pour les futures **photos professionnelles** de Tim (intégration soignée, cadre épuré avec liseré lumineux).
   - Accroche forte : Nom (*Timothée Souris*), rôle clé (*Ingénieur Cybersécurité & Développeur IT*).
   - Pitch de présentation (3-4 lignes percutantes) : Master en Informatique, apprentissage full-stack, expertise SOC/SIEM (Splunk), réponse à incidents, audit offensif web (TryHackMe Top 3%, YesWeHack) et démarche de gestion des risques EBIOS RM.
   - Boutons d'action (CTAs) : `Télécharger mon CV (PDF)`, `Me contacter`, `Découvrir mes services`.
   - Liens rapides : LinkedIn, GitHub, profil TryHackMe, email.

2. **Chiffres clés & Preuves de compétence (Bandeau de réassurance)** :
   - Master en Informatique (Bac+5).
   - Top 3% TryHackMe mondial & chercheur YesWeHack.
   - Certifications ANSSI EBIOS Risk Manager, CompTIA Security+, Google Cybersecurity.

3. **Carrousel / Grille des Services (Passerelle vers les pages dédiées)** :
   - Cartes dynamiques avec micro-animations au survol résumant les 5 pôles d'activité.
   - Lien vers la page détaillée de chaque service.

4. **Parcours & Expériences (Timeline interactive)** :
   - Historique des expériences en entreprise (développement full-stack, projets sécurité, SIEM).
   - Formation supérieure & cursus universitaire.

5. **Compétences & Stack technique (Visualisation claire par piliers)** :
   - *Sécurité Défensive & Détection* : Splunk, SIEM, Threat Hunting, analyse d'incidents, EBIOS RM.
   - *Sécurité Offensive & Audit* : Burp Suite, méthodologies OWASP, reconnaissance avancée, exploitation web.
   - *Ingénierie Logicielle* : Python, Go, Bash, JavaScript/TypeScript, architectures web, API.
   - *Automatisation & Outils IA* : Agents autonomes, scripting d'orchestration, outillage sur-mesure.

6. **Call-to-Action final "Recruteur / Partenaire"** :
   - Encart incitatif avec phrase d'accroche pour déclencher la prise de contact immédiate.

---

### 3.2 Pages Services Détaillées

Chaque page de service suit un gabarit cohérent : *Problématique client/entreprise* → *Notre approche / Méthodologie* → *Livrables & Garanties* → *CTA Contact*.

1. **Création de site web** :
   - Conception de sites vitrines modernes, rapides, sécurisés dès la conception (Security by Design).
   - Responsive design, performance web (Core Web Vitals), respect de la vie privée/RGPD.
   - Stack moderne, code propre et pérenne.

2. **Pentest (Tests d'intrusion & Audits web)** :
   - Audits applicatifs web et API (périmètre OWASP Top 10, logique métier, contrôles d'accès).
   - Posture offensive réaliste et méthodologie rigoureuse sans disruption de service.
   - Livrable actionnable : rapport clair avec preuve de concept (PoC), criticité CVSS et remédiations concrètes.

3. **SOC & Détection d'Incidents** :
   - Mise en place et optimisation de règles de détection (Splunk, SIEM).
   - Analyse de journaux d'événements, Threat Hunting, détection des comportements anormaux.
   - Procédures de réponse à incidents et limitation de l'impact.

4. **Consulting Cybersécurité & Gouvernance** :
   - Analyse de risques selon la méthode ANSSI EBIOS Risk Manager (EBIOS RM).
   - Évaluation de la posture de sécurité et recommandations stratégiques.
   - Accompagnement à la conformité et sensibilisation des équipes.

5. **Automatisation & Intégration IA** :
   - Développement de scripts et bots sur-mesure pour automatiser les tâches répétitives (Python, Go, Bash).
   - Intégration d'outils et d'agents IA dans les workflows quotidiens pour démultiplier la productivité.
   - Connexion d'APIs et sécurisation des flux de données.

---

### 3.3 Page Contact

- Formulaire épuré (Nom, Email, Entreprise, Type de demande : Recrutement / Audit / Projet Web / Autre, Message).
- Coordonnées directes cliquables (Email professionnel, profil LinkedIn, GitHub).
- Option clé publique PGP pour communications chiffrées si souhaité.

---

## 4. Charte Graphique & Identité Visuelle

- **Atmosphère** : "Deep Blue Tech" — sobre, haut de gamme, inspirant confiance et solidité technique.
- **Palette chromatique** :
  - *Fonds principaux* : Bleu nuit profond (`#070B14`, `#0A0F1D`).
  - *Cartes & conteneurs* : Bleu marine subtilement contrasté (`#0E172A`, `#131E36`).
  - *Accents & highlights* : Bleu électrique (`#0066FF`, `#00D2FF`, `#38BDF8`) pour le dynamisme, les liens actifs et les boutons d'action.
  - *Textes* : Blanc cassé (`#F8FAFC`) pour les titres, gris bleuté clair (`#94A3B8`) pour le corps de texte (excellent confort de lecture).
- **Typographie** :
  - Famille sans-serif légère et contemporaine (type *Plus Jakarta Sans*, *Geist*, *Inter* avec graisse fine/légère, ou *Calibri Light* moderne).
  - Éviter absolument les typographies génériques/standardisées des templates générés par IA.

---

## 5. Prochaines Étapes Validées avec Tim

1. [x] Spécification de l'arborescence et du positionnement "Grand CV".
2. [ ] Réception et sélection des photos professionnelles de Tim.
3. [ ] Choix définitif de la typographie et des teintes hexadécimales exactes.
4. [ ] Validation des maquettes/wireframes statiques avant tout début de build.
