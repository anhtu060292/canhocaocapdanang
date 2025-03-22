var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

 // Hàm để mở/đóng menu
 function toggleMenu() {
  var menu = document.getElementById('menu'); // Lấy đối tượng menu
  // Thêm hoặc bỏ lớp 'active' để hiển thị/ẩn menu
  menu.classList.toggle('active');
}
// Hàm để đóng menu nếu nhấn ra ngoài menu
document.addEventListener('click', function(event) {
  var menu = document.getElementById('menu');
  var menuButton = document.querySelector('.menu-btn');

  // Kiểm tra nếu người dùng nhấn ngoài menu và nút hamburger
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove('active');
  }
});