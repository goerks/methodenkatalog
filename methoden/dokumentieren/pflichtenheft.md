---
name: Lastenheft / Pflichtenheft
kurz: Pflichtenheft
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Spezifikationsdokument
form: artefakt
aufwand: Tage bis Wochen
werkzeuge: [Word, Confluence, Doors, Polarion]
reihenfolge: 6
status: entwurf
karte: S-06
---

Klassische Dokumentation: Das Lastenheft beschreibt, was der Auftraggeber will, das Pflichtenheft, wie der Auftragnehmer es umsetzt.

## Wofür
Das Lastenheft beschreibt, was der Auftraggeber braucht, das Pflichtenheft, wie der Auftragnehmer es umsetzen wird. Zusammen sind sie die vertragliche Grundlage in klassischen Projekten und machen Umfang, Leistung und Abnahme nachvollziehbar.

## Wann sinnvoll
- Bei Festpreis- oder Ausschreibungsprojekten
- Bei hohen regulatorischen Anforderungen
- Wenn Auftraggeber und Auftragnehmer verschiedenen Organisationen angehören

## Wann besser nicht
- Bei unklaren Zielen und schnellem Lernen: dann agil mit Backlog
- Wenn niemand das Dokument pflegt: es veraltet schnell

## Vorbereitung
- Struktur festlegen, etwa nach ISO 29148 oder Rupp
- Anforderungen aus Use Cases und Qualitätsvorgaben zusammenstellen
- Glossar und Kontextdiagramm bereitlegen
- Prüf- und Freigabeprozess mit den Beteiligten vereinbaren

## Ablauf
1. Lastenheft mit Zielen, Umfang und Anforderungen erstellen
2. Anbieter prüft und erarbeitet das Pflichtenheft
3. Lösungskonzept, Schnittstellen und NFR ergänzen
4. Review mit Auftraggeber
5. Freigabe als Vertragsgrundlage

## Regeln
- Jede Anforderung hat eine eindeutige ID
- Verbindliche Sprache (muss, soll, kann)
- Änderungen nur über Change Management

## In der Praxis
Jede Anforderung sollte eindeutig nummeriert, einzeln prüfbar und widerspruchsfrei sein. Trennen Sie Muss- und Kann-Anforderungen. Halten Sie den Umfang schlank: Was nicht gelesen wird, wird nicht geprüft. Pflegen Sie Änderungen über ein geregeltes Verfahren, sonst weichen Dokument und Realität auseinander.

## Beispiel: Gliederung (Auszug)
1 Ziele und Umfang · 2 Stakeholder · 3 Systemkontext · 4 Funktionale Anforderungen (Use Cases) · 5 Qualitätsanforderungen · 6 Randbedingungen · 7 Abnahme

## Empfehlung
Vorher müssen Use Cases, Qualitätsanforderungen und Kontext vorliegen. Danach prüfen Sie das Dokument im Review, halten Rückverfolgbarkeit zu Tests fest und steuern Änderungen im Änderungsmanagement.

## Lieferanten
- Auftraggeber
- Fachbereiche
- Architektur

## Eingaben
- Use Cases >> [[use-cases]] geliefert von
- Qualitätsanforderungen >> [[nfr]] geliefert von
- Systemgrenze >> [[kontextdiagramm]] geliefert von

## Ergebnisse
- Freigegebenes Dokument
- Prüfgrundlage >> [[review]] geprüft in
- Verfolgbare Anforderungen >> [[traceability]] verknüpft in
- Änderungsbasis >> [[change-management]] gesteuert durch

## Konsumenten
- Entwicklung
- Test
- Auftraggeber und Einkauf

## Verknüpfungen
- vorher: [[use-cases]] Funktionale Anforderungen als Use Cases.
- vorher: [[nfr]] Qualitätsanforderungen als eigenes Kapitel.
- ergaenzt: [[kontextdiagramm]] Systemkontext als Diagramm einbinden.
- ergaenzt: [[traceability]] Rückverfolgbarkeit der IDs sicherstellen.
- danach: [[change-management]] Änderungen kontrolliert abwickeln.
- alternative: [[product-backlog]] Agile Teams ersetzen das Dokument durch ein lebendes Backlog.

## Karte
Teaser: Vertragliche Beschreibung, wie die Anforderungen umgesetzt werden. Klassisch.
- Struktur festlegen
- Anforderungen nummerieren
- Muss und Kann trennen
- Im Review prüfen
- Änderungen geregelt führen

## Quellen
- ISO/IEC/IEEE 29148:2018 – Requirements engineering
- Rupp, C.: Requirements-Engineering und -Management (Hanser)
- DIN 69901-5: Projektmanagement (Begriffe Lastenheft und Pflichtenheft)
