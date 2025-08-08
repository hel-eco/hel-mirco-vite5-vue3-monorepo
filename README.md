# main
## main为host主工程
- pnpm dev  启动主工程, 在开发环境加载远程组件
- pnpm preview:main  模拟打包后发布到线上正式环境  在正式环境加载远程组件

# packages/remote
## 运行remote组件工程
- pnpm dev:remote   启动远程组件工程, 在开发环境开发组件
- pnpm preview:remote  打包远程组件并模拟发布到线上

## 为什么要模拟发布到线上？
- 首先每个人的情况不同，不一定喜欢把包发布到unpkg（哪怕是私有unpkg）， 只要能实现加载 你想把包发布到哪里都可以
- 其次我们只是为了验证各种环境的互相加载，模拟生产环境利用vite preview 即可，发布到线上反而不方便测试；
- 因为都在本地模拟你可以任意组合main和remote的dev 或者 preview模式