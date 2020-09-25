区别
1.v-if条件为false,对应的元素不会出现在DOM中
2.v-show条件为false时,仅仅是将display的属性改为none

如何选择
1.当前显示和隐藏切换很频繁时,用v-show
2.当前只使用一次切换时,就用v-if