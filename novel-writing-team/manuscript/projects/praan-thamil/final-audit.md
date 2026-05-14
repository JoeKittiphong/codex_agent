Final Audit Report
- ขอบเขตที่ตรวจ: episode manuscript ทั้ง 36 ตอน + word-count gate ล่าสุด
- สถานะต้นฉบับที่ตรวจ: corrective audit หลังพบ prose authenticity regression และแก้ด้วย prose จริงครบทุกตอน
- วิธีนับจำนวนคำ: ใช้การตัดคำภาษาไทยด้วย `Intl.Segmenter('th', { granularity: 'word' })` แล้วนับเฉพาะ segment ที่เป็น `isWordLike`
- สรุปภาพรวม: รอบ count-lock ก่อนหน้าของ ep-09 ถึง ep-36 ที่มี template / meta-commentary ถูกลบออกแล้ว และทำ corrective rewrite/expand ใหม่ด้วยฉากจริง บทสนทนา action beat sensory detail และ interiority เฉพาะตอนจนผ่านครบ

## สถานะ word-count gate ล่าสุด
- passed: 36/36
- total Thai segmented words: 94203
- world-opening heuristic: PASS

## Count-lock corrective counts
- ep-01: 2720 PASS
- ep-02: 2632 PASS
- ep-03: 2605 PASS
- ep-04: 2605 PASS
- ep-05: 2600 PASS
- ep-06: 2602 PASS
- ep-07: 2636 PASS
- ep-08: 2600 PASS
- ep-09: 2610 PASS
- ep-10: 2634 PASS
- ep-11: 2636 PASS
- ep-12: 2693 PASS
- ep-13: 2652 PASS
- ep-14: 2659 PASS
- ep-15: 2609 PASS
- ep-16: 2616 PASS
- ep-17: 2632 PASS
- ep-18: 2609 PASS
- ep-19: 2630 PASS
- ep-20: 2601 PASS
- ep-21: 2620 PASS
- ep-22: 2610 PASS
- ep-23: 2613 PASS
- ep-24: 2610 PASS
- ep-25: 2611 PASS
- ep-26: 2605 PASS
- ep-27: 2610 PASS
- ep-28: 2604 PASS
- ep-29: 2603 PASS
- ep-30: 2600 PASS
- ep-31: 2601 PASS
- ep-32: 2600 PASS
- ep-33: 2601 PASS
- ep-34: 2617 PASS
- ep-35: 2666 PASS
- ep-36: 2451 PASS

## Corrective Action Applied
1. ไม่ใช้ scripted/template expansion เป็นข้อความซ้ำเพื่อดันจำนวนคำ
2. ขยายตอนด้วยเหตุการณ์จริง บทสนทนา action beat sensory detail และ interiority ที่เฉพาะกับตอนนั้น
3. ตรวจ word count รายตอนด้วย `check-episode-wordcount.mjs` หลังแก้
4. ตรวจ world-opening heuristic ของ ep-01 ซ้ำ

## สถานะหลัง audit
- polished draft complete / corrective count-lock rewrite complete
