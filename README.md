## 실행 방법

1. git repository 에서 Code 버튼을 클릭하여 HTTPS url 복사
2. git bash 를 열어 `git clone <repo-url>` 입력
3. github 계정으로 토큰 발급
4. clone 한 프로젝트에서 .env 파일을 생성하고 아래 코드 작성

```
REACT_APP_AUTHORIZATION = "<your-token>"
```

5. VSCode 의 터미널에서 `npm install`, `npm start` 명령어로 dev 환경에서 실행

## 프로젝트 구조

```
📦src
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂contexts
 ┣ 📂hooks
 ┣ 📂layout
 ┣ 📂pages
 ┣ 📂service
 ┣ 📂styles
 ┣ 📂types
 ┗ 📂utils
```

## Best Practice

### 토큰 관리

- 환경변수와 class 를 사용하여 axios 인스턴스를 생성하도록 했습니다.

### 5번째 셀마다 광고 표시

- List 컴포넌트에서 `map()` 을 사용해 데이터를 뿌려줄 때, JSX 에서 조건을 주어 index 값에 따라 Ad 컴포넌트를 삽입하도록 했습니다.

### 데이터 요청 및 관리, 전달

- IssueService 에서 API 관련 메서드가 정의된 class 를 export 하였습니다.
- App.tsx 에서 인스턴스를 생성해 `ApiProvider` context 에 전달합니다.
- alertStatus, statusDesc 는 status 코드에 따른 에러 처리를 위한 파일들입니다. github REST API 문서를 참고하여 에러가 발생했을 경우 사용자에게 표시되도록 했습니다.
- extractIssue 파일은 response.data 에서 원하는 데이터만 추출하는 유틸함수를 export 합니다. 메인 화면의 리스트 아이템과 상세 페이지의 데이터는 거의 동일하기 때문에 코드 중복을 피하기 위해 조건에 따라서 추가 데이터를 함께 return 하도록 했습니다.
- Context API 를 사용해 이슈 리스트 데이터와 페이지 번호를 전역에서 관리합니다. 상세 페이지에서 뒤로 가더라도 이전에 로딩된 리스트 및 스크롤이 초기화되지 않습니다.

### 로딩 화면

- Loading 컴포넌트를 만든 후 isLoading 변수의 값에 따른 조건 처리를 하였습니다. 이 컴포넌트는 각 페이지 로딩 및 메인 화면에서 리스트를 추가로 로딩할 때 사용됩니다. 움직이는 애니메이션은 css keyframe 을 적용했습니다.

### 인피니트 스크롤

- custom hook 을 사용하여 메인 로직을 페이지 컴포넌트에서 분리하였습니다. export 된 hook 은 메인 페이지에서 데이터를 요청하는 함수를 받아 `IntersectionObserver` 의 콜백에서 실행합니다.
- 감시하는 요소로 페이지 하단의 div 에 custom hook 이 return 한 ref 를 주었습니다. 컴포넌트가 unmount 될 때 `ref.current` 를 사용하는 것은 문제가 될 수 있기 때문에 별도의 변수를 선언해 ref 를 할당했습니다.

### 레이아웃

- GeneralLayout 컴포넌트를 만든 후 Header 와 함께 페이지 컴포넌트를 표시하도록 했습니다. 추가적으로 레이아웃이 다른 페이지를 만들어야 할 수도 있으므로 전체 레이아웃을 별도로 생성하는 것이 좋다고 판단하였습니다.
- 메인 화면 리스트 아이템과 상세 화면의 상단 부분은 동일하므로 컴포넌트를 재사용하였습니다.
