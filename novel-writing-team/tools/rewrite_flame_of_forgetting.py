from pathlib import Path

ROOT = Path('novel-writing-team/manuscript/projects/flame-of-forgetting/episodes')

for path in sorted(ROOT.glob('ep-*.md')):
    if path.name == 'ep-00-template.md':
        continue
    text = path.read_text(encoding='utf-8')
    text = text.replace('- สถานะต้นฉบับ: draft 1', '- สถานะต้นฉบับ: draft 2')
    path.write_text(text, encoding='utf-8')

print('rewrite status updated for flame-of-forgetting')
