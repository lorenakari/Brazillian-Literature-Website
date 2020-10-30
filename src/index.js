
      function askPortugueseSpeaker() {
        let speakPortuguese = prompt("Do you speak portuguese?");

        speakPortuguese = speakPortuguese.toLowerCase();
        speakPortuguese = speakPortuguese.trim();
        speakPortuguese = speakPortuguese.replace("sim", "yes");

        return speakPortuguese === "yes";
      }

      function askNonSpeaker() {
        let stillSee = prompt(
          "The original titles are in portuguese, do you still want to see them?"
        );

        stillSee = stillSee.toLowerCase();
        stillSee = stillSee.trim();

        return stillSee === "yes";
      }

      function seeOriginalTitles() {
        if (askPortugueseSpeaker() || askNonSpeaker()) {
          alert`Cool! These are the original titles of the books:`;

          let firstBook = document.querySelector(".firstBook");
          firstBook.innerHTML =
            "Memórias Póstumas de Brás Cubas, de Machado de Assis";

          let secondBook = document.querySelector(".secondBook");
          secondBook.innerHTML =
            "Triste Fim de Policarpo Quaresma, de Lima Barreto";

          let thirdBook = document.querySelector(".thirdBook");
          thirdBook.innerHTML = "Grande Sertão: Veredas, de Guimarães Rosa";
        } else {
          alert("That's okay!");
        }
      }

      let originalTitlesButton = document.querySelector("button");
      originalTitlesButton.addEventListener("click", seeOriginalTitles);