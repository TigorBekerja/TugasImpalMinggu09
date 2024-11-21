function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];


	let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2>OTP anda adalah : </h2>${otp_val}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vandikatgr@gmail.com",
        Password : "B7BCE27DE8A5530A1A4A562A47E25A9F14F0",
        To : email.value,
        From : "vandikatgr@gmail.com",
        Subject : "This is the subject",
        Body : emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP telah dikirim ke alamat email : " + email.value);
    
    
                otpverify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');
    
    
                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email terverifikasi...");
                    }
                    else {
                        alert("OTP salah");
                    }
                })
            }
        }
    );
}
