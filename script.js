const xemchitietbtn = document.getElementById('xemchitiet-btn');
const kh = document.getElementById('kh');
    
let trangthaixem = false;

if (xemchitietbtn && kh) {
    xemchitietbtn.addEventListener('click', function() {
        if (!trangthaixem) {
            kh.classList.add('view-grid');
            xemchitietbtn.textContent = "Thu gọn";
            trangthaixem = true;
                kh.style.opacity = 0;
            setTimeout(() => { kh.style.opacity = 1; }, 50);
        } else {
            kh.classList.remove('view-grid');
            xemchitietbtn.textContent = "Xem chi tiết";
            trangthaixem = false;
        }
    });
}

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

const dsBaiHoc = document.querySelectorAll('.dsbai li a');
const chayVideo = document.querySelector('.chay-video source');
const nhanVideo = document.querySelector('.chay-video');

dsBaiHoc.forEach(bai => {
    bai.addEventListener('click', function(e) {
        e.preventDefault();
        dsBaiHoc.forEach(b => b.classList.remove('dang-hoc'));
        this.classList.add('dang-hoc');
        const linkVideo = this.getAttribute('data-video');
        if (linkVideo) {
            chayVideo.setAttribute('src', linkVideo);
            nhanVideo.load();
            nhanVideo.play();
            document.querySelector('.video').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    });
});

const btnDangKyHoc = document.getElementById('btn-dkhoc');
const dangnhap = document.getElementById('dangnhap');
const dong = document.querySelector('.dong');
const tendangnhap = document.getElementById("tendangnhap");
const matkhau = document.getElementById("mk");
const btnDangNhap = document.getElementById("dn-btn");

if (btnDangKyHoc) {
    btnDangKyHoc.addEventListener('click', function() {
        dangnhap.style.display = 'flex';
    });
}

if (dong) {
    dong.addEventListener('click', function() {
        dangnhap.style.display = 'none';
    });
}

window.addEventListener('click', function(e) {
    if (e.target == dangnhap) {
        dangnhap.style.display = 'none';
    }
});

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