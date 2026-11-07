/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
   version : เลขรุ่นล่าสุด      date : วันที่อัปเดต (เว้นว่างได้)     notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
   url     : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
   label   : ข้อความบนปุ่มหลัก (เว้นได้)   alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
   manual  : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ")            */
window.MAVORY_RELEASE = {
  version: "6.6.7",
  date: "",
  notes: [],
  downloads: [
    { id: "windows",   name: "Windows",         kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง", ver: "รุ่นล่าสุด",
      url: "https://drive.google.com/file/d/1KdCBmmM-GlmiXqEKZYsY2sbpZzae-35_/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
      alt: { url: "https://drive.google.com/file/d/1EGJYxfOBKhRcj9k3tYmfK4sRW666WKSx/view", label: "ดาวน์โหลดแบบพกพา (Portable)" }, manual: "" },
    { id: "macos",     name: "macOS",           kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini)", ver: "รุ่นล่าสุด",
      url: "https://drive.google.com/file/d/1aRScNrOxaP6Sd_zrNdBfxajJs_h5v3oo/view", manual: "" },
    { id: "android",   name: "Android",         kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v6.2.2",
      url: "https://drive.google.com/file/d/1M5BVRkQlr5z7DK5Bcfxe1Si9KVTAZALL/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v6.6.7",
      url: "https://drive.google.com/file/d/1-wXxvL5u7tFdq7UEvg6M7xJCulHFsQBu/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
  ],
  manuals: [
    { title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
    { title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
    { title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
  ]
};
