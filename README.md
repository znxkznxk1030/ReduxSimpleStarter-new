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

``` javascript
import { ReactDOM } from "react";

ReactDOM.render(<App/>)   
```