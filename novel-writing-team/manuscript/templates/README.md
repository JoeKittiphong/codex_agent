# Templates

ใช้ไฟล์ในโฟลเดอร์นี้เป็นต้นแบบสำหรับสร้างนิยายเรื่องใหม่

## วิธีสร้างโปรเจกต์ใหม่

วิธีเร็ว:
- `node tools/new-project.mjs [project-slug] [title]`

วิธีทำมือ:
1. สร้างโฟลเดอร์: `manuscript/projects/[project-slug]/`
2. คัดลอกไฟล์ทั้งหมดจาก `manuscript/templates/` ไปยังโฟลเดอร์นั้น
3. เปลี่ยนชื่อ `project-README.md` เป็น `README.md`
4. สร้างโฟลเดอร์ `episodes/` ภายในโปรเจกต์ใหม่
5. เปลี่ยนค่า placeholder ให้เป็นข้อมูลของเรื่องจริง

## ไฟล์หลัก
- `series-bible.md`
- `three-act.md`
- `8-sequences.md`
- `27-points.md`
- `characters.md`
- `world.md`
- `longform-plan.md`
- `style-guide.md`
- `scenes.md`
- `episode-map.md`
- `continuity.md`
- `rewrite-log.md`
- `final-audit.md`
- `editorial-report.md`
- `polish-log.md`
- `episodes/ep-00-template.md`
