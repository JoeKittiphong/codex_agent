# Final Continuity + Word-Count Audit: เพลิงลบลืม

วันที่ตรวจ: 2026-05-14

## ขอบเขต
- โปรเจกต์: flame-of-forgetting
- ตอนที่ตรวจ: ep-01 ถึง ep-36
- Workflow ที่รัน: rewrite-agent -> sync-output -> word-count gate -> world-opening gate -> final audit -> editorial polish

## Word-count Gate
- Target: 2500-3000 คำต่อตอน
- ผลรวมทั้งเรื่อง: 90,903 คำ
- ช่วงรายตอน: 2,500-2,567 คำ
- ผลตรวจ: PASS 36/36
- เครื่องมือ: `node tools/check-episode-wordcount.mjs flame-of-forgetting`

## Prose Authenticity Gate
- ไม่มี editorial commentary/template prose กลุ่มต้องห้ามใน output
- ทุกตอนมี direct dialogue อย่างน้อย 3 ช่วง
- ใช้ scene plan / episode map / character voice เป็นฐานในการ rewrite

## World-opening Gate
- `node tools/check-world-opening.mjs flame-of-forgetting`: PASS
- AI review: PASS — ep-01 เปิดโลกด้วยภาพพระนคร/ตรอกหินดำ/มือปราบอาคม/ระบบลบความจำในเหตุการณ์จริง

## Continuity Review
- Arc อัคคีต่อเนื่อง: มือปราบรัฐ -> ผู้หลบหนี -> ผู้คืนความทรงจำ
- Arc สาลิกาต่อเนื่อง: เครื่องมืออ่านเลือด -> ผู้ร่วมตัดสินใจ -> ผู้บันทึกความจริง
- Motif สำคัญครบ: รอยสัก / เศษทอง / หน้ากากทองคำ / ยันต์มหาลืม / ราคาของการจำ

## สถานะ
polished draft complete หลัง rewrite/audit/polish รอบนี้
