# สัญญาการทำงาน

ใช้สัญญานี้เมื่อรันทีมเขียนนิยายในโหมด `synopsis -> complete novel`

## เป้าหมาย

เปลี่ยน synopsis หรือเรื่องย่อของผู้ใช้ให้เป็นนิยายภาษาไทยฉบับสมบูรณ์ โดยผ่านโครงสร้างต่อไปนี้:
- Three-Act Expansion
- 8 Sequences
- 27 Story Points
- Character Bible
- Scene Plan
- Style Sheet
- Continuity Tracker
- Episode Manuscript
- Rewrite Pass
- Editorial Review (optional)
- World Bible (optional)

## ข้อมูลเข้า

- เรื่องย่อหรือ synopsis
- แนวเรื่อง / โทน / กลุ่มเป้าหมาย
- ความยาวโดยรวม หรือจำนวนตอน
- total word target ของทั้งเรื่อง
- ข้อห้าม ข้อจำกัด หรือองค์ประกอบที่ต้องมี
- ถ้ามี: POV, tense, ระดับภาษา, ความเข้มของ romance / violence / mystery

ถ้าผู้ใช้ต้องการนิยายเต็มเรื่องและไม่ได้ระบุ total word target เอง ให้ใช้เป้าหมายรวมมากกว่า 100000 คำภาษาไทยเป็นค่าเริ่มต้น และวางแผนตาม `references/longform.md`

## ขั้นที่ 0: Intake หรือ Premise/Synopsis Repair

ให้ผลลัพธ์:
- ตรวจสอบว่าข้อมูลตั้งต้นเพียงพอหรือไม่
- ถ้ายังไม่พอ ให้ซ่อม premise หรือย่อ synopsis ให้คมขึ้น
- สรุป assumption ที่ทีมจะใช้ต่อ

## ขั้นที่ 1: Three-Act Expansion Agent

ให้ผลลัพธ์:
- Act 1
- Act 2
- Act 3

แต่ละ act ควรมี:
- หน้าที่ขององก์
- เหตุการณ์หลัก
- ความเปลี่ยนแปลงของตัวเอก
- แรงกดดันและเดิมพัน
- จุดส่งต่อไปยังองก์ถัดไป

## ขั้นที่ 2: 8 Sequence Agent

ให้ผลลัพธ์:
- Sequence 1 ถึง Sequence 8

แต่ละ sequence ควรมี:
- act ที่สังกัด
- หน้าที่ของช่วง
- จุดเริ่มต้น
- ความขัดแย้งหลัก
- mini-climax
- จุดจบของช่วง
- สิ่งที่ส่งต่อไป sequence ถัดไป

## ขั้นที่ 3: Story Points Agent

ให้ผลลัพธ์:
- 27 story points ตาม references/story-points.md
- optional point 28 ถ้าผู้ใช้ต้องการ closing image แยกต่างหาก

แต่ละ point ควรมี:
- เกิดอะไรขึ้น
- เกิดกับใคร
- ทำไมจุดนี้สำคัญ
- สิ่งที่เปลี่ยนไปหลังจากนี้
- คำถามที่เปิดหรือปิด

## ขั้นที่ 4: Character Agent

ให้ผลลัพธ์:
- รายชื่อตัวละครหลักและรอง
- character bible
- ความสัมพันธ์ระหว่างตัวละคร
- บทบาทต่อ story points
- arc รายตัว
- เสียงพูดหรือบุคลิกการสื่อสาร

## ขั้นที่ 5: Scene Planner Agent

ให้ผลลัพธ์:
- scene list ทั้งเรื่อง
- จับฉากเข้ากับ story point และ episode
- แผนจำนวนคำต่อฉากและต่อ episode

แต่ละฉากต้องมี:
- Scene ID
- Point Mapping
- Episode Number
- POV
- สถานที่และเวลา
- ตัวละครในฉาก
- เป้าหมาย
- ความขัดแย้ง
- turning beat
- ผลลัพธ์
- hook ท้ายฉาก

ใช้รูปแบบผลลัพธ์มาตรฐานจาก `references/output-templates.md` ทุกขั้น และถ้าทำงานลงไฟล์จริงให้ใช้โครงหลายโปรเจกต์ใน `manuscript/projects/[project-slug]/`

## ขั้นที่ 6: Style Guide / Tone Lock

ให้ผลลัพธ์:
- style sheet
- แนวทางใช้ภาพ เสียง กลิ่น รส และสัมผัส
- กติกาเรื่อง POV, tense, dialogue, pacing

## ขั้นที่ 7: Continuity Tracker

ให้ผลลัพธ์:
- continuity tracker
- timeline และสถานะล่าสุดของตัวละคร
- open loops ที่ต้องจ่ายคืน

## ขั้นที่ 8: Episode Writer Agent

ให้ผลลัพธ์:
- นิยายจริงหนึ่งตอนต่อหนึ่งไฟล์ในสถานะ draft 1
- ความยาวตอนละ 2500-3000 คำภาษาไทย หรือปรับตาม long-form plan
- มีทั้งบทบรรยายและบทพูด
- จบด้วยแรงค้างหรือจุดพักที่เหมาะสม

รูปแบบไฟล์แนะนำ:
- `manuscript/projects/[project-slug]/episodes/ep-01-[slug].md`
- `manuscript/projects/[project-slug]/episodes/ep-02-[slug].md`

## ขั้นที่ 9: Rewrite Pass

ให้ผลลัพธ์:
- rewrite log
- draft 2 หรือ polished draft
- จุดที่ปรับภาษา จังหวะ และ sensory immersion
- ถ้าผู้ใช้สั่ง `rewrite ทั้งเรื่อง` ให้เข้าสู่โหมด `continuous rewrite batches`
  - รีไรต์หลายตอนต่อเนื่องทีละ batch โดยไม่ต้องขออนุมัติซ้ำทุกครั้ง
  - หลังจบแต่ละ batch ให้อัปเดต `rewrite-log.md`, `README.md` ของโปรเจกต์ และ `manuscript/projects/index.md`
  - เดินต่อจนกว่าจะครบทั้งเรื่อง หรือจนผู้ใช้สั่งหยุด/เปลี่ยนแผน

## ขั้นเสริม: Editor Agent

ให้ผลลัพธ์:
- editorial report
- จุดเสี่ยงด้าน continuity / pacing / logic
- ข้อเสนอแก้ไขที่ทำต่อได้ทันที

## ขั้นเสริม: Worldbuilding Agent

ให้ผลลัพธ์:
- world bible
- กติกาโลก สถานที่สำคัญ ระบบอำนาจ และข้อจำกัดที่ส่งผลต่อพล็อต

## มาตรฐานการเขียน

- รักษาความต่อเนื่องของข้อมูลทุกตอน
- อย่าให้ตัวละครพูดหรือทำเกินจาก arc ที่วางไว้โดยไม่มีเหตุผล
- ฉากทุกฉากต้องมีหน้าที่ต่อพล็อต ตัวละคร หรือธีม
- prose ต้องอ่านเป็นนิยายจริง ไม่ใช่ bullet summary
- การบรรยายควรทำให้ผู้อ่านเห็นภาพ ได้ยินเสียง ได้กลิ่น รู้รส และรับสัมผัสผ่าน POV ของตัวละครอย่างเป็นธรรมชาติ
- workflow ปกติควรมีอย่างน้อย 1 รอบของ rewrite หลัง draft แรกเสมอ
- ถ้าผู้ใช้สั่งรีไรต์ทั้งเรื่อง ให้ตีความเป็นคำสั่งให้เดินต่อแบบ continuous rewrite batches จนจบเช่นกัน
- ถ้าเป้าหมายคือ complete novel ให้คุมความยาวรวมมากกว่า 100000 คำภาษาไทย เว้นแต่ผู้ใช้ระบุอย่างอื่น

## กติกาการส่งงาน

ลำดับปกติ:
1. synopsis repair หรือ assumption lock
2. three-act expansion
3. 8 sequences
4. 27 story points
5. character bible
6. style sheet
7. scene plan + episode map
8. continuity tracker
9. episode prose (draft 1)
10. rewrite pass

โหมดการทำงานมี 2 แบบ:
- `Approval mode`: ขออนุมัติทุกขั้น
- `Run-through mode`: เดินต่อจนจบแล้วค่อยสรุปเป็น milestone

## รูปแบบผลลัพธ์ที่แนะนำ

### Three-Act Expansion

```text
Act 1:
- หน้าที่ขององก์:
- เหตุการณ์หลัก:
- ความเปลี่ยนแปลงของตัวเอก:
- เดิมพัน:
- จุดส่งต่อ:

Act 2:
...

Act 3:
...
```

### 8 Sequences

```text
Sequence 1:
- อยู่ใน Act:
- หน้าที่ของช่วง:
- จุดเริ่มต้น:
- ความขัดแย้งหลัก:
- Mini-climax:
- จุดจบของช่วง:
- สิ่งที่ส่งต่อ:
```

### Story Points

```text
Point 1: First Sequence
- เกิดอะไรขึ้น:
- เกิดกับใคร:
- ทำไมสำคัญ:
- สิ่งที่เปลี่ยนไป:
- คำถามที่เปิด/ปิด:
```

### Character Bible

```text
ตัวละคร: [ชื่อ]
- บทบาท:
- เป้าหมายภายนอก:
- แรงขับภายใน:
- บาดแผล:
- ความลับ:
- ความสัมพันธ์:
- จุดเด่นใน story points:
- arc:
- น้ำเสียงการพูด:
```

### Scene Plan

```text
Scene S01
- Episode: 1
- Point Mapping: Point 1 / Point 2
- POV:
- สถานที่และเวลา:
- ตัวละคร:
- ใครทำอะไร ที่ไหน อย่างไร:
- เป้าหมาย:
- ความขัดแย้ง:
- Turning beat:
- ผลลัพธ์:
- Hook ท้ายฉาก:
- ความยาวเป้าหมาย:
```

### Episode Manuscript

```text
ไฟล์: manuscript/projects/[project-slug]/episodes/ep-01-[slug].md
ตอนที่ 1: [ชื่อตอน]
- ครอบคลุมฉาก:
- ความยาวเป้าหมาย: 2500-3000 คำ หรือค่าตาม long-form plan
- Cliffhanger ท้ายตอน:

[prose ภาษาไทยจริง]
```

### Rewrite Log

```text
Rewrite Log
- ขอบเขตที่รีไรต์:
- เป้าหมายของรอบนี้:
- สิ่งที่ปรับหลัก:
  1.
  2.
- จุดที่เพิ่ม sensory detail:
  1.
- จุดที่ตัดหรือย่อ:
  1.
- continuity ที่ต้องระวังหลังรีไรต์:
  1.
- สถานะหลังรีไรต์: draft 2 / polished draft
```
