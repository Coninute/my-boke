export const markdownContent = `
# 探索 React Hooks：useState 与 useEffect 深度解析

React Hooks 是 React 16.8 版本引入的一项革命性特性，它允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。本文将深入探讨两个最核心的 Hook：\`useState\` 和 \`useEffect\`。

## useState：让函数组件拥有状态

在 Hooks 出现之前，只有 class 组件可以拥有自己的 state。\`useState\` 的出现彻底改变了这一点。

### 基本用法

\`useState\` 接收一个初始 state 值作为参数，并返回一个数组，其中包含两个元素：

1.  当前的 state 值。
2.  一个用于更新该 state 的函数。

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // 声明一个新的 state 变量，我们称之为 "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect：处理副作用

副作用（Side Effects）是指在组件渲染过程中，与纯粹的 UI 更新无关的操作，例如：数据获取、设置订阅、手动更改 DOM 等。\`useEffect\` 就是为处理这些副作用而生的。

### 清除副作用

有些副作用需要清除。例如，设置一个订阅，就需要在组件卸载时取消订阅，以防止内存泄漏。\`useEffect\` 允许你返回一个函数，React 会在执行清除操作时调用它。

\`\`\`jsx
useEffect(() => {
  const subscription = someApi.subscribe();
  return () => {
    // 清除订阅
    someApi.unsubscribe(subscription);
  };
}, []);
\`\`\`

> Hooks 让函数组件的能力得到了前所未有的增强，使得代码更简洁、更易于复用和测试。

希望本文能帮助你更好地理解和使用 \`useState\` 和 \`useEffect\`。
`;
