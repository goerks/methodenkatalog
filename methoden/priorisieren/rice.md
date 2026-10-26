---
name: RICE-Scoring
kurz: RICE
kategorie: priorisieren
vorgehen: agil
phase: bewerten
typ: Bewertungsformel
form: methode
aufwand: 1 bis 3 Stunden
werkzeuge: [Excel, Jira]
reihenfolge: 8
status: entwurf
karte: B-08
---

Bewertet Ideen mit Reichweite, Wirkung, Zuversicht und Aufwand zu einer vergleichbaren Zahl.

## Wofür
RICE steht für Reach (Reichweite), Impact (Wirkung), Confidence (Zuversicht) und Effort (Aufwand). Der Wert ergibt sich als Reichweite mal Wirkung mal Zuversicht, geteilt durch den Aufwand. So lassen sich unterschiedliche Ideen mit einer gemeinsamen Formel vergleichen. Die Zuversicht macht Unsicherheit der Schätzung sichtbar.

## Wann sinnvoll
- Wenn viele Ideen um knappe Kapazität konkurrieren
- Wenn Nutzerzahlen oder Daten zur Reichweite vorliegen
- Wenn die Priorisierung gegenüber Stakeholdern nachvollziehbar sein soll

## Wann besser nicht
- Wenn Zahlen nur geraten sind und niemand sie prüft
- Bei Pflichtthemen mit Frist oder Gesetz: dann MoSCoW
- Bei sehr wenigen Optionen, die ein Gespräch klärt

## Vorbereitung
- Liste der Kandidaten mit kurzer Beschreibung
- Zeitraum und Einheit für die Reichweite festlegen
- Skala für Wirkung vereinbaren (zum Beispiel 0,25 bis 3)
- Skala für Zuversicht festlegen (50, 80, 100 Prozent)
- Aufwand in Personenmonaten oder Punkten schätzen

## Ablauf
1. Kandidaten und Zeitraum festlegen
2. Reichweite schätzen
3. Wirkung und Zuversicht bewerten
4. Aufwand schätzen
5. Wert berechnen und Rangliste prüfen

## Regeln
- Gleiche Skalen für alle Kandidaten
- Reichweite stützt sich auf Zahlen, nicht auf Gefühl
- Geringe Zuversicht senkt den Wert sichtbar
- Das Ergebnis ist Diskussionsgrundlage, kein Befehl

## In der Praxis
Der Nutzen liegt im Gespräch über die Annahmen, nicht in der Zahl. Lassen Sie die Zuversicht unbequem ehrlich sein: Wer wenig weiss, setzt 50 Prozent. Vergleichen Sie auffällige Ergebnisse mit dem Bauchgefühl, und fragen Sie bei Abweichung nach den Annahmen. Pflegen Sie die Tabelle regelmässig, sonst veraltet sie.

## Beispiel: Vier Ideen
Reichweite pro Quartal, Wirkung 0,25 bis 3, Zuversicht in Prozent. Konfliktwarnung: 200 · 2 · 80 % : 2 = 160. Export-Funktion: 50 · 1 · 100 % : 1 = 50. Neues Layout: 400 · 0,5 · 50 % : 4 = 25. Das Team startet mit der Konfliktwarnung.

## Empfehlung
Vorher sammeln Backlog und Daten die Kandidaten. Danach ordnen Sie das Backlog nach dem Wert. Für Pflichtthemen oder wenige Optionen ist MoSCoW oder Dot Voting einfacher.

## Lieferanten
- Produktmanagement
- Nutzungsdaten und Analyse

## Eingaben
- Kandidatenliste >> [[product-backlog]] geliefert von
- Schätzung des Aufwands >> [[story-points]] geliefert von
- Nutzungsdaten

## Ergebnisse
- Tabelle mit Werten und Rangliste
- Priorisierte Reihenfolge >> [[product-backlog]] übernommen in
- Begründung für Stakeholder >> [[roadmap]] genutzt in

## Konsumenten
- Product Owner
- Management
- Entwicklungsteam

## Verknüpfungen
- vorher: [[product-backlog]] Das Backlog liefert die Kandidaten.
- vorher: [[story-points]] Story Points liefern den Aufwand.
- danach: [[roadmap]] Die Rangliste prägt die Reihenfolge der Roadmap.
- alternative: [[wsjf]] WSJF bewertet mit Kosten der Verzögerung.
- alternative: [[moscow]] MoSCoW kommt ohne Rechnen aus.

## Karte
Teaser: Reichweite mal Wirkung mal Zuversicht, geteilt durch Aufwand: vergleichbare Zahl für jede Idee.
Gut wenn: Viele Ideen, knappe Kapazität | Nutzerzahlen liegen vor | Die Reihenfolge soll begründbar sein
Vorher: Kandidaten und Zeitraum festlegen | Skalen vereinbaren
Besser nicht: Zahlen sind nur geraten
Regeln: Gleiche Skalen für alle Kandidaten | Reichweite stützt sich auf Zahlen | Geringe Zuversicht senkt den Wert
- Kandidaten festlegen
- Reichweite schätzen
- Wirkung und Zuversicht bewerten
- Aufwand schätzen
- Wert berechnen, Rangliste prüfen

## Quellen
- McBride, S.: RICE: Simple prioritization for product managers (Intercom Blog, 2016)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Prioritization»
- Cagan, M.: Inspired (Wiley, 2. Auflage 2018)
