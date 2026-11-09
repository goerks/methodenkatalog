# Methodenkatalog RE und BA: Arbeitsanweisung für Claude

Dieses Repo ist ein statischer Methodenkatalog für Requirements Engineering und Business Analyse (82 Methoden, 10 Werkzeuge, 92 druckbare Karten, A4-Factsheet je Methode).
Live: https://goerks.github.io/methodenkatalog/ (GitHub Pages, Workflow `.github/workflows/pages.yml`, Repo `goerks/methodenkatalog`, Branch `main`).
Auftraggeber: Michael Burkard (michael.burkard@bbv.ch), Zeitzone Europe/Zurich, schreibt Deutsch, teils per Sprachnachricht (Texte können verstümmelt sein: sinngemäss lesen, bei echter Unklarheit kurz nachfragen).

**Zuerst lesen:** `docs/zusammenarbeit.md` (Vorgehensmodell, so arbeiten wir), `docs/entscheide.md` (getroffene Design- und Inhaltsentscheide, nicht neu aufrollen), `docs/offene-punkte.md` (was noch aussteht), `README.md` (Dateiformat, Aufbau).

## Feste Regeln (immer einhalten)
1. Sprache: Deutsch, Schweizer Rechtschreibung (ss statt ß, «Guillemets»). Ton knapp, sachlich, ohne Gedankenstriche als Stilmittel.
2. **Jedes Mal, wenn ein Teststand bereit ist:** Link auf die Seite nennen (https://goerks.github.io/methodenkatalog/) und ausdrücklich sagen, dass das Deployment von hier aus nicht prüfbar ist; bei alter Ansicht den Actions-Run kontrollieren lassen.
3. Nach jeder Änderung: `node tools/build.mjs` (Prüfer, muss fehlerfrei laufen), `node tools/test/check.js`, bei Inhalt/Layout zusätzlich `node tools/test/factsheets.js`. Erst danach committen und pushen.
4. Commit-Nachrichten deutsch, kurz, mit Trailern am Ende (Modellname und Session-Link der aktuellen Sitzung einsetzen):
   `Co-Authored-By: <Modell> <noreply@anthropic.com>` und `Claude-Session: <Link>`.
5. Nur auf `main` arbeiten und pushen; kein Force-Push.
6. Quellen nie erfinden. Alle Quellen stehen auf «Entwurf, fachlich noch nicht geprüft», bis sie gegen das Original verifiziert sind.
7. Texte in Grafiken sind Beschriftungen (benannte Teilbereiche), keine Erklärungen; Erklärendes gehört in die Beschreibung der Methode.
8. Druckausgabe (Karten, Factsheets) nur ändern, wenn ausdrücklich verlangt; der Nutzer testet den Duplexdruck selbst.

## Befehle
- Bauen und prüfen: `node tools/build.mjs` (Node 18+, erzeugt `data/catalog.js`; meldet Pflichtfelder, tote Links, widersprüchliche Verknüpfungen, Methoden ohne Rückverweis)
- Prüfskripte (Playwright, `NODE_PATH=$(npm root -g)` setzen; poppler `pdfinfo` für Seitenzahlen): `tools/test/check.js` (Karten-Überlauf, JS-Fehler), `factsheets.js` (alle Factsheets, Seitenzahl), `cards-pdf.js`, `shots.js` (Mobile 390, Tablet 820, Desktop 1440), `grafiken.js` (Kartengrafiken gross)
- Zuschnitt der Kartengrafiken nach Änderung an `js/kartengrafik.js`: `NODE_PATH=$(npm root -g) node tools/crop-kartengrafik.mjs`
- Vorschau als Claude-Artifact: `python3 tools/preview.py out.html`, dann mit dem Artifact-Werkzeug veröffentlichen (bei neuem Konto neuen Artifact anlegen, die alte URL gehört dem alten Konto)

## Wichtige Stellen im Code
- Inhalte: `methoden/<kategorie>/<id>.md` (Front-Matter plus feste Abschnitte, siehe README), `methoden/sets.json` (Kartensets)
- Seiten: `js/app.js` (Ansichten, Methodenseite, `einordnung()`, `ioBlock()`), `js/graph.js` (Wissenslandkarte), `js/core.js` (Modell, Filter)
- Grafiken: `js/visuals.js` (Builder `vb()`, Stil «Dezent» per Pfad-Abtastung `vRough()`), `js/kartengrafik.js` (Grafiken je Methoden-ID mit `D(id, label, fn)`, Hilfen `nd`, `pl`, `tx`, `ck`, `person`, `bd`; Ebenen: Schatten, Linien, Formen, Text, deshalb liegen Linien unter gefüllten Formen)
- Karten und Factsheet: `js/cards.js`, `js/cardsui.js`, `js/factsheet.js`; CSS `css/style.css` (Tokens, Responsive-Skala am Dateiende), `css/cards.css`
