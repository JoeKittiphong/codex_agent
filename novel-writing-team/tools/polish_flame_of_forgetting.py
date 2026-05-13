from pathlib import Path

ROOT = Path('novel-writing-team/manuscript/projects/flame-of-forgetting/episodes')

for path in sorted(ROOT.glob('ep-*.md')):
    if path.name == 'ep-00-template.md':
        continue
    text = path.read_text(encoding='utf-8')
    text = text.replace('- สถานะต้นฉบับ: draft 2', '- สถานะต้นฉบับ: polished draft')
    while '\n\n\n' in text:
        text = text.replace('\n\n\n', '\n\n')
    path.write_text(text.strip() + '\n', encoding='utf-8')

print('polish status updated for flame-of-forgetting')
