# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Day - 1

#### 일반 js 파일도 webpack 설정에 의해 jsx처럼 사용할 수 있다

#### jsx에서의 <div></div>

```html
<div>Hi</div>
```

```javascript
React.createElement('div', null, 'Hi')
```

#### jsx에서 App 인스턴스화 시키기

* jsx 에서 아래와 같이만 선언하면

```javascript
const App = function() {
        return <div > Hi < /div>
    }

    <
    App / >
```

* javascipt에서 다음과 같다

```javascript
"use strict";

const App = function() {
    return /*#__PURE__*/ React.createElement("div", null, "Hi");
};

/*#__PURE__*/
React.createElement(App, null);
```

#### 마지막에 렌더는 React가 아니라 ReactDOM을 이용한다.

```jsx
import ReactDOM from "react-dom";

ReactDOM.render( < App /> )
```

### Day - 2

* 타겟 렌더링

```jsx
import ReactDOM from "react-dom";

ReactDOM.render( < App /> , /* 타겟 */ document.querySelector('.container'));
```

* 구글 API 콘솔

> https://console.cloud.google.com/home/dashboard?project=friendlychat-9446c

* export 가능한거는 이름있는 값이나 default ( * 하기와 같은 문장은 안된다. *)

```javascript
// error
export {
    key: 'value'
}
```

* jsx가 간략화 하더라도 React를 임포트는 시켜야한다.

```jsx
import React from 'react'

<input /> // React.createElement('input', null);
```

### Day - 3

* 클래스 컴포넌트는 내부적인 정보를 저장하려고 할 때 사용한다.

* import시 default 와 destructure 동시에 하기

```jsx
import React, {
    Component
} from 'react'
```

* jsx에서 html 내장 이벤트 핸들링 하기

> on + {EventName}

```jsx
<input onChange={ console.log } onClick={ console.log } />
```

* 모든 컴포넌트는 상태가 있고, 상태가 변하면 자신과 자식들의 render를 강제한다.

```jsx
class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    render() {
        return <input onChange={event => console.log(event.target.value)} />
    }
}
```
