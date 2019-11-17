// SELECT CAROUSEL
const carousel = document.querySelector(".carousel");

// SELECT NEXT BUTTON
const nextButton = document.querySelector(".right-btn");

// SELECT LEFT BUTTON
const previousButton = document.querySelector(".left-btn");

// SELECT THE NAV
const nav = document.querySelector(".nav");

// SELECT ALL THE DOTS
const dots = [...nav.children];

// SELECT ALL THE SLIDES INSIDE THE CAROUSEL
const slides = [...carousel.children];

// CALCULATE THE SLIDE WIDTH
let slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)
// POSITION THE SLIDES HORIZONTALY
function positionSlides(slides) {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + "px";
    }
}

positionSlides(slides);
nextButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel, currentSlide, nextSlide);
    hideButton(nextSlide, slides);
    moveToDot(nextSlide, slides, nav, dots);
});

// ON LEFT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE RIGHT
previousButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(carousel, currentSlide, previousSlide);
    hideButton(previousSlide, slides);
    moveToDot(previousSlide, slides, nav, dots);
});

// ON DOT CLICK
nav.addEventListener("click", function (e) {

    // if we didn't click on a dot, we exit
    if (e.target === nav) return;

    // SELECT THE CLICKED DOT
    const targetDot = e.target;

    // SELECT THE CURRENT DOT
    const currentDot = nav.querySelector(".active");

    // SELECT THE CURRENT SLIDE
    const currentSlide = carousel.querySelector(".active");

    // find the index of the dot, so we can target the right slide
    let targetDotIndex = findIndex(targetDot, dots);

    // SELECT THE TARGET SLIDE
    const targetSlide = slides[targetDotIndex];

    moveToSlide(carousel, currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    hideButton(targetSlide, slides);
})

// MOVE TO DOT
function moveToDot(targetSlide, slides, nav, dots) {
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = nav.querySelector(".active");
    const targetDot = dots[slideIndex];
    toggleActive(currentDot, targetDot);
}
// MOVE TO SLIDE
function moveToSlide(carousel, currentSlide, targetSlide) {
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);
}

// Toggle ACTIVE CLASS
function toggleActive(current, target) {
    current.classList.remove("active");
    target.classList.add("active");
}

// HIDE BUTTON
function hideButton(targetSlide, slides) {
    // If the target slide is the first slide the previous button must be hidden
    // and the next button must be shown
    if (targetSlide === slides[0]) {
        previousButton.classList.add("hide");
        nextButton.classList.remove("hide");
    } else if (targetSlide === slides[slides.length - 1]) {
        // If the target slide is the last slide the next button must be hidden
        // and the previous button must be shown
        nextButton.classList.add("hide");
        previousButton.classList.remove("hide");
    } else {
        // if none of the above is true, we show both the next and prevoius button
        previousButton.classList.remove("hide");
        nextButton.classList.remove("hide");
    }
}

// FIND THE INDEX OF AN ITEM, INSIDE AN ARRAY OF ITEMS
function findIndex(item, items) {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}












//Show products

const product = [
    { id: 21, price: 80000, image: "images/nghin_le_mot_dem.jpg", title: "Nghìn Lẻ Một Đêm II" },
    { id: 12, price: 40000, image: "images/giong_to.jpg", title: "Giông Tố" },
    { id: 4, price: 100000, image: "images/gulliver.jpg", title: "Gulliver Phiêu Lưu Kí" },
    { id: 14, price: 75000, image: "images/hai_so_phan.jpg", title: "Hai Số Phận" },
    { id: 15, price: 150000, image: "images/hai_van_dam_duoi_day_bien.jpg", title: "Hai Vạn Dặm Dưới Đáy Biển" },
    { id: 33, price: 72000, image: "images/trong_gia_dinh.jpg", title: "Trong Gia Đình" },
    { id: 34, price: 113000, image: "images/truyen_co_grimm.jpg", title: "Truyện Cổ Grimm" },
    { id: 35, price: 68000, image: "images/tup_leu_bac_top.jpg", title: "Túp Lều Bác Tom" },
    { id: 18, price: 45000, image: "images/xu_tuyet.jpg", title: "Xứ Tuyết" },
    { id: 37, price: 38000, image: "images/zoo.jpg", title: "Zoo" },
    { id: 25, price: 67000, image: "images/thu_toi.jpg", title: "Thú Tội" },
    { id: 16, price: 1800000, image: "images/harry_potter.png", title: "Harry Potter" },
    { id: 28, price: 60000, image: "images/hoa_tulip_den.jpg", title: "Hoa Tullip Đen" },
    { id: 36, price: 66000, image: "images/khi_hoi_tho_hoa_thinh_khong.jpg", title: "Khi Hơi Thở Hóa Thinh Không" },
    { id: 11, price: 78000, image: "images/ao_da.jpg", title: "Ảo dạ" },
    { id: 27, price: 92000, image: "images/ruoi_trau.jpg", title: "Ruồi Trâu" },
    { id: 17, price: 48000, image: "images/suoi_nguoi.jpg", title: "Suối Nguồn" },
    { id: 29, price: 770000, image: "images/ba_chang_ngoc.jpg", title: "Ba Chàng Ngốc" },
    { id: 3, price: 118000, image: "images/bach_da_hanh.jpg", title: "Bạch Dạ Hành" },
    { id: 2, price: 64000, image: "images/tat_den.jpg", title: "Tắt Đèn" },
    { id: 7, price: 120000, image: "images/chua_te_nhung_chien_nhan.jpg", title: "Chúa Tể Của Những Chiếc Nhẫn" },
    { id: 8, price: 88000, image: "images/Dat_mau_sicily.jpg", title: "Đất Máu Sicily" },
    { id: 9, price: 33000, image: "images/den_khong_hat_bong.jpg", title: "Đèn Không Hắt Bóng" },
    { id: 13, price: 56000, image: "images/bat_tre_dong_xanh.jpg", title: "Bắt Trẻ Đồng Xanh" },
    { id: 40, price: 57000, image: "images/bi_mat_cua_naoko.jpg", title: "Bí Mật Của Naoko" },
    { id: 39, price: 99000, image: "images/canh_buom_do_tham.jpg", title: "Cánh Buồm Đỏ Thắm" },
    { id: 10, price: 77000, image: "images/doi_gio_hu.jpg", title: "Đồi Gió Hú" },
    { id: 1, price: 81000, image: "images/giet_con_chim_nhai.jpg", title: "Giết Con Chim Nhại" },
    { id: 30, price: 45000, image: "images/tram_nam_co_don.jpg", title: "Trăm Năm Cô Đơn" },
    { id: 31, price: 65000, image: "images/tran_trui_giua_bay_soi.jpg", title: "Trần Trụi Giữa Bầy Sói" },
    { id: 23, price: 54000, image: "images/tro_ven_eden.jpg", title: "Trở Về Eden" },
    { id: 6, price: 100000, image: "images/bo_gia.jpg", title: "Bố Già" },
    { id: 5, price: 90000, image: "images/chien_binh_cau_vong.jpg", title: "Chiến Binh Cầu Vồng" },
    { id: 19, price: 67000, image: "images/khong_gia_dinh.jpg", title: "Không Gia Đình" },
    { id: 20, price: 78000, image: "images/nghin_le_1_dem.jpg", title: "Nghìn Lẻ Một Đêm" },
    { id: 22, price: 85000, image: "images/nguoi_dua_dieu.jpg", title: "Người Đua Diều" },
    { id: 32, price: 55000, image: "images/nguoi_nam_cham.jpg", title: "Người Nam Châm" },
    { id: 24, price: 88000, image: "images/nguoi_truyen_ki_uc.jpg", title: "Người Truyền Kí Ức" },
    { id: 38, price: 120000, image: "images/nhung_nguoi_khon_kho.jpg", title: "Những Người Khốn Khổ" },
    { id: 26, price: 118000, image: "images/rung_sau_tham_tham.jpg", title: "Rừng Sâu Thăm Thẳm    " },
]

const showNav = document.querySelector(".header_show-nav")
const line = document.querySelectorAll(".header_show-nav div");
showNav.addEventListener("click", () => {
    document.querySelector(".header_nav-links ul").classList.toggle("nav-active");
    document.querySelector(".header_nav-links ul").style.display = "flex";
    showNav.classList.toggle("active");


})

var currentPage = 1;
var perPage = 8;
var start = (currentPage - 1) * perPage;
var end = currentPage * perPage;
const totalPage = Math.ceil(product.length / perPage);
const page = document.getElementsByClassName("paging-number");
function countPage() {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}
function activeChangePage() {
    if (currentPage == 1) {
        document.querySelector(".products_paging .btn-prev").classList.add("active")
    } else { document.querySelector(".products_paging .btn-prev").classList.remove("active") }
    if (currentPage == totalPage) {
        document.querySelector(".products_paging .btn-next").classList.add("active")
    } else { document.querySelector(".products_paging .btn-next").classList.remove("active") }
    for (let i = 0; i < page.length; i++) {
        page[i].classList.remove("active");
    }
    page[currentPage - 1].classList.add("active")
}

function showProducts() {
    let html = '';
    for (let i = start; i < end; i++) {
        html += `<div class="products-items_product">
        <img src="${product[i].image}" alt="">
        <div class="products-items_info">
            <p class="name">${product[i].title}</p>
            <p class="price"><span>${product[i].price}</span><i class="fas fa-shopping-cart"></i></p>
        </div>
    </div>`
        if (i == product.length - 1) {
            document.querySelector('.products-items').innerHTML = html;
            // addToCartButtons = document.getElementsByClassName('fa-shopping-cart')
            // for (var j = 0; j < addToCartButtons.length; j++) {
            //     var button = addToCartButtons[i];
            //     console.log(button)
            //     button.addEventListener('click', addToCartClicked)
            // }
            return;
        }
    }

    document.querySelector(".products-items").innerHTML = html;
    addToCartButtons = document.getElementsByClassName('fa-shopping-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        console.log(button)
        button.addEventListener('click', addToCartClicked)
    }
}
showProducts();
function nextPage() {
    document.querySelector(".products_paging .btn-next").addEventListener("click", () => {
        currentPage += 1;
        if (currentPage > totalPage) {
            currentPage = totalPage;
        }
        countPage();
        activeChangePage();
        showProducts();
    })
}
function prevPage() {
    document.querySelector(".products_paging .btn-prev").addEventListener("click", () => {
        currentPage -= 1;
        if (currentPage < 1) {
            currentPage = 1;
        }
        countPage();
        activeChangePage();
        showProducts();
    })
}
nextPage();
prevPage();
showNumberPage();
function showNumberPage() {
    html = '';
    for (let i = 1; i <= totalPage; i++) {
        if (i == 1) {
            html += `<li class="paging-number active">${i}</li>`
        } else {
            html += `<li class="paging-number">${i}</li>`
        }
    }
    document.querySelector(".number-page ul").innerHTML = html;
}
function changePage() {
    for (let i = 0; i < page.length; i++) {
        page[i].addEventListener("click", () => {

            currentPage = i + 1
            countPage();
            showProducts();
            for (let i = 0; i < page.length; i++) {
                page[i].classList.remove("active")
            }
            activeChangePage();

        })
    }

    // ready();
}
changePage();


//Shopping products
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {

var addToCartButtons;
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

addToCartButtons = document.getElementsByClassName('fa-shopping-cart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    console.log(button)
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('cart_btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByTagName("img")[0].src;
    addItemToCart(title, price, imageSrc);
    updatePriceTotal();
}




function updatePriceTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var oneItem = cartItemContainer.getElementsByClassName('one-item')
    var total = 0
    for (var i = 0; i < oneItem.length; i++) {
        var item = oneItem[i]
        var priceElement = item.getElementsByClassName('cart-price')[0]
        var quantityElement = item.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText)
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = `${displayNumber(total)} VND`
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatePriceTotal()
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatePriceTotal()
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updatePriceTotal()
}

function addItemToCart(title, price, imageSrc) {
    var oneItem = document.createElement("div");
    oneItem.classList.add("one-item");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return;
        }
    }
    oneItem.innerHTML = `
        <div class="cart-item ">
            <img class="cart-item-image" src="${imageSrc}" width="80" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price ">${price} VND</span>
        <div class="cart-quantity ">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button">XÓA SẢN PHẨM</button>
        
    </div>`
    cartItems.append(oneItem);
    oneItem.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    oneItem.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}






function displayNumber(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}