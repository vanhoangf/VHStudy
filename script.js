document.addEventListener("DOMContentLoaded", function() {
    
    const xemchitietbtn = document.getElementById('xemchitiet-btn');
    const kh = document.getElementById('kh');
    
    // Biến lưu trạng thái: false = đang chạy ngang, true = đang xem lưới
    let trangthaixem = false;

    if (xemchitietbtn && kh) {
        xemchitietbtn.addEventListener('click', function() {
            if (!trangthaixem) {
                // CHUYỂN SANG CHẾ ĐỘ LƯỚI
                kh.classList.add('view-grid'); // Thêm class CSS grid
                xemchitietbtn.textContent = "Thu gọn";    // Đổi tên nút
                trangthaixem = true;
                
                // Hiệu ứng Fade nhẹ
                kh.style.opacity = 0;
                setTimeout(() => { kh.style.opacity = 1; }, 50);

            } else {
                // QUAY VỀ CHẾ ĐỘ CHẠY NGANG
                kh.classList.remove('view-grid'); // Xóa class CSS grid
                xemchitietbtn.textContent = "Xem chi tiết";  // Đổi tên nút
                trangthaixem = false;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. XỬ LÝ TAB (Nội dung / Giảng viên / Đánh giá) ---
    const nhanBtns = document.querySelectorAll('.nhan-btn');
    const nhannd = document.querySelectorAll('.nhan-nd');

    nhanBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            nhanBtns.forEach(b => b.classList.remove('active'));
            nhannd.forEach(c => c.style.display = 'none');
            btn.classList.add('active');
            if(nhannd[index]) {
                nhannd[index].style.display = 'block';
            }
        });
    });

    // --- 2. XỬ LÝ ACCORDION (Đóng mở chương + Xoay mũi tên) ---
    const chuongTitles = document.querySelectorAll('.chuong-title');

    chuongTitles.forEach(title => {
        title.addEventListener('click', () => {
            const dsbai = title.nextElementSibling;
            if (dsbai) {
                const currentDisplay = window.getComputedStyle(dsbai).display;

                if (currentDisplay === "none") {
                    dsbai.style.display = "block";
                    title.classList.add('mo');
                } else {
                    dsbai.style.display = "none";
                    title.classList.remove('mo');
                }
            }
        });
    });

    // --- 3. XỬ LÝ ĐỔI VIDEO KHI BẤM BÀI HỌC ---
    const dsBaiHoc = document.querySelectorAll('.dsbai li a');
    const chayVideo = document.querySelector('.chay-video source');
    const nhanVideo = document.querySelector('.chay-video');

    dsBaiHoc.forEach(bai => {
        bai.addEventListener('click', function(e) {
            e.preventDefault(); // Ngăn thẻ a tải lại trang

            // 3.1. Xử lý giao diện (Active)
            dsBaiHoc.forEach(b => b.classList.remove('dang-hoc')); // Bỏ active cũ
            this.classList.add('dang-hoc'); // Active bài vừa bấm

            // 3.2. Lấy đường dẫn video từ data-video
            const linkVideo = this.getAttribute('data-video');
            if (linkVideo) {
                // 3.3. Đổi source video
                chayVideo.setAttribute('src', linkVideo);
                
                // 3.4. Yêu cầu trình duyệt tải và phát video mới
                nhanVideo.load();
                nhanVideo.play();
                
                // 3.5. Cuộn trang mượt lên phần video (để người dùng đỡ phải kéo chuột)
                document.querySelector('.video').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        });
    });

    // --- 4. XỬ LÝ MODAL ĐĂNG NHẬP ---
    const btnDangKyHoc = document.getElementById('btn-dkhoc');
    const dangnhap = document.getElementById('dangnhap');
    const dong = document.querySelector('.dong');
    const tendangnhap = document.getElementById("tendangnhap");
    const matkhau = document.getElementById("mk");
    const btnDangNhap = document.getElementById("dn-btn");

    // Mở Modal khi bấm nút Đăng ký học
    if (btnDangKyHoc) {
        btnDangKyHoc.addEventListener('click', function(e) {
            e.preventDefault(); // Ngăn thẻ a chuyển trang
            dangnhap.style.display = 'flex'; // Hiện modal (dùng flex để căn giữa)
        });
    }

    // Đóng Modal khi bấm nút X
    if (dong) {
        dong.addEventListener('click', function() {
            dangnhap.style.display = 'none';
        });
    }

    // Đóng Modal khi bấm ra ngoài vùng trắng (vào vùng mờ)
    window.addEventListener('click', function(e) {
        if (e.target == dangnhap) {
            dangnhap.style.display = 'none';
        }
    });

//     if (btnDangNhap) {
//     btnDangNhap.addEventListener('click', function(e) {
//         // 1. Ngăn không cho form load lại trang
//         e.preventDefault(); 

//         // 2. Lấy GIÁ TRỊ (value) hiện tại trong ô input và xóa khoảng trắng thừa (.trim())
//         let username = tendn.value.trim();
//         let password = mk.value.trim();

//         // 3. Kiểm tra logic
//         if (username === "" && password === "")
//             alert("Tên đăng nhập và mật khẩu không được để trống!"); 
//         else if (username === "")
//             alert("Tên đăng nhập không được để trống!");
//         else if (password === "") 
//             alert("Mật khẩu không được để trống!");
//     });
// }

    if(btnDangNhap) {
        btnDangNhap.addEventListener('click', function(e) {
            e.preventDefault();
            let tendn = tendangnhap.value.trim()
            let mk = matkhau.value.trim()
            if (tendn === "" && mk ==="")
                alert("Tên đăng nhập và mật khẩu không được để trống!");
            else
                if (tendn === "")
                    alert("Tên đăng nhập không được để trống!");
                else
                    if (mk === "")
                        alert("Mật khẩu không được để trống!");
                    else
                    {
                        alert("Đăng nhập thành công!")
                        dangnhap.style.display="none"
                        tendangnhap.value = ""
                        matkhau.value = ""
                    }    
        })
    }
});