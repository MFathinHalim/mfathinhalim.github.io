document.addEventListener('DOMContentLoaded', () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      var navbar = document.getElementById("navbar");

      if (prevScrollpos > currentScrollPos) {
        // Scroll ke atas, tampilkan navbar khusus HP
        navbar.style.top = "10px";
      } else {
        // Scroll ke n sembunyikan navbar khusus HP
        navbar.style.top = "-100px"; // Ubah sesuai dengan tinggi navbar
      }
      prevScrollpos = currentScrollPos;
    };
    const socialElements = document.querySelectorAll(".social");
    const isMobile = window.innerWidth <= 639;
    /*const quotes = document.getElementById("quotes");
  
    const arrayQuote = [
        '"Everyone has beautiful dreams, but not everyone has an easy path" <br> ― M.Fathin Halim',
        '"Sometimes fiction makes more sense than reality" <br> ― M.Fathin Halim',
        '"The difference between ordinary and extraordinary is that little extra." <br> ― Jimmy Johnson',
        '"It is during our darkest moments that we must focus to see the light." <br> ― Aristotle',
        '"Believe you can and you\'re halfway there." <br> ― Theodore Roosevelt',
        '"The mind is everything. What you think you become." <br> ― Buddha',
        '"The journey of a thousand miles begins with a single step." <br> ― Lao Tzu',
        '"Failure is an opportunity to start again smarter." <br> - Henry Ford',
        '"The only way to do great work is to love what you do." <br> - Steve Jobs',
        '"The future belongs to those who prepare for it today." <br> - Abraham Lincoln',
        '"Courage is doing what youre afraid of." <br> - Mark Twain',
        '"The most important thing in life is learning how to give." <br> - Leo Tolstoy',
        '"The only person you were destined to be is yourself." <br> - Ralph Waldo Emerson',
      ];
  
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * arrayQuote.length);
      return arrayQuote[randomIndex];
    }
    const element = document.getElementById("loading");

        quotes.innerHTML = getRandomQuote();
        setTimeout(() => {
        element.style.opacity = 0;
    
        setTimeout(() => {
          element.parentNode.removeChild(element);

            element.style.display = "none";
        }, 2000);
        }, 1000);*/
      
    
    socialElements.forEach(socialElement => {
      const socialData = socialElement.dataset.social;
      const originalHTML = socialElement.innerHTML;
      if (isMobile && !originalHTML.includes(socialData)) {
        socialElement.innerHTML = isMobile ? originalHTML + `${socialData} ` : originalHTML;
      }
      
  
      if (!isMobile) {
        socialElement.innerHTML = originalHTML.replace(socialData, "");
  
        socialElement.addEventListener("mouseover", () => {
          socialElement.innerHTML = originalHTML + `${socialData} `;
        });
  
        socialElement.addEventListener("mouseout", () => {
          socialElement.innerHTML = originalHTML;
        });
      }
    });
  
    AOS.init();
    function removeCarElementsOnMobile() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        const carElement = document.getElementById('car');
        const cursorElement = document.getElementById('cursor'); // Use a descriptive variable name
        const cursor2Element = document.getElementById('cursor2');
        
        if (carElement) {
          carElement.parentNode.removeChild(carElement);
        }
    
        if (cursorElement) {
          cursorElement.parentNode.removeChild(cursorElement); // Remove cursorElement
        }
    
        if (cursor2Element) {
          cursor2Element.parentNode.removeChild(cursor2Element); // Remove cursor2Element
        }
      }
    }
    
    window.addEventListener('load', removeCarElementsOnMobile);
    window.addEventListener('resize', removeCarElementsOnMobile);
  
  
    if (!isMobile) {
      //const links = document.querySelectorAll("a");
      //const notLinks = document.querySelectorAll("strong, .underlinee, #Name")
      //var cursor = document.getElementById("cursor");
      var c2 = document.getElementById("cursor2");
  
      /*links.forEach(link => {
        link.addEventListener("mouseover", () => {
          document.querySelector("body").style = "cursor: pointer !important;"
          cursor.classList.add("custom-cursor--link");
        });
  
        link.addEventListener("mouseout", () => {
          cursor.classList.remove("custom-cursor--link");
          document.querySelector("body").style = "cursor: none;"

        });
      });

      notLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
          cursor.classList.add("custom-cursor--link");
        });
  
        link.addEventListener("mouseout", () => {
          cursor.classList.remove("custom-cursor--link");
        });
      });
  
      document.addEventListener("mousedown", () => {
        cursor.classList.add("custom-cursor--link");
      });
  
      document.addEventListener("mouseup", () => {
        cursor.classList.remove("custom-cursor--link");
      });*/
  
      window.onmousemove = function (e) {
        //cursor.style.left = e.clientX + "px";
        //cursor.style.top = e.clientY + "px";
        c2.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, {duration: 3000, fill: "forwards"});
    };
    
  
      function resetScale() {
        scaleValue = 0.3;
      }
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.getElementById("Name").onmouseenter = (event) => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    let iteration = 0;
    const targetValue = event.target.dataset.value; // Cache target value
    const originalWidth = event.target.offsetWidth; // Capture initial width

    clearInterval(interval);

    interval = setInterval(() => {
      let updatedText = targetValue.split("").map((letter, index) => {
        if (index < iteration) {
          return letter; // Preserve revealed letters
        }

        // Randomize within the target value length
        const randomIndex = Math.floor(Math.random() * targetValue.length);
        return targetValue[randomIndex];
      }).join("");

      // Prevent overflow by truncating if necessary
      if (updatedText.length > targetValue.length) {
        updatedText = updatedText.substring(0, targetValue.length);
      }

      event.target.innerText = updatedText;

      // Set width explicitly to maintain original size
      event.target.style.width = originalWidth + "px";

      if (iteration >= targetValue.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }
};

    }

  });
  