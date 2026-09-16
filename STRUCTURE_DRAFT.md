# Réflexion & Structure — timsouris.github.io

Document de travail pour poser la structure du site vitrine avant tout développement technique.

---

## 1. Objectifs & Positionnement

- **Cible** : Recruteurs, RSSI, leads cybersécurité/IT, pairs techniques.
- **Image renvoyée** : Précis, rigoureux, moderne, orienté défense & analyse tout en démontrant une maîtrise offensive (Blue/Purple team).
- **Format cible** : Single-page fluide et percutante (ou multi-pages très léger si nécessaire), ultra-rapide au chargement.

---

## 2. Propositions d'Arborescence & Sections

### Option A : Narrative & Structurée (Recommandée)
1. **Hero Header** :
   - Accroche directe : Nom, rôle clé (*Ingénieur Cybersécurité / Détection & Réponse aux Incidents / Pentest Web*).
   - Pitch en 2 phrases (parcours, background EBIOS RM / SIEM / Sécurité offensive).
   - Liens rapides : GitHub, LinkedIn, CV PDF téléchargeable, contact.
2. **Domaines d'Expertise (Cartes / Piliers)** :
   - *SOC & Détection* : SIEM (Splunk), Threat Hunting, analyse d'incidents.
   - *Audit & Pentest Web* : Méthodologies d'audit (Burp Suite, OWASP Top 10), bug bounty.
   - *Gouvernance & Risques* : EBIOS RM, Security+.
   - *Ingénierie & Dev* : Scripts Python/Go/Bash, outillage interne, automatisation.
3. **Réalisations & Projets Phares** :
   - Mise en avant de projets concrets (outils open source, lab d'analyse, cas d'étude anonymisé, articles/writeups).
4. **Certifications & Accréditations** :
   - Badges discrets et élégants : ANSSI EBIOS Risk Manager, CompTIA Security+, Google Cybersecurity, TryHackMe Top 3%.
5. **Contact / Footer** :
   - Prise de contact par email/LinkedIn, clé PGP éventuelle, liens sociaux.

### Option B : Minimaliste & Directe (Focus Portfolio / Writeups)
1. **Hero ultra-épuré** (Bio concise + coordonnées).
2. **Matrix de compétences** (interactive ou catégorisée).
3. **Selected Works / Publications / Writeups**.
4. **Timeline rapide** (Parcours & formations clés).

---

## 3. Pistes Techniques Légères (GitHub Pages)

Puisque le site sera sur GitHub Pages, plusieurs options propres s'offrent à nous :
- **HTML / CSS vanilla + JS léger** : Zéro dépendance, ultra pérenne, chargement instantané (< 50ms), contrôle total du DOM.
- **Astro (Mode statique)** : Idéal pour un site de contenu rapide, composants réutilisables, pas de JS client inutile.
- **Tailwind CSS ou CSS Custom Properties** : Pour décliner fidèlement la palette bleue marine / électrique et la typo aérée.

---

## 4. Prochaines Étapes de Réflexion
- [ ] Valider l'option de structure préférée (Option A vs B ou mix).
- [ ] Arrêter les sections clés et les intitulés.
- [ ] Sélectionner la police sans-serif définitive (ex. *Plus Jakarta Sans* vs *Inter* vs *Geist*).
- [ ] Valider les nuances exactes des bleus (fonds sombres `#0A0F1D` / `#0D1527` et accents `#0066FF` / `#00D2FF`).
