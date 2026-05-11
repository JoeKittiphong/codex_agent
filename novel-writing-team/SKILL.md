---
name: novel-writing-team
description: รับเรื่องย่อหรือไอเดียนิยายจากผู้ใช้ แล้วพัฒนาเป็นนิยายไทยฉบับสมบูรณ์ด้วย workflow: synopsis -> 3 acts -> 8 sequences -> 27 story points (+ optional point 28 สำหรับ closing image) -> character bible -> scene plan -> episode prose -> rewrite -> final audit -> editorial polish
---

# ทีมเขียนนิยาย

ใช้ skill นี้เมื่อผู้ใช้ต้องการพัฒนางานจาก `เรื่องย่อ` ไปจนถึง `นิยายภาษาไทยฉบับสมบูรณ์` ที่พร้อมอ่านเป็นตอน

## เป้าหมายหลัก

รับ synopsis หรือไอเดียตั้งต้นจากผู้ใช้ แล้วพัฒนาเป็น:
1. `Three-Act Expansion`
2. `8 Sequence Structure`
3. `27 Story Points`
4. `Character Bible`
5. `Scene Plan`
6. `Style Sheet`
7. `Continuity Tracker`
8. `Episode Manuscript`
9. `Rewrite Pass`
10. `Final Continuity + Word-Count Audit`
11. `Editorial Polish Pass`
12. `Editorial Review` (optional)
13. `World Bible` (optional)

ถ้าผู้ใช้ยังไม่มี synopsis ให้ย้อนกลับไปทำ `Premise` และ `Synopsis` ก่อน แล้วจึงเข้าสู่ workflow หลัก

## Workflow หลัก

### ขั้น 0: Intake
- รับข้อมูลจากผู้ใช้:
  - ชื่อเรื่องชั่วคราว
  - แนวเรื่อง
  - โทนเรื่อง
  - กลุ่มเป้าหมาย
  - เรื่องย่อหรือ synopsis
  - ความยาวเป้าหมาย หรือจำนวนตอน
  - total word target ของทั้งเรื่อง
  - สิ่งที่ต้องมี / ห้ามมี
- ถ้าผู้ใช้ต้องการ "นิยายเต็มเรื่อง" และไม่ได้กำหนดเอง ให้ถือค่าเริ่มต้นเป็น `มากกว่า 100000 คำภาษาไทย`
- ใช้ `references/longform.md` เพื่อแปลง total word target ไปเป็นจำนวนตอนและกลยุทธ์การขยายเรื่อง
- ถ้าผู้ใช้ให้มาแค่ไอเดียสั้น ให้สร้าง premise และ synopsis ก่อน
- ถ้า synopsis ยังมีรูรั่วด้านเหตุผล แรงจูงใจ หรือเดิมพัน ให้ซ่อมก่อนค่อยแตกโครง
- ถ้าผู้ใช้ส่งเรื่องย่อแล้วสั่งให้เริ่มทำ ให้ถือว่าอนุญาตให้รันทั้ง workflow จนถึง polished draft โดยอัตโนมัติ
- ถ้าข้อมูลย่อยบางช่องยังไม่ครบ แต่สามารถอนุมานอย่างสมเหตุสมผลได้ ให้ล็อก assumption เองแล้วเดินต่อ ไม่ต้องหยุดรอถามทุกจุด

### ขั้น 1: Three-Act Expansion
- ขยาย synopsis ให้เป็นโครง `Act 1 / Act 2 / Act 3`
- แต่ละองก์ต้องบอก:
  - เป้าหมายขององก์
  - สถานะตัวละครต้นองก์และปลายองก์
  - เหตุการณ์หลัก
  - turning pressure หรือแรงกดดันของเรื่อง
  - ผลที่ส่งต่อไปยังองก์ถัดไป
- ห้ามลงรายละเอียดระดับฉากมากเกินไปในขั้นนี้

### ขั้น 2: 8 Sequence Structure
- แตกสามองก์เป็น `8 sequences`
- แต่ละ sequence ต้องมี:
  - ลำดับที่
  - act ที่สังกัด
  - หน้าที่ของ sequence
  - จุดเริ่มต้น
  - ความขัดแย้งหลัก
  - จุดพีกหรือ mini-climax
  - จุดจบที่ส่งไม้ต่อให้ sequence ถัดไป
- ต้องทำให้แรงขับของเรื่องค่อยๆ สูงขึ้น

### ขั้น 3: 27 Story Points
- ใช้ 27 จุดตาม `references/3act.md`
- จุดทั้ง 27 ได้แก่:
  1. First Sequence
  2. Setting
  3. Character
  4. Theme State
  5. Event Plot Point
  6. Debate
  7. Set Goal
  8. Mission 1
  9. Mission 2
  10. Mission 3
  11. Obstacle 1
  12. Obstacle 2
  13. Turning Point
  14. Bad Coming
  15. Stake Rise
  16. Falling Down
  17. Alone
  18. Learn Lesson
  19. Find The Way
  20. Get Target
  21. Rise Climax
  22. Falling Climax
  23. Approve Lesson
  24. True Climax
  25. Solution
  26. Change
  27. Final Sequence
- ถ้าผู้ใช้ยืนยัน workflow แบบ 28 points ให้เพิ่ม `Point 28: Closing Image / Emotional Aftertaste` เป็นจุดปิดเรื่องสำหรับใช้วางฉากและตอน
- แต่ละ point ต้องอธิบาย:
  - what happens
  - why it matters
  - who changes
  - what question it opens or closes

### ขั้น 4: Character Bible
- สร้างตัวละครจากความต้องการของ 27 story points ไม่ใช่สร้างลอยๆ
- อย่างน้อยต้องมี:
  - protagonist
  - antagonist
  - ally / foil / mentor / love interest / supporting cast ตามความจำเป็น
- ตัวละครแต่ละตัวต้องมี:
  - บทบาทต่อพล็อต
  - เป้าหมายภายนอก
  - บาดแผลหรือแรงขับภายใน
  - สิ่งที่ปิดบัง
  - ความสัมพันธ์กับตัวละครอื่น
  - arc ตั้งแต่ต้นจนจบ
  - จุดที่มีบทบาทเด่นใน story points
  - น้ำเสียงการพูดหรือบุคลิกเวลาสนทนา

### ขั้น 5: Scene Plan
- แตกแต่ละ story point เป็นฉากย่อย
- แต่ละฉากต้องบอก:
  - Scene ID
  - อิงจาก point ไหน
  - ตอนที่เท่าไร
  - POV
  - สถานที่และเวลา
  - ตัวละครในฉาก
  - ใครทำอะไร ที่ไหน อย่างไร
  - เป้าหมายของฉาก
  - ความขัดแย้ง
  - การเปลี่ยนอารมณ์
  - ข้อมูลใหม่หรือผลลัพธ์
  - hook ท้ายฉาก
  - จำนวนคำเป้าหมาย
- รวมฉากเป็นตอน โดยตอนหนึ่งควรยาว `2500-3000 คำภาษาไทย` หรือปรับตาม long-form plan
- ถ้าเป้าหมายรวมเกิน `100000 คำ` ต้องวางจำนวนตอนและการกระจาย scene ให้รองรับตั้งแต่ขั้นนี้

### ขั้น 6: Style Sheet
- กำหนดสำนวนก่อนหรืออย่างช้าที่สุดก่อนเริ่มเขียน prose
- ใช้ `references/style-guide.md`
- ระบุให้ชัด:
  - POV
  - tense
  - ระดับภาษา
  - จังหวะภาษา
  - แนวทางใช้บทพูด
  - แนวทางบรรยายผ่านภาพ เสียง กลิ่น รส และสัมผัส
- เป้าหมายคือให้ผู้อ่านรู้สึกเหมือนอยู่ในตัวละคร

### ขั้น 7: Continuity Tracker
- ใช้ `references/continuity-tracker.md`
- อัปเดตก่อนและหลังเขียนทุกตอน
- ต้องติดตาม:
  - timeline
  - สถานะตัวละคร
  - ความสัมพันธ์
  - เบาะแสและวัตถุสำคัญ
  - open loops ที่ต้องจ่ายคืน

### ขั้น 8: Episode Manuscript
- เขียนนิยายจริงเป็นภาษาไทยในรูปแบบ `draft 1`
- หนึ่งตอน = หนึ่งไฟล์
- แต่ละตอนต้องมี:
  - ชื่อตอน
  - หมายเลขตอน
  - scene list ที่ครอบคลุม
  - prose จริงที่มีทั้งบทบรรยายและบทพูด
  - continuity ที่ต่อเนื่องจากตอนก่อนหน้า
  - cliffhanger หรือแรงค้างท้ายตอน
- เขียนแบบอ่านเป็นนิยายจริง ไม่ใช่สรุปเหตุการณ์

### ขั้น 9: Rewrite Pass
- หลังเขียน draft 1 เสร็จ ต้องรีไรต์อย่างน้อย `1 รอบ`
- ใช้ `references/rewrite-pass.md`
- เป้าหมายของรอบรีไรต์:
  - เกลาภาษาให้ลื่นและงามขึ้น
  - เพิ่ม sensory immersion
  - ตัดคำซ้ำหรือประโยคอธิบายตรงเกินไป
  - คุมจังหวะบทพูดและตอนจบของฉาก/ตอน
- ถ้าผู้ใช้สั่ง `rewrite ทั้งเรื่อง` ให้เดินต่อแบบ `continuous rewrite batches`
  - รีไรต์หลายตอนต่อเนื่องทีละ batch โดยไม่ต้องถามย้ำทุก batch
  - อัปเดต `rewrite-log.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md` หลังจบแต่ละ batch
  - เดินต่อจนกว่าจะครบทั้งเรื่อง หรือจนผู้ใช้สั่งหยุด/เปลี่ยนแผน
- เมื่อรีไรต์แล้วให้อัปเดต `rewrite-log.md` ของโปรเจกต์

### ขั้น 10: Final Continuity + Word-Count Audit
- หลัง rewrite ครบทั้งเรื่อง ให้ตรวจ continuity ทั้งเรื่องอีกครั้ง
- ใช้ `references/final-audit.md`
- ต้องตรวจ:
  - timeline และ open loops
  - arc ตัวละครและความสัมพันธ์
  - กฎโลก กฎเวท บาดแผล วัตถุสำคัญ และราคาของเหตุการณ์
  - จำนวนคำรายตอนและรวมทั้งเรื่อง เทียบกับ total word target
- บันทึกผลใน `final-audit.md`
- ถ้าผู้ใช้สั่ง `ทำต่อจนจบ` หรือมีเจตนาปิดงานทั้ง workflow ให้รันขั้นนี้ต่ออัตโนมัติหลัง rewrite ครบ

### ขั้น 11: Editorial Polish Pass
- ใช้ `references/editorial-polish.md`
- เป้าหมายคือยกระดับ `draft 2` ไปเป็น `polished draft`
- เกลาในระดับคำ ประโยค ย่อหน้า จังหวะตอน และความสม่ำเสมอทั้งเรื่อง
- ทำงานเป็น `continuous editorial polish batches` ได้เมื่อผู้ใช้ต้องการให้ทำต่อจนจบ
- หลังจบแต่ละ batch ให้อัปเดต `polish-log.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md`

## มาตรฐานความยาว

- 1 ตอน: โดยทั่วไป `2500-3000 คำภาษาไทย` เว้นแต่ long-form plan จะกำหนดต่างออกไป
- 1 ฉาก: โดยทั่วไป `700-1200 คำ` แล้วแต่จังหวะ
- 1 เรื่อง: ถ้าผู้ใช้ต้องการ `นิยายเต็มเรื่อง` ให้ตั้งเป้าหมายรวม `มากกว่า 100000 คำภาษาไทย` เป็นค่าเริ่มต้น เว้นแต่ผู้ใช้ระบุอย่างอื่น
- หากเนื้อหาแน่นเกินไป ให้เพิ่มจำนวนตอนแทนการบีบเรื่องจนเสียอารมณ์

## Optional Support Workflows

### Editorial Review
- editor ต้องตรวจหลัง draft 1 หรือหลัง rewrite pass ก็ได้ แต่ workflow ปกติควรเป็น `draft 1 -> editorial notes -> rewrite pass -> polished draft`
- editor ต้องตรวจด้วยว่าบทบรรยายมี sensory immersion พอหรือไม่
- ดูว่าภาพ เสียง กลิ่น รส และสัมผัส ถูกใช้แบบผูกกับ POV จริงหรือไม่

- ใช้ `editor-agent` เมื่อต้องตรวจ:
  - continuity
  - pacing
  - logic
  - scene redundancy
  - dialogue naturalness
  - chapter ending strength
- ใช้ checklist จาก `references/editor-checklist.md`

### Worldbuilding
- ใช้ `worldbuilding-agent` เมื่อนิยายต้องมีโลกที่ชัดและมีระบบรองรับ
- ใช้กรอบจาก `references/worldbuilding.md`
- worldbuilding ต้องรับใช้ conflict และตัวละคร ไม่ใช่เพิ่ม lore โดยไม่มีหน้าที่

## วินัยของผลลัพธ์

- ให้ priority กับตรรกะของเรื่องและแรงจูงใจของตัวละคร
- ทุกขั้นต้องสอดคล้องย้อนกลับไปยัง synopsis เดิม
- อย่าสร้างตัวละครหรือฉากที่ไม่มีหน้าที่ต่อโครงเรื่อง
- prose ต้องมีทั้งบทบรรยายและบทพูด ไม่ใช่เล่าแบบสรุปแห้งๆ
- เมื่อเขียน prose ให้บรรยายผ่านประสบการณ์ของตัวละคร โดยใช้ภาพ เสียง กลิ่น รส และสัมผัสอย่างเป็นธรรมชาติ
- รักษาแนว โทน กลุ่มเป้าหมาย และข้อห้ามของผู้ใช้ตลอดทั้ง workflow
- ค่าเริ่มต้นของระบบคือ `run-through mode` ไม่ใช่ approval mode
- ถ้าผู้ใช้สั่ง “ทำต่อจนจบ” หรือส่งเรื่องย่อพร้อมเจตนาให้เริ่มทำจริง ให้เดิน workflow ต่อเนื่องได้โดยไม่ถามซ้ำทุกขั้น เว้นแต่มีช่องโหว่สำคัญจริงๆ
- หลัง rewrite ครบทั้งเรื่อง ให้ตีความคำสั่งนี้ว่ารวมสิทธิให้เดินต่อ `final audit -> editorial polish` อัตโนมัติด้วย เว้นแต่พบปัญหา continuity ระดับโครงสร้าง

## สัญญาการส่งงาน

โหมดทำงานปริยาย:
- `Run-through mode` เป็นค่าเริ่มต้น
- ใช้ `Approval mode` เฉพาะเมื่อผู้ใช้ระบุชัดว่าต้องการอนุมัติทีละขั้น

ลำดับการส่งงานที่แนะนำ:
1. Synopsis intake หรือ premise/synopsis repair
2. Three-act expansion
3. 8 sequences
4. 27 story points
5. Character bible
6. Style sheet
7. Scene plan + episode map
8. Continuity tracker
9. Episode files ทีละตอนหรือเป็น batch (draft 1)
10. Rewrite pass + rewrite log
11. Final continuity + word-count audit
12. Editorial polish pass + polish log

## รูปแบบไฟล์ที่แนะนำเมื่อเขียนนิยายจริง

ใช้เทมเพลตมาตรฐานจาก `references/output-templates.md` และถ้าทำงานกับไฟล์จริงให้ใช้โครงหลายโปรเจกต์ดังนี้:

- เทมเพลตกลาง: `manuscript/templates/`
- งานจริงแต่ละเรื่อง: `manuscript/projects/[project-slug]/`
- ตอนนิยาย: `manuscript/projects/[project-slug]/episodes/`

ไฟล์หลักของหนึ่งโปรเจกต์:
- `manuscript/projects/[project-slug]/README.md`
- `manuscript/projects/[project-slug]/series-bible.md`
- `manuscript/projects/[project-slug]/three-act.md`
- `manuscript/projects/[project-slug]/8-sequences.md`
- `manuscript/projects/[project-slug]/27-points.md`
- `manuscript/projects/[project-slug]/characters.md`
- `manuscript/projects/[project-slug]/style-guide.md`
- `manuscript/projects/[project-slug]/scenes.md`
- `manuscript/projects/[project-slug]/continuity.md`
- `manuscript/projects/[project-slug]/rewrite-log.md`
- `manuscript/projects/[project-slug]/final-audit.md`
- `manuscript/projects/[project-slug]/world.md`
- `manuscript/projects/[project-slug]/editorial-report.md`
- `manuscript/projects/[project-slug]/polish-log.md`
- `manuscript/projects/[project-slug]/episodes/ep-01-[slug].md`
- `manuscript/projects/[project-slug]/episodes/ep-02-[slug].md`

## ไฟล์ประกอบ

- ดู `references/start-here.md`
- ดู `references/workflow.md`
- ดู `references/3act.md`
- ดู `references/8-sequence.md`
- ดู `references/story-points.md`
- ดู `references/output-templates.md`
- ดู `references/style-guide.md`
- ดู `references/continuity-tracker.md`
- ดู `references/rewrite-pass.md`
- ดู `references/final-audit.md`
- ดู `references/editorial-polish.md`
- ดู `references/longform.md`
- ดู `references/editor-checklist.md`
- ดู `references/worldbuilding.md`
- ดู `references/runbook.md`
- ดู `references/examples.md`
- ดู `manuscript/README.md`
- ดู `manuscript/templates/README.md`
- ดู `manuscript/projects/README.md`
- ดู `agents/` สำหรับ prompt ของแต่ละบทบาท
