# Projects

โฟลเดอร์นี้เก็บนิยายแต่ละเรื่องแยกเป็นคนละโปรเจกต์

ตัวอย่าง:
- `sample-project/`
- `my-fantasy-novel/`
- `urban-mystery-01/`

ใช้ `index.md` ในโฟลเดอร์เดียวกันเพื่อดูสถานะรวมของทุกโปรเจกต์

แนวทางไฟล์ตอนมาตรฐานของ repo:
- ระหว่างช่วง draft / rewrite / polish ให้ไฟล์ใน `manuscript/projects/[project-slug]/episodes/` เป็น working source ของตอน โดยมีทั้ง Metadata + `Prose:`
- ทุกตอนต้องผ่านลูป `draft -> rewrite -> polish -> check word count` ก่อนเริ่มตอนถัดไป
- ใช้ `node tools/check-episode-wordcount.mjs [project-slug] --episode ep-XX` ตรวจว่าตอนนั้นอยู่ในช่วงเป้าหมายจาก metadata หรือไม่
- ถ้าไม่ผ่าน ให้ขยาย/กระชับตอนเดิม แล้ว rewrite + polish + ตรวจซ้ำจนกว่าจะผ่าน
- หลังจบแต่ละ batch ให้ sync ไฟล์อ่านล้วนไป `output/[project-slug]/` ด้วย `node tools/sync-output.mjs [project-slug]`
- เมื่อโปรเจกต์ปิดงานแล้ว หากต้องการให้ `manuscript/` เหลือ metadata-only ให้ใช้ `node tools/sync-output.mjs [project-slug] --finalize`

หลักการตั้งชื่อโฟลเดอร์:
- ใช้ slug ภาษาอังกฤษสั้นๆ
- พิมพ์เล็ก
- ใช้ `-` คั่นคำ
- หลีกเลี่ยงช่องว่างและอักขระพิเศษ
