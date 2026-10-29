# eportfolio — guide rapide / quick guide

## Structure
```
index.html          page (ne pas modifier sauf pour les balises meta)
data/content.js     TOUT votre contenu, en anglais et en français  <-- le seul fichier à éditer
css/style.css       design (couleurs en haut du fichier, section TOKENS)
js/main.js          affichage, langue, carte, interactions
assets/img/         images (actuellement des PLACEHOLDER en SVG)
assets/cv-en.pdf    votre CV en anglais (à remplacer)
assets/cv-fr.pdf    votre CV en français (à remplacer)
assets/pdf/         les PDF de vos projets (tipe-looping.pdf, tp-hydraulic-jumps.pdf) : remplacez-les en gardant les noms
```

## Modifier le contenu
1. Ouvrez `data/content.js`.
2. `shared` : nom, e-mail, liens, images, années, tags, coordonnées de la carte [longitude, latitude].
3. `en` et `fr` : tous les textes. Gardez le même nombre d'éléments et le même ordre dans les trois blocs.
4. Remplacez les images dans `assets/img/` (JPG, WebP ou PNG conseillés : 1600 px de large pour les projets, 900x1200 pour le portrait) et mettez à jour les chemins dans `shared`.
5. Remplacez `assets/cv-en.pdf` et `assets/cv-fr.pdf` (gardez les noms).
6. Dans `index.html`, mettez à jour `<title>`, la description et `og:image` (l'URL finale du site dans `siteUrl`).

Couleurs : variables en haut de `css/style.css` (`--navy`, `--steel`, `--signal`).

## Tester en local
Double-cliquez sur `index.html`, ou : `npx serve .`

## Déployer
- **Vercel** : vercel.com → Add New → Project → glissez le dossier (ou connectez un dépôt GitHub). Framework : "Other". Aucun build.
- **Netlify** : app.netlify.com/drop → glissez le dossier.
