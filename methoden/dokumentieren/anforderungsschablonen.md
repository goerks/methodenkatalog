---
name: Anforderungsschablonen (EARS)
kurz: Schablonen
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Formulierungshilfe
form: artefakt
aufwand: 10 bis 20 Min. pro Anforderung
werkzeuge: [Word, Excel]
reihenfolge: 13
status: entwurf
karte: S-23
---

Feste Satzmuster, die Anforderungen eindeutig, prüfbar und vergleichbar formulieren.

## Wofür
Schablonen geben Anforderungssätzen eine Form, zum Beispiel «Wenn Bedingung, dann muss das System Wirkung». Bekannt sind die Satzschablone nach Rupp und EARS (Easy Approach to Requirements Syntax). Sie vermeiden typische Mängel wie unklare Subjekte, versteckte Bedingungen oder Wörter wie «schnell».

## Wann sinnvoll
- Wenn Anforderungen verbindlich und prüfbar sein müssen
- Wenn viele Autorinnen und Autoren einheitlich schreiben sollen
- Wenn Verträge oder Normen genaue Formulierungen verlangen

## Wann besser nicht
- Wenn ein Team mit Stories und Gesprächen gut arbeitet
- Wenn die Schablone wichtiger wird als der Inhalt
- Für erste, grobe Ideen

## Vorbereitung
- Schablone wählen und im Team einführen
- Verbindlichkeit festlegen (muss, sollte, kann)
- Glossar für die Begriffe bereithalten
- Beispiele für gute und schlechte Sätze sammeln

## Ablauf
1. Anforderung in einem Satz beschreiben
2. Bedingung, Subjekt, Verbindlichkeit und Wirkung zuordnen
3. Passendes Satzmuster auswählen
4. Mehrdeutige Wörter durch Zahlen und Begriffe ersetzen
5. Satz mit Fachbereich und Test prüfen

## Regeln
- Ein Satz, eine Anforderung
- Aktiv und mit klarem Subjekt
- Verbindlichkeit nur mit muss, sollte, kann
- Messbare Werte statt Eigenschaftswörter

## In der Praxis
Das Muster hilft beim Denken: Wer den Satz nicht füllen kann, kennt die Anforderung noch nicht. Verwenden Sie die Schablone gezielt für kritische Anforderungen, nicht für jede Zeile. Prüfen Sie Sätze gemeinsam mit jemandem, der sie testen muss.

## Beispiel: Konfliktwarnung
Ohne Schablone: «Das System soll Konflikte erkennen.» Mit Schablone: «Wenn eine Tour ein Fahrzeug im gleichen Zeitraum belegt, muss das System der Disponentin innerhalb von 2 Sekunden die Warnung «Fahrzeug belegt» anzeigen.»

## Empfehlung
Vorher klären Glossar und Geschäftsregeln die Begriffe. Danach bilden die Sätze das Pflichtenheft oder die SRS. Für agile Teams sind User Stories und Gherkin meist die bessere Form.

## Lieferanten
- Business Analysten
- Fachbereich
- Test

## Eingaben
- Begriffe >> [[glossar]] geliefert von
- Regeln >> [[geschaeftsregeln]] geliefert von

## Ergebnisse
- Anforderungssätze in einheitlicher Form >> [[pflichtenheft]] übernommen in
- Prüfbare Aussagen >> [[abnahmetest]] genutzt in

## Konsumenten
- Autorinnen und Autoren
- Test
- Auftraggeber

## Verknüpfungen
- vorher: [[glossar]] Begriffe sind geklärt.
- vorher: [[geschaeftsregeln]] Regeln liegen vor.
- danach: [[pflichtenheft]] Sätze bilden den Hauptteil.
- danach: [[srs]] Sie füllen die Spezifikation.
- alternative: [[user-stories]] Agile Form ohne feste Satzmuster.
- ergänzt: [[nfr]] Qualitätsanforderungen messbar formulieren.

## Karte
Teaser: Feste Satzmuster machen Anforderungen eindeutig und prüfbar, zum Beispiel «Wenn …, muss das System …».
Gut wenn: Anforderungen verbindlich sein müssen | Viele Autoren einheitlich schreiben | Normen genaue Sätze verlangen
Vorher: Schablone im Team einführen | Glossar bereithalten
Besser nicht: Ein Team arbeitet gut mit Stories
Regeln: Ein Satz, eine Anforderung | Muss, sollte, kann klar nutzen | Zahlen statt Eigenschaftswörter
- Satz in einer Zeile
- Bausteine zuordnen
- Muster wählen
- Mehrdeutiges ersetzen
- Mit Test prüfen

## Quellen
- Mavin, A. u. a.: Easy Approach to Requirements Syntax (EARS), RE'09 (IEEE, 2009)
- Rupp, C.: Requirements-Engineering und -Management (Hanser, 6. Auflage 2014)
- ISO/IEC/IEEE 29148:2018, Requirements engineering
