# Vorgehensmodell der Zusammenarbeit

So arbeiten Michael und Claude an diesem Projekt. Dieses Dokument ersetzt das Gedächtnis früherer Sitzungen: Wer es liest, kann nahtlos weitermachen.

## Grundablauf einer Änderung
1. **Anliegen aufnehmen.** Michael formuliert kurz (oft per Sprache). Claude liest sinngemäss. Ist der Auftrag klar, startet Claude sofort, mit einem Satz «Ich mache jetzt …». Ist er mehrdeutig und teuer, kommt vorher genau eine kurze Rückfrage.
2. **Bei Design- und Stilfragen zuerst Varianten.** Claude baut 2 bis 3 Vorschläge als Vorschauseiten (jeweils Vorher/Nachher und Begründung der Verbesserungen), nummeriert und benannt. Michael wählt per Nummer oder Name («Variante a», «Icon: 2 · Kartenstapel», «Grafikstil: 4 · Dezent»). Auf Wunsch mit Mischung («Variante a mit Schatten aus d»).
3. **Freigabe mit einem Wort.** «umsetzen» oder «nun anwenden» heisst: Gewählte Variante auf den ganzen Katalog anwenden, nicht nur auf die Beispiele.
4. **Umsetzen und selbst prüfen.** Render in drei Breiten, Überlaufprüfung der Karten, Seitenzahl der Factsheets, JS-Fehler. Ergebnisse anschauen, nicht nur Skripte laufen lassen.
5. **Bauen, committen, pushen.** `node tools/build.mjs`, dann Commit mit Trailern, Push auf `main`.
6. **Vorschau neu veröffentlichen** (Artifact, gleiche URL) und kurz antworten: was ist neu (wenige Sätze oder Liste), Link zur Seite, Hinweis dass das Deployment nicht verifizierbar ist.
7. **Offenes ehrlich nennen** (was nicht gemacht, nicht geprüft oder unsicher ist) und genau einen sinnvollen nächsten Schritt vorschlagen.

## Wie Michael gerne arbeitet
- Er will Entscheidungsgrundlagen: «hinterfrage kritisch», «was ist deine Empfehlung», «liste auf, was du verbessern würdest», «welche … sollen neu dazukommen?». Darauf zuerst Vorschlag und Empfehlung liefern, nicht gleich bauen; erst nach seiner Antwort («okay», «jetzt umsetzen») umsetzen.
- Er mag sichtbare Vorschauen (Seiten mit Vorher/Nachher) statt abstrakter Beschreibungen.
- Er prüft den Druck selbst (Karten duplex über die kurze Kante) und meldet Abweichungen in Millimetern zurück.
- Er korrigiert knapp und erwartet, dass Claude daraus verallgemeinert und überall konsequent anwendet.
- Bei längeren Arbeiten kurze Zwischenmeldungen (ein bis zwei Sätze), wenn er länger nichts gehört hat.

## Inhaltsregeln für Methoden
- Dateiformat und Pflichtfelder: README und `tools/build.mjs`. Pro Methode 3 bis 7 Verknüpfungen (vorher, danach, ergänzt, alternative), Gegenrichtungen dürfen sich nicht widersprechen.
- Neue Methode = Markdown-Datei, Kartennummer `Phase-Nummer` (stabil, nie umnummerieren), Abschnitt `## Karte` mit Längenlimits (Teaser 105, Gut wenn je 60, Regeln je 62, Besser nicht 78), Grafik in `js/kartengrafik.js`, danach Zuschnitt neu berechnen, Sets in `methoden/sets.json` ergänzen, Rückverweise von bestehenden Methoden ergänzen (soweit unter 7 Verknüpfungen).
- Werkzeuge haben keine eigenen Verknüpfungen, werden über das Feld `werkzeuge` der Methoden angebunden (mindestens zwei Methoden je Werkzeug).
- Quellen: nur reale Standardwerke und Normen (BABOK, IREB/Pohl-Rupp, ISO 29148 u. a.); unsicher ist besser weglassen als erfinden.

## Vorlage für die Abschlussantwort
Ein Satz, was geliefert wurde. Dann die Punkte der Änderung (kurz). Dann: `Test: https://goerks.github.io/methodenkatalog/` plus der Satz, dass das Deployment von hier nicht prüfbar ist (Actions-Run kontrollieren, falls alte Version). Dann «Offen» und ein Vorschlag für den nächsten Schritt.

## Wechsel auf ein neues Claude-Konto
1. Repo `goerks/methodenkatalog` im neuen Konto verfügbar machen (GitHub-Anbindung, Repo hinzufügen).
2. Dieses Repo klonen. `CLAUDE.md` wird automatisch gelesen; zusätzlich diese Datei und `docs/entscheide.md`, `docs/offene-punkte.md` lesen.
3. Optional den Skill «methodenkatalog-zusammenarbeit» im neuen Konto speichern (Text siehe unten in `docs/skill-methodenkatalog.md`).
4. Vorschau-Artifact im neuen Konto neu anlegen (`tools/preview.py`); die alte URL gehört dem alten Konto.
5. Node 18+, Playwright (`npm i -g playwright` und `npx playwright install chromium`) und poppler-utils für die Prüfskripte bereitstellen.
