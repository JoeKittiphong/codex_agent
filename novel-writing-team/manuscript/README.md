# Manuscript Workspace

โฟลเดอร์นี้รองรับการเขียนนิยายหลายเรื่องในโปรเจกต์เดียว

## โครงหลัก

- `templates/` เทมเพลตมาตรฐานสำหรับเริ่มเรื่องใหม่
- `projects/` โฟลเดอร์เก็บนิยายแต่ละเรื่องแยกกัน
- `projects/index.md` ตารางรวมสถานะของทุกเรื่อง

## วิธีใช้กับหลายเรื่อง

เมื่อเริ่มนิยายใหม่:
1. สร้างโฟลเดอร์ใหม่ที่ `manuscript/projects/[project-slug]/`
2. คัดลอกไฟล์จาก `manuscript/templates/` ลงไป หรือใช้คำสั่ง `node tools/new-project.mjs [project-slug] [title]`
3. กรอกข้อมูลแต่ละไฟล์ของเรื่องนั้น รวม total word target ของทั้งเรื่อง
4. เขียนตอนจริงไว้ใน `manuscript/projects/[project-slug]/episodes/` เป็น draft 1 โดยทำต่อเนื่องเป็น batch ได้เมื่อผู้ใช้สั่งครั้งเดียวจบ
5. รีไรต์อย่างน้อย 1 รอบและบันทึกใน `rewrite-log.md`
6. ทำ `final-audit.md` เพื่อตรวจ continuity ทั้งเรื่องและจำนวนคำรวม
7. ทำ `polish-log.md` และเกลางานเป็น polished draft
8. อัปเดต `continuity.md` และ `editorial-report.md` แยกตามแต่ละเรื่อง

## โครงของหนึ่งโปรเจกต์นิยาย

ภายใน `manuscript/projects/[project-slug]/` ควรมี:
- `README.md` สรุปภาพรวมโปรเจกต์
- `series-bible.md` ข้อมูลรวมของเรื่อง
- `three-act.md` โครงสามองก์
- `8-sequences.md` โครง 8 sequence
- `27-points.md` รายละเอียด story points
- `characters.md` character bible
- `world.md` world bible
- `style-guide.md` style sheet และแนวทางใช้สัมผัสทั้งห้า
- `scenes.md` scene plan ทั้งเรื่อง
- `episode-map.md` แผนจับฉากลงตอน
- `continuity.md` continuity tracker
- `rewrite-log.md` บันทึกการรีไรต์หลัง draft แรก
- `final-audit.md` รายงานตรวจ continuity ทั้งเรื่องและจำนวนคำรวม
- `editorial-report.md` รายงานตรวจงาน
- `polish-log.md` บันทึกการเกลารอบสุดท้าย
- `episodes/` ไฟล์นิยายจริง ตอนละหนึ่งไฟล์

## โฟลเดอร์ตัวอย่าง

- `projects/sample-project/` ตัวอย่างโปรเจกต์นิยายที่กรอกไว้แล้ว
- `projects/index.md` ใช้ติดตามหลายโปรเจกต์พร้อมกัน

## ลำดับการใช้งานต่อหนึ่งเรื่อง

1. ล็อก synopsis และ assumption ใน `series-bible.md`
2. กำหนด total word target ของทั้งเรื่อง
3. กำหนดสำนวนใน `style-guide.md`
4. แตกเป็น `three-act.md`
5. แตกต่อเป็น `8-sequences.md`
6. ลงรายละเอียดใน `27-points.md`
7. สร้างตัวละครใน `characters.md`
8. วางฉากใน `scenes.md`
9. จัดลงตอนใน `episode-map.md`
10. อัปเดต `continuity.md` ทุกครั้งหลังเขียนตอน หรืออย่างช้าที่สุดหลังจบแต่ละ batch
11. เขียนนิยายจริงใน `episodes/` เป็น draft 1
12. ถ้าผู้ใช้สั่งครั้งเดียวจบ ให้เดิน episode -> rewrite -> audit -> polish ต่อเนื่องเป็น batch โดยไม่ต้องถามซ้ำ เว้นแต่มีปัญหาโครงสร้าง
13. รีไรต์อย่างน้อย 1 รอบและบันทึกใน `rewrite-log.md`
14. ตรวจ continuity ทั้งเรื่องและจำนวนคำรวมใน `final-audit.md`
15. เกลางานรอบสุดท้ายและบันทึกใน `polish-log.md`
16. ตรวจแก้ด้วย `editorial-report.md` ตามต้องการ
