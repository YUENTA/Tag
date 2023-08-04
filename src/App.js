// style css파일 가져오는 구문. 웹 페이지의 스타일을 정의
import './style.css';

// setupTagApp함수를 선언하고 내보냄. 
// 이 함수는 다른 파일에서 가져와서 사용할 수 있음
export function setupTagApp() {
  // addTagInput변수에는 addTag클래스를 가진 입력 필드를 가져옴
  const addTagInput = document.querySelector(".addTag");
  // tagContainer변수에는 .container__tag클래스를 가진 태그 표시 영역 가져옴
  const tagContainer = document.querySelector(".container__tag");

  // addTagInput에 키다운 이벤트 리스너 추가
  // enter키가 눌렸고 입력 필드의 값이 비어있지 않은 경우, addTag함수 호출하여
  // 태그를 추가하고 입력필드의 값을 지움
  addTagInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && addTagInput.value.trim() !== "") {
      addTag(addTagInput.value);
      addTagInput.value = "";
    }
  });

  // addTag함수는 입력된 텍스트 사용해 태그 생성&표시
  // 태그는 <span>요소로 생성되며 .tag클래스가 추가됨
  // 또한 태그 클릭 시 제거되도록 이벤트 리스너 추가되며, tagContainer에 태그 요소 추가됨
  // 이 부분은 이미지 표시와 무관
  function addTag(tagText) {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.textContent = tagText;


    tagElement.addEventListener("click", () => {
      tagElement.remove();
    });

    tagContainer.appendChild(tagElement);
  }
}


