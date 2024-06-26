# 김민정 202030105 <br><br>

<br><br><br><br>


## 6월 12일

### CSS
  - css는 Cascading Style Sheet의 약자로 스타일링을 위한 언어입니다
  - Cascading이란 계단식이란 뜻으로 한 엘리먼트에 여러 스타일이 적용될 경우 `스타일 간의 충돌을 막기 위해 계단식으로 스타일을 적용`시키는 규칙을 갖고 있습니다
  - 즉 하나의 스타일이 여러 `개의 엘리먼트에 적용될 수도` 있고, `하나의 엘리먼트에도 여러 개의 스타일이 적용될 수도` 있습니다
  - 엘리먼트에 스타일이 `적용되는 규칙을 selector`라고 합니다. css는 이 `선택자와 스타일`로 이루어집니다
  - 이번 장에서는 `선택자와 스타일을 카테고리별로 나누어` 학습합니다.

### CSS 문법과 선택자
  - 선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 작성합니다.
    - 선택자는 Html 엘리먼트를 직접 넣어도 되고, 엘리먼트의 조합 혹은 class의 형태로 작성 가능합니다
  - 스타일은 property와 key value로 이루어 지며, 이들은 콜론으로 구분하고, 각 스타일은 세미콜론으로 구분합니다
  - 교재는 몇 가지 선택자의 예를 설명하고 있습니다

<br>

#### 예시

  1. 첫번째는 태그를 직접 사용하는 것입니다

<br> 

  ![강아지](tagStyle111.PNG) 

  2. 두번째는 id 선택자 입니다 **js에서 사용하기 때문에 절대 사용금지**

  3. 세번째는 class 선택자 입니다

  <br>


  ![강아지](idStyle.png) 

  4. 네번째는 전체 선택자입니다

  5. 다섯번째는 그룹 선택자 입니다

  6. 여섯번째는 상태 선택자 입니다


### 레이아웃과 관련된 속성
  - 화면에 엘리먼트를 어떻게 배치할 것인지를 정의 합니다
  - 가장 중요한 속성은 display입니다
  - 모든 엘리먼트는 기본 display 속성을 갖고 있지만 이 기본값을 변경해 줄 수 있습니다

  - #### 각 속성들
    - none: 존재는 하지만 화면에 보이지 않는 것으로, 자바스크립트를 넣을 때 많이 사용합니다
    - block: 세로로 정렬되며, with의 heigh를 갖을 수 있다
    - inline: 가로로 정렬되며, with의 heigh를 갖을 수 없다
    - inline-block: inline의 특징과 block의 특징을 모두 가진 요소
    - flex: 컨테이너의 형태로 엘리먼트를 관리합니다

    ###### *최근 들어서는 Grid를 많이 사용합니다. flex가 1차원이면 Grid는 2차원으로 관리합니다*

block 요소들  
address, article, aside, blockgquote, canvas, dd, div, dl, hr, header, form,h1, h2, h3, h4, h5, h6, table, pre, ul, p, ol, video

inline 요소들  
a, i, span, abbr, img, strong, b, input, sub, br, code, em, small, tt, map, textarea, label, sup, q, button, cite

![강아지](inline-block.png) 

<br><br>


  - visibility 속성은 엘리먼트의 가시성을 정의합니다
  - 여기서 중요한 것은 displat:none과 visivility:hidden의 차이입니다
  - dispaly:none은 엘리먼트의 영역이 보이지 않고, visibility:hidden는 차지하는 영역은 보입니다
  - 다음으로 position 속성은 엘리먼트를 어떻게 위치시킬 것인지를 정의합니다
  - static은 원래 순서대로 위치 시킵니다
  - fixed는 window에 상대적위치라고 정의 하지만 지금은 sticky로 바뀌었습니다
  - relative는 상대적, absolute는 절대적 위치를 지정합니다.

### font
  - font-size 등 크기를 나타내는 단위로는 px, em, rem, vm 등이 있습니다
  - 1em은 16px과 동일합니다

### styled-components
  - css 문법을 그대로 사용하려면 결과물을 스타일링된 컴포넌트 형태로 만들어 주는 오픈소스 라이브러리입니다
  - 리액트 개발에 많이 사용합니다

  - 1. styled-components 설치하기  
     npm install -- styled-componets  
     npm v5부터는 사용하지 않아도 됩니다

     <br>

  - 2. styled-components 기본 사용법  
    태그드 템플릿 리터럴을 사용하여 구성 요소의 스타일을 지정합니다  
    태그드 탬플릿 리터럴은 자바스트립트에서 제공하는 문법 중 하나로 리터럴을 템플릿 형태로 사용하는 것입니다
    style.\<HTML tag>\`...\`의 형태로 정의한 후 컴포넌트를 생성해서 사용합니다

     <br>

  - 3. styled-componets의 props 사용하기
    props를 이용하여 조건이나 동적으로 변하는 값을 사용해서 스타일링을 할 수 있습니다

  - 4. styled-componets의 스타일 확장하기
    - 먼저 정의한 스타일 컴포넌트에 스타일을 추가하여 재정의 하는 것이 가능합니다
    





<br><br><br><br>


## 6월 11일

<br>

### 합성
* 6월 5일 이어서...

  ### [2] Specialization (특수화, 전문화)
    - 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.
    - 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다.
    - 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.
    - 리액트에서는 합성을 사용하여 특수화를 구현합니다.
    - 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 사용방식입니다.

    ```.jsx
    function Dialog(props) {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title>
                    {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
            </FancyBorder>
        )
    }

    function WelcomeDialog(props) {
        return (
            <Dialog
                title="어서오세요"
                message="우리 사이트에 방문하신 것을 환영합니다!"
            />
        )
    }


    ```
  ### [3] Containment와 Specialization을 같이 사용하기.
    - Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다
    - Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.children을 추가 했습니다.
    - Dialog를 사용하는 SignUpDialog눈 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기위해 input와 button을 사용합니다
    - 이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됩니다.
    - 이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있습니다.
    - `합성`과 대비되는 개념으로 `상속`이 있습니다
    - 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다
    - 하지만 `리액트에서는 상속보다 합성을 통해` 새로운 컴포넌트를 생성합니다

    <br>

    **복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자!**

<br><br>

### 컨텍스트
  - 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 rpops를 통해 부모에서 자식으로 단방향으로 전달되었습니다
  - 컨텍스트는 리액트 컴포넌트들 사이에서 데이터르 기존의 props를 통해 전달하는 방법 대신 **컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식**을 제공합니다
  - 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있습니다
  - 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 수 있습니다

  ![강아지](img2.png)  


<br>

### 언제 컨텍스트를 사용하나
  - 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등이 있습니다
  - 이런 데이터들을 기존의 방식대로 컴포넌트의 props를 통해 넘겨주는 예를 페이지 392에서 보여주고 있습니다
  - 예제에서 처럼 props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해 집니다

    <br>


### 컨텍스트를 사용하기 전에 고려할 점
  - 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용합니다
  - 하지만 무조건 컨텍스트를 사용하는 것이 좋은 것은 아닙니다
  - 왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문입니다
  - 따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합합니다

  <br>

  - 페이지 395의 예제처럼 실제 user와 avatar를 사용하는 것을 Avartar 컴포넌트 뿐인데 여러 단계에 걸쳐 props를 전달하고 있습니다
  - 이런 경우 컨텍스를 사용하지 않고 문제를 해결할 수 있는 방법은 Avartar 컴포넌트를 변수에 저장하여 직접 넘겨주는 것입니다
  - 이렇게 하면 중간 단계의 컴포넌트들은 user와 `avartarSize`에 대해 몰라도 됩니다
  - 하지만 페이지 396의 예제가 모든 상황에서 좋은 것은 아닙니다
  - 데이터가 많아질수록 상위 컴포넌트가 점점 더 복잡해지기 때문입니다
  - 이런 경우 하위 컴포넌트를 여러 개의 변수로 나줘서 전달하면 됩니다

  <br>

  - 하지만 어떤 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩된 컴포넌트들의 접근이 필요할 수 있습니다.
  - 이런 경우라면 컨텍스트가 유리합니다
  - 컨텍스트는 해당 데이터와 데이터의 변경사항을 모두 하위 컴포넌트들에게 broadcast해주기 때문입니다
  - 컨텍스트를 사용하기 적합한 데이터의 대표적인 예로는 `지역 정보`, `UI테마`, `캐싱된 데이터` 등이 있습니다.

  <br>

### 컨텍스트 API

  - ### [1] React.createContext
    - 컨텍스트를 생성하기 위한 함수입니다
    - 파라미타에는 기본값을 넣어주면 됩니다
    - 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider로 부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 설정한 기본값을 사용하게 됩니다.
    ```.jsx
    const MyContext = React.createContext(기본값)
    ```
  
  - ### [2] Context.Provider
    - Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.
    ```.jsx
    <MyContext.Provider value={/* some value */}>
    ```
    - Provider 컴포넌트에는 value라는 props이 있고, 이것을 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됩니다
    - 하위 컴포넌트를 consumer 컴포넌트라고 부릅니다

  - ### [3] Class.contextType

  - ### [4] Context.Consumer
    - 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있습니다
    - 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부릅니다

  - ### [5] Context.displayName
    - 컨텍스트 객체는 displayName이라는 문자열 속성을 갖습니다
    - 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 dispaltName을 함께 표시해 줍니다

<br>

### 여러 개의 컨텍스트 사용하기
  - 여러개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용합니다
  - 하지만 두 개 또는 그 이상의 컨텍스트 값이 자주 사용될 경우 모든 값을 한 번에 제공해 주는 별도의 *render prop* 컴포넌트를 직접 만드는 것을 고려하는 것이 좋습니다.

<br>

  ### useContext
  - 함수형 컴포넌트에서 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 더 좋은 방법이 있습니다. *Hook*입니다
  - useContext() 혹은 React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴합니다
  - 이 방법도 가장 가까운 상위 Provider로 부터 컨텍스트의 값을 받아옵니다
  - 만일 값이 변경 된면 useContext 훅을 재렌더링 합니다


<br><br><br><br>


## 6월 5일
<br>

### Shared State
* Shared state는 state의 공유를 의미합니다.
* 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것입니다.

### Shared State 적용
* 하위 컴포넌트의 state를 부모 컴포넌트로 얼려서 shared state를 적용합니다.
* 이것을 `Lifting State up`라고 합니다.

### Calculator 컴포넌트 수정하기
* State는 temperature, scale 2개를 사용합니다.
* 이것을 이용하여 변환 함수를 통해 섭씨와 화씨 온도를 구해서 사용합니다.
* TemperatureInput 컴포넌트를 사용하는 부분에서는 온도와 단위를 props로 넣어 줍니다.  
<br>

**정리하면**  
상위 컴포넌트인 Calaulator에서 온도와 단위를 state로 갖고,  
두개의 하위 컴포넌트는 각각 섭씨와 화씨로 변환된 오도와 단위, 그리고 온도를 업데이트하기 위한 함수를   
props로 갖고 있습니다  

##### *이렇게 모든 컴포넌트가 state를 갖지 않고, 상위 컴포넌트로 올려서 공유하면 리액트를 더욱 간결하고 효율적으로 개발할 수 있습니다!*

<br><br>
<hr>

### 합성
* 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
<br><br>

  ### [1] Containment (담다, 포함하다, 격리하다)
    - 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법 입니다.
    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.
    - 범용적인 '박스'역할을 하는 `Sidebar` 혹은 `Dialog`와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
    - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.
    - 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children으로 돌어오게 됩니다.
    - 리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공해 줍니다
    - 만일 여러 개의 children 집합이 필요할 경우는 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어 줍니다.
    <br>

    ##### *React.createElement()는 jsx기능으로 좀 더 간단히 구현할 수 있음!*

    <br>

  ### [2] Specialization (특수화, 전문화)
    - 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.
    - 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다.
    - 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.
    - 리액트에서는 합성을 사용하여 특수화를 구현합니다.
    - 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 사용방식입니다.
  



<br><br><br><br>

## 5월 29일
<br>

### select 태그
* select 태그도 textArea와 동일함

### File input 태그
* File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.

### Input Null Value
* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
* 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 `undefined` 또는 `null`을 넣어주면 됩니다.  <br><br>

`example`
```.js
export default function SignUp() {

    const [name, setName] = useState()
    const [gender, setGender] = useState('남자')
    const [document, setDocument] = useState()
    const [haveBreakfest, setHaveBreakfest] = useState()

<!-- 핸들러 설정 -->
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`이름: ${name}, 성별: ${gender}, 문서: ${document}, 아침식사: ${haveBreakfest}`)
        e.preventDefault()
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeDocument = (e) => {
        setDocument(e.target.value)
    }
    const handleChangeHaveBreakfast = (e) => {
        setHaveBreakfest(e.target.checked)
      }


    return (
        <form onSubmit={handleSubmit}>
        <!-- text -->
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} placeholder="이름을 입력해 주세요."/>
            </label><br/>
            <!-- select -->
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label><br/>
            <!-- textarea -->
            <label>
                문서:
                <textarea value={document} onChange={handleChangeDocument} placeholder="문장을 입력해주세요."></textarea>
            </label><br/>
            <!-- check -->
            <label>
            아침식사: 
            <input type="checkbox" 
                    checked={haveBreakfest}
                    onChange={handleChangeHaveBreakfast} />
            </label>
            <button type="submit" >제출</button>
        </form>
    )
}
```



<br><br><br><br>

## 5월 22일

### 리스트와 키
    * 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
    * 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
    * 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열" 입니다.
    * 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다.
    * 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.

* 배열을 렌더링하게 될 때는 키를 설정해야 렌더링을 효율적으로 할 수 있다.
* map() 함수 안에 있는 Elements는 꼭 key가 필요하다

### 폼
    * 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.

### Controlled Components
    * 값이 리액트의 통제를 받는 Input Form Element
    * 모든 데이터를 state에서 관리
    * 사용자의 입력을 직접적으로 제어할 수 있다

* TextArea: 여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그
* Select: Drop-down 목록을 보여주기 위한 HTML 태그(input/ textarea/ select 태그 사용 방법 유사)
* File input: 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.




<br><br><br><br>

## 5월 8일

### Arguments 전달하기
    * 함수를 정의할 때는 파라미터 혹은 매개변수, 함수를 사용할 때는 아귀먼트 혹은 인수라고 부릅니다.
    * 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.
    * <button onClick={(event) => thsi.deleteItem(id, event)}>삭제하기</button> -> 화살표 함수 사용
    * <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button> -> bind 사용
    * event라는 매개변수는 리액트의 이벤트 객체를 의미
    * 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달됨.
    * 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후 두번째 매개변수로 event가 자동 전달

### 조건부 렌더링
    * 특정 조건에 따라 다른 결과물을 렌더링 하는 것

### 엘리먼트 변수
    * 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.

### 인라인 조건
    인라인 if

        if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.
        &&는 and 연자로 모든 조건이 참일 때만 참이 됩니다.
        첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없습니다
        판단하지 않는 것이고 결과 값은 그대로 리턴됩니다.
    
    인라인 if-else

        삼항 연산자를 사용합니다
        문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.

### 컴포넌트 렌더링 막기
    * 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.



<br><br><br><br>


## 5월 1일

### 훅의 규칙
    * 1. 무조건 최상위 레벨에서만 호출해야 한다
    * 따라서 반복문, 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안된다
    * 훅은 컴포넌트가 랜더링 될 때마다 같은 순서로 호출되어야 한다
    * 2. 함수형 컴포넌트에서만 훅을 호출해야 한다는 것입니다
    * 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

### 나만의 훅 만들기
    * 커스텀 훅: 직접 훅을 만들어 쓸 수 있는 훅
    * 기존 리액트에서는 render props 또는 HOC를 사용했지만, 이제는 커스텀 훅을 사용한다
    * 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야 한다
    * 이름은 use로 시작한다
    * 파라미터로 userId를 받는다

### && 연산
```.js
{isNull && <p style={{color: 'red'}}>정원이 가득 찼습니다.</p>}
```
자바스크립트 문법으로 &&는 if처럼 쓸 수 있다.(보통 React에서 많이 씀)<br>
위의 예시에서 isNull이 true 일때 '정원이 가득 찼습니다.'라는 문장이 나온다.<br>
isNull이 false면 p태그 문장이 나오지 않는다.

### 이벤트 처리
    * DOM과 React에서 클릭 이벤트를 클릭할때 차이점
    * 1) 이벤트 이름이 onclick에서 onClick으로 변겅
    * 2) 전달하려는 함수는 문자열에서 함수 그대로 전달

    * 이벤트가 발생했을때 해당 이벤트를 처리한느 함수를 "이벤트 핸들러"라고 합니다.
    * 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너"라고 부르기도 합니다.




<br><br><br><br>

## 4월 17일

### 훅이란
    * 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState()함수를 통해 state를 업데이트 합니다.
    * 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맟춰서 어떤 코드가 실행되도록 할 수 없었습니다.
    * 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook) 입니다.
    * 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.
    * Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.
    * Hook의 이름은 모두 'use'로 시작됩니다.

### UseState
    * userstate는 함수형 컴포넌트에서 state를 사용하기 위한 Hook 입니다.
    * {useState}: state이름으로 임포트 시킨다
    * set을 이용하여 사용

### UseEffect
    * useState와 함께 가장 많이 사용하는 Hook 입니다.
    * 이 함수는 사이드 이팩트를 수행하기 위한 것입니다.
    * 사이드 이팩트는 부작용을 의미. 일반적으로 프로그래밍에서 사이드 이팩트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것' 의미(살짝 의미 다름)
    * 리액트에서는 effect의 의미에 가깝다
    * 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
    * effect라 불린 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 랜더링 중에는 작업이 완료될 수 없기 때문입니다.
    * 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
    * 결론: sideEffect는 랜더링 외에 실행해야 하는 부수적인 코드를 말합니다.
    * 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리가 필요 없는 경우들입니다.

useEffect(()=> {
    // 컴포넌트가 마운트 된 이후

    return () => {
        // 컴포넌트가 마운트 해제하기 전에 실행됨
    }
})

### useMemo
    * useMemo() 혹은 Memorize value를 리턴하는 훅입니다.
    * 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
    * 이 훅은 랜더링이 일어나는 동안 실행됩니다.
    * 따라서 랜더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
    * 예를 들면 useEffect에서 실행되어야 사이드 이팩트 같은 것입니다.

### useCallback
    * useCallback() 혹은 useMemo()와 유사한 역할을 합니다.

### useRef
    * useRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
    * 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
    * useRef() 혹은 바로 이 레퍼런스 객체를 반환합니다.







<br><br>

## 4월 3일

### 컴포넌트
    * 리액트는 컴포넌트 기반의 조
    * 작은 컴포넌트가 모여 큰 컴포넌트, 이러한 컴포넌트들이 모여 전체 페이지 구성

### Props
    * props는 컴포넌트 속성으로 prop(속성)의 준말이다.
    * 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트 출력
    * 읽기 전용

### Props vs Impure 함수
    * Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수다.
    * impure함수는 인수로 받은 정보가 함수 내부에서는 변하는 함수다.

### Props 사용법
    * JSX에선, key-value쌍으로 props 구성
```.jsx
function App(props) {
    return (
        <Profile
            name = "소플"
            introduction="안녕하세요, 소플입니다
            viewCount = {1500}
            />
    );
}
```
    * 위의 코드는 Profile 컴포넌트로 name, introduction, viewCount Props를 전달합니다.
    * JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다
    * JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것이다.


### 컴포넌트의 종류
    * 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
    * 이후 Hock이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
    * 예전에 작성된 코드난 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에,
    * 클래스형 컴포넌트와 컴포넌트의 생명주기에 관햇도 공부해 두어야 합니다.

### 함수형 컴포넌트
```.jsx
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>
}
```

### 클래스형 컴포넌트
```.jsx
class Welcome ~
```

### 컴포넌트 이름 짓기
    * 이름은 항상 대문자로 시작
    * 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
    * 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

### 컴포넌트 랜더링

```.jsx

// Welcome.jsx
export default function Welcome(props) {
    <>
        return <h1>안녕, {props.name}</h1>
    </>

}

// App.js
import Welcome from '.Welcome'

<Welcome name="홍길동" />;

```
index.js가 랜더링 해준다.<br>
index.js와 index.html은 가능한한 건들지 않는게 좋다.

### 컴포넌트 합성
    * 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
    * 리액트에서는 컴포넌트 안에 또 아른 컴포넌트를 사용할 수 있다
    
### 컴포넌트 추출
    * 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트를 나눌 수도 있다.
    * 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것이다.

### state란
    * state는 리액트 컴포넌트 상태를 의미
    * 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다
    * 정확히는 컴포넌트의 변경가능한 데이터를 의미
    * State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다
    * 특징: 리액트 만의 특별한 형태 x, 자바스크립트 객체
    * state는 변경은 가능하다고 했지만 직접 수정해서는 안된다
    * state를 변경하고자 할 때는 setstate()함수를 사용합니다.

### 생명주기
    * 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것이다.
    * constructor가 실행되면서 컴포넌트가 생성됩니다.
    * 생성 직후 componentDitMount() 함수가 호출됩니다
    * 컴포넌트가 소멸하기 전까지 여러번 랜더링 합니다.
    * 랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다
    * 그리고 랜더링이 끝나면 componentDigUpdate()함수 호출
    * 마지막으로 컴포넌트가 언마운트 되면 componetWillUnmount() 함수가 호출





<br><br><br><br>


## 3월 27일 강의

### JSX의 역할
    * JSX는 내부적으로 XNL/HTML 코드를 자바스크립트로 변환됩니다.
    * React가 createElement함수를 상용하여 자동으로 자바스크립트로 변환해 줍니다.
    * 만일 JS로 작업할 경우 직접 reateElement함수를 사용해야 됩니다.
    * 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여 주는 역할을 합니다.

### 예시

```
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
)

const element = React.createElement(
    // 이렇게 쓸 수 있음
)
```

### JSX의 장점
    * 코드가 간결해진다.
    * 가독성이 향상 됩니다
    * 해킹에 관한 보안이 강화된다.

### JSX 사용법
    * 모든 자바스크립트 문법을 지원합니다.
    * 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
    * 문법들을 섞어서 사용한다.
    * 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
    * 만일 태그에 속성값을 넣고 싶을때는 argument로 들어온걸 프록스로 받는다

- 시험 제출시 node_modules만 압축해서 제출한다
- 보통 App에서 다 취합, 생성해서 인덱스에서 실행 (인덱스 건드릴 일은 거희x)


### 엘리먼트의 정의 
    * 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
    * 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 있습니디.
    * 웹사이트의 경우는 dom 엘리먼트이며, HTML요소를 의미합니다.

### 리액트 엘리먼트와 DOM엘리먼트의 차이점
    * 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
    * DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
    * 반면 리엑트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

### 엘리먼트의 생김새
    * 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
    * 컴포넌트(Button 등), 속성(color 등)및 내부의 모든 children을 포함하는 일반 JS객체 입니다.
    * 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.
    * 리액트 엘리먼트의 예를 보녀 TYPE에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.
    * 역시 자바스크립트 객체입니다.
    * 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()입니다.


    ```.jsx
    React.createElement(
        type, // 태그가 들어감, 리액트가 태그로 만들어줌
        [props],
        [...children]
    )
    ```

### 엘리먼트의 특징
    * 리액트 엘리먼트의 가장 큰 특징은 불변성이다. 즉 한번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다.

    만일 바뀐다면...
        새로운 엘리먼트를 생성해야 됨!

### 엘리먼트 렌더링
    **Root DOM node**
    div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node라고 합니다.

### 컴포넌트
    * 리액트는 컴포넌트 기반의 구조
    * 컴포넌트 구조: 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 보여서 전체 페이지를 구성한다는 것
    * 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
    * 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서는 유사합니다.
    * 다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
    * 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서 객체지향의 개념과 비슷합니다.

### Props의 개념
    * props는 prop(property)의 준말입니다
    * 이 props가 바로 컴포넌트의 속성입니다
    * 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼특 출력됩니다
    * props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
    * 에어비앤비의 예도 마찬가지다.

### props 특징
    * 읽기 전용입니다. 변경할 수 없다는 의미 입니다.
    * 속성이 다른 엘리머트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### Pure 함수 vs Impure 함수
    * Pure 함수는 인수를 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
    * Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수입니다.




<br><br><br><br>

## 3월 20일 강의 

### 리액트: 사용자 인터페이스를 만들기 위한 js 라이브러리
    * 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것.
    * 주로 웹 App의 UI를 개발하는데 사용
    * 다른 표현으로 는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

### 장점 
1. 빠른 업데이트와 렌더링 속도
    * Virtual DOM이 가능하게 함.
    * DOM이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스. (W3C표준)
    * virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기에 고안된 방법
    * DOM: 동기식, Virtual DOM: 비동기식
2. 컴포넌트 기반 구조
    * 리액트의 모든 페이지는 컴포넌트로 구성
    * 하나의 컴포넌트는 다른 여러 개의 컴포넌트 조합으로 구성
    * 리액트로 개발 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹을 개발하게 됨.

3.  재사용성
    * 

4. 든든한 지원군
    * 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

5. 활발한 지식 공유 & 커뮤니티

6. 모바일 앱 개발가능
    * 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있습니다.

### 단점
1. 방대한 학습량
    * 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

2. 높은 상태 관리 복잡도
    * state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

<br><br><br><br>

## 3월 13일 
# h1
## h2
### h3
#### h4
##### h5
###### h6


# 리스트
1. 첫 번째
2. 두 번째
3. 세 번째

* 첫 번째
* 두 번째

*이텔리체*
**굵게**

개행은  
스페이스  <br><br><br>
두 개

```js
const p = document.querySelector("p")

```

[구글 링크](http://google.com)  
[페이지 내 링크](#리스트)

---
<br><br><br>

![강아지](img.jpg)  