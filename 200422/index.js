

$('.filtering').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: true,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
})

$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false
  });

//  video header click 
function lightbox_open() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    let lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}


const handleSendEmail = ()=>{
    const inputEmail = document.getElementById('input-email');
    const inputTextarea = document.getElementById('input-textarea');

    const api = "https://61cace77194ffe001778895e.mockapi.io/usr";

    if(inputEmail.value == "") return alert('Bạn chưa nhập Email...')
    if(!inputTextarea.value) return alert('Bạn chưa nhập message...') 
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))
    {
         async function getUser() {
            try {
            const response = await axios.post(api, {
                email: inputEmail.value,
                comment: inputTextarea.value
            } )
            } catch (error) {
            console.error(error);
            }
        }
        getUser();
        alert("email đã đc gửi.")
        inputEmail.value = ''
        console.log(inputEmail.value);
        inputTextarea.value = ''
    }else{
        alert("Email không hợp lệ!")
    }
}
