---
name: Aktivitätsdiagramm (UML)
kurz: Aktivitätsdiagramm
kategorie: modellieren
vorgehen: beide
phase: spezifizieren
typ: Modell
form: modell
aufwand: 30 bis 60 Min.
werkzeuge: [draw.io, PlantUML, Enterprise Architect, Miro]
grafik: activity
reihenfolge: 1
status: entwurf
---

Zeigt einen Ablauf als Folge von Aktionen mit Entscheidungen, Verzweigungen und parallelen Strängen. Ideal für Prozesse und Use-Case-Abläufe.

## Ablauf
1. Ablauf und Start/Ende festlegen
2. Aktionen in Reihenfolge zeichnen
3. Entscheidungen als Raute mit Bedingungen einfügen
4. Parallele Abläufe mit Balken (Fork/Join) darstellen
5. Optional: Swimlanes für Verantwortliche ergänzen

## Regeln
- Ein Startknoten, mindestens ein Endknoten
- Jede Raute hat Bedingungen an den ausgehenden Kanten
- Aktionen mit Verb benennen
- Pro Diagramm ein Ziel

## Beispiel: Tour freigeben
Start → Tour prüfen → [Konflikt?] ja: Warnung anzeigen und zurück · nein: Tour sperren → Fahrer benachrichtigen → Ende.

## Verknüpfungen
- ergaenzt: [[use-cases]] Visualisiert den Ablauf eines Use Cases.
- alternative: [[bpmn]] BPMN eignet sich besser für Geschäftsprozesse mit mehreren Beteiligten.
- ergaenzt: [[zustandsdiagramm]] Zustandsdiagramm zeigt den Lebenszyklus eines Objekts.
- vorher: [[beobachtung]] Beobachtete Abläufe modellieren.
