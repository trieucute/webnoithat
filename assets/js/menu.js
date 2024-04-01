window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
 
    if (window.scrollY > 100) {
        header.style.position = 'fixed';
        header.style.top = '0'; // Giữ header ở vị trí trên cùng của cửa sổ
        header.style.zIndex = '1000';
        header.style.transition = 'all 0.8s ease'; // Sử dụng transition để tạo hiệu ứng hạ xuống từ từ
        // header.style.transform = 'translateY(0)'; // Dịch chuyển header lên trên
    } else {
        header.style.position = ''; 
        header.style.top = ''; // Đặt lại vị trí của header

    }
});



// menu mobile
const menushow=()=>{
    const navbarToggler= document.querySelector('.navbar-toggler')
    const navbarCollapse= document.querySelector('.navbar-collapse');
    const background= document.querySelector('.background');
    const iconX= document.querySelector('.icon-x--menu')
    navbarToggler.addEventListener('click', ()=>{
      navbarCollapse.classList.add('show')
      background.classList.add('active')
    })
    
    background.addEventListener('click', () => {
    navbarCollapse.classList.remove('show')
    background.classList.remove('active')
    
    })
    iconX.addEventListener('click',()=>{
    navbarCollapse.classList.remove('show')
    background.classList.remove('active')
    })
  }
  menushow()


  const dropdowns= ()=>{

    // if (window.innerWidth >= 992) {
// Lấy danh sách tất cả các icondrop trong trang
var icondrops = document.querySelectorAll('.icondrop');

// Duyệt qua từng icondrop
icondrops.forEach(function(icondrop) {
  icondrop.addEventListener('click', function(e) {
    e.preventDefault()
    var navLink = icondrop.closest('.nav-link');
    
    // Sử dụng children để lấy tất cả các phần tử con trong .nav-link
    var icon = navLink.children;
    console.log(dropdownMenu);
    // Tìm đến dropdownMenu liên quan
    var dropdownMenu = icondrop.closest('.nav-link').nextElementSibling;

    // Lấy danh sách tất cả các dropdownMenu trong trang
    var allDropdownMenus = document.querySelectorAll('.dropdownMenu');

    // Duyệt qua từng dropdownMenu trong danh sách tất cả các dropdownMenu
    allDropdownMenus.forEach(function(menu) {
      // Kiểm tra xem dropdownMenu đang xét có giống dropdownMenu của icondrop đã click hay không
      if (menu === dropdownMenu) {
        // Nếu giống, thêm hoặc xóa class active tùy thuộc vào trạng thái hiện tại
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          icondrop.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
          menu.classList.add('active');
          icondrop.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
      } else {
        // Nếu không giống, xóa class active và thiết lập biểu tượng ban đầu (fa-chevron-down)
        menu.classList.remove('active');
        var associatedIconDrop = menu.previousElementSibling.querySelector('.icondrop');
        associatedIconDrop.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
      }
    });
  });
});
    // }

  }

  dropdowns()