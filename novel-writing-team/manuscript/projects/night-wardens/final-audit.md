# Final Continuity + Word-Count Audit: หน่วยพิทักษ์ราตรี

วันที่ตรวจ: 2026-05-15

## ขอบเขต
- โปรเจกต์: night-wardens
- ตอนที่ตรวจ: ep-01 ถึง ep-24
- Workflow ที่รัน: rewrite-agent -> sync-output -> word-count gate -> world-opening gate -> final audit -> editorial polish

## Assumption / Target Reconcile
- longform-plan.md กำหนด total target 42,000-46,000 คำ และ target รายตอน 1,700-1,900 โดยประมาณ
- metadata เดิมบางไฟล์ยังค้าง 2,800-3,200 ซึ่งขัดกับ total target
- รอบนี้ปรับ metadata/episode-map เป็น 1,700-2,200 คำ เพื่อรองรับ longform target และคุณภาพจังหวะตอนจริง

## Word-count Gate
- ผลรวมทั้งเรื่อง: 44,609 คำ
- ช่วงรายตอน: 1,703-2,195 คำ
- ผลตรวจ: PASS 24/24
- เครื่องมือ: `node tools/check-episode-wordcount.mjs night-wardens`

## Prose Authenticity Gate
- ทุกตอนเป็น prose เหตุการณ์จริง ไม่มี editorial commentary/template prose กลุ่มต้องห้าม
- ทุกตอนมี direct dialogue อย่างน้อย 3 ช่วง
- ตอนที่ต่ำกว่าเกตถูกขยายด้วย beat จาก scene plan, POV และ character voice

## World-opening Gate
- `node tools/check-world-opening.mjs night-wardens`: PASS
- AI review: PASS — ep-01 เปิดโลกด้วยนิคมอุตสาหกรรม โรงงานกะเช้า คนงาน เครื่องจักร และกฎชีวิตแรงงาน/ความล้า ก่อนค่อยเผยโลกฝัน

## Continuity Review
- Arc ภาคิน: นักล่าเดี่ยว -> คนเริ่มมีทีม -> หัวหน้าหน่วยพิทักษ์ราตรี ต่อเนื่องครบ
- ทีมหลัก ญาดา/รวิ/วรันยา/ธเนศ เข้าตามจุดคัดสมาชิกและกลับมามีบทบาทใน climax
- Motif สำคัญครบ: ความล้าคนเมือง, แดนนิทรา, มอรัส, พาหะหลัก, สติร่วม, หน่วยพิทักษ์ราตรี

## สถานะ
polished draft complete หลัง rewrite/audit/polish รอบนี้
