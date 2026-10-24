# Methodenkatalog RE und BA

Statische Webseite (kein Build nötig). `index.html` im Browser öffnen oder auf einem beliebigen Webspace ablegen.

## Struktur
- `data/` Methoden als JavaScript-Daten, gruppiert nach Kategorie
- `js/app.js` Ansichten (Kategorien, Phasen-Landkarte, Alle Methoden) und Methodenseite
- `js/visuals.js` kleine Grafiken zu einzelnen Methoden (Feld `vis`)
- `css/style.css` Design mit hellem und dunklem Thema

## Neue Methode hinzufügen
Eintrag in eine Datei unter `data/` ergänzen. Pflichtfelder:
`id` (eindeutig, klein, mit Bindestrich), `n` Name, `c` Kategorie (erm, dok, mod, prio, plan, qs), `m` Vorgehen (klassisch, agil, beide),
`ph` Phase (verstehen, ermitteln, spezifizieren, bewerten, planen, absichern), `t` Typ, `k` Kurzbeschreibung, `aufwand`,
`ab` Ablauf (Liste), `re` Regeln (Liste), `bsp` {t, x}, `li` Verknüpfungen [id, art, Begründung] mit art = vorher, danach, ergaenzt, alternative, `tools`.

Regeln für Verknüpfungen: 3 bis 7 pro Methode, nur direkte Nachbarn, jede Methode wird von mindestens einer anderen verlinkt.

## Veröffentlichen mit GitHub Pages
Repo-Einstellungen, Bereich Pages: Source «Deploy from a branch», Branch `main`, Ordner `/ (root)`.
Die Seite ist danach unter `https://<konto>.github.io/methodenkatalog/` erreichbar. Alle Pfade sind relativ, `.nojekyll` schaltet die Jekyll-Verarbeitung ab.
