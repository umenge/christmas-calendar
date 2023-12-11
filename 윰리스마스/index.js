// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "이유민 존나 최고다!" },
  { "number": 2, "message": "푸하하 이거 좀 잼난다." },
  { "number": 3, "message": "개어렵다!" },
  { "number": 4, "message": "벌써 12월이라니;;;" },
  { "number": 5, "message": "크크루삥뽕빵~" },
  { "number": 6, "message": "이 부분이 제일 재밋네요 ㅋㅋ" },
  { "number": 7, "message": "딸기가 좋아 딸기가 좋아 딸기케이크 먹고싶다" },
  { "number": 8, "message": "CSS랑 JS차이를 아직 모르겠음;;" },
  { "number": 9, "message": "킥킥 유후" },
  { "number": 10, "message": "화이탱이얌!!" },
  { "number": 11, "message": "넌 할 수 있어 라고 말해주쉐요" },
  { "number": 12, "message": "개발자 ㅋㅋ 그거 어캐 하는건데?." },
  { "number": 13, "message": "산타 텔미..!" },
  { "number": 14, "message": "근데 이거 폰트는 기여움" },
  { "number": 15, "message": "근데 정신 나갈 것 같움" },
  { "number": 16, "message": "이거바라 카피바라" },
  { "number": 17, "message": "배고푸다!" },
  { "number": 18, "message": "비오니까 개갓이 추워지다" },
  { "number": 19, "message": "돈이 뭐라고!!!" },
  { "number": 20, "message": "산타할아버지 저 돈 많이 벌게 해주세요" },
  { "number": 21, "message": "와 이거 어캐햇누 진짜;" },
  { "number": 22, "message": "무료강의 개꿀띠" },
  { "number": 23, "message": "전 크리스마스 맞이로 꼬치 오마카세 먹으러가연" },
  { "number": 24, "message": "모두모두 행복 해져라아아아아앙~" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});