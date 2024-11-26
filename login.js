document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === "user" && password === "1234") {
      // หากถูกต้อง เปลี่ยนไปหน้าหลัก
      window.location.href = "frist.html"; // เปลี่ยนเส้นทางไปยังหน้าหลัก
    } else {
      // หากผิดพลาด แสดงข้อความ
      document.getElementById("error-message").textContent =
        "Invalid username or password!";
    }
  });
  