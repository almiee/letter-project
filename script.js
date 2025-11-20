const message = `hello amirah!\nBut wow, u're growing faster, huh? I wnt u to know that we've made a lot of progress now compared to the previous year.\n\nI hope u're alwys grateful for what u've achieved & what Allah SWT has given u.\n\n at this age, I hope u can alwys grow and become the best version of yourself! i hope u can be a good person and the reason others live. hope u're surrounded by good people around u. \n\nthis year, I hope my good prayers will be answered, by always maintaining my faith. i hope people around me are happy with me & grateful for me. i will try to focus on the beautiful things in the future. may Allah SWT. accompany my steps. \nButHAPPY BIRTHDAY ALMIEE.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

