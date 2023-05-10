var slideIndex = 0;
        var slides = document.getElementsByClassName("homeslides");
        var buttons = document.getElementsByClassName("slider-button");
        
        // Tampilkan slide pertama
        showSlide(slideIndex);
        
        // Fungsi untuk menampilkan slide
        function showSlide(index) {
            // Mengatur tampilan slide
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[index].style.display = "block";
            
            // Mengatur tampilan tombol navigasi
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].className = buttons[i].className.replace(" active", "");
            }
            buttons[index].className += " active";
        }
        
        // Fungsi untuk mengganti slide berikutnya
        function nextSlide() {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            showSlide(slideIndex);
        }
        
        // Menambahkan event listener pada tombol navigasi
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                slideIndex = Array.from(buttons).indexOf(this);
                showSlide(slideIndex);
            });
        }
        
        // Set interval untuk mengganti slide otomatis setiap 3 detik
        setInterval(nextSlide, 5000);

        // Menentukan baris yang akan diberi warna
		var b1 = document.getElementById("skills1");
		var b2 = document.getElementById("skills2");
		var b3 = document.getElementById("skills3")
        var b4 = document.getElementById("skills4")
        var b5 = document.getElementById("skills5");
		
		// Daftar warna yang akan digunakan ambil dari style
		var colors = ["merah", "kuning","hijau","biru", "ungu"];
		// Mengubah warna tiap 1 detik menggunakan setInterval
		setInterval(function () {
			b1.classList.toggle(colors[0]);
			b2.classList.toggle(colors[1]);
			b3.classList.toggle(colors[2]);
            b4.classList.toggle(colors[3]);
            b5.classList.toggle(colors[4]);
		}, 1000);

		// Menghapus warna setelah 1 detik berganti warna menggunakan setTimeout
		setTimeout(function () {
			b1.classList.remove(colors[0]);
			b2.classList.remove(colors[1]);
			b3.classList.remove(colors[2]);
            b4.classList.toggle(colors[3]);
            b5.classList.toggle(colors[4]);
		}, 1000);
