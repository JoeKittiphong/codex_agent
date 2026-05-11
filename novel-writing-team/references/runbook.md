# Runbook: ใช้ทีมเขียนนิยายตั้งแต่ synopsis ไปจนจบเรื่อง

เอกสารนี้คือคู่มือ step-by-step สำหรับใช้ agent และไฟล์ทั้งหมดในโปรเจกต์

## โหมดเริ่มงานอัตโนมัติ
- ค่าเริ่มต้นของระบบคือ `run-through mode`
- ถ้าผู้ใช้ส่งเรื่องย่อครั้งเดียวแล้วสั่งให้เริ่มทำ ให้เดินตั้งแต่ intake -> draft 1 -> rewrite -> final audit -> editorial polish ต่อเนื่องโดยไม่ต้องถามซ้ำ
- หยุดถามผู้ใช้เฉพาะเมื่อมีปัญหาโครงสร้างสำคัญจริง เช่น premise ขัดกันเองหนัก, logic ของเรื่องพัง, หรือข้อมูลตั้งต้นขาดจนเดาอย่างปลอดภัยไม่ได้

## Step 0: Create Project Folder
- ตั้ง slug ของเรื่อง เช่น `glass-city-rain`
- ถ้าผู้ใช้ไม่ได้ให้ slug มา แต่ให้ชื่อเรื่องมา ให้สร้าง slug จากชื่อเรื่องแบบอัตโนมัติ
- สร้างโฟลเดอร์ `manuscript/projects/[project-slug]/`
- คัดลอกไฟล์จาก `manuscript/templates/` ลงไป หรือใช้ `node tools/new-project.mjs [project-slug] [title]`
- ใช้ `README.md` ของโปรเจกต์เพื่อติดตามสถานะงาน

## Step 1: Lock Intake
- กรอกข้อมูลใน `manuscript/projects/[project-slug]/series-bible.md`
- ล็อก synopsis, theme, target audience, POV, tone, constraints
- กำหนด total word target ของทั้งเรื่อง
- ถ้าเป็น complete novel และยังไม่กำหนดเอง ให้ใช้ค่าเริ่มต้นมากกว่า 100000 คำภาษาไทย
- ถ้าข้อมูลบางช่องยังไม่ครบ แต่เดาได้อย่างสมเหตุสมผล ให้ล็อก assumption แล้วเดินต่อเอง
- ถ้าโลกของเรื่องซับซ้อน ให้เริ่ม `worldbuilding-agent` ควบคู่ได้

## Step 2: Define Style
- กำหนดสำนวนใน `manuscript/projects/[project-slug]/style-guide.md`
- ระบุโทนภาษา จังหวะบทพูด และแนวทางใช้สัมผัสทั้งห้า
- ถ้าต้องการ immersion สูง ให้ชี้ชัดว่าต้องการ sensory prose แบบใกล้ตัวละคร

## Step 3: Expand Structure
- สร้าง `manuscript/projects/[project-slug]/three-act.md`
- สร้าง `manuscript/projects/[project-slug]/8-sequences.md`
- สร้าง `manuscript/projects/[project-slug]/27-points.md`

## Step 4: Build People and World
- สร้าง `manuscript/projects/[project-slug]/characters.md`
- ถ้าจำเป็น สร้างหรืออัปเดต `manuscript/projects/[project-slug]/world.md`

## Step 5: Plan Scenes
- แตกเป็น `manuscript/projects/[project-slug]/scenes.md`
- จัดฉากลงตอนใน `manuscript/projects/[project-slug]/episode-map.md`
- ตรวจว่า episode count รองรับ total word target ตาม `references/longform.md`
- เริ่ม `manuscript/projects/[project-slug]/continuity.md` ตั้งแต่ตอนนี้

## Step 6: Write Episode Files
- เขียนตอนจริงใน `manuscript/projects/[project-slug]/episodes/`
- หนึ่งตอนหนึ่งไฟล์ในสถานะ draft 1
- ระหว่างเขียน ให้เปิดดูทั้ง scene plan, style guide และ continuity tracker

## Step 7: Update Continuity
- หลังจบทุกตอน ให้อัปเดต `manuscript/projects/[project-slug]/continuity.md`
- บันทึกบาดแผล ความลับที่เปิดแล้ว สถานะความสัมพันธ์ และ open loops

## Step 8: Editorial Pass
- ใช้ `editor-agent` ตรวจแต่ละตอนหรือทั้ง batch
- บันทึกผลใน `manuscript/projects/[project-slug]/editorial-report.md`
- ถ้ามีปัญหา continuity ให้แก้ที่ continuity tracker ก่อน prose

## Step 9: Rewrite Pass
- ใช้ `rewrite-agent` รีไรต์อย่างน้อย 1 รอบหลัง draft แรกเสร็จ
- ถ้าผู้ใช้สั่งรีไรต์ทั้งเรื่อง ให้เดินต่อแบบ `continuous rewrite batches` โดยไม่ต้องถามซ้ำทุก batch เว้นแต่ผู้ใช้หยุดหรือมีปัญหา continuity สำคัญ
- หนึ่ง batch ควรครอบคลุมหลายตอนต่อเนื่องตามขนาดงานที่ทำได้อย่างปลอดภัย
- หลังจบแต่ละ batch ให้อัปเดต `manuscript/projects/[project-slug]/rewrite-log.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md`
- อัปเดต continuity ถ้ารายละเอียดเล็กน้อยถูกปรับ

## Step 10: Final Continuity + Word-Count Audit
- ใช้ `continuity-agent` ตรวจ continuity ทั้งเรื่องหลัง rewrite ครบ
- ตรวจ `continuity.md`, `episode-map.md`, `longform-plan.md`, `README.md` และ episode files ทั้งหมด
- นับจำนวนคำรายตอนและรวมทั้งเรื่อง โดยระบุวิธีนับให้ชัดในรายงาน
- บันทึกผลใน `manuscript/projects/[project-slug]/final-audit.md`
- ถ้าปัญหาอยู่ระดับย่อย ให้ส่งต่องานเข้า polish ได้ทันที
- ถ้าพบปัญหา continuity ระดับโครงสร้าง ให้หยุดและสรุป issue ก่อน

## Step 11: Editorial Polish Pass
- ใช้ `editor-agent` หรือ workflow polish ตาม `references/editorial-polish.md`
- เกลาต้นฉบับจาก `draft 2` ไปเป็น `polished draft`
- ทำงานเป็น `continuous editorial polish batches` ได้เมื่อผู้ใช้สั่งให้ทำต่อจนจบ
- หลังจบแต่ละ batch ให้อัปเดต `manuscript/projects/[project-slug]/polish-log.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md`
- เมื่อครบทั้งเรื่อง ให้สรุปสถานะเป็น `polished draft complete`

## ลำดับแนะนำเมื่อทำงานจริง
1. create project folder
2. series-bible
3. style-guide
4. world
5. three-act
6. 8-sequences
7. 27-points
8. characters
9. scenes
10. episode-map
11. continuity
12. episode prose (draft 1)
13. editorial pass
14. rewrite pass
15. final continuity + word-count audit
16. editorial polish pass

## เคล็ดลับ
- อย่าเขียน prose ก่อนที่ scene function จะชัด
- ถ้า prose เริ่มแบน ให้กลับไปดู `references/style-guide.md`
- ถ้าพล็อตหลุด ให้กลับไปดู `27-points.md` และ `continuity.md` ของโปรเจกต์นั้น
- ถ้าฉากสวยแต่ไม่ขยับเรื่อง ให้ตัดหรือรวมฉากนั้น
- ถ้าผู้ใช้สั่ง `ทำต่อจนจบ` ให้ตีความว่า workflow หลัง draft 1 สามารถเดิน `editorial pass -> rewrite -> final audit -> editorial polish` ต่อเนื่องได้ เว้นแต่มีปัญหาใหญ่จริง
- ถ้าผู้ใช้ให้เพียงเรื่องย่อแล้วสั่ง `เริ่มทำ` ให้ถือว่านั่นคือคำสั่งครั้งเดียวที่ครอบคลุมทั้ง workflow เช่นกัน
