/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
   version : เลขรุ่นล่าสุด      date : วันที่อัปเดต (เว้นว่างได้)     notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
   url     : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
   label   : ข้อความบนปุ่มหลัก (เว้นได้)   alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
   manual  : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ")            */
window.MAVORY_RELEASE = {
  version: "8.8.1",
  date: "",
  notes: [],
  downloads: [
    { id: "windows",   name: "Windows",         kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง", ver: "v7.4.0",
      url: "https://drive.google.com/file/d/1HFU69v9EuZhzQt0sWVCX-ZeNJioeIgL3/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
      alt: { url: "https://drive.google.com/file/d/1Nh1k6jM6Wr-My7arZ1W9cPPLi1hyKCyh/view", label: "ดาวน์โหลดแบบพกพา (Portable)" }, manual: "" },
    { id: "macos",     name: "macOS",           kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications", ver: "v7.4.0",
      url: "https://drive.google.com/file/d/1xUBHCahQT9RQWa_vcHlFQHX-9ei0IX9k/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
      alt: { url: "https://drive.google.com/file/d/1WvwTr1fatJkCllIhEUDJ3DRSmNvl0X-c/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "" },
    { id: "android",   name: "Android",         kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v8.8.1",
      url: "https://drive.google.com/file/d/145v55IE0WZgae3ec1VKYB3vfhkbZKIsm/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v8.8.1",
      url: "https://drive.google.com/file/d/1Wg6VBfHH_PeEknJYHW_VhuVOGx3dpXse/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
  ],
  flow: {
    full:  { version: "v1.49", url: "https://flow.google.com/shared/tool/71a9d800-b199-45a9-ad88-782ae144a888" },
    trial: { version: "รุ่น t3.0", url: "https://flow.google.com/shared/tool/9137599e-e987-4a07-b66a-dc6b90a02a7b" }
  },
  manuals: [
    { title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
    { title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
  ]
};
