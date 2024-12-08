<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.monitor']" />
    <div class="content">
      <a-row class="grid-item" style="margin-bottom: 16px">
        <a-col flex="150px">
          <div class="content-time">{{ getNowDateTime() }}</div>
        </a-col>
        <a-col flex="auto" class="content-title">
          <div>净链反洗钱数据大屏</div>
        </a-col>
        <a-col flex="150px"></a-col>
      </a-row>

      <a-row class="grid-item" justify="space-between" :gutter="24">
        <a-col :span="8">
          <div>
            <div id="chart" style="width: 100%; height: 300px"></div>
          </div>
        </a-col>
        <a-col :span="8">
          <div>22222222</div>
        </a-col>
        <a-col :span="8">
          <div>333333</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import VChart from '@visactor/vchart';
import dayjs from 'dayjs';

// 将 timer 的类型修正为 number | null
const timer = ref<number | null | any>(null);

const getNowDateTime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

onBeforeUnmount(() => {
  if (timer.value !== null) {
    clearInterval(timer.value);
  }
});

onMounted(() => {
  timer.value = setInterval(() => {
    // dateTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);

  const spec = {
    data: [
      {
        id: 'barData',
        values: [
          { month: 'Monday', sales: 22 },
          { month: 'Tuesday', sales: 13 },
          { month: 'Wednesday', sales: 25 },
          { month: 'Thursday', sales: 29 },
          { month: 'Friday', sales: 38 }
        ]
      }
    ],
    type: 'bar',
    xField: 'month',
    yField: 'sales',
    background: {
      gradient: 'linear',  // 渐变类型为线性
      x0: 0,               // 渐变起始点的 X 坐标
      y0: 0,               // 渐变起始点的 Y 坐标
      x1: 0,               // 渐变结束点的 X 坐标
      y1: 1,               // 渐变结束点的 Y 坐标（1 表示从上到下）
      stops: [
        {
          offset: 0,       // 0% 处的颜色
          color: 'rgba(255, 0, 0, 0)'  // 0% 处的颜色为完全透明的红色
        },
        {
          offset: 1,       // 100% 处的颜色
          color: 'rgba(0, 0, 255, 0)'  // 100% 处的颜色为完全透明的蓝色
        }
      ]
    }
  };

  // 创建 vchart 实例
  const vchart = new VChart(spec, { dom: 'chart' });
  // 绘制
  vchart.renderSync();
});
</script>

<script lang="ts">
export default {
  name: 'Monitor',
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}

.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.grid-item {
  color: #fff;
  z-index: 999;
}

.content-time {
  margin-top: 15px;
  padding-left: 10px;
}

.content-title {
  min-width: 150px;
  margin-top: 15px;
  padding-right: 250px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.layout {
  display: flex;

  &-left-side {
    flex-basis: 300px;
  }

  &-content {
    flex: 1;
    padding: 0 16px;
  }

  &-right-side {
    flex-basis: 280px;
  }
}

#chart {
  margin-left: 10px;
  border: 0.5px solid #4ba3b3;
  // border-radius: 20px;
  stroke: #FFFFFF;
}

@media (max-width: @screen-lg) {
  .layout {
    flex-wrap: wrap;

    &-left-side {
      flex: 1;
      flex-basis: 100%;
      margin-bottom: 16px;
    }

    &-content {
      flex: none;
      flex-basis: 100%;
      padding: 0;
      order: -1;
      margin-bottom: 16px;
    }

    &-right-side {
      flex-basis: 100%;
    }
  }
}
</style>