/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
   version : เลขรุ่นล่าสุด      date : วันที่อัปเดต (เว้นว่างได้)     notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
   url     : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
   label   : ข้อความบนปุ่มหลัก (เว้นได้)   alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
   manual  : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ")            */
window.MAVORY_RELEASE = {
  version: "10.6.6",
  date: "",
  notes: [],
  downloads: [
    { id: "windows",   name: "Windows",         kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง", ver: "v10.1.7",
      url: "https://drive.google.com/file/d/1GXlERwl_LRKk4XTw6tpN_0QWKsmYOoIG/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
      alt: { url: "https://drive.google.com/file/d/14y2SnU_RVfYTTM6MMq5pjc1YGHt_0xng/view", label: "ดาวน์โหลดแบบพกพา (Portable)" }, manual: "" },
    { id: "macos",     name: "macOS",           kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications", ver: "v10.1.7",
      url: "https://drive.google.com/file/d/1-CNbqZOoRey8nN-SSpFrVCe1CzxPH1TB/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
      alt: { url: "https://drive.google.com/file/d/1QVj9FbD0t_q65NZc91ACi6lodY101g8X/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "" },
    { id: "android",   name: "Android",         kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v10.6.6",
      url: "https://drive.google.com/file/d/1VvmTvssvCOEJnQpA-inZgPi51wEueOWy/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v10.6.6",
      url: "https://drive.google.com/file/d/1RLu50swHKMAOxvBofsduz16aV2KlSTm3/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
  ],
  flow: {
    full:  { version: "v1.55", url: "https://flow.google.com/shared/tool/714984e5-7481-4e37-ac11-3daab28b10d6" },
    trial: { version: "รุ่น t5.3", url: "https://flow.google.com/shared/tool/248c45a3-a744-4438-96ea-43819968248b" }
  },
  manuals: [
    { title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
    { title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
  ]
};
