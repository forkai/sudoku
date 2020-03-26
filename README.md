# sudoku

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 游戏规则


规则：
1. 生成一个9*9矩阵，每个矩阵由9个3*3的小矩阵组成
2. 每行，每列，每个小矩阵为1,9排列
3. 每次点击开始，随机生成矩阵，且每个小矩阵每行显示一个方块
4. 鼠标移动上去出现3*3矩阵，进行选择，不能选择行，列，小方块的重复格子
5. 选好的格子可以修改
6. 全部选完弹出提示

功能：
1. 计算完成时间，可以查看历史排行榜
2. 电脑选手，自动完成游戏。
3. pwa应用，手机可以离线游玩
4. 增加音效和交互动画
5. 最终做成手机游戏的界面
