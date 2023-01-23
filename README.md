<img
  src="src/resource/logo.png"
  alt="위온 로고"
  style = "width: 250px; height: 200px; border-radius: 20px"
/>

# 개발문서(상단) 및 위온 소개(하단)

## 다중언어 제공(Language Support) 관련

### 제공 언어

1. 한국어
2. 영어

### 기존 언어 수정 방법

1. src/languages 에서 en.json, kr.json 파일 클릭
2. 파일 속 JSON 객체의 "translation"에 원하는 페이지의 이름과 원하는 내용을 더한다

```js
// src/language/kr.json
{
  "translation": {
    "원하는 페이지 이름": {
      "첫번째 문단": "참고로 html 태그를 여기에 입력하면 그대로 반영됩니다. :) </br> 아 언어 수정하는거 <b>너무</b> 어려움... 그냥 까불지 말고 번역 API 쓸껄... 그게 더 어려웠을라나?"
    }
  }
}

```

- 주의할 사항 - 문장을 추가할 때에는 두 파일(en과 kr.json)에게 모두 추가해야함. 기본 언어는 한글로 현재 설정되어있음(영어 번역이 존재하지 않으면 그냥 한국어가 디스플레이됨)

---

<h1>팀 소개</h1>
<table>
  <tr>
    <td>PM & Design</td>
    <td>박서윤</td>
  </tr>
  <tr>
    <td>Dev(개발팀)</td>
    <td>최현묵, 배범수, 정예준</td>
  </tr>
  <tr>
    <td>Operations(운영팀)</td>
    <td>정예승, 김소영, 박소현, 김성진, 한지혜, 이관주, 전성민</td>
  </tr>
  <tr>
    <td>졸업 멤버</td>
    <td>방병욱, 김혜민, 옥예은, 이규리, 이세원, 최윤서</td>
  </tr>
</table>

<h1>기술 스택</h1>

## ⚛️ 프론트엔드

- React Native 0.69
- TypeScript
- Redux Toolkit
- React Router Native
- Styled Components
- yarn(npm X)
- (리액트만 알아도 좋습니다 :))

### 지원자격

- React를 한번은 다뤄봤다
- 위의 기술들중 3개 이상은 개념적으로 알고있다
- 다른 언어/프레임워크를 다루지만 같이 배워보고싶다

## 🐬 백엔드

- Nest.js
- MongoDB(mongoose)

### 지원자격

- Express, Nest.js 경험이 있으신 분
- 백엔드 개발 경험이 있으신 분(다른 프레임워크 경험이 있으시다면 금방 배우실 겁니다!)
- 개발을 1도 모르지만, 이번 기회에 같이 배우면서 작업하실 분(대환영🙇‍♂🙇‍♂🙇‍♂)

## 협업 툴

<table>
  <tr>
    <td>
      <a
        href="https://join.slack.com/t/wion-workspace/shared_invite/zt-1dos1w7pv-dlyTmDmkOjYp5pjs7kHS8w"
        >Slack</a
      >
    </td>
    <td>
      <a
        href="https://docs.google.com/document/d/1Sbs515iTLo5PZHlzADYajagYliFWSaWuGYZVU1Ljczo/edit?usp=sharing"
        >개발문서</a
      >
      (Notion 능력자 등장시 바로 변경)
    </td>
  </tr>
</table>
