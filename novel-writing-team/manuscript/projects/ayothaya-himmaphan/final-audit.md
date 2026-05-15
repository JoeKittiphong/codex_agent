# Final Continuity + Word-Count Audit: ปีกทองเหนืออโยธยา

วันที่ตรวจ: 2026-05-14

## ขอบเขต
- โปรเจกต์: ayothaya-himmaphan
- ตอนที่ตรวจ: ep-01 ถึง ep-36
- Workflow ที่รัน: rewrite-agent -> sync-output -> word-count gate -> world-opening gate -> final audit -> editorial polish

## Word-count Gate
- Target: 2800-3200 คำต่อตอน ตาม longform-plan.md / episode-map.md
- ผลรวมทั้งเรื่อง: 103,805 คำ
- ช่วงรายตอน: 2,803-3,026 คำ
- ผลตรวจ: PASS 36/36
- เครื่องมือ: `node tools/check-episode-wordcount.mjs ayothaya-himmaphan`

## Prose Authenticity Gate
- ไม่มี editorial commentary/template prose กลุ่มต้องห้ามใน output
- ทุกตอนมี direct dialogue อย่างน้อย 3 ช่วง
- ตอนที่ต่ำกว่าเกตถูกขยายด้วย beat จาก episode-map, character voice, style-guide และ sensory prose

## World-opening Gate
- `node tools/check-world-opening.mjs ayothaya-himmaphan`: PASS
- AI review: PASS — ep-01 เปิดโลกอโยธยา/สำนักอาคม/วิถีศิษย์/ระบบฝึกอาคมผ่านฉากจริง ไม่ใช่ lore dump

## Continuity Review
- Arc อินทร์ภพ: ศิษย์ปลายแถวไม่มั่นใจ -> ผู้คุ้มครองที่ยอมรับภาระ -> ชายหนุ่มผู้กลับอโยธยาในฐานะคนใหม่ ต่อเนื่องครบ
- Arc สุพรรณกานต์: นครธิดาผู้หนีรอด -> ผู้นำที่ยอมรับความช่วยเหลือ -> ผู้เลือกชะตาตนเอง ต่อเนื่องครบ
- Motif สำคัญครบ: กวางเผือก / ป่าหิมพานต์ / แก้วมยุเรศ / อาคมคุ้มครอง / ปีกทอง / การกลับบ้าน
- Open loops หลักถูกปิด: เวหาฉิมพลีเป็นอิสระ, ท้าวกัณฐ์เพลิงพ่าย, สุพรรณกานต์เลือกไปอโยธยา, อินทร์ภพกลับสำนักพร้อมการเติบโต

## สถานะ
polished draft complete หลัง rewrite/audit/polish รอบนี้
