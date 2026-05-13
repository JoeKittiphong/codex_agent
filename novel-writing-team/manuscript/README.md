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
4. เขียนตอนจริงไว้ใน `manuscript/projects/[project-slug]/episodes/` เป็น working source ของเรื่อง (ไฟล์เดียวมีทั้ง Metadata + `Prose:`) โดยทำต่อเนื่องเป็น batch ได้เมื่อผู้ใช้สั่งครั้งเดียวจบ
5. สำหรับ `ep-01` ย่อหน้าแรกต้องเปิดโลกของเรื่องให้เห็นทันที ว่าคนอ่านกำลังเข้าสู่ setting แบบไหน โดยต้องเห็นภูมิประเทศ/ผังพื้นที่ การปกครองหรือโครงสร้างอำนาจ และการใช้ชีวิตปกติของผู้คนคร่าวๆ ในภาพเหตุการณ์จริง ไม่ใช่ lore dump
6. ให้ agent ทำ `AI world-opening review` เป็นเกตหลักสำหรับ `ep-01`
7. ใช้ `node tools/check-world-opening.mjs [project-slug]` เป็น checker กึ่งอัตโนมัติประกอบ ไม่ใช่คำตัดสินสุดท้าย
8. หลังจบแต่ละตอน ให้ทำรอบบังคับ `draft -> rewrite -> polish -> check word count` ก่อนขยับไปตอนถัดไป
8. ใช้ `node tools/check-episode-wordcount.mjs [project-slug] --episode ep-XX` เพื่อตรวจว่าตอนนั้นอยู่ในช่วงเป้าหมายจาก metadata หรือไม่
9. ถ้ายังไม่ถึงเป้าหมายหรือเกินช่วง ให้ขยาย/กระชับตอนเดิม แล้ว rewrite + polish + ตรวจจำนวนคำซ้ำจนกว่าจะผ่าน
10. หลังจบแต่ละ batch ของ draft / rewrite / polish ให้รัน `node tools/sync-output.mjs [project-slug]` เพื่อ sync ไฟล์อ่านล้วนไปที่ `output/[project-slug]/`
11. รีไรต์อย่างน้อย 1 รอบและบันทึกใน `rewrite-log.md`
12. ทำ `final-audit.md` เพื่อตรวจ continuity ทั้งเรื่องและจำนวนคำรวม
13. ทำ `polish-log.md` และเกลางานเป็น polished draft
14. เมื่อโปรเจกต์ปิดงานแล้วและต้องการให้ `manuscript/` เหลือ metadata-only ค่อยรัน `node tools/sync-output.mjs [project-slug] --finalize`
15. อัปเดต `continuity.md` และ `editorial-report.md` แยกตามแต่ละเรื่อง

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
- `episodes/` working source ของตอนนิยาย ตอนละหนึ่งไฟล์ (ช่วงทำงานมีทั้ง Metadata + `Prose:` และหลัง finalize จะเหลือ metadata-only)

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
11. เขียนนิยายจริงใน `episodes/` เป็น draft 1 โดยใช้ไฟล์เดียวแบบ Metadata + `Prose:`
12. ถ้าเป็น `ep-01` ให้ล็อกก่อนเลยว่าย่อหน้าแรกต้องเปิด setting โลกชัด ทั้งภูมิประเทศ/ผังพื้นที่ การปกครองหรือโครงสร้างอำนาจ และการใช้ชีวิตปกติของผู้คน
13. ทำ `AI world-opening review` ให้ PASS ก่อน และใช้ `node tools/check-world-opening.mjs [project-slug]` เป็น checker ประกอบ
14. ก่อนเริ่มตอนถัดไป ให้ล็อกตอนปัจจุบันด้วยลูป `draft -> rewrite -> polish -> check word count`
15. ใช้ `node tools/check-episode-wordcount.mjs [project-slug] --episode ep-XX` ตรวจซ้ำทุกครั้งหลัง polish ของตอนนั้น
16. ถ้าจำนวนคำไม่อยู่ในช่วงเป้าหมาย ให้กลับไปขยาย/กระชับตอนเดิม แล้ว rewrite + polish + ตรวจซ้ำจนกว่าจะผ่าน
17. หลังจบแต่ละ batch ให้รัน `node tools/sync-output.mjs [project-slug]` เพื่ออัปเดตไฟล์อ่านล้วนใน `output/[project-slug]/`
18. ถ้าผู้ใช้สั่งครั้งเดียวจบ ให้เดิน episode -> rewrite -> audit -> polish ต่อเนื่องเป็น batch โดยไม่ต้องถามซ้ำ เว้นแต่มีปัญหาโครงสร้าง
19. รีไรต์อย่างน้อย 1 รอบและบันทึกใน `rewrite-log.md`
20. ตรวจ continuity ทั้งเรื่องและจำนวนคำรวมใน `final-audit.md`
21. เกลางานรอบสุดท้ายและบันทึกใน `polish-log.md`
22. เมื่อต้นฉบับถึงสถานะพร้อมส่งอ่านหรือ `polished draft complete` แล้ว หากต้องการปิดไฟล์ใน `manuscript/` ให้เหลือ metadata-only ค่อยรัน `node tools/sync-output.mjs [project-slug] --finalize`
23. ตรวจแก้ด้วย `editorial-report.md` ตามต้องการ
