---
name: Spike
kurz: Spike
kategorie: ermitteln
vorgehen: agil
phase: ermitteln
typ: Erkundung
form: methode
aufwand: 0,5 bis 2 Tage
werkzeuge: [Jira, Confluence]
reihenfolge: 13
status: entwurf
karte: E-10
---

Zeitlich begrenzte Erkundung, die offene fachliche oder technische Fragen beantwortet, bevor Stories geschätzt werden.

## Wofür
Ein Spike ist eine kurze, zeitlich begrenzte Erkundung, die eine konkrete Frage beantwortet: Geht das technisch? Wie verhält sich eine Schnittstelle? Welche Variante ist tragfähig? Das Ergebnis ist Wissen, keine fertige Funktion. So werden Stories schätzbar, und Risiken zeigen sich früh.

## Wann sinnvoll
- Wenn eine Story wegen Unsicherheit nicht geschätzt werden kann
- Bei neuen Technologien, Schnittstellen oder Regeln
- Wenn mehrere Lösungswege zur Wahl stehen

## Wann besser nicht
- Wenn die Frage mit einem kurzen Gespräch zu klären ist
- Als Vorwand für Arbeit ohne Ziel und Ablaufdatum
- Wenn das Ergebnis eine fertige Funktion sein soll: dann Story

## Vorbereitung
- Konkrete Frage in einem Satz formulieren
- Zeitbox festlegen (halber bis zwei Tage)
- Ergebnisform vereinbaren: Notiz, Demo, Empfehlung
- Verantwortliche Person bestimmen
- Als Eintrag im Backlog führen

## Ablauf
1. Frage und Zeitbox festlegen
2. Variante recherchieren oder ausprobieren
3. Ergebnisse und Annahmen festhalten
4. Empfehlung formulieren
5. Im Team vorstellen und Stories anpassen

## Regeln
- Ein Spike beantwortet eine Frage, er liefert keine Funktion
- Er hat eine feste Zeitbox
- Das Ergebnis wird dokumentiert und geteilt
- Er steht im Backlog und wird im Sprint eingeplant

## In der Praxis
Formulieren Sie vorab, woran Sie erkennen, dass die Frage beantwortet ist. Halten Sie die Zeitbox strikt ein: Ist sie abgelaufen, wird entschieden, nicht verlängert. Das Ergebnis ist eine Empfehlung mit Begründung, kein Code für die Produktion. Zu viele Spikes sind ein Zeichen, dass Anforderungen zu spät geklärt werden.

## Beispiel: Schnittstelle zum ERP
Frage: Liefert das ERP Fahrzeugdaten in Echtzeit? Zeitbox: ein Tag. Ergebnis: Die Schnittstelle liefert alle 15 Minuten Daten. Empfehlung: Warnung beim Speichern genügt. Die Story «Konfliktwarnung» wird mit 5 Punkten geschätzt.

## Empfehlung
Vorher zeigt das Refinement, welche Story nicht schätzbar ist. Danach schätzt das Team neu und plant im Sprint. Bei fachlichen Fragen ist oft ein Gespräch oder ein Prototyp schneller.

## Lieferanten
- Entwicklungsteam
- Fachbereich mit offenen Fragen

## Eingaben
- Unklare Story >> [[refinement]] geliefert von
- Frage in einem Satz
- Zeitbox

## Ergebnisse
- Dokumentiertes Ergebnis mit Empfehlung
- Geklärte Story >> [[story-points]] geschätzt mit
- Neue oder angepasste Stories >> [[product-backlog]] übernommen in

## Konsumenten
- Product Owner
- Entwicklungsteam

## Verknüpfungen
- vorher: [[refinement]] Im Refinement fällt auf, was nicht schätzbar ist.
- danach: [[story-points]] Nach dem Spike lässt sich die Story schätzen.
- danach: [[product-backlog]] Das Ergebnis passt das Backlog an.
- alternative: [[prototyping]] Ein Prototyp erkundet die Oberfläche statt der Technik.
- ergaenzt: [[story-splitting]] Statt eines Spikes hilft manchmal ein Teilen der Story.

## Karte
Teaser: Kurze, begrenzte Erkundung, die eine offene Frage beantwortet. Ergebnis ist Wissen, keine Funktion.
Gut wenn: Story lässt sich nicht schätzen | Neue Technik, Schnittstelle oder Regel | Mehrere Lösungswege zur Wahl
Vorher: Frage in einem Satz formulieren | Zeitbox festlegen
Besser nicht: Ein Gespräch genügt für die Antwort
Regeln: Ein Spike liefert Wissen, keine Funktion | Er hat eine feste Zeitbox | Das Ergebnis wird dokumentiert
- Frage und Zeitbox festlegen
- Ausprobieren oder recherchieren
- Ergebnisse festhalten
- Empfehlung formulieren
- Im Team vorstellen

## Quellen
- Beck, K., Andres, C.: Extreme Programming Explained (Addison-Wesley, 2. Auflage 2004)
- Jeffries, R., Anderson, A., Hendrickson, C.: Extreme Programming Installed (Addison-Wesley, 2000), Kapitel «Spike Solution»
- Scaled Agile Framework: Spikes (scaledagileframework.com)
