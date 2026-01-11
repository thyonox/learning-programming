# Modern Card Design
### 截图
![about](assets/about.png)
![hire](assets/hire.png)
![comments](assets/comments.png)
### 细节
- flex 容器会让子元素适应总宽度，父容器大于或小于子元素总宽度时，子元素会被扩展或压缩
- 缩小值 = ( 元素的 shrink 值 / 所有可缩小元素的 shrink 份额总和) * 需要缩小的空间
- 默认情况下不拓展，等比例缩小，由子元素的 flex-frow 和 flex-shrink 控制 
- 最好只设置主轴方向的元素长度，使交叉轴方向长度跟随缩放