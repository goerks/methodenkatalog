---
name: Anforderungsspezifikation (SRS)
kurz: SRS
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Dokumentstruktur
form: artefakt
aufwand: 1 bis 4 Wochen
werkzeuge: [Word, Confluence]
reihenfolge: 14
status: entwurf
karte: S-24
---

Strukturiertes Dokument, das alle Anforderungen an ein System vollständig und prüfbar festhält, nach ISO 29148.

## Wofür
Die Software Requirements Specification (SRS) beschreibt, was ein System leisten muss: Zweck, Umfang, Rollen, funktionale und nichtfunktionale Anforderungen, Schnittstellen und Randbedingungen. Sie ist die verbindliche Grundlage für Entwicklung, Test und Abnahme, vor allem bei klassischen Vorhaben und Verträgen.

## Wann sinnvoll
- Wenn viele Parteien dasselbe verbindliche Dokument brauchen
- Bei Ausschreibungen, Verträgen oder regulierten Vorhaben
- Wenn Anforderungen langfristig nachvollziehbar sein müssen

## Wann besser nicht
- Wenn ein Team mit Backlog und Gesprächen arbeitet
- Wenn sich die Anforderungen schnell ändern
- Wenn niemand das Dokument pflegt

## Vorbereitung
- Gliederung nach ISO 29148 oder Firmenvorlage wählen
- Anforderungen sammeln und ordnen
- Rollen für Autor, Prüfer und Freigabe benennen
- Versionierung und Änderungsablauf klären

## Ablauf
1. Zweck, Umfang und Begriffe beschreiben
2. Systemkontext und Schnittstellen darstellen
3. Funktionale Anforderungen gruppiert beschreiben
4. Nichtfunktionale Anforderungen und Randbedingungen ergänzen
5. Prüfen, freigeben und Änderungen steuern

## Regeln
- Jede Anforderung hat eine eindeutige Nummer
- Jede Anforderung ist prüfbar
- Funktionales und Qualitäts-Anforderungen getrennt
- Änderungen nur über einen Änderungsprozess

## In der Praxis
Die SRS lebt von Struktur und Pflege. Gliedern Sie nach Themen, halten Sie die Länge im Griff und verweisen Sie auf Modelle, statt alles zu wiederholen. Ein Änderungsverzeichnis und klare Versionen verhindern, dass verschiedene Parteien mit verschiedenen Ständen arbeiten.

## Beispiel: Gliederung
1 Einleitung (Zweck, Umfang, Begriffe). 2 Gesamtbeschreibung (Kontext, Rollen). 3 Funktionale Anforderungen (3.1 Planen, 3.2 Freigeben). 4 Qualitätsanforderungen. 5 Schnittstellen. 6 Randbedingungen. Anhang: Modelle, Rückverfolgung.

## Empfehlung
Vorher liefern Schablonen, Use Cases und Modelle den Inhalt. Danach folgen Review und Abnahme. Für kleinere Vorhaben genügt ein Pflichtenheft, für agile Teams ein Backlog.

## Lieferanten
- Business Analysten
- Fachbereich
- Architektur

## Eingaben
- Anforderungssätze >> [[anforderungsschablonen]] geliefert von
- Systemkontext >> [[kontextdiagramm]] geliefert von
- Qualitätsanforderungen >> [[nfr]] geliefert von

## Ergebnisse
- Freigegebene Spezifikation
- Prüfung durch Fachleute >> [[anforderungsreview]] geprüft in
- Rückverfolgung >> [[traceability]] genutzt in

## Konsumenten
- Entwicklungsteam
- Test
- Auftraggeber
- Betrieb

## Verknüpfungen
- vorher: [[anforderungsschablonen]] Sätze füllen das Dokument.
- vorher: [[kontextdiagramm]] Die Systemgrenze steht fest.
- danach: [[anforderungsreview]] Das Dokument wird geprüft.
- danach: [[abnahmetest]] Abnahme gegen die Spezifikation.
- alternative: [[pflichtenheft]] Schlanker, oft vertraglich.
- ergänzt: [[traceability]] Verweise auf Quellen und Tests.

## Karte
Teaser: Verbindliches Dokument aller Anforderungen: Zweck, Umfang, Funktionen, Qualität und Schnittstellen.
Gut wenn: Viele Parteien ein Dokument brauchen | Verträge oder Regulierung gelten | Langfristig nachvollziehbar
Vorher: Gliederung wählen | Rollen für Prüfung klären
Besser nicht: Ein Team arbeitet mit Backlog und Gesprächen
Regeln: Jede Anforderung nummeriert | Jede Anforderung prüfbar | Änderungen nur geregelt
- Zweck und Umfang
- Kontext und Schnittstellen
- Funktionen beschreiben
- Qualität und Grenzen
- Prüfen und freigeben

## Quellen
- ISO/IEC/IEEE 29148:2018, Requirements engineering
- IEEE 830-1998, Recommended Practice for Software Requirements Specifications
- Pohl, K.; Rupp, C.: Basiswissen Requirements Engineering (dpunkt, 5. Auflage 2021)
