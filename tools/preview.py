#!/usr/bin/env python3
"""Baut aus index.html eine einzelne HTML-Datei (CSS und JS eingebettet) für die Vorschau als Claude-Artifact.
Aufruf: python3 tools/preview.py ausgabe.html"""
import re, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
s = (root / 'index.html').read_text()
s = re.sub(r'<link[^>]*href="(css/[^"]+)"[^>]*>', lambda m: '<style>' + (root / m.group(1)).read_text() + '</style>', s)
s = re.sub(r'<script src="([^"]+)"></script>', lambda m: '<script>' + (root / m.group(1)).read_text().replace('</script>', '<\\/script>') + '</script>', s)
s = re.sub(r'<link[^>]*rel="(?:icon|apple-touch-icon)"[^>]*>', '', s)
pathlib.Path(sys.argv[1]).write_text(s)
