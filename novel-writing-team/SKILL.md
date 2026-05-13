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
- อิงหลักจาก `references/character-design.md`
- อย่างน้อยต้องมี:
  - protagonist
  - antagonist
  - ally / foil / mentor / love interest / supporting cast ตามความจำเป็น
- ตัวละครแต่ละตัวต้องมี:
  - บทบาทต่อพล็อต
  - ภาพจำแรกตอนเปิดตัว
  - ภาพลักษณ์ที่คนอื่นเห็น vs ตัวตนจริง
  - แกนความขัดแย้งในตัวเอง
  - เป้าหมายภายนอก
  - ความต้องการภายใน
  - ความกลัวหลัก
  - ความเชื่อผิดพลาด
  - บาดแผลและกลไกป้องกันตัว
  - สิ่งที่ปิดบัง
  - ความสัมพันธ์กับตัวละครอื่น
  - arc ตั้งแต่ต้นจนจบ
  - จุดที่มีบทบาทเด่นใน story points
  - dialogue fingerprint ที่แยกเสียงตัวละครออกจากกันได้
  - ตัวอย่างบทพูดอย่างน้อย 3 แบบ: ปกติ / กดดัน / เปราะบาง

### ขั้น 5: Scene Plan
- แตกแต่ละ story point เป็นฉากย่อย
- ระบุด้วยว่าฉากไหนคือการเปิดตัวครั้งแรกของตัวละคร สถานที่ หรือวัตถุสำคัญ
- แต่ละฉากต้องบอก:
  - Scene ID
  - อิงจาก point ไหน
  - ตอนที่เท่าไร
  - POV
  - สถานที่และเวลา
  - ตัวละครในฉาก
  - ถ้ามี: การเปิดตัวครั้งแรกที่ต้องทำในฉาก พร้อมภาพจำและอารมณ์ที่ต้องส่ง
  - ใครทำอะไร ที่ไหน อย่างไร
  - เป้าหมายของฉาก
  - ความขัดแย้ง
  - การเปลี่ยนอารมณ์
  - ข้อมูลใหม่หรือผลลัพธ์
  - hook ท้ายฉาก
  - จำนวนคำเป้าหมาย
- รวม## วินัยของผลลัพธ์

- ให้ priority กับตรรกะของเรื่องและแรงจูงใจของตัวละคร
- ทุกขั้นต้องสอดคล้องย้อนกลับไปยัง synopsis เดิม
- อย่าสร้างตัวละครหรือฉากที่ไม่มีหน้าที่ต่อโครงเรื่อง
- ตัวละครหลักทุกตัวควรมีความขัดแย้งในตัวเอง และเมื่อถูกกดดันต้องตอบสนองต่างกันอย่างจำได้
- บทพูดต้องไม่ออกมาเสียงเดียวกันทั้งเรื่อง ควรแยกได้ว่าใครพูดแม้ตัดชื่อออก
- การเปิดตัวครั้งแรกของคน สถานที่ และวัตถุสำคัญ ต้องมีภาพจำชัด ไม่ใช่ลิสต์ข้อมูลลอยๆ
- โดยเฉพาะ `ep-01` ย่อหน้าแรกต้องเปิดโลกของเรื่องทันที ให้คนอ่านเห็นว่าโลกนี้หน้าตาแบบไหน คนอยู่กันอย่างไร หรือมีกฎ/สภาพแวดล้อมอะไรคุมชีวิตอยู่ โดยต้องฝังในภาพเหตุการณ์ ไม่ใช่ infodump
- prose ต้องมีทั้งบทบรรยายและบทพูด ไม่ใช่เล่าแบบสรุปแห้งๆ
- เมื่อเขียน prose ให้บรรยายผ่านประสบการณ์ของตัวละคร โดยใช้ภาพ เสียง กลิ่น รส และสัมผัสอย่างเป็นธรรมชาติ
- รักษาแนว โทน กลุ่มเป้าหมาย และข้อห้ามของผู้ใช้ตลอดทั้ง workflow
- ค่าเริ่มต้นของระบบคือ `run-through mode` ไม่ใช่ approval mode
- ถ้าผู้ใช้สั่ง "ทำต่อจนจบ" หรือส่งเรื่องย่อพร้อมเจตนาให้เริ่มทำจริง ให้เดิน workflow ต่อเนื่องได้โดยไม่ถามซ้ำทุกขั้น เว้นแต่มีช่องโหว่สำคัญจริงๆ
- หลัง rewrite ครบทั้งเรื่อง ให้ตีความคำสั่งนี้ว่ารวมสิทธิให้เดินต่อ `final audit -> editorial polish` อัตโนมัติด้วย เว้นแต่พบปัญหา continuity ระดับโครงสร้าง

## กฎเด็ดขาดเรื่อง Prose Authenticity

1. ทุกย่อหน้าต้องเป็นเหตุการณ์จริง ห้ามเขียน editorial commentary หรือ meta-analysis
2. ห้ามใช้โครงประโยคซ้ำข้ามตอนแบบเปลี่ยนแค่ชื่อ (template prose)
3. ห้ามมีประโยคจำพวก "จึงไม่ใช่แค่ภาพประกอบฉาก" / "ไม่ได้เข้ามาเพียงเพื่อเพิ่มข้อมูล" / "ทำหน้าที่เป็นแรงต้าน แรงช่วย" ในบริบทที่ไม่ใช่บทพูด
4. ทุกตอนต้องมี direct dialogue จริงอย่างน้อย 3 ช่วง
5. ดูตัวอย่างใน `references/examples.md`

## Quality Gate System

เมื่อจบแต่ละขั้นหลัก (draft / rewrite / audit / polish) ต้องตรวจก่อนเดินต่อ:
1. prose เป็นเหตุการณ์จริง ไม่ใช่ template
2. ทุกตอนมี dialogue อย่างน้อย 3 ช่วง
3. สำหรับ `ep-01` ย่อหน้าแรกต้องเปิด setting โลกชัด โดยต้องเห็นภูมิประเทศ/ผังพื้นที่ การปกครองหรือโครงสร้างอำนาจ และการใช้ชีวิตปกติของผู้คนคร่าวๆ ตั้งแต่เริ่ม
4. ต้องมี `AI world-opening review` สำหรับ `ep-01` และ review นั้นต้อง PASS
5. `node tools/check-world-opening.mjs [project-slug]` ใช้เป็น supporting heuristic ได้ แต่ไม่แทนคำตัดสินของ agent
6. จำนวนคำรายตอนต้องอยู่ในช่วงเป้าหมายของ metadata; ถ้ายังไม่ผ่านต้องขยาย/กระชับตอนนั้น แล้ว rewrite + polish + ตรวจซ้ำจนกว่าจะผ่าน
7. คุณภาพไม่ drift ระหว่าง batch
8. ถ้าพบปัญหาอื่นที่ไม่ผ่าน → ย้อนกลับแก้ สูงสุด 2 รอบ

## Internal Recap สำหรับนิยายยาว

นิยายที่มีมากกว่า 20 ตอน ให้สร้าง internal recap ทุก 10 ตอน เพื่อป้องกัน context loss�ัญครั้งแรกให้เห็นภาพชัด
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
- หนึ่งตอน = หนึ่งไฟล์ working source ใน `manuscript/projects/[project-slug]/episodes/`
- ระหว่างช่วง draft / rewrite / polish ให้ไฟล์ working source มีทั้ง Metadata + `Prose:` อยู่ในไฟล์เดียวเพื่อให้แก้ไขสะดวก
- หลังจบแต่ละ batch ให้รัน `node tools/sync-output.mjs [project-slug]` เพื่อ sync prose ไปที่ `output/[project-slug]/`
- หลังจบแต่ละตอน ให้บังคับใช้ลูป `draft -> rewrite -> polish -> check word count` ก่อนเริ่มตอนถัดไป
- สำหรับ `ep-01` ให้ตรวจเพิ่มว่าย่อหน้าแรกเปิด setting โลกชัดจริง เห็นภูมิประเทศ/ผังพื้นที่ การปกครองหรือโครงสร้างอำนาจ และการใช้ชีวิตปกติของผู้คน ไม่ใช่เปิดด้วยบทพูดลอยๆ หรือฉากที่ยังไม่บอกว่าผู้อ่านอยู่ในโลกแบบไหน
- ให้ agent ทำ `AI world-opening review` เป็นเกตหลัก และใช้ `node tools/check-world-opening.mjs [project-slug]` เป็น checker กึ่งอัตโนมัติประกอบ พร้อมอ่าน manual checklist ที่ tool แสดงทุกครั้ง
- ใช้ `node tools/check-episode-wordcount.mjs [project-slug] --episode ep-XX` เพื่อตรวจว่าตอนนั้นอยู่ในช่วงเป้าหมายจาก metadata หรือไม่
- ถ้าจำนวนคำยังไม่อยู่ในช่วง ให้กลับไปขยาย/กระชับ prose ของตอนเดิม แล้ว rewrite + polish + ตรวจซ้ำจนกว่าจะผ่าน
- แต่ละตอนต้องมี:
  - ชื่อตอน
  - หมายเลขตอน
  - scene list ที่ครอบคลุม
  - prose จริงที่มีทั้งบทบรรยายและบทพูด
  - continuity ที่ต่อเนื่องจากตอนก่อนหน้า
  - cliffhanger หรือแรงค้างท้ายตอน
- ถ้าผู้ใช้มีเจตนาให้ทำทั้งเรื่องในคำสั่งเดียว ให้เขียนต่อแบบ `continuous draft batches`
  - เขียนหลายตอนต่อเนื่องทีละ batch โดยไม่ต้องถามย้ำทุกตอน
  - อัปเดต `continuity.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md` หลังจบแต่ละ batch
  - เดินต่อจนกว่าจะครบ draft 1 ทั้งเรื่อง หรือจนพบปัญหา continuity / โครงสร้างระดับสำคัญ
- เมื่อโปรเจกต์ถึงสถานะ `polished draft complete` และไม่ต้องแก้ prose ใน working source แล้ว ค่อยรัน `node tools/sync-output.mjs [project-slug] --finalize` เพื่อให้ `manuscript/` เหลือ metadata-only
- เขียนแบบอ่านเป็นนิยายจริง ไม่ใช่สรุปเหตุการณ์
- กฎเด็ดขาด: ทุกย่อหน้าต้องเป็นเหตุการณ์จริงในเรื่อง ห้ามเขียน editorial commentary หรือ meta-analysis ห้ามใช้โครงประโยค template ซ้ำข้ามตอน ดูตัวอย่างใน `references/examples.md`

### ขั้น 8.5: Draft Quality Gate
- ก่อนเข้า rewrite ให้ตรวจ prose ทั้งหมดก่อน
- ตรวจว่าทุกตอนเป็น prose จริง ไม่ใช่สรุปหรือ template
- ตรวจ word count รายตอนจาก metadata ด้วย `node tools/check-episode-wordcount.mjs [project-slug]`
- ถ้าตอนใดจำนวนคำไม่อยู่ในช่วงเป้าหมาย ให้ขยาย/กระชับตอนนั้น แล้ว rewrite + polish + ตรวจซ้ำจนกว่าจะผ่าน
- ตรวจ dialogue density: ทุกตอนต้องมี direct dialogue จริงอย่างน้อย 3 ช่วง
- เปรียบเทียบคุณภาพ batch แรกกับ batch สุดท้าย
- ถ้าตอนใดไม่ผ่าน → เขียนใหม่หรือขยายตอนนั้นก่อนไป rewrite / และห้ามไปตอนถัดไปถ้ายังไม่ผ่านเกต

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
- จำนวนคำรายตอนให้ยึดช่วงเป้าหมายใน metadata ของตอนนั้นเป็นเกตบังคับ ไม่ผ่านห้ามขยับไปตอนถัดไป
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
- สำหรับสถานที่และวัตถุสำคัญ ควรกำหนดภาพจำแรกไว้ด้วย เพื่อให้ตอนเปิดตัวใน prose จำได้ทันที

## วินัยของผลลัพธ์

- ให้ priority กับตรรกะของเรื่องและแรงจูงใจของตัวละคร
- ทุกขั้นต้องสอดคล้องย้อนกลับไปยัง synopsis เดิม
- อย่าสร้างตัวละครหรือฉากที่ไม่มีหน้าที่ต่อโครงเรื่อง
- ตัวละครหลักทุกตัวควรมีความขัดแย้งในตัวเอง และเมื่อถูกกดดันต้องตอบสนองต่างกันอย่างจำได้
- บทพูดต้องไม่ออกมาเสียงเดียวกันทั้งเรื่อง ควรแยกได้ว่าใครพูดแม้ตัดชื่อออก
- การเปิดตัวครั้งแรกของคน สถานที่ และวัตถุสำคัญ ต้องมีภาพจำชัด ไม่ใช่ลิสต์ข้อมูลลอยๆ
- โดยเฉพาะ `ep-01` ย่อหน้าแรกต้องเปิดโลกของเรื่องทันที ให้คนอ่านเห็นว่าโลกนี้หน้าตาแบบไหน คนอยู่กันอย่างไร หรือมีกฎ/สภาพแวดล้อมอะไรคุมชีวิตอยู่ โดยต้องฝังในภาพเหตุการณ์ ไม่ใช่ infodump
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
- ถ้าอยู่ใน `Run-through mode` ห้ามหยุดถามผู้ใช้ว่าให้ไปขั้นถัดไปหรือไม่ และห้ามปิดข้อความด้วยคำถามเชิงอนุมัติถ้ายังไม่มีปัญหาโครงสร้างสำคัญ

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
10. ลูปบังคับรายตอน: rewrite -> polish -> check word count -> expand if needed -> repeat until pass
11. Draft quality gate (prose authenticity + word count + dialogue density)
12. Rewrite pass + rewrite log
13. Final continuity + word-count audit
14. Editorial polish pass + polish log

## รูปแบบไฟล์ที่แนะนำเมื่อเขียนนิยายจริง

ใช้เทมเพลตมาตรฐานจาก `references/output-templates.md` และถ้าทำงานกับไฟล์จริงให้ใช้โครงหลายโปรเจกต์ดังนี้:

- เทมเพลตกลาง: `manuscript/templates/`
- งานจริงแต่ละเรื่อง: `manuscript/projects/[project-slug]/`
- ตอนนิยาย working source: `manuscript/projects/[project-slug]/episodes/`
- ไฟล์อ่านล้วนสำหรับส่งอ่าน: `output/[project-slug]/`
- เครื่องมือ sync/finalize: `tools/sync-output.mjs`
- เครื่องมือตรวจจำนวนคำรายตอน: `tools/check-episode-wordcount.mjs`

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
- ดู `references/character-design.md`
- ดู `references/first-appearance-guide.md`
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
