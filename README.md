# Methodenkatalog RE und BA

**Online ansehen: https://goerks.github.io/methodenkatalog/**

Statische Webseite für Requirements Engineering und Business Analyse (klassisch und agil). Kein Build für die Seite selbst nötig: `index.html` im Browser öffnen oder per GitHub Pages veröffentlichen.

## Aufbau
- `methoden/<kategorie>/<id>.md` eine Datei pro Methode (hier wird gearbeitet)
- `tools/build.mjs` liest die Methoden, prüft sie und erzeugt `data/catalog.js`
- `data/catalog.js` erzeugt, nicht von Hand bearbeiten
- `js/app.js` Ansichten (Kategorien, Phasen-Landkarte, Alle Methoden) und Methodenseite
- `js/visuals.js` kleine Grafiken zu einzelnen Methoden (Feld `grafik`)
- `css/style.css` Design mit hellem und dunklem Thema

## Neue Methode anlegen
1. Datei `methoden/<kategorie>/<id>.md` erstellen. Die ID ist der Dateiname: klein, mit Bindestrichen, ohne Umlaute.
2. Vorlage:

```markdown
---
name: Planning Poker
kategorie: priorisieren   # ermitteln, dokumentieren, modellieren, priorisieren, planen, absichern
vorgehen: agil            # klassisch, agil, beide
phase: bewerten           # verstehen, ermitteln, spezifizieren, bewerten, planen, absichern
typ: Schätzung
aufwand: 2 bis 5 Min. pro Story
werkzeuge: [Karten, Jira-Plugin]
grafik: poker             # optional, Name aus js/visuals.js
reihenfolge: 4            # optional, Position in der Kategorie
status: entwurf           # entwurf, geprueft, veroeffentlicht
---

Kurzbeschreibung in zwei Sätzen.

## Ablauf
1. Erster Schritt
2. Zweiter Schritt

## Regeln
- Eine Regel

## Beispiel: Titel des Beispiels
Text des Beispiels.

## Verknüpfungen
- vorher: [[user-stories]] Begründung in einem Satz.
- danach: [[product-backlog]] Begründung in einem Satz.
```

Arten der Verknüpfung: `vorher`, `danach`, `ergaenzt`, `alternative`.

3. `node tools/build.mjs` ausführen (Node 18 oder neuer). Der Prüfer meldet fehlende Pflichtfelder, unbekannte Verknüpfungen, doppelte IDs und Methoden, auf die niemand verweist. Pro Methode sind 3 bis 7 Verknüpfungen erlaubt.
4. Geänderte Dateien und `data/catalog.js` committen.

## Veröffentlichen mit GitHub Pages
Der Workflow `.github/workflows/pages.yml` prüft und baut den Katalog bei jedem Push auf `main` und veröffentlicht die Seite.
Einmalig einstellen: Repo-Einstellungen, Bereich Pages, Source auf **GitHub Actions** setzen.
Die Seite ist danach unter `https://<konto>.github.io/methodenkatalog/` erreichbar. Der Lauf ist unter Actions sichtbar. Schlägt der Prüfer an, wird nichts veröffentlicht.
Alternativ ohne Workflow: Source «Deploy from a branch», Branch `main`, Ordner `/ (root)`.


## Stand 0.2: Wissenslandkarte

- Startseite ist die **Wissenslandkarte**: Methoden als Punkte, organisch angeordnet (Kräftemodell in `js/graph.js`). Stark vernetzte Methoden liegen zentral. Farbe = Phase, Form = Typ.
- Neues Feld `form` (methode, artefakt, modell, meeting, werkzeug) und optional `kurz` (Kurzbezeichnung für die Karte).
- Werkzeuge liegen in `methoden/werkzeuge/`, haben keine eigenen Verknüpfungen und ergeben sich aus dem Feld `werkzeuge` der Methoden (mindestens zwei Methoden je Werkzeug).
- Rückverweise entstehen automatisch aus den Verknüpfungen (`js/core.js`).
- Dateien: `js/core.js` (Modell, Filter), `js/graph.js` (Karte), `js/app.js` (Ansichten), `js/visuals.js` (Grafiken).

## Stand 0.3

- Methodenseiten mit Wofür, Wann sinnvoll und besser nicht, Vorbereitung, Praxis, Empfehlung, Quellen.
- Abschnitte `Lieferanten`, `Eingaben`, `Ergebnisse`, `Konsumenten` (SIPOC). Eingaben und Ergebnisse verweisen mit `Text >> [[id]] Verb` auf andere Methoden. Die Seite zeigt sie in vier umschaltbaren Darstellungen (Weg, Tabelle, Artefaktfluss, Sätze).
- Karte für Touch: Antippen wählt, «Methode öffnen» öffnet, zwei Finger zoomen.
