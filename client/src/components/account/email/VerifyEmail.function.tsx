
const hideEmailHandler: (email: string) => string = (email: string) => {
    // Check if the email is shorter than 11 characters.
    if (email.length <= 8) {
      return email;
    }

    // Calculate the number of characters to hide in the middle.
    const middleCharactersToHide = email.length - 10;

    // Calculate the number of asterisks needed for hiding.
    const hiddenPart = "*".repeat(middleCharactersToHide);

    // Split the email into the visible parts (first 5, last 5) and the hidden part.
    const firstVisiblePart = email.slice(0, 4);
    const lastVisiblePart = email.slice(-10);

    // Concatenate the visible parts and the hidden part.
    const hiddenEmail = firstVisiblePart + hiddenPart + lastVisiblePart;

    return hiddenEmail;
  };



  export {hideEmailHandler}