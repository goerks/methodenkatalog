---
name: User Stories
kurz: User Stories
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Anforderungsformat
form: artefakt
aufwand: 5 bis 15 Min. pro Story
werkzeuge: [Jira, Azure DevOps, Trello, Haftnotizen]
grafik: story
reihenfolge: 1
status: entwurf
---

Kurze Anforderung aus Sicht des Nutzers im Format «Als ... möchte ich ..., damit ...». Dient als Gesprächsanlass, nicht als vollständige Spezifikation.

## Wofür
Eine User Story beschreibt eine Anforderung aus Sicht der Nutzerin oder des Nutzers in einem Satz: Wer will was und wozu. Sie ist bewusst kurz und dient als Anlass für ein Gespräch, nicht als vollständige Spezifikation. Der Nutzen steht im Zentrum, die Lösung bleibt offen.

## Wann sinnvoll
- In agilen Vorhaben mit laufender Verfeinerung
- Wenn Fachbereich und Team eng zusammenarbeiten
- Wenn Anforderungen sich noch ändern

## Wann besser nicht
- Wenn Verträge eine detaillierte Spezifikation verlangen: dann zusätzlich Use Cases oder Pflichtenheft
- Bei technischen Aufgaben ohne Nutzerbezug
- Wenn Fachleute für Rückfragen fehlen

## Vorbereitung
- Personas oder Rollen bereithalten
- Product Backlog und Vorlage («Als … möchte ich … damit …») bereitstellen
- Zeitfenster im Refinement reservieren
- Gemeinsames Verständnis der INVEST-Kriterien herstellen

## Ablauf
1. Rolle und Ziel aus Personas oder Interviews ableiten
2. Story im Format «Als / möchte ich / damit» formulieren
3. Mit INVEST prüfen: unabhängig, verhandelbar, wertvoll, schätzbar, klein, testbar
4. Akzeptanzkriterien ergänzen
5. Im Product Backlog ablegen und im Refinement klären

## Regeln
- Eine Story liefert Nutzen für eine Rolle
- Sie passt in einen Sprint
- Details entstehen im Gespräch, nicht im Text
- Ohne Akzeptanzkriterien ist sie nicht fertig beschrieben

## In der Praxis
Gute Stories folgen INVEST: unabhängig, verhandelbar, wertvoll, schätzbar, klein, testbar. Die drei C nach Ron Jeffries gelten bis heute: Card (Karte), Conversation (Gespräch), Confirmation (Akzeptanzkriterien). Schreiben Sie zuerst den Nutzen, formulieren Sie Rolle und Wunsch danach. Sind Stories zu gross, teilen Sie sie vertikal, so dass jede Teilstory einen sichtbaren Nutzen liefert.

## Beispiel: Story für Tourenplanung
Als Disponentin möchte ich bei einer doppelten Fahrzeugbelegung gewarnt werden, damit ich keine unmöglichen Touren verschicke.
Akzeptanz: Warnung erscheint vor dem Speichern. Warnung nennt das betroffene Fahrzeug.

## Empfehlung
Vorher klären Personas, für wen geschrieben wird. Direkt danach ergänzen Sie Akzeptanzkriterien und schätzen im Team. Zu grosse Stories teilen Sie mit Story Splitting, bevor sie in den Sprint kommen.

## Lieferanten
- Fachbereich und Nutzer
- Product Owner
- Requirements Engineer

## Eingaben
- Rollen aus Nutzergruppen >> [[persona]] geliefert von
- Rohe Anforderungen aus Gesprächen >> [[interview]] geliefert von
- Wirkungsziele >> [[impact-mapping]] geliefert von

## Ergebnisse
- Story-Karten mit Rolle, Wunsch und Nutzen
- Prüfbare Kriterien >> [[akzeptanzkriterien]] ergänzt durch
- Schätzbare Einheiten >> [[story-points]] bewertet in
- Einträge im Backlog >> [[product-backlog]] aufgenommen in

## Konsumenten
- Entwicklungsteam
- Test
- Product Owner

## Verknüpfungen
- vorher: [[persona]] Personas liefern die Rollen für «Als ...».
- danach: [[akzeptanzkriterien]] Jede Story erhält Akzeptanzkriterien.
- danach: [[story-points]] Stories werden in Story Points geschätzt.
- danach: [[planning-poker]] Die Schätzung erfolgt im Planning Poker.
- danach: [[product-backlog]] Stories wohnen im Product Backlog.
- alternative: [[use-cases]] Für komplexe Abläufe mit Alternativen sind Use Cases ausführlicher.
- ergaenzt: [[dor-dod]] Die Definition of Ready sagt, wann eine Story bereit ist.

## Quellen
- Cohn, M.: User Stories Applied (Addison-Wesley, 2004)
- Wake, B.: INVEST in Good Stories, and SMART Tasks (2003), xp123.com
- Jeffries, R., Anderson, A., Hendrickson, C.: Extreme Programming Installed (Addison-Wesley, 2000)
