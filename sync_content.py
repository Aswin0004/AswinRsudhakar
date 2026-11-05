"""Update JS content after editing JSON. Run: python sync_content.py"""
from pathlib import Path
import json
root = Path(__file__).resolve().parent
base = root / 'assets' / 'data'
projects = json.loads((base/'projects.json').read_text(encoding='utf-8'))
posts = json.loads((base/'posts.json').read_text(encoding='utf-8'))
ids = [p['id'] for p in projects] + [a['id'] for a in posts]
if len(ids) != len(set(ids)):
    raise ValueError('Project and article IDs must be unique')
(root/'assets'/'data.js').write_text('/* Generated from assets/data/*.json */\nwindow.PORTFOLIO_DATA = '+json.dumps({'projects': projects,'posts': posts},indent=2,ensure_ascii=False)+';\n', encoding='utf-8')
print('Content updated. Refresh the website to see your changes.')
