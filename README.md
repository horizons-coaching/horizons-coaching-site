# Horizons-Coaching — site

Site statique (Eleventy) + blog éditable par un mini-CMS (Sveltia CMS), hébergé sur Cloudflare Pages.

## Structure
- `src/index.html` — le site (pages Valeurs, Domaines, Méthodes, À propos, Infos & RDV, Blog).
- `src/blog/*.md` — les articles du blog (créés/édités via l'admin).
- `src/admin/` — l'interface d'édition (Sveltia CMS) : accessible sur /admin.
- `src/_includes/` — gabarits du blog.

## Publication
Cloudflare Pages : build command `npm run build`, dossier de sortie `_site`.
Chaque `git push` (ou publication depuis /admin) redéploie le site automatiquement.
