# Runbook: ใช้ทีมเขียนนิยายตั้งแต่ synopsis ไปจนจบเรื่อง

เอกสารนี้คือคู่มือ step-by-step สำหรับใช้ agent และไฟล์ทั้งหมดในโปรเจกต์

## Step 0: Create Project Folder
- ตั้ง slug ของเรื่อง เช่น `glass-city-rain`
- สร้างโฟลเดอร์ `manuscript/projects/[project-slug]/`
- คัดลอกไฟล์จาก `manuscript/templates/` ลงไป หรือใช้ `node tools/new-project.mjs [project-slug] [title]`
- ใช้ `README.md` ของโปรเจกต์เพื่อติดตามสถานะงาน

## Step 1: Lock Intake
- กรอกข้อมูลใน `manuscript/projects/[project-slug]/series-bible.md`
- ล็อก synopsis, theme, target audience, POV, tone, constraints
- กำหนด total word target ของทั้งเรื่อง
- ถ้าเป็น complete novel และยังไม่กำหนดเอง ให้ใช้ค่าเริ่มต้นมากกว่า 100000 คำภาษาไทย
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

## เคล็ดลับ
- อย่าเขียน prose ก่อนที่ scene function จะชัด
- ถ้า prose เริ่มแบน ให้กลับไปดู `references/style-guide.md`
- ถ้าพล็อตหลุด ให้กลับไปดู `27-points.md` และ `continuity.md` ของโปรเจกต์นั้น
- ถ้าฉากสวยแต่ไม่ขยับเรื่อง ให้ตัดหรือรวมฉากนั้น
