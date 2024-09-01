---
title: "Javascript spread operator to get rid of duplicate value"
description: "Avoid from duplicate value from javascript in short"
publishDate: "13 Sep 2020"
tags: ["javascript"]
draft: true
---

Distribute the operator to eliminate duplicate values, with javascript we only need to write one line of code like this:

```javascript
const arr = [1, 2, 3, 2, 3, 1];

const newArr = [...new Set(arr)];

console.log(newArr); // 123
```

Thanks for reading me ❤️
