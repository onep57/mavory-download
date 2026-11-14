/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
   version : เลขรุ่นล่าสุด      date : วันที่อัปเดต (เว้นว่างได้)     notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
   url     : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
   label   : ข้อความบนปุ่มหลัก (เว้นได้)   alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
   manual  : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ")            */
window.MAVORY_RELEASE = {
  version: "9.9.0",
  date: "",
  notes: [],
  downloads: [
    { id: "windows",   name: "Windows",         kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง", ver: "v9.7.4",
      url: "https://drive.google.com/file/d/1p83QpNgvM2Y9TOmyDRZXaq2CdOnUxrzY/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
      alt: { url: "https://drive.google.com/file/d/1Z-NF2kqRutXV0L-eNeiasVCBbYoZ2F-n/view", label: "ดาวน์โหลดแบบพกพา (Portable)" }, manual: "" },
    { id: "macos",     name: "macOS",           kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications", ver: "v9.7.4",
      url: "https://drive.google.com/file/d/1NSn7cE-QPJBEKiFIWOdvOqwV6UCNyVhC/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
      alt: { url: "https://drive.google.com/file/d/12F6RP9HtUcsjcXDGqXlIJHOezNoHHkXl/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "" },
    { id: "android",   name: "Android",         kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v9.9.0",
      url: "https://drive.google.com/file/d/1pQswtWTh9hKzPAtHLqLWCCh8mttlamJU/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v9.9.0",
      url: "https://drive.google.com/file/d/1SBDj2s52zoL-r7g0OLWAz0jDi7KC5hZM/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
  ],
  flow: {
    full:  { version: "v1.51", url: "https://flow.google.com/shared/tool/fae4cc3c-309a-40b6-93d4-f374358d5f56" },
    trial: { version: "รุ่น t4.0", url: "https://flow.google.com/shared/tool/7f07a002-0ae9-4066-8ad2-1d540cf642f0" }
  },
  manuals: [
    { title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
    { title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
  ]
};
