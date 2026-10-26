---
name: Story Splitting
kurz: Story Splitting
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Technik
form: methode
aufwand: 10 bis 20 Min. pro Story
werkzeuge: [Jira, Miro]
reihenfolge: 10
status: entwurf
karte: S-09
---

Teilt zu grosse User Stories in kleinere auf, die jeweils für sich Nutzen bringen und in einen Sprint passen.

## Wofür
Story Splitting teilt eine zu grosse Story in kleinere, die je für sich Nutzen liefern. Kleine Stories lassen sich besser schätzen, in einem Sprint abschliessen und früher testen. Entscheidend ist, vertikal zu schneiden, nicht nach technischen Schichten.

## Wann sinnvoll
- Wenn eine Story nicht in einen Sprint passt
- Wenn das Team sie nicht schätzen kann
- Wenn Schätzungen weit auseinanderliegen

## Wann besser nicht
- Wenn die Story schon klein und klar ist
- Wenn die Teile ohne die anderen keinen Nutzen hätten (dann ist der Schnitt falsch)

## Vorbereitung
- Story und ihre Akzeptanzkriterien im Blick haben
- Muster zum Teilen bereithalten (Workflow-Schritte, Regeln, Daten, Varianten)
- Team mit Entwicklung und Test beteiligen
- Platz im Refinement einplanen

## Ablauf
1. Zu grosse Story erkennen (z. B. mehr als die Hälfte eines Sprints)
2. Möglichen Schnitt wählen (Ablauf, Regel, Daten, Rolle)
3. Jede Teilstory so formulieren, dass sie einzeln Nutzen bringt
4. Teilstories prüfen (unabhängig, testbar, schätzbar)
5. Neu schätzen und priorisieren

## Regeln
- Vertikal schneiden (durch alle Schichten), nicht nach Technik
- Jede Teilstory ist für sich nutzbar
- Den einfachsten durchgängigen Weg zuerst

## In der Praxis
Fragen Sie: Welcher kleinste Teil bringt schon Nutzen? Bewährte Schnitte: nach Workflow-Schritten, nach Geschäftsregeln, nach Datenvarianten, nach einfachem und kompliziertem Fall, nach Nutzerrolle. Schneiden Sie nie nach Schichten («Datenbank», «Oberfläche»). Neue Teile prüfen Sie wieder gegen INVEST.

## Beispiel: Tour verwalten (21 Punkte)
Geteilt in: Tour anlegen, Tour ändern, Tour freigeben, Tour stornieren. Jede Teilstory ist einzeln ausführbar.

## Empfehlung
Vorher steht die grosse Story im Backlog. Danach schätzen Sie die Teile mit Planning Poker. Die Story Map zeigt die Reihenfolge der Teile, und die Definition of Ready prüft, ob sie bereit sind.

## Lieferanten
- Product Owner
- Entwicklungsteam

## Eingaben
- Zu grosse Story >> [[user-stories]] geliefert von
- Akzeptanzkriterien >> [[akzeptanzkriterien]] ergänzt durch
- Rückfragen aus dem Refinement >> [[refinement]] angestossen in

## Ergebnisse
- Mehrere kleine Stories
- Schätzbare Teile >> [[planning-poker]] bewertet in
- Reihenfolge der Teile >> [[story-mapping]] angeordnet in

## Konsumenten
- Entwicklungsteam
- Product Owner

## Verknüpfungen
- vorher: [[user-stories]] Zu grosse Stories werden geteilt.
- ergaenzt: [[refinement]] Das Teilen geschieht im Refinement.
- ergaenzt: [[story-mapping]] Schnitte entlang der Nutzerreise.
- ergaenzt: [[dor-dod]] Ready verlangt kleine Stories.
- danach: [[planning-poker]] Danach neu schätzen.

## Karte
Teaser: Eine grosse Story so teilen, dass jeder Teil Nutzen liefert. Senkrecht schneiden.
Gut wenn: Die Story passt nicht in einen Sprint | Das Team kann sie nicht schätzen | Schätzungen liegen weit auseinander
Vorher: Story und Kriterien im Blick | Teilungsmuster bereithalten
Besser nicht: Die Story ist schon klein und klar
- Kleinsten nützlichen Teil suchen
- Nach Ablauf, Regel, Daten teilen
- Nie nach Technikschichten
- Teile gegen INVEST prüfen
- Neu schätzen

## Quellen
- Lawrence, R., Green, P.: The Humanizing Work Guide to Splitting User Stories (humanizingwork.com)
- Cohn, M.: User Stories Applied (Addison-Wesley, 2004)
- Wake, B.: Twenty Ways to Split Stories (2005), xp123.com
