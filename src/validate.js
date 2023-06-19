export const validate = (e, titleRef, bodyRef) => {
  if (e.target.elements.title.value === "") {
    alert("타이틀을 입력해 주세요");
    titleRef.current.focus();
    titleRef.current.classList.add("error");
    return false;
  }
  if (e.target.elements.body.value === "") {
    alert("내용을 입력해 주세요");
    bodyRef.current.focus();
    bodyRef.current.classList.add("error");
    return false;
  }
  return true;
};
