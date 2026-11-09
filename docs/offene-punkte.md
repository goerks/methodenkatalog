# Offene Punkte

Stand 2026-11-09.

## Inhalt
- **Quellen verifizieren und kürzen** (rund 190 Quellen unverifiziert, Status «Entwurf»). Vorgehen: je Quelle gegen das Original prüfen (WebFetch/WebSearch), Fehlerhaftes korrigieren, überflüssiges streichen. Erst danach Quellenliste kürzen.
- **9 widersprüchliche Verknüpfungspaare** (Build-Warnungen), zum Beispiel product-backlog / story-mapping, planning-poker / story-points. Je Paar Richtung festlegen und die andere Seite anpassen. Aktuelle Liste: `node tools/build.mjs`.
- **19 fehlende Rückverweise** von Methoden mit schon 7 Verknüpfungen auf neue Methoden (user-stories, produktvision, roadmap, glossar, pflichtenheft u. a.); bei Bedarf schwächere Verknüpfungen ersetzen.
- Daten «ergänzt» und 339 SIPOC-Rolleneinträge sind noch gespeichert; Entscheid steht aus, ob sie gelöscht werden (SIPOC-Ansicht gibt es noch als Umschalter).
- Weitere Kandidaten für Methoden: Stakeholder-Kommunikationsplan, Change-Impact-Analyse, Kanban, OKR, Business Case, Szenario-Analyse (aus der Liste vom 2026-11-02 nicht in der ersten Welle).
- Weitere strukturierte Grafiken prüfen: Lean Canvas ist neu, Stakeholder Map, Impact Mapping, User Story Map, Persona auf benannte Teilbereiche kontrollieren.

## Darstellung
- Wissenslandkarte auf dem Handy: Beschriftungen nur etwa 9 px, weil die Karte eingepasst wird; Idee: Beschriftung erst beim Antippen.
- BMC und Lean Canvas auf der gedruckten Karte klein; Probedruck auf Papier steht aus (macht Michael).
- Echter Duplex-Testdruck nach den letzten Änderungen steht aus (Michael).

## Betrieb
- Deployment auf GitHub Pages ist aus der Claude-Sitzung nicht prüfbar; immer Hinweis geben.
- Die Prüfskripte brauchen Playwright mit Chromium und poppler (`pdfinfo`).
