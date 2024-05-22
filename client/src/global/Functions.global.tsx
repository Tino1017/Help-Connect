
type ColorToRender = string | null;
function greetUserBasedOnTime(name: string | undefined): string {
  const time: number = new Date().getHours();
  if (!name) {
    return "Loading..";
  }
  if (time < 12) {
    return `🌄 Good morning ${name}`;
  } else if (time < 18) {
    return `🕑 Good afternoon ${name}`;
  } else {
    return `🌃 Good evening ${name}`;
  }
}

function isStudentOrLecturer(
  colorVisibility: ColorToRender,
  bg_text: "bg" | "text"
) {
  return `${bg_text}-slate-${colorVisibility}`;
}




export { greetUserBasedOnTime, isStudentOrLecturer };
